import { createAsyncThunk } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR } from "../../../Constants/constants";
import instance from "../../Apis/axios-config";

export const getUserThunk = createAsyncThunk("getUserThunk", async function () {
  try {
    const response = await instance.get("/api/user");
    return response.data;
  } catch (error) {
    return error?.response?.data || error || UNKNOWN_ERROR;
  }
});
export const changeUserThunk = createAsyncThunk(
  "changeUserThunk",
  async function ({ newName, newPassword }) {
    try {
      const response = await instance.put("/api/user/change", {
        newName,
        newPassword,
      });
      return response.data;
    } catch (error) {
      return error?.response?.data || error || UNKNOWN_ERROR;
    }
  }
);
