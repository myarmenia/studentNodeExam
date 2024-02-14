import Wine from "../Model/WineModel.js";

const wineService = {
    getAll: async (sort, order) => {
        try {
            const wines = await Wine.find();

            if (sort) {
                if (sort === "rating") {
                    if (order) {
                        if (order === "asc") {
                            wines.sort((a, b) => a.rating - b.rating)
                        }
                        if (order === "desc") {
                            wines.sort((a, b) => b.rating - a.rating)
                        }
                    }else{
                        wines.sort((a,b) => a.rating - b.rating)
                    }
                }
                if (sort === "sales") {
                    if (order) {
                        if (order === "asc") {
                            wines.sort((a,b) => a.sales - b.sales)
                        }
                        if (order === "desc") {
                            wines.sort((a,b) => b.sales - a.sales)
                        }
                    }else{
                        wines.sort((a,b) => a.sales - b.sales)
                    }
                }
            }
            return wines
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
    },

    wineFilter: async (req,res) => {
        const {sort, order} = req.query
        const wineFilter = await wineService.wineFilter(sort, order)
        
    }
};

export default wineService;
