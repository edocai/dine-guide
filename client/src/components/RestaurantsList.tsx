import React, { useContext, useEffect } from 'react'
import RestaurantAPI from '../api/RestaurantAPI';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useNavigate } from 'react-router-dom';

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

  const handleDelete = async (id: number) => {
    try {
      const response = await RestaurantAPI.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => {
        return restaurant.id !== id
      }))
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = async (id: number) => {
    navigate(`/restaurants/${id}/update`);
  }

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
              <tr key={restaurant.id}>
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{'£'.repeat(restaurant.price_range)}</td>
                <td>Rating</td>
                <td>
                  <button onClick={() => handleUpdate(restaurant.id)} className="">Update</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(restaurant.id)} className="">Delete</button>
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
