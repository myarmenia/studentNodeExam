import Users from "../Model/Users.js";
import bcrypt from "bcrypt";

const UsersService = {
  changeUser: async (userId, newName, newPassword) => {
    const user = await Users.findById(userId);
    if (user) {
      if (!newName && !newPassword) {
        return { message: "No Information for Change" };
      } else {
        if (newPassword) {
          const hashedPassword = bcrypt.hashSync(newPassword, 10);
          user.password = hashedPassword;
        }
        if (newName) {
          user.name = newName;
        }

        await user.save();
      }

      return { message: "User Information Was Changed" };
    } else {
      return { message: "Inavlid Token" };
    }
  },
  getUser: async (user_id) => {
    const user = await Users.findById(user_id);
    if (user) {
      return user;
    } else {
      return { message: "Invalid ID" };
    }
  },
};

export default UsersService;
