import { createSlice } from "@reduxjs/toolkit";
import { signInThunk } from "./authThunks";
import { jwtDecode } from "jwt-decode";

const initialState = {
  user: {
    userInfo: {},
    message: "",
  },
  loadingStatus: "pending",
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    // .addCase(signInThunk.pending,(state,action)=>{
    //     state.loadingStatus= "pending"
    // })
    // .addCase(signInThunk.fulfilled,(state,action)=>{
    //     state.loadingStatus= "fulfilled"
    //     state.user.userInfo= jwtDecode(action.payload.access_token)
    //     state.user.message= action.payload.message
    // })
    // .addCase(signInThunk.rejected,(state,action)=>{
    //     state.loadingStatus= "rejected"
    // })
  },
});

export default AuthSlice.reducer;
