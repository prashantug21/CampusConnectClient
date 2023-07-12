import '../CSS/home.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Productcard from './productcard';
import React, { useEffect, useState } from 'react'


function Home() {

  return (
    <div id='home'>
      <div id='intro'>
        <p className='display-1 pt-3 text-white' >Welcome to our website, your go-to destination for buying and selling used items! </p>
      </div>
      <div className='container' id='details'>
        <div className="row">
          <div id="point1" className='col-md'>
            <p className='num'>1</p>
            <p id='detail1'>Our platform is designed to connect buyers and sellers of pre-owned goods in a simple and convenient way.
            </p>
          </div>

          <div id="point2" className='d-md-flex-row col-md justify-content-start align-items-center'>
            <p className='num'>2</p><p id='detail2'>At our website, we believe in the benefits of reusing and recycling, and we're committed to reducing waste and promoting sustainability.
            </p></div>
          <div id="point3" className='d-md-flex-row col-md justify-content-start align-items-center'>
            <p className='num'>3</p><p id='detail2'>By buying used items, you're not only saving money but also helping to reduce your carbon footprint.
            </p></div>
        </div>
        <div className="row">
          <div id="point4" className='d-md-flex-row col-md justify-content-start align-items-center'>
            <p className='num'>4</p><p id='detail2'>We understand the importance of making the most out of your college experience, and that often involves purchasing items from fellow students.
            </p></div>
          <div id="point5" className='d-md-flex-row col-md justify-content-start align-items-center'>
            <p className='num'>5</p><p id='detail2'>That's why we created Campus Connect - to make it easy for seniors to connect with juniors and sell their items within their own college community.
            </p></div>
        </div>
      </div>
      <hr id='hr2' className='mt-2' />
    </div>
  );
}
export default Home
