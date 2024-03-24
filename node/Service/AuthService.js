import User from "../Model/UserModel.js";
import Token from "../Model/TokenModel.js"
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { genRefreshToken, genAccessToken } from "../Utils/Token.js"


const authService = {

  login: async (email, password) => {
    try {
      const authUser = await User.findOne({ email });
      if (!authUser) {
        return { message: "User not found" };
      }
      if (bcrypt.compareSync(password, authUser.password)) {
        const refreshToken = genRefreshToken(authUser);
        const accesstoken = genAccessToken(authUser)

        await new Token({
          user_id: authUser._id,
          refreshToken
        }).save()

        return { accesstoken, refreshToken, message: "login successful" };
      } else {
        return { message: "Wrong Email or Password" };
      }
    } catch (error) {
      console.error(error);
    }
  },

  register: async (name, email, password, cnfPassword) => {
    try {
      if (!name || !email || !password || !cnfPassword) {
        return { message: "All fields are required" };
      }
      if (password !== cnfPassword) {
        return { error: "Passwords do not match" };
      }
      const userExist = await User.findOne({ email: email });
      if (userExist) {
        return { message: "user already exist" };
      }
      if (!userExist) {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const user = new User({
          name: name,
          email: email,
          password: hashedPassword,
          isActive: true,
        });
        await user.save();
      }
      return { message: "user created successfuly" };
    } catch (error) {
      console.error(error);
    }
  },

  refresh: async (refreshToken) => {

    console.log(Token);
    const token = await Token.findOne({ refreshToken });
    console.log(token);
    if (!token) {
      return { message: "Refresh token not found" };
    }

    const decoded = Jwt.verify(token.refreshToken, process.env.REFRESH_TOKEN);
    if (!decoded) {
      return { message: "Invalid refresh token" };
    }
    console.log(decoded);
    const user = await User.findById(decoded._id);
    console.log(user);
    const newAccessToken = genAccessToken(user);
    const newRefreshToken = genRefreshToken(user);

    token.token = newRefreshToken;
    await token.save();

    return { accessToken: newAccessToken, refreshToken: newRefreshToken, message: "Token refreshed successfully" };

  },

  logOut: async (email) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return { Message: `User not found for email: ${email}` };
      }
  
      await Token.deleteMany({ user_id: user._id });
      return { Message: "Logout successful" };
    } catch (error) {
      console.error(error);
    }
  }
  

};

export default authService;