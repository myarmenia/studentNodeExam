import authService from "../Service/AuthService.js";
console.log("controller4tox");
const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const authUser = await authService.login(email, password);
      res.cookie("token", users.token, {
        httpOnly: true,
        sameSite: "strict",
      });
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ CriticalError: "Internal Server Error" });
    }
  },
  register: async (req, res) => {
    console.log("aaa");
    console.log("controller21tox");
    try {
      console.log("controller1");
      const { uName, email, password, cnfPassword } = req.body;
      const userRegister = await authService.register(
        uName,
        email,
        password,
        cnfPassword
      );
      res.status(201).json(userRegister);
    } catch (error) {
      console.error(error);
      res.status(500).json({ CriticalError: "Internal Server Error" });
    }
  },
};

export default authController;
