import AllowedOrigins from "./AllowedOrigins.js";

const Credentials = (req, res, next) => {
  const origin = req?.headers?.origin;
  if (AllowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }

  next();
};

export default Credentials;
