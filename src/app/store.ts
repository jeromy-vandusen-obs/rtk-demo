import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';
import { oldSchoolReducer } from "../features/old-school/redux/reducers/oldSchoolReducer";
import reduxToolkitReducer from "../features/redux-toolkit/redux/reduxToolkitSlice";

export const store = configureStore({
  reducer: {
    oldSchool: oldSchoolReducer,
    reduxToolkit: reduxToolkitReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
