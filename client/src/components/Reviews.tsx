import React from 'react'
import Ratings from './Ratings';
import { Restaurant } from '../context/RestaurantsContext';

interface Review {
  id: number;
  name: string;
  rating: number;
  review: string;
}

interface ReviewsProp {
  reviews: Review[];
}


const Reviews: React.FC<ReviewsProp> = ({ reviews }) => {
  return (
    <div className="">
      {reviews.map((review) => {
        return (
          <div
            key={review.id}              
            className=""
            style={{ maxWidth: "30%" }}
          >
            <div className="">
              <span>{review.name}</span>
              <span>
                <Ratings rating={review.rating} />
              </span>
            </div>
            <div className="">
              <p className="">{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews