import AllowedOrigins from "./AllowedOrigins.js";

const CorsOptions = {
  origin: AllowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: [
    "Origin",
    "X-Request-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
  credentials: true,
};

export default CorsOptions;
