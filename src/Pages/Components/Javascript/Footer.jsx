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
      <div className=''>
      <a href="https://github.com/prashantug21" target='_blank' id='contact' className='text-dark'>Developer Profile</a>
      </div>
      </div>
    </div>
  )
}
