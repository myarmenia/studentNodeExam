import allowedOrigins from "./AllowedOrigins.js";

const corsOptions = {
  origin: allowedOrigins,
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
  ],
  credentials: true,
};

export default corsOptions;
