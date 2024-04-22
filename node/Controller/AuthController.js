import AuthService from "../Service/AuthService.js";

const AuthController = {
  signUp: async (req, res) => {
    try {
      const { name, email, password, confirmPassword } = req.body;

      const data = await AuthService.signUp(
        name,
        email,
        password,
        confirmPassword
      );

      res.status(200).send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;

      const data = await AuthService.signIn(email, password);

      res.status(200).send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  signOut: async (req, res) => {
    try {
      const refresh_token = req.body.refresh_token;

      const data = await AuthService.signOut(refresh_token);

      res.status(200).send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
  refresh: async (req, res) => {
    try {
      const refresh_token = req.body.refresh_token;

      const data = await AuthService.refresh(refresh_token);

      res.status(200).send(data);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
};

export default AuthController;
