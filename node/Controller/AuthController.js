import authService from "../Service/AuthService.js";
const authController = {

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
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const authUser = await authService.login(email, password);
      res.status(200).send(authUser);
    } catch (error) {
      console.error(error);
      res.status(500).send({ CriticalError: "Internal Server Error" });
    }
  },

  refresh: async (req, res) => {
    try {
      const { refreshToken } = req.body
      console.log();
      const tokens = await authService.refresh(refreshToken)
      res.status(200).send(tokens)
    } catch (error) {
      console.error(error);
      res.status(500).send({ CriticalError: "Internal Server Error" })
    }
  },

  logOut: async (req, res) => {
    try {
      const { email } = req.body
      const logOut = await authService.logOut(email)
      res.status(201).send(logOut)
    } catch (error) {
      console.error(error);
      res.status(500).send({ CriticalError: "Internal Server Error" })
    }
  }
};

export default authController;
