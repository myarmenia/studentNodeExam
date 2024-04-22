import AllowedOrigins from "./AllowedOrigins.js";

const CorsOptions = {
  origin: AllowedOrigins,
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
