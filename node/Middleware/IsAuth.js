import Jwt from "jsonwebtoken";

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  console.log("authorization", authorization);
  if (!authorization) {
    return res.status(401).send({ message: "unauthorized" });
  }
  const token = authorization.split(" ")[1];
  try {
    Jwt.verify(token, process.env.ACCESS_TOKEN, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(400).send({ message: "Try again later" });
      }

      req.user = data;

      next();
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ CriticalError: "Internal Server Error" });
  }
};

export default isAuth;
