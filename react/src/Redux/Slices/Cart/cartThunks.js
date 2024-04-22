import { createAsyncThunk } from "@reduxjs/toolkit";
import { UNKNOWN_ERROR } from "../../../Constants/constants";
import instance from "../../Apis/axios-config";

export const getCartThunk = createAsyncThunk("getCartThunk", async function () {
  try {
    const response = await instance.get("/api/cart/getCart");

    return response.data;
  } catch (error) {
    return error?.response?.data || error || UNKNOWN_ERROR;
  }
});
export const getBoughtItems = createAsyncThunk(
  "getBoughtItems",
  async function () {
    try {
      const response = await instance.get("/api/cart/boughtItems");

      return response.data;
    } catch (error) {
      return error?.response?.data || error || UNKNOWN_ERROR;
    }
  }
);
export const addToCartThunk = createAsyncThunk(
  "addToCart",
  async function ({ wine_id }) {
    try {
      const response = await instance.post("/api/cart/addToCart", { wine_id });

      return response.data;
    } catch (error) {
      return error?.response?.data || error || UNKNOWN_ERROR;
    }
  }
);
export const cartCheckout = createAsyncThunk("cartCheckout", async function () {
  try {
    const response = await instance.post("/api/cart/checkout");

    return response.data;
  } catch (error) {
    return error?.response?.data || error || UNKNOWN_ERROR;
  }
});
export const changeCartItemCount = createAsyncThunk(
  "addToCart",
  async function ({ count, cartItemId, changeType }) {
    try {
      const response = await instance.put("/api/cart/changeCount", {
        cartItemId,
        count,
        changeType,
      });

      return response.data;
    } catch (error) {
      return error?.response?.data || error || UNKNOWN_ERROR;
    }
  }
);
export const deleteCartItem = createAsyncThunk(
  "deleteCartItem",
  async function ({ cartItemId }) {
    try {
      const response = await instance.delete(
        `/api/cart/deleteItem/${cartItemId}`,
        {
          cartItemId,
        }
      );

      return response.data;
    } catch (error) {
      return error?.response?.data || error || UNKNOWN_ERROR;
    }
  }
);
