import React from 'react';
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../app/store";
import { loadAllRestaurants, updateRestaurantAddress, updateRestaurantName, createNewRestaurant } from "./redux/actions/oldSchoolActions";

import styles from './OldSchool.module.css';

const mapStateToProps = (state: RootState) => ({
  loading: state.oldSchool.loading,
  restaurants: state.oldSchool.restaurants,
  restaurant: state.oldSchool.restaurant
});

const actionCreators = {
  loadAllRestaurants,
  updateRestaurantName,
  updateRestaurantAddress,
  createNewRestaurant
};

const connector = connect(mapStateToProps, actionCreators);

export type OldSchoolProps = ConnectedProps<typeof connector>;

const OldSchool = (props: OldSchoolProps): JSX.Element => {
  const {
    loading,
    restaurants,
    restaurant,
    loadAllRestaurants,
    updateRestaurantName,
    updateRestaurantAddress,
    createNewRestaurant
  } = props;

  const fetchData = React.useCallback(() => {
    loadAllRestaurants();
  }, [loadAllRestaurants]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

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
                <input value={restaurant.name} onChange={event => updateRestaurantName(event.target.value)} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.label}>
                Address
              </div>
              <div className={styles.input}>
                <input value={restaurant.address} onChange={event => updateRestaurantAddress(event.target.value)} />
              </div>
            </div>
            <button onClick={() => createNewRestaurant(restaurant)}>Create</button>
          </div>
        </>
      }
    </>
  );
};

export default connector(OldSchool);
