import { createAsyncThunk } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR } from "../../../Constants/constants";
import instance from "../../Apis/axios-config";


export const signInThunk = createAsyncThunk(
    "signInThunk",
    async function ({email,password}){
        try {
            const response =  await instance.post("/api/auth/signIn",{
                email:email,password:password
            })
            return response.data
           } catch (error) {
            return  error?.response?.data || error || UNKNOWN_ERROR
           }
    }
)

export const  signUpThunk = createAsyncThunk(
    "signInThunk",
    async function({name,email,password,confirmPassword}){
        try {
            const response = await instance.post("/api/auth/signUp",{
                name,
                email,
                password,
                confirmPassword
            })
            return response.data
        } catch (error) {
            return error?.response?.data || error||UNKNOWN_ERROR
        }
    }
)
export const  signOutThunk = createAsyncThunk(
    "signOutThunk",
    async function({refresh_token}){
        try {
            const response = await instance.post("/api/auth/signOut",{
                refresh_token
            })
            return response.data
        } catch (error) {
            return error?.response?.data || error||UNKNOWN_ERROR
        }
    }
)