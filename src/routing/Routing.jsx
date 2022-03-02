import React from 'react'
import Login from '../pages/auth/login/Login'
import Signup from '../pages/auth/signup/Signup'
import AddProduct from '../pages/product/AddProduct'
import UpdateProduct from '../pages/product/UpdateProduct'
import Header from '../components/header/Header'
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom'
import Home from '../pages/home/Home'
const Routing = () => {
  return (
    <Router>
    <Header />
    <div>
        <Routes>  
            <Route exact path="/" element={<Home/>} />
            <Route  path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/updateproduct" element={<UpdateProduct/>} />
        </Routes>
    </div>
</Router>  )
}

export default Routing