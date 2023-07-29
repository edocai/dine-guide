import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantAPI from '../api/RestaurantAPI';
import Ratings from '../components/Ratings';

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

  useEffect(() => {
    try {      
      const fetchData =async () => {
        const response = await RestaurantAPI.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <>
      <h1>{selectedRestaurant && <Ratings rating={5}/>}</h1>
    </>
  );
};

export default RestaurantDetailsPage
