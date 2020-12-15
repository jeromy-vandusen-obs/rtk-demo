import { AppThunk } from "../../../../app/store";
import { reduxToolkitSlice } from "../reducers/reduxToolkitReducer";

import { createRestaurant, getRestaurants } from "../../../old-school/services/restaurantService";
import { Restaurant } from "../../../old-school/services/types";

export const {
  loadAllRestaurantsBegin,
  loadAllRestaurantsEnd,
  updateRestaurantName,
  updateRestaurantAddress,
  createNewRestaurantBegin,
  createNewRestaurantEnd
} = reduxToolkitSlice.actions;

export const loadAllRestaurants = (): AppThunk => async (dispatch) => {
  dispatch(loadAllRestaurantsBegin());
  const restaurants = await getRestaurants();
  dispatch(loadAllRestaurantsEnd(restaurants));
};

export const createNewRestaurant = (restaurant: Restaurant): AppThunk => async (dispatch) => {
  dispatch(createNewRestaurantBegin());
  const restaurants = await createRestaurant(restaurant);
  dispatch(createNewRestaurantEnd(restaurants));
};
