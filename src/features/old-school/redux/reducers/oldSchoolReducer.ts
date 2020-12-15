import produce from 'immer';
import { AnyAction } from 'redux';

import { OldSchoolRestaurants, oldSchoolRestaurants } from '../initialState/oldSchool';
import { OLD_SCHOOL_ACTIONS } from '../types';

export const oldSchoolReducer = (state = oldSchoolRestaurants, action: AnyAction): OldSchoolRestaurants => {
  return produce(state, (draft: OldSchoolRestaurants) => {
    switch (action.type) {
      case OLD_SCHOOL_ACTIONS.LOAD_RESTAURANTS_BEGIN:
        draft.loading = true;
        draft.restaurants = [];
        draft.restaurant = {
          id: '',
          name: '',
          address: ''
        };
        return draft;

      case OLD_SCHOOL_ACTIONS.LOAD_RESTAURANTS_END:
        draft.loading = false;
        draft.restaurants = action.payload;
        return draft;

      case OLD_SCHOOL_ACTIONS.UPDATE_RESTAURANT_NAME:
        draft.restaurant.name = action.payload;
        return draft;

      case OLD_SCHOOL_ACTIONS.UPDATE_RESTAURANT_ADDRESS:
        draft.restaurant.address = action.payload;
        return draft;

      case OLD_SCHOOL_ACTIONS.CREATE_RESTAURANT_BEGIN:
        draft.loading = true;
        draft.restaurants = [];
        return draft;

      case OLD_SCHOOL_ACTIONS.CREATE_RESTAURANT_END:
        draft.loading = false;
        draft.restaurants = action.payload;
        draft.restaurant = {
          id: '',
          name: '',
          address: ''
        };
        return draft;

      default:
        return draft;
    }
  });
};
