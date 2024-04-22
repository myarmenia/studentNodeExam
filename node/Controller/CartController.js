import CartService from "../Service/CartService.js"


const CartController = {
    getCart: async(req,res)=>{
        try {
            const user_id = req.user._id

            const data = await CartService.getCart(user_id)

            res.status(200).send(data)
        } catch (error) {
            console.error(error)
            res.status(500).send({message: "InterNal Server Error"})
        }
    },
    getBoughtItems: async(req,res)=>{
        try {
            const user_id = req.user._id

            const data = await CartService.getBoughtItems(user_id)

            res.status(200).send(data)
        } catch (error) {
            console.error(error)
            res.status(500).send({message: "InterNal Server Error"})
        }
    },
    addToCart: async(req,res)=>{
        try {
            const user_id = req.user._id
            const {wine_id} = req.body

            const data = await CartService.addToCart(user_id,wine_id)

            res.status(201).send(data)
        } catch (error) {
            console.error(error)
            res.status(500).send({message: "InterNal Server Error"})
        }
    },
    checkout: async(req,res)=>{
        try {
            const user_id = req.user._id

            const data = await CartService.checkout(user_id)

            res.status(200).send(data)
        } catch (error) {
            console.error(error)
            res.status(500).send({message: "InterNal Server Error"})
        }
    },
    changeCount: async(req,res)=>{
        try {
            const user_id = req.user._id
            const {cartItemId,count,changeType} = req.body

            const data = await CartService.changeCount(user_id,cartItemId,count,changeType)

            res.status(200).send(data)
        } catch (error) {
            console.error(error)
            res.status(500).send({message: "InterNal Server Error"})
        }
    },
    deletItem: async(req,res)=>{
        try {
            const user_id = req.user._id
            const {cartItemId} = req.params

            const data = await CartService.deleteItem(user_id,cartItemId)

            res.status(200).send(data)
        } catch (error) {
            console.error(error)
            res.status(500).send({message: "InterNal Server Error"})
        }
    },
}

export default CartController