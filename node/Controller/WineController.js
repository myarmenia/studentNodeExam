import wineService from "../Service/WineService.js";

const wineController = {

  getById: async (req, res) => {
    try {
      const { wineId } = req.query
      const wine = await wineService.getById(wineId)
      res.status(200).send(wine)
    } catch (error) {
      console.error(error);
      res.status(500).send({ CriticalError: "Internal Server Error" })
    }
  },

  getAllAndFilter: async (req, res) => {
    try {
      const { sort, types, brands, minPrice, maxPrice } = req.query;

      const typesArray = types ? types.split(",") : [];
      const brandsArray = brands ? brands.split(",") : [];

      const wines = await wineService.getAllAndFilter(sort, typesArray, brandsArray, minPrice, maxPrice);
      res.status(200).send(wines);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  },
};

export default wineController;
