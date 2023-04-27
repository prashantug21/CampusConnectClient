import '../CSS/Footer.css'
import { AiOutlineCopyright } from 'react-icons/ai';
import React from 'react'

export default function Footer() {
  return (
    <div>
      <div id='footer' className='mb-0 px-2 py-2 h5 d-flex justify-content-between'>
      <p>
      <AiOutlineCopyright />2023 Campus Connect. All rights reserved.
      </p>
      <a href="#" id='contact' className='text-dark'>Contant us</a>
      </div>
    </div>
  )
}
