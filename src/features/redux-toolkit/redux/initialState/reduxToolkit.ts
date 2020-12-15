import { Restaurant } from "../../services/types";

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
