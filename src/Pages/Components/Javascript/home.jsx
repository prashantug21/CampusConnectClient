import '../CSS/home.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Productcard from './productcard';
import React, { useEffect, useState } from 'react'


function Home() {

  return (
    <div id='home'>
      <div id='intro'>
        <p className='diSsplay-1 fs-1 pt-3 text-white' >Welcome to our website, your go-to destination for buying and selling used items! </p>
      </div>
      <div className='d-md-flex gap-2' id='details'>
        <div id="point1" className='d-md-flex-row justify-content-start align-items-center'>
          <p className='num'>1</p>
          <p id='detail1'>Our platform is designed to connect buyers and sellers of pre-owned goods in a simple and convenient way.</p></div>

        <div id="point2" className='d-md-flex-row justify-content-start align-items-center'>
          <p className='num'>2</p><p id='detail2'>At our website, we believe in the benefits of reusing and recycling, and we're committed to reducing waste and promoting sustainability. By buying used items, you're not only saving money but also helping to reduce your carbon footprint.
          </p></div>
        <div id="point3" className='d-md-flex-row justify-content-start align-items-center'>
          <p className='num'>3</p><p id='detail2'>We understand the importance of making the most out of your college experience, and that often involves purchasing items from fellow students, whether it's textbooks, furniture, electronics, or clothing. That's why we created Campus Connect - to make it easy for seniors to connect with juniors and sell their items within their own college community.
          </p></div>
      </div>
      <hr id='hr2' className='mt-2' />
    </div>
  );
}
export default Home
