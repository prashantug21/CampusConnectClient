
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Pages/Components/Javascript/Header';
import Footer from './Pages/Components/Javascript/Footer';
import React, { useEffect,useState } from 'react';
import Routers from './Routers';
import axios from 'axios';
import Cookies from 'js-cookie';
const BASE_URL = process.env.REACT_APP_BASE_URL;


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    axios.get(`${BASE_URL}/home`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Cookies.get('jwtToken')
      }
    })
      .then((res) => {
        const data = res.data;
        if (data.username) {
          setIsLoggedIn(true)
      }}).catch((err) => {
        setIsLoggedIn(false)
        console.log(err)
      })
  }, [])
  return (
    <div className='App'>
      <Header  />
      <Routers isLoggedIn={isLoggedIn}/>
      <Footer/>
    </div>
  );
}

export default App;
