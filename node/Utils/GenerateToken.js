import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN, {
    expiresIn: "1d",
  });

  return access_token;
};
export const generateRefreshToken = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  const refresh_token = jwt.sign(payload, process.env.REFRESH_TOKEN, {
    expiresIn: "7d",
  });

  return refresh_token;
};
