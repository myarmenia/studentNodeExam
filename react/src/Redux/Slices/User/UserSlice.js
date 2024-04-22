import { createSlice } from "@reduxjs/toolkit";
import { getUserThunk } from "./userThunks";

const initialState = {
  user: [],
  loadingStatus: "pending",
  barIsOpen: false,
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setBarIsOpen(state, { payload }) {
      state.barIsOpen = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.pending, (state, action) => {
        state.loadingStatus = "pending";
      })
      .addCase(getUserThunk.fulfilled, (state, action) => {
        state.loadingStatus = "fulfilled";
        state.user = action.payload;
      })
      .addCase(getUserThunk.rejected, (state, action) => {
        state.loadingStatus = "rejected";
      });
  },
});
export const { setBarIsOpen } = UserSlice.actions;

export default UserSlice.reducer;
