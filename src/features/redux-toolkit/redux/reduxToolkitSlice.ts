import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../../app/store";
import { Restaurant } from "../services/types";
import { createRestaurant, getRestaurants } from "../../old-school/services/restaurantService";

export interface ReduxToolkitRestaurants {
  loading: boolean;
  restaurants: Restaurant[];
  restaurant: Restaurant;
}

export const reduxToolkitRestaurants: ReduxToolkitRestaurants = {
  loading: false,
  restaurants: [],
  restaurant: {
    id: '',
    name: '',
    address: ''
  }
};

export const loadAllRestaurants = createAsyncThunk(
  'reduxToolkitRestaurants/loadAllRestaurants',
  async () => {
    return await getRestaurants();
  }
);

export const createNewRestaurant = createAsyncThunk(
  'reduxToolkitRestaurants/createNewRestaurant',
  async (restaurant: Restaurant) => {
    return await createRestaurant(restaurant);
  }
);

export const reduxToolkitSlice = createSlice({
  name: 'reduxToolkitRestaurants',
  initialState: reduxToolkitRestaurants,
  reducers: {
    updateRestaurantName: (state, action: PayloadAction<string>) => {
      state.restaurant.name = action.payload;
    },
    updateRestaurantAddress: (state, action: PayloadAction<string>) => {
      state.restaurant.address = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(loadAllRestaurants.pending, (state) => {
      state.loading = true;
      state.restaurants = [];
      state.restaurant = {
        id: '',
        name: '',
        address: ''
      }
    });
    builder.addCase(loadAllRestaurants.fulfilled, (state, action: PayloadAction<Restaurant[]>) => {
      state.loading = false;
      state.restaurants = action.payload;
    });

    builder.addCase(createNewRestaurant.pending, (state) => {
      state.loading = true;
      state.restaurants = [];
    });
    builder.addCase(createNewRestaurant.fulfilled, (state, action: PayloadAction<Restaurant[]>) => {
      state.loading = false;
      state.restaurants = action.payload;
      state.restaurant = {
        id: '',
        name: '',
        address: ''
      }
    });
  }
});

export const selectReduxToolkitRestaurants = (state: RootState) => state.reduxToolkit;

export const {
  updateRestaurantName,
  updateRestaurantAddress,
} = reduxToolkitSlice.actions;

export default reduxToolkitSlice.reducer;
