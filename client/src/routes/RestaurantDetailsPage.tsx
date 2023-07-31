import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantAPI from '../api/RestaurantAPI';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

  useEffect(() => {
    try {      
      const fetchData =async () => {
        const response = await RestaurantAPI.get(`/${id}`);
        setSelectedRestaurant(response.data.data);
      }
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <>
      {selectedRestaurant && (
        <>
          <div className=''>
            <Reviews reviews={selectedRestaurant.reviews} />
          </div>
          <AddReview />
        </>
      )}
    </>
  );
};

export default RestaurantDetailsPage
