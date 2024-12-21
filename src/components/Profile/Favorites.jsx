import React from 'react'
import RestaurantCard from "../Restaurant/RestaurantCard"

const Favorites = () => {
  return (
    <div className='pt-24'>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>

      <div className='flex flex-wrap justify-center'>
      {[1,1,1].map((item, i) => <RestaurantCard key={i} item={item}/>)}
      </div>
    </div>
  )
}

export default Favorites