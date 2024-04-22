import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import instance from "../../Apis/axios-config.js";
import { UNKNOWN_ERROR } from "../../../Constants/constants";


export const filteredByRatingThunk = createAsyncThunk(
    "filteredByRatingThunk",
    async function () {
        try {
            const response =  await instance.get("/api/wines?sort=rating")
            return response.data
        } catch (error) {
           return  error?.response?.data || error || UNKNOWN_ERROR
        }

        
    }
)
export const filteredBySaleThunk = createAsyncThunk(
    "filteredBySaleThunk",
    async function () {
       try {
        const response =  await instance.get("/api/wines?sort=sale")
        return response.data
       } catch (error) {
        return  error?.response?.data || error || UNKNOWN_ERROR
       }

        
    }
)

export const filteredProductsThunk = createAsyncThunk(
    "filteredProductsThunk",
    async function(wine){
        try {
            const wineType = await wine.type ? `type=${wine.type}` : ""
            const wineBrand = await wine.brand ? `&brand=${wine.brand}`: ""
            const response = await instance.get(`/api/wines?${wineType}${wineBrand}`)

            return response.data
        } catch (error) {
            return  error?.response?.data || error || UNKNOWN_ERROR
        }

    }
)