import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "./Slices/Filter/FilterSlice.js";
import ProductSlice from "./Slices/Products/ProductSlice.js";
import AuthSlice from "./Slices/Auth/AuthSlice.js";
import UserSlice from "./Slices/User/UserSlice.js";
import CartSlice from "./Slices/Cart/CartSlice.js";

const store = configureStore({
    reducer : {
        productsData: ProductSlice,
        filterData : FilterSlice,
        userData: UserSlice,
        cartData: CartSlice,
        authData : AuthSlice,
        
    }
})
export default store