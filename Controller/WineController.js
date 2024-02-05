import wineService from "../Service/WineService.js"

const wineController = {
  getAll: async (req, res) => {
    try {
      const getAllWines = await wineService.getAll();
      res.status(200).json(getAllWines);
    } catch (error) {
      console.error(error);
      console.error("_____________");
      console.error("Error during GetAll API Requset");
      res.status(500).json({ CriticalError: "Internal Server Error" });
    }
  },

  getById: async (req,res) => {
    try {
      const { wineId } = req.body
      const getWineById = await wineService.getById(wineId)
      res.status(201).json(getWineById)
    } catch (error) {
      console.error(error);
      console.error("______________");
      console.error("Error During GetById API Request");
      res.status(500).json({ CriticalError: "Internal Server Error" })
    }
  },
};

export default wineController