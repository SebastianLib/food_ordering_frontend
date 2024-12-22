import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Home from "../components/Home/Home"
import Cart from "../components/Cart/Cart"
import Profile from "../components/Profile/Profile"
import RestaurantDetails from "../components/Restaurant/RestaurantDetails"
import { Route, Routes } from 'react-router-dom'
import Auth from '../components/Auth/Auth'

const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/account/:register" element={<Home/>}/>
          <Route path="/restaurants/:city/:title/:id" element={<RestaurantDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/my-profile/*" element={<Profile/>}/>
        </Routes>
        <Auth/>
    </div>
  )
}

export default CustomerRoute