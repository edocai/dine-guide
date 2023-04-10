import React from 'react'

const AddRestaurant = () => {
  return (
    <div className="">
      <form action="">
        <div className="">
          <div className="">
            <input
              
              type="text"
              className=""
              placeholder="name"
            />
          </div>
          <div className="">
            <input
              
              className=""
              type="text"
              placeholder="location"
            />
          </div>
          <div className="">
            <select
              
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
  )
}

export default AddRestaurant
