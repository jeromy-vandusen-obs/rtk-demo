import { Restaurant } from "./types";

export const getRestaurants = async (): Promise<Restaurant[]> => {
  await pause(1000);
  return [
    {
      id: '1',
      name: 'Cocoabeans Bakery',
      address: '774 Corydon Ave'
    },
    {
      id: '2',
      name: 'Stella\'s Sherbrook',
      address: '116 Sherbrook St'
    },
    {
      id: '3',
      name: 'Stella\'s Pembina',
      address: '1463 Pembina Hwy'
    },
    {
      id: '4',
      name: 'Gohe',
      address: '595 Notre Dame Ave'
    }
  ];
};

export const createRestaurant = async (restaurant: Restaurant): Promise<Restaurant[]> => {
  await pause(1000);
  const restaurants = await getRestaurants();
  return [
    ...restaurants,
    restaurant
  ];
};

const pause = async (delayInMilliseconds: number): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
};
