import UsersService from "../Service/UsersService.js";

const UsersController = {
  changeUser: async (req, res) => {
    try {
        const {newName,newPassword} = req.body
        const user_id = req.user._id
        const data = await UsersService.changeUser(user_id,newName,newPassword)

        res.status(202).send(data)
    } catch (error) {
        console.error(error)
        res.status(500).send({message:"Internal Server Error"})
    }
  },
  getUser: async(req,res)=>{
    try {
      
      const user_id = req.user._id

      const data = await UsersService.getUser(user_id)

      res.status(200).send(data)
      
    } catch (error) {
      console.error(error)
      res.status(500).send({message:"Internal Server Error"})
    }
  }
};
export default UsersController
