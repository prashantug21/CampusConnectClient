import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import '../CSS/profile.css'
import { FaRupeeSign } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Profile() {
    const [username1, setUsername1]=useState()
    const [email1, setEmail1]=useState()
    const [products, setProducts]=useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/dashboard`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + Cookies.get('jwtToken')
            }
          }).then((res) => {
            const data = res.data;
            if (data.username) {
              setUsername1(data.username)
              setEmail1(data.email)
              setProducts(data.products)
            } else {
              // window.location.href = '/'
            }
          }).catch((err) => {
            console.log(err)
            // window.location.href = '/'
          })
    }, [])
    async function MarkAsSold(itemid){
      axios.delete(`${BASE_URL}/deleteProduct/:${itemid}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + Cookies.get('jwtToken')
        },
    }
    ).then((res) => {
      const data = res.data;
      if (data.message=="Product deleted") {
        alert(data.message)
        window.location.href = '/profile'
      } else {
        alert(data.message)
        window.location.href = '/'
      }
    }).catch((err) => {
      alert(err)
      console.log(err)
      window.location.href='/'
    })
    }
  return (
    <div>
        <h1 className='display-1'>Profile</h1>
        <p className='h1'>Username: </p><p>{username1}</p>
        <p className='h1'>Email:</p><p> {email1}</p>
        <hr/>
        <h1 className='display-1'>Products</h1>
        <div className='product-grid'>
                {products.map(product => (
                    <Card className='product mb-2' key={product.id}>
                        <div className='imageDiv d-flex align-item-center'>
                            <Card.Img variant="top" src={product.image} alt={product.name} />
                        </div>
                        <Card.Body>
                            <Card.Title className='mb-2 d-flex-column'>
                                <div className='prodName display-5 w-100 p-2'>{product.name}</div>
                                <div className='cost d-inline-flex'><FaRupeeSign className='h3'/><span className='h3'>{product.price}</span></div>
                            </Card.Title>
                            <Card.Text>
                            <p className='w-100'>{product.description}</p>
                            </Card.Text>
                            <Button variant="danger" onClick={()=>{MarkAsSold(product._id)}}>Mark as Sold</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
    </div>
  )
}
