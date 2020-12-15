import { Restaurant } from "../../services/types";

export interface OldSchoolRestaurants {
  loading: boolean;
  restaurants: Restaurant[];
  restaurant: Restaurant;
}

export const oldSchoolRestaurants: OldSchoolRestaurants = {
  loading: false,
  restaurants: [],
  restaurant: {
    id: '',
    name: '',
    address: ''
  }
};
