import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateRestaurantForm from '../adminComponents/CreateRestaurantForm/CreateRestaurantForm'
import Admin from '../adminComponents/Admin/Admin'

const AdminRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/*" element={true ? <CreateRestaurantForm/> : <Admin/>}/>
        </Routes>
    </div>
  )
}

export default AdminRoute