import Wine from "../Model/WineModel.js";
import wineService from "../Service/WineService.js";

const wineController = {
  getAll: async (req, res) => {
    try {
      const { sort } = req.query;
      console.log(req.user);
      const wines = await wineService.getAll(sort);
      res.status(201).send(wines);
    } catch (error) {
      console.error(error);
      res.status(500).send({ CriticalError: "Internal Server Error" });
    }
  },

  getById: async (req, res) => {
    try {
      const { sort, wineId } = req.body;
      const getWineById = await wineService.getById(wineId, sort);
      res.status(201).json(getWineById);
    } catch (error) {
      console.error(error);
      console.error("______________");
      console.error("Error During GetById API Request");
      res.status(500).json({ CriticalError: "Internal Server Error" });
    }
  },

  wineFilter: async (req, res) => {
    try {
      const types = req.query.types ? req.query.types.split(",") : [];
      const brands = req.query.brands ? req.query.brands.split(",") : [];
      const wines = await wineService.filterWines(types, brands);
      res.status(200).send(wines);
    } catch (error) {
      console.error(error);
      console.error("______________");
      res.status(500).send({ error: "Internal Server Error" });
    }
  },
};
export default wineController;
