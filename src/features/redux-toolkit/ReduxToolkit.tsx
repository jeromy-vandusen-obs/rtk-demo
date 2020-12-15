import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import {
  createNewRestaurant,
  loadAllRestaurants,
  selectReduxToolkitRestaurants,
  updateRestaurantName,
  updateRestaurantAddress
} from "./redux/reduxToolkitSlice";

import styles from './ReduxToolkit.module.css';

const ReduxToolkit = (): JSX.Element => {
  const {
    loading,
    restaurants,
    restaurant
  } = useSelector(selectReduxToolkitRestaurants);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadAllRestaurants());
  }, [dispatch]);

  return (
    <>
      {loading ?
        <div className={styles.loading}>Loading...</div>
      :
        <>
          <div className={styles.restaurants}>
            {restaurants.map(rst =>
              <div key={rst.id} className={styles.restaurant}>
                <div className={styles.name}>{rst.name}</div>
                <div className={styles.address}>{rst.address}</div>
              </div>
            )}
          </div>

          <div className={styles.form}>
            <div className={styles.row}>
              <div className={styles.label}>
                Name
              </div>
              <div className={styles.input}>
                <input value={restaurant.name} onChange={event => dispatch(updateRestaurantName(event.target.value))} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.label}>
                Address
              </div>
              <div className={styles.input}>
                <input value={restaurant.address} onChange={event => dispatch(updateRestaurantAddress(event.target.value))} />
              </div>
            </div>
            <button onClick={() => dispatch(createNewRestaurant(restaurant))}>Create</button>
          </div>
        </>
      }
    </>
  );
};

export default ReduxToolkit;
