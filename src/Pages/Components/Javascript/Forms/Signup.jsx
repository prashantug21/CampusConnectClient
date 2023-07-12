import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { ImCross } from 'react-icons/im'
import { BsPersonCircle } from 'react-icons/bs'
import axios from 'axios'
import Cookies from 'js-cookie';
const BASE_URL = process.env.REACT_APP_BASE_URL;




export default function SignUp() {

  const [username, setUsername] = useState('');
  const [otp, setOTP] = useState('');
  const [email, setEmail] = useState('');
  const [showSignUpSubmit, setshowSignUpSubmit] = useState(false);
  const emailreg=/^[A-Za-z0-9._%+-]+@nitp\.ac\.in$/


  async function SendOTP(e) {
    e.preventDefault();
    if(!emailreg.test(email)){
      return document.getElementById('signUpMessage').innerText='Invalid email ID'
    }
    setshowSignUpSubmit(true);
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
    return document.getElementById('signUpMessage').innerText=data.message;
  }

  async function signUp(e) {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/SignUp`, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        otp
      })
    })
    const data=await response.json();
    Cookies.set('jwtToken', data.jwtToken)
    document.getElementById('signUpMessage').innerHTML=data.message;
    if(response.status==201){
      window.location.href='/'
    }
  }


  return (
    <div centered style={{minHeight:80+'vh'}}>
    
        <div id='signUpForm' className='p-5 my-5 bg-dark text-white'
        >
          <BsPersonCircle className='d-block my-5' id='person' />
          <Form onSubmit={SendOTP}>
            <Form.Group className="mb-1 pb-3 bg-dark text-white" controlId="signUpEmail">
              <Form.Label className='fs-3 my-0'>NIT Patna Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className='py-2' value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" required />
            </Form.Group>

            <Form.Group className="mb-1 pb-3 bg-dark text-white" controlId="signUpText">
              <Form.Label className='fs-3 my-0'>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" autoComplete="off" className='py-2' value={username} onChange={(e) => setUsername(e.target.value)} required />
            </Form.Group>
            <div id='signUpMessage'></div>
            <Button variant="primary" type='submit' id="signUpSendOTP" className='fs-3 my-2'>
              Send OTP
            </Button>
          </Form>
          {showSignUpSubmit && (
            <Form onSubmit={signUp}>
              <Form.Group className="mb-3 bg-dark text-white" controlId="signUpOTP">
                <Form.Label className='fs-3 my-0'>OTP</Form.Label>
                <Form.Control type="number" placeholder="OTP"  autoComplete="off" className='py-2' value={otp} onChange={(e) => setOTP(e.target.value)} pattern='/^\S/' required min='1000' max='9999' />
              </Form.Group>
              
              <Button variant="primary" type="submit" id="signUpSubmit" className='fs-3 mt-4'>
                Sign Up
              </Button>
            </Form>
          )}
        </div>

    </div>
  )
}
