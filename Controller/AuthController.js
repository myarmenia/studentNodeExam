import authService from "../Service/AuthService.js";

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const authUser = await authService.login(email, password);
      if (authUser.message === "login successful") {
        res.cookie("token", authUser.token, {
          httpOnly: true,
          sameSite: "strict",
        });
        res.status(200).send(authUser);
      } else {
        res.status(401).send(authUser);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ CriticalError: "Internal Server Error" });
    }
  },
  register: async (req, res) => {
    try {
      const { name, email, password, cnfPassword } = req.body;
      const userRegister = await authService.register(
        name,
        email,
        password,
        cnfPassword
      );
      res.status(201).send(userRegister);
    } catch (error) {
      console.error(error);
      res.status(500).send({ CriticalError: "Internal Server Error" });
    }
  },
};

export default authController;
