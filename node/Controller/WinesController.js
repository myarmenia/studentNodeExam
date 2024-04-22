import WinesService from "../Service/WinesService.js"


const WinesController = {
    getAll : async(req,res)=>{
        try {
            const {type,brand,sort} = req.query

            const page = parseInt(req.query.page) || 1
            const size = parseInt(req.query.size) || 10

            const data = await WinesService.getAll(type,brand,sort,page,size)

            res.status(200).send(data)
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"Internal Server Error"})
        }
    },
    getById: async(req,res)=>{
        try {
            const id = req.params.id

            const data = await WinesService.getById(id)

            res.status(200).send(data)
        } catch (error) {
            console.error(error)
            res.status(500).send({message: "Internal Server Error"})
        }
    }
}

export default WinesController