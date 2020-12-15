import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reduxToolkitRestaurants } from "../initialState/reduxToolkit";
import { Restaurant } from "../../services/types";

export const reduxToolkitSlice = createSlice({
  name: 'reduxToolkitRestaurants',
  initialState: reduxToolkitRestaurants,
  reducers: {
    loadAllRestaurantsBegin: (state) => {
      state.loading = true;
      state.restaurants = [];
      state.restaurant = {
        id: '',
        name: '',
        address: ''
      }
    },
    loadAllRestaurantsEnd: (state, action: PayloadAction<Restaurant[]>) => {
      state.loading = false;
      state.restaurants = action.payload;
    },
    updateRestaurantName: (state, action: PayloadAction<string>) => {
      state.restaurant.name = action.payload;
    },
    updateRestaurantAddress: (state, action: PayloadAction<string>) => {
      state.restaurant.address = action.payload;
    },
    createNewRestaurantBegin: (state) => {
      state.loading = true;
      state.restaurants = [];
    },
    createNewRestaurantEnd: (state, action: PayloadAction<Restaurant[]>) => {
      state.loading = false;
      state.restaurants = action.payload;
      state.restaurant = {
        id: '',
        name: '',
        address: ''
      }
    }
  },
});

export default reduxToolkitSlice.reducer;
