import React, { SyntheticEvent, useContext, useEffect } from 'react'
import RestaurantAPI from '../api/RestaurantAPI';
import { Restaurant, RestaurantsContext } from '../context/RestaurantsContext';
import { useNavigate } from 'react-router-dom';
import Ratings from './Ratings';

const RestaurantsList = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantAPI.get('/');
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, []);

  const handleDelete = async (e: SyntheticEvent, id: number) => {
    e.stopPropagation();
    try {
      const response = await RestaurantAPI.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => {
        return restaurant.id !== id
      }))
    } catch (error) {
      console.log(error);
    }
  }
  
  const handleUpdate = async (e: SyntheticEvent, id: number) => {
    e.stopPropagation();
    navigate(`/restaurants/${id}/update`);
  }

  const handleRestaurantDetails = (id: number) => {
    navigate(`/restaurants/${id}`)
  }

  const renderRating = (restaurant: Restaurant) => {
    if (!restaurant.count) {
      return <span className="">0 reviews</span>;
    }
    return (
      <>
        <Ratings rating={restaurant.average_rating} />
        <span className="">({restaurant.count})</span>
      </>
    );
  };

  return (
    <div className="">
      <table className="">
        <thead>
          <tr className="">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map(restaurant => {
            return (
              <tr onClick={() => handleRestaurantDetails(restaurant.id)} key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{'£'.repeat(restaurant.price_range)}</td>
                <td>{renderRating(restaurant)}</td>
                <td>
                  <button onClick={(e) => handleUpdate(e, restaurant.id)} className="">Update</button>
                </td>
                <td>
                  <button onClick={(e) => handleDelete(e, restaurant.id)} className="">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsList
