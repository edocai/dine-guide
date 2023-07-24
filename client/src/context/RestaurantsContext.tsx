import React, { useState, createContext, ReactNode } from 'react';

export interface Restaurant {
  id: number;
  name: string;
  location: string;
  price_range: number;
}

export interface RestaurantsContextType {
  restaurants: Restaurant[];
  setRestaurants: React.Dispatch<React.SetStateAction<Restaurant[]>>;
  addRestaurants: (restaurant: Restaurant) => void;
}

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
  setRestaurants: () => { },
  addRestaurants: function (restaurant: Restaurant): void {
    throw new Error('Function not implemented.');
  }
});

export const RestaurantsContextProvider = (props: { children: ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const addRestaurants = (restaurant: Restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  }

  return (
    <RestaurantsContext.Provider value={{ restaurants, setRestaurants, addRestaurants }}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};
