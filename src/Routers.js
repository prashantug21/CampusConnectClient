import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import SellPage from './Pages/sellPage'
import HomePage from './Pages/homePage'
import BuyPage from './Pages/BuyPage'
import Dashboard from './Pages/dashboard'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage';
import AboutPage from './Pages/AboutPage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
  

function Routers({isLoggedIn}) {
    return (
        <Routes>  
            <Route path="/" element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            {isLoggedIn?<Route path='/sell' element={<SellPage/>}/>:<Route path='/sell' element={<LoginPage/>}/>}
            {isLoggedIn?<Route exact path='/buy' element={<BuyPage/>}/>:<Route path='/buy' element={<LoginPage/>}/>}
            {isLoggedIn?<Route path='/profile' element={<Dashboard/>}/>:<Route path='/profile' element={<LoginPage/>}/>}
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='*' element={<HomePage/>}/>
        </Routes>

    );
    }

export default Routers;