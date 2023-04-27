import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../CSS/Header.css'
import Button from 'react-bootstrap/Button'
import { NavLink} from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import {BsPersonCircle} from 'react-icons/bs'
const BASE_URL = process.env.REACT_APP_BASE_URL;



function Header() {

  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  async function Logout() {
    document.cookie = "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false)
    setUser(null);
    window.location.href='/'
  }


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
          setUser(data.username)
        } else {
          setIsLoggedIn(false)
          setUser(null)
        }
      })
  }, [])

  return (
    <div>
      <Navbar bg="dark" expand="md" variant="dark" sticky="top" display="block">
        <Container fluid>
          <Navbar.Brand><NavLink to="/"><img src="./image/CC.png" id='logo' alt="logo" /></NavLink></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between p-0'>
            <Nav id="navbar">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/buy">Buy</NavLink>
              <NavLink to="/sell">Sell</NavLink>
              <NavLink to="/about">About</NavLink>
            </Nav>
            <hr id='hr1' />
            <Nav id="enter">
              {isLoggedIn && <span className='d-flex'>
                <button id='profileName' className='d-flex mx-2 p-1'>
                <BsPersonCircle className='d-block my-auto h3'/>
                <NavLink to="/profile" id='headerUsername' className="py-0">{user}</NavLink></button>
                <Button id="logoutButton" variant="outline-primary" onClick={Logout} >Logout</Button>
              </span>}
              {!isLoggedIn &&
                <div>
                  <NavLink to='/login'><Button id="loginButton" variant="outline-primary">Login</Button></NavLink>
                  
                  <NavLink to='/signup'><Button id="signupButton" variant="primary" >Sign Up</Button>{' '}</NavLink>
                </div>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;