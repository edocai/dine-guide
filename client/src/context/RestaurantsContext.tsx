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
}

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
  setRestaurants: () => { },
});

export const RestaurantsContextProvider = (props: { children: ReactNode }) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, setRestaurants }}>
      {props.children}
    </RestaurantsContext.Provider>
  );
};
