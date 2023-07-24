import React, { useState } from 'react'

const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');
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
