import React, { useState, useEffect } from 'react';
import '../CSS/Buy.css'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaRupeeSign } from 'react-icons/fa';
import Cookies from 'js-cookie'
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Buy() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get(`${BASE_URL}/buy`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleBuyProduct = (productId) => {
        console.log(`Buying product ${productId}`);
        // You can implement the buy functionality here
    };

    return (
        <div style={{minHeight:80+'vh',maxWidth:'1200px',margin:'0 auto'}}>
            <h1>Buy</h1>
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
                            <p className='productEmail fs-4'>Contact:  {product.email}</p>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Buy;
