import Wine from "../Model/WineModel.js";

const wineService = {
    getAll: async (rating, offers) => {
        try {
            let wines = await Wine.find();

            if (rating) {
                wines.sort((a, b) => a.rating - b.rating);
            }

            if (offers) {
                wines.sort((a, b) => a.sales - b.sales);
            }

            return wines;
        } catch (error) {
            console.error(error);
            throw new Error("Error retrieving wines.");
        }
    },

    getById: async (wineId) => {
        try {
            const wine = await Wine.findById(wineId);
            if (!wine) {
                throw new Error("Wine not found.");
            }
            return wine;
        } catch (error) {
            console.error(error);
            throw new Error("Error retrieving wine by ID.");
        }
    }
};

export default wineService;
