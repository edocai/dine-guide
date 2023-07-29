import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

interface ratingProps {
  rating: number;
}

const Ratings: React.FC<ratingProps> = ({ rating }) => {
  const stars = [];
  for (let index = 1; index <= 5; index++) {
    if (index <= rating) {
      stars.push(<FontAwesomeIcon icon={solidStar} />)
    } else {
      stars.push(<FontAwesomeIcon icon={regularStar} />)
    }    
  }
  return (
    <div>{stars}</div>
  )
}

export default Ratings

