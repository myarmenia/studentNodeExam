import allowedOrigins from "./AllowedOrigins.js";

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    allowedHeaders: true,
    credentials: true
};

export default corsOptions;