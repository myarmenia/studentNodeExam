import Wine from "../Model/WineModel.js";

const wineService = {

    getAll: async () => {
        const getAllWines = await Wine.find()
        return getAllWines
    },

    getById: async (wineId) => {
        const getById = await Wine.findById(wineId)
        if (getById) {
            return getById
        }else{
            return { Message: "Wine Was Not Found"}
        }
    }
}

export default wineService