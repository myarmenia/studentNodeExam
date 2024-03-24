import { configDotenv } from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";

configDotenv();

export const options = {
  explorer: true,
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Wine",
      version: "1.0.0",
      description: "Student Final Exam: Online Store for Wines",
    },
    servers: [
      { url: "http://node.trigger.ltd" },
      { url: "http://195.181.242.194" },
      { url: `http://localhost:${process.env.PORT}` },
    ],
    components: {
      request: {
        GetCart: {
          type: "object",
          properties: {
            _id: { type: "string", description: "req.user" },
          },
          example: {
            _id: "Must be authenticated",
          },
        },
        AddToCart: {
          type: "object",
          properties: {
            _id: { type: "string", description: "req.user" },
            wineId: { type: "string", description: "req.body" },
            count: { type: "string", description: "req.body" },
          },
          example: {
            wineId: "65fd71bf4e086562994c165b",
            count: 2,
          },
        },
        UpdateCart: {
          type: "object",
          properties: {
            _id: { type: "string", description: "req.user" },
            wineId: { type: "string", description: "req.body" },
            count: { type: "string", description: "req.body" },
          },
          example: {
            wineId: "65fd71bf4e086562994c165b",
            count: 5,
          },
        },
        RemoveFromCart: {
          type: "object",
          properties: {
            _id: { type: "string", description: "req.user" },
            wineId: { type: "string", description: "req.body" },
          },
          example: {
            wineId: "65fd71bf4e086562994c165b",
          },
        },
        GetAll: {
          type: "object",
          properties: {
            sort: {
              type: "string",
              description: "Sort wines by a specific attribute.",
            },
          },
          example: {
            sort: "rating",
          },
        },
        GetById: {
          type: "object",
          properties: {
            wineId: {
              type: "string",
              description: "The ID of the wine to retrieve.",
            },
            sort: {
              type: "string",
              description: "Sort wines by a specific attribute.",
            },
          },
          example: {
            wineId: "65fd71bf4e086562994c165b",
            sort: "rating",
          },
        },
        WineFilter: {
          type: "object",
          properties: {
            types: {
              type: "array",
              items: { type: "string" },
              description: "Types of wines to filter by.",
            },
            brands: {
              type: "array",
              items: { type: "string" },
              description: "Brands of wines to filter by.",
            },
          },
          example: {
            types: ["dry", "sweet"],
            brands: ["brand1", "brand2"],
          },
        },
        Register: {
          type: "object",
          properties: {
            name: { type: "string", description: "User's name." },
            email: { type: "string", description: "User's email address." },
            password: { type: "string", description: "User's password." },
            cnfPassword: {
              type: "string",
              description: "Confirmation of user's password.",
            },
          },
          example: {
            name: "John Doe",
            email: "user@example.com",
            password: "password123",
            cnfPassword: "password123",
          },
        },
        Login: {
          type: "object",
          properties: {
            email: { type: "string", description: "User's email address." },
            password: { type: "string", description: "User's password." },
          },
          example: {
            email: "user@example.com",
            password: "password123",
          },
        },
        refresh: {
          type: "object",
          properties: {
            refreshToken: {
              type: "string",
              description: "User's refresh token.",
            },
          },
          example: {
            refreshToken: "your_refresh_token_here",
          },
        },
        logOut: {
          type: "object",
          properties: {
            email: { type: "string", description: "User's email address." },
          },
          example: {
            email: "user@example.com",
          },
        },
      },
      schemas: {
        Cart: {
          type: "object",
          required: ["userId", "wineId", "count"],
          properties: {
            userId: { type: "string", description: "required" },
            wineId: { type: "string", description: "required" },
            count: { type: "string", description: "required" },
          },
        },
        Wine: {
          type: "object",
          required: [
            "brand",
            "name",
            "type",
            "color",
            "img",
            "rating",
            "stock",
            "article",
            "country",
            "region",
            "volume",
            "alcohol",
            "price",
            "sales",
            "desc",
          ],
          properties: {
            brand: { type: "string", description: "required" },
            name: { type: "string", description: "required" },
            type: { type: "string", description: "required" },
            color: { type: "string", description: "required" },
            img: { type: "string", description: "required" },
            rating: { type: "string", default: "0" },
            stock: { type: "number", default: 0 },
            article: { type: "string", description: "required" },
            country: { type: "string", description: "required" },
            region: { type: "string", description: "required" },
            volume: { type: "string", description: "required" },
            alcohol: { type: "string", description: "required" },
            price: { type: "number", description: "required" },
            sales: { type: "number", default: 0 },
            desc: { type: "string", description: "Text For Example" },
          },
        },
        User: {
          type: "object",
          required: [" name", "email", "password", "phoneNumber", "address"],
          properties: {
            name: { type: "string", description: "required" },
            email: { type: "string", description: "required" },
            password: { type: "string", description: "required" },
            phoneNumber: { type: "number", description: "optional" },
            address: { type: "number", description: "optional" },
          },
        },
        Token: {
          type: "object",
          required: ["user_id", "refreshToken"],
          properties: {
            user_id: {
              type: "string",
              format: "objectId",
              description: "required",
              ref: "User",
            },
            refreshtoken: { type: "string", description: "required" },
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          name: "authorization",
          scheme: "bearer",
          in: "header",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./Router/*.js"],
};

export const specs = swaggerJSDoc(options);
