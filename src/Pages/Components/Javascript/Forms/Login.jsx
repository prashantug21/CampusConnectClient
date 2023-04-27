import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { ImCross } from 'react-icons/im'
import { BsPersonCircle } from 'react-icons/bs'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';
const BASE_URL = process.env.REACT_APP_BASE_URL;


function Login({ loginShow, toggleLogin}) {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState(''); 
  const [showLogin, setShowLogin] = useState(false);
  const emailreg=/^[A-Za-z0-9._%+-]+@nitp\.ac\.in$/

  async function SendOTP(e) {
    e.preventDefault();
    
    if(!emailreg.test(email)){
       document.getElementById("loginMessage").innerText='Invalid email ID';
       return
    }
    setShowLogin(true);
    const response = await fetch(`${BASE_URL}/sendOTP`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      })
    })
    const data = await response.json()
    document.getElementById("loginMessage").innerText=data.message;
  }
  const navigate= useNavigate()

  async function Login(e) {
    e.preventDefault();
    console.log(email)
      const res=await fetch(`${BASE_URL}/login`, {
        method:'POST',
        credentials:'include',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
        email,
        otp})
      })
      const data=await res.json()
      document.getElementById('loginMessage').innerHTML=data.message
      if(res.status===201){
//         window.location.href='/'
      }
  }


  return (
    <div centered>
        <div id='loginForm' className='p-5 my-5 bg-dark text-white'>
        <BsPersonCircle className='d-block mt-5' id='person' />
      <Form onSubmit={SendOTP}>
        <Form.Group className="mb-1 pt-5 pb-3 bg-dark text-white" controlId="loginEmail">
          <Form.Label className='fs-3'>NIT Patna Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" className='py-2' autoComplete='off' value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
        </Form.Group>
        <div id="loginMessage" className='h3'></div>
        <Button type='submit' variant='primary' className='fs-3 my-2'>Send Otp</Button>
      </Form>
      {showLogin && (
        <Form onSubmit={Login}>
          <Form.Group className="mb-3 bg-dark text-white" controlId="loginOtp">
            <Form.Label className='fs-3 my-0'>OTP</Form.Label>
            <Form.Control type="number" placeholder="OTP" autoComplete="off" className='py-2' value={otp} onChange={(e) => setOTP(e.target.value)} pattern='/^\S/' required min='1000' max='9999' />
          </Form.Group>
          <Button variant="primary" type="submit" id="loginSubmit" className='fs-3'>
            Login
          </Button>
        </Form>
      )}
      </div>
    </div>

  );
}


export default Login;
