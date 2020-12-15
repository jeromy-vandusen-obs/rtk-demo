import { OLD_SCHOOL_ACTIONS } from "../types";
import { createRestaurant, getRestaurants } from "../../services/restaurantService";
import { Restaurant } from "../../services/types";

export const loadAllRestaurants = () => async (dispatch: any) => {
  dispatch({
    type: OLD_SCHOOL_ACTIONS.LOAD_RESTAURANTS_BEGIN
  });

  const restaurants = await getRestaurants();
  dispatch({
    type: OLD_SCHOOL_ACTIONS.LOAD_RESTAURANTS_END,
    payload: restaurants
  })
};

export const updateRestaurantName = (name: string) => ({
  type: OLD_SCHOOL_ACTIONS.UPDATE_RESTAURANT_NAME,
  payload: name
});

export const updateRestaurantAddress = (name: string) => ({
  type: OLD_SCHOOL_ACTIONS.UPDATE_RESTAURANT_ADDRESS,
  payload: name
});

export const createNewRestaurant = (restaurant: Restaurant) => async (dispatch: any) => {
  dispatch({
    type: OLD_SCHOOL_ACTIONS.CREATE_RESTAURANT_BEGIN
  });

  const restaurants = await createRestaurant(restaurant);
  dispatch({
    type: OLD_SCHOOL_ACTIONS.CREATE_RESTAURANT_END,
    payload: restaurants
  })
};
