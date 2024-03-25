import Wine from "../Model/WineModel.js";

const wineService = {
  getById: async (_id) => {
    const wine = await Wine.findById(_id);
    console.log(wine);
    if (!wine) {
      return { Message: "Wine Not Found" };
    }
    return wine;
  },

  getAllAndFilter: async (sort, types, brands, minPrice, maxPrice) => {
    try {
      let query = {};

      if (sort === "ratingAndOffers") {
        query.rating = { $gte: 3 };
        query.sales = { $gte: 5 };
      }

      if (types && types.length > 0) {
        query.type = { $in: types };
      }

      if (brands && brands.length > 0) {
        query.brand = { $in: brands };
      }

      if (minPrice && maxPrice) {
        query.price = { $gte: minPrice, $lte: maxPrice };
      } else if (minPrice) {
        query.price = { $gte: minPrice };
      } else if (maxPrice) {
        query.price = { $lte: maxPrice };
      }

      const wines = await Wine.find(query);
      return wines;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default wineService;
