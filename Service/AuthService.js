import User from "../Model/UserModel.js";
import bcrypt from "bcrypt";
import genToken from "../Utils/Token.js";

const authService = {
    login: async (email, passowrd) => {
        try {
            const authUser = await User.findOne({ email: email });

            if (authUser) {
                if (bcrypt.compareSync(passowrd, authUser.password)) {
                    const token = genToken(authUser);
                    return { token: token, message: "login successful" };
                }
            }
            return { Message: "Wrong Email or Password" };
        } catch (error) {
            console.error(error);
            res.status(500).json({ CriticalError: "Internal Server Error" });
        }
    },

    register: async (uName, email, password, cnfPassword) => {
        console.log("first");
        try {
            const userExist = await User.findOne({ email });
            console.log(userExist);
            if (userExist) {
                return { message: "user already exist" };
                console.log("if1");
            }
            console.log("second");
            if (!uName || !email || !password || !cnfPassword) {
                return { Message: "All fields are required" };
                console.log("if2");
            }
            console.log("third");
            if (password !== cnfPassword) {
                return { error: "Passwords do not match" };
                console.log("if3");
            }
            console.log("fourth");
            if (!userExist) {
                if (password === cnfPassword) {
                    const user = new User({
                        name: uName,
                        email: email,
                        password: password,
                    }).save();
                    console.log("if4");
                }
            }
            console.log("five");
        
            return { message: "user created successfuly" }

    } catch(error) {
        console.error(error);
        res.status(500).json({ CriticalError: "Internal Server Error" });
    }
},
};

export default authService;
