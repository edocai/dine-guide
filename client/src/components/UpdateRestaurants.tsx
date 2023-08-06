import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantAPI from '../api/RestaurantAPI';

const UpdateRestaurants = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { restaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantAPI.get(`/${id}`);
      console.log(response.data.data);
      setName(response.data.data.restaurant.name);
      setLocation(response.data.data.restaurant.location);
      setPriceRange(response.data.data.restaurant.price_range);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const updatedRestaurant = await RestaurantAPI.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    navigate('/');
  };

  return (
    <div>
      <form action="">
        <div className="m-4">
          <label htmlFor="name" className='block text-sm font-medium text-gray-700 pb-1'>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            type="text"
          />
        </div>

        <div className="m-4">
          <label htmlFor="location" className='block text-sm font-medium text-gray-700 pb-1'>Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:border-blue-500l"
            type="text"
          />
        </div>
        <div className="m-4">
          <label htmlFor="price_range" className='block text-sm font-medium text-gray-700 pb-1'>Price Range</label>
          <input
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            id="price_range"
            className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:border-blue-500"
            type="number"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 mt-2 mr-4 ml-4 mb-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default UpdateRestaurants