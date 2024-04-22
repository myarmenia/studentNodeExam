import Users from "../Model/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../Utils/GenerateToken.js";
import Token from "../Model/Token.js";

const AuthService = {
  signUp: async (name, email, password, confirmPassword) => {
    const [findByEmail, findByName] = await Promise.all([
      Users.findOne({ email }),
      Users.findOne({ name }),
    ]);

    if (!findByName) {
      if (!findByEmail) {
        if (password === confirmPassword) {
          const hashedPassword = bcrypt.hashSync(password, 10);
          const newUser = new Users({
            email,
            password: hashedPassword,
            name,
          });

          await newUser.save();

          return {
            message: "You Have Successfully Registered, Now You Can Loge In",
          };
        } else {
          return { message: "Your Passwords Don't Match" };
        }
      } else {
        return { message: "User With This Email Already Exists" };
      }
    } else {
      return { message: "User With This Username Already Exists" };
    }
  },
  signIn: async (email, password) => {
    const findUser = await Users.findOne({ email });

    if (findUser) {
      if (bcrypt.compareSync(password, findUser.password)) {
        const access_token = generateAccessToken(findUser);
        const refresh_token = generateRefreshToken(findUser);

        const tokenDelete = await Token.findOneAndDelete({
          user_id: findUser._id,
        });

        const newRefreshToken = new Token({
          user_id: findUser._id,
          token: refresh_token,
        });

        await newRefreshToken.save();

        return {
          message: "You Have Successfully Logged In",
          access_token,
          refresh_token,
        };
      } else {
        return { message: "Something is Wrong Please Check Your Password" };
      }
    } else {
      return { message: "Something is Wrong Please Check Your Email Address" };
    }
  },
  signOut: async (refresh_token) => {
    if (refresh_token) {
      const deleteRefreshToken = await Token.findOneAndDelete({
        token: refresh_token,
      });

      if (deleteRefreshToken) {
        return { message: "You Have Successfully Sign Out" };
      } else {
        return { message: "Invalid Token" };
      }
    } else {
      return { message: "No Refresh Token" };
    }
  },
  refresh: async (refresh_token) => {
    if (refresh_token) {
      const token = await Token.findOne({ token: refresh_token });

      if (token) {
        const newToken = jwt.verify(
          refresh_token,
          process.env.REFRESH_TOKEN,
          async (err, data) => {
            if (err) console.log(err);
            const deleteToken = await Token.findOneAndDelete({
              token: refresh_token,
            });

            const newAccessToken = generateAccessToken(data);
            const newRefreshToken = generateRefreshToken(data);

            const saveRefreshToken = new Token({
              user_id: data._id,
              token: newRefreshToken,
            });

            await saveRefreshToken.save();

            return {
              message: "Token is Refreshed",
              access_token: newAccessToken,
              refresh_token: newRefreshToken,
            };
          }
        );

        return newToken;
      } else {
        return { message: "Inavlid Token" };
      }
    } else {
      return { message: "No Refresh Token" };
    }
  },
};

export default AuthService;
