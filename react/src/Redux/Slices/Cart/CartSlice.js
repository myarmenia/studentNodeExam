import { createSlice } from "@reduxjs/toolkit"
import { addToCart, getBoughtItems, getCartThunk } from "./cartThunks"


const initialState = {
    cart: [],
    orderHistory: {
        data: [],
        loadingStatus: "pending"
    },
    loadingStatus: "pending"
}

const CartSlice = createSlice({
    name:"CartSlice",
    initialState,
    reducers:{
        changeCart(state,action){
            state.cart = action.payload
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(getCartThunk.pending, (state,action)=>{
            state.loadingStatus = "pending"
        })
        .addCase(getCartThunk.fulfilled, (state,action)=>{
            state.loadingStatus = "fulfilled"
            state.cart = action.payload.userCart
        })
        .addCase(getCartThunk.rejected, (state,action)=>{
            state.loadingStatus = "rejected"
        })
        .addCase(getBoughtItems.pending, (state,action)=>{
            state.orderHistory.loadingStatus  = "pending"
        })
        .addCase(getBoughtItems.fulfilled, (state,action)=>{
            state.orderHistory.loadingStatus = "fulfilled"
            state.orderHistory.data = action.payload.userBoughtItems
        })
        .addCase(getBoughtItems.rejected, (state,action)=>{
            state.orderHistory.loadingStatus = "rejected"
        })

        
    
    }
})


export const {changeCart} = CartSlice.actions

export default CartSlice.reducer