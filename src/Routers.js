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
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path='/login' element={<LoginPage/>}/>
            {isLoggedIn?<Route exact path='/sell' element={<SellPage/>}/>:<Route exact path='/sell' element={<LoginPage/>}/>}
            {isLoggedIn?<Route exact path='/buy' element={<BuyPage/>}/>:<Route exact path='/buy' element={<LoginPage/>}/>}
            {isLoggedIn?<Route exact path='/profile' element={<Dashboard/>}/>:<Route exact path='/profile' element={<LoginPage/>}/>}
            <Route exact path='/home' element={<HomePage/>}/>
            <Route exact path='/signup' element={<SignUpPage/>}/>
            <Route exact path='/about' element={<AboutPage/>}/>
            <Route path='*' element={<HomePage/>}/>
        </Routes>

    );
    }

export default Routers;