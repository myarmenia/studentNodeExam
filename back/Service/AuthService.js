import User from "../Model/UserModel.js";
import bcrypt from "bcrypt";
import genToken from "../Utils/Token.js";

const authService = {

  login: async (email, password) => {
    try {
      const authUser = await User.findOne({ email });
console.log('authUser:', authUser);
console.log("email1", email);
console.log("password1", password);
      if (!authUser) {
        return { message: "User not found" };
      }
console.log("hash1");
      if (bcrypt.compareSync(password, authUser.password)) {
        console.log("hash1");
        const token = genToken(authUser);
        return { token: token, message: "login successful" };
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
          isActive: true, // Set the isActive field to true
        });
        await user.save();
      }
      return { message: "user created successfuly" };
    } catch (error) {
      console.error(error);
    }
  },
};

export default authService;