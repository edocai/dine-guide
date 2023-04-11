import React, { useEffect } from 'react'
import RestaurantAPI from '../api/RestaurantAPI';

const RestaurantsList = () => {

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
          <tr>
            <td>Pizza Hut</td>
            <td>New York</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="">Update</button>
            </td>
            <td>
              <button className="">Delete</button>
            </td>
          </tr>
          <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="">Update</button>
            </td>
            <td>
              <button className="">Delete</button>
            </td>
          </tr> 
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantsList
