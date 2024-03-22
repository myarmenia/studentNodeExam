import swaggerJSDoc from "swagger-jsdoc";

export const options = {
    explorer: true,
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Wine",
            version: "1.0.0",
            description: "Student Final Exam: Online Store for Wines"
        },
        servers: [{ url: "http://195.181.242.194" }],
        components: {
            request: {
                GetCart: {
                    type: "object",
                    properties: {
                        _id: { type: "string", description: "req.user" }
                    },
                    example: {
                        _id: "Must be authenticated"
                    }
                },
                AddToCart: {
                    type: "object",
                    properties: {
                        _id: { type: "string", description: "req.user" },
                        wineId: { type: "string", description: "req.body" },
                        count: { type: "string", description: "req.body" }
                    },
                    example: {
                        wineId: "65faddbee08dde2921d2b518",
                        count: 2
                    }
                },
                UpdateCart: {
                    type: "object",
                    properties: {
                        _id: { type: "string", description: "req.user" },
                        wineId: { type: "string", description: "req.body" },
                        count: { type: "string", description: "req.body" }
                    },
                    example: {
                        wineId: "65faddbee08dde2921d2b518",
                        count: 5
                    }
                },
                removeFromCart: {
                    type: "object",
                    properties: {
                        _id: { type: "string", description: "req.user" },
                        wineId: { type: "string", description: "req.body" },
                    },
                    example: {
                        wineId: "65faddbee08dde2921d2b518",
                    }
                }
            },
            schemas: {
                Cart: {
                    type: "object",
                    required: ["userId", "wineId", "count"],
                    properties: {
                        userId: { type: "string", description: "required" },
                        wineId: { type: "string", description: "required" },
                        count: { type: "string", description: "required" }
                    }
                },
                Wine: {
                    type: "object",
                    required: [
                        "brand", "name", "type",
                        "color", "img", "rating",
                        "stock", "article", "country",
                        "region", "volume", "alcohol",
                        "price", "sales", "desc"
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
                        desc: { type: "string", description: "Text For Example" }
                    }
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
                    }
                },
                Token: {
                    type: "object",
                    required: ["user_id", "refreshToken"],
                    properties: {
                        user_id: { type: "string", format: "objectId", description: "required", ref: "User" },
                        refreshtoken: { type: "string", description: "required" }
                    }
                }
            },
            securitySchemes: {
                ApiKeyAuth: {
                    type: "http",
                    name: "authorization",
                    scheme: "bearer",
                    in: "header"
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
}

export const specs = swaggerJSDoc(options);
