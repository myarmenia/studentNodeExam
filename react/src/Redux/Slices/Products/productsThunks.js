import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import instance from "../../Apis/axios-config";
import {UNKNOWN_ERROR} from '../../../Constants/constants.js'

export const productsGetThunk = createAsyncThunk(
    "productsGetThunk",
    async function(){
        try {
            const response =  await instance.get("/api/wines")
            return response.data
        } catch (error) {
            return  error?.response?.data || error || UNKNOWN_ERROR
        }

    }
)


export const getProductByIdThunk = createAsyncThunk(
    "getProductByIdThunk",
    async function({id}){
        try {
            const response = await instance.get(`/api/wines/${id}`)
            return response.data
        } catch (error) {
            return  error?.response?.data || error || UNKNOWN_ERROR
        }

    }
)