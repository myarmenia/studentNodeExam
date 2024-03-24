import Wine from "../Model/WineModel.js";

const wineService = {
  getAll: async (sort) => {
    const wines = await Wine.find();

    if (sort === "ratingAndOffers") {
      wines = wines.filter((wine) => wine.rating >= 3 && wine.sales >= 5);
    }

    return wines;
  },
  getById: async (wineId, sort) => {
    try {
      const wineById = await Wine.findById(wineId);
      if (!wineById) {
        return "Wine not found";
      }

      const wines = await Wine.find({ type: wineById.type });

      return { wines, wineById };
    } catch (error) {
      console.error(error);
    }
  },

  filterWines: async (types, brands) => {
    try {
      const query = {};
      if (types && types.length > 0) {
        query.type = { $in: types };
      }
      if (brands && brands.length > 0) {
        query.brand = { $in: brands };
      }
      const wines = await Wine.find(query);
      return wines;
    } catch (error) {
      console.error(error);
    }
  },
};

export default wineService;
