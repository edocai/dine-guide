import React, { SyntheticEvent, useContext, useState } from 'react'
import RestaurantFinder from '../api/RestaurantAPI'
import { RestaurantsContext } from '../context/RestaurantsContext';

const AddRestaurant = () => {
  const {addRestaurants} = useContext(RestaurantsContext)
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post("/", {
        name,
        location,
        price_range: priceRange
      })
      addRestaurants(response.data.data.restaurant)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="">
      <form action="">
        <div className="">
          <div className="">
            <input
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
              type="text"
              className=""
              placeholder="name"
              />
          </div>
          <div className="">
            <input
              value={location}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
              className=""
              type="text"
              placeholder="location"
              />
          </div>
          <div className="">
            <select
              value={priceRange}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriceRange(e.target.value)}
              className=""
              >
              <option disabled>Price Range</option>
              <option value="1">£</option>
              <option value="2">££</option>
              <option value="3">£££</option>
              <option value="4">££££</option>
              <option value="5">£££££</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className=""
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant
