import { createSlice } from "@reduxjs/toolkit";
import {
  filteredByRatingThunk,
  filteredBySaleThunk,
  filteredProductsThunk,
} from "./filterThunks";

const initialState = {
  filteredByRating: [],
  filteredBySale: [],
  filteredProducts: {
    data: [],
    message: "",
  },
  filterIsOpen: false,
  userPageCurrent: "account",
  priceValueFrom: "1",
  priceValueTo: "100",
  loadingStatus: "pending",
  activPat: {
    id: null,
    title: null,
    path: null,
    locationName: null,
  },
  elementLocation: {
    brands: 0,
    about: 0,
    specialOffers: 0,
    support: 0,
  },
};

const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    changePriceValueFrom(state, action) {
      state.priceValueFrom = action.payload;
    },
    changePriceValueTo(state, action) {
      state.priceValueTo = action.payload;
    },
    changeUserPgaeCurrent(state, action) {
      state.userPageCurrent = action.payload;
    },
    setActivPat(state, action) {
      state.activPat = action.payload;
    },
    setElementLocation(state, { payload }) {
      switch (payload.name) {
        case "brands":
          state.elementLocation.brands = payload.count;
          state.elementLocation.about = 0;
          state.elementLocation.specialOffers = 0;
          break;
        case "about":
          state.elementLocation.about = payload.count;
          state.elementLocation.specialOffers = 0;
          state.elementLocation.brands = 0;
          break;

        case "specialOffers":
          state.elementLocation.specialOffers = payload.count;
          state.elementLocation.brands = 0;
          state.elementLocation.about = 0;
          break;

        case "support":
          state.elementLocation.support = payload.count;
          break;
        case "all":
          state.elementLocation.brands = payload.brands;
          state.elementLocation.about = payload.about;
          state.elementLocation.specialOffers = payload.specialOffers;
          break;

        default:
          break;
      }
    },
    setFilterIsOpen(state, { payload }) {
      state.filterIsOpen = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(filteredByRatingThunk.pending, (state, action) => {
        state.loadingStatus = "pending";
      })
      .addCase(filteredByRatingThunk.fulfilled, (state, action) => {
        state.loadingStatus = "fulfilled";
        state.filteredByRating = action.payload;
      })
      .addCase(filteredByRatingThunk.rejected, (state, action) => {
        state.loadingStatus = "rejected";
      })
      .addCase(filteredBySaleThunk.pending, (state, action) => {
        state.loadingStatus = "pending";
      })
      .addCase(filteredBySaleThunk.fulfilled, (state, action) => {
        state.loadingStatus = "fulfilled";
        state.filteredBySale = action.payload;
      })
      .addCase(filteredBySaleThunk.rejected, (state, action) => {
        state.loadingStatus = "rejected";
      })
      .addCase(filteredProductsThunk.pending, (state, action) => {
        state.loadingStatus = "pending";
      })
      .addCase(filteredProductsThunk.fulfilled, (state, action) => {
        state.loadingStatus = "fulfilled";
        if (action.payload.message) {
          state.filteredProducts.message = action.payload.message;
          state.filteredProducts.data = [];
        } else {
          state.filteredProducts.data = action.payload;
          state.filteredProducts.message = "";
        }
      })
      .addCase(filteredProductsThunk.rejected, (state, action) => {
        state.loadingStatus = "rejected";
      });
  },
});

export const {
  changePriceValueFrom,
  changePriceValueTo,
  changeUserPgaeCurrent,
  setActivPat,
  setElementLocation,
  setFilterIsOpen,
} = filterSlice.actions;

export default filterSlice.reducer;
