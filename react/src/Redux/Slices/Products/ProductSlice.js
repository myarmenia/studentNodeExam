import { createSlice } from "@reduxjs/toolkit";
import { getProductByIdThunk, productsGetThunk } from "./productsThunks";

const initialState = {
  wines: [],
  wine: {
    wineLoadingStatus: "pending",
    data: {},
  },
  loadingStatus: "pending",
  searchValue: "",
};

const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    addBrands: (state, action) => {
      state.brands = [...state.brands, action.payload];
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productsGetThunk.pending, (state, action) => {
        state.loadingStatus = "pending";
      })
      .addCase(productsGetThunk.fulfilled, (state, action) => {
        state.loadingStatus = "fulfilled";
        state.wines = action.payload;
      })
      .addCase(productsGetThunk.rejected, (state, action) => {
        state.loadingStatus = "rejected";
      })
      .addCase(getProductByIdThunk.pending, (state, action) => {
        state.wine.wineLoadingStatus = "pending";
      })
      .addCase(getProductByIdThunk.fulfilled, (state, action) => {
        state.wine.wineLoadingStatus = "fulfilled";
        state.wine.data = action.payload;
      })
      .addCase(getProductByIdThunk.rejected, (state, action) => {
        state.wine.wineLoadingStatus = "rejected";
      });
  },
});

export const { addBrands, setSearchValue } = productsSlice.actions;

export default productsSlice.reducer;
