
import React, { useState,useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../CSS/SellForm.css'
import axios from 'axios'
import Cookies from 'js-cookie'
const BASE_URL = process.env.REACT_APP_BASE_URL;

function SellForm() {
    const [product, setProduct] = useState({ name: '', price: '', description: '' })
    const [image, setImage] = useState()
    function uploadProduct(e) {
        e.preventDefault()
        // formData.append('image', image)
        axios.post(`${BASE_URL}/sell`, {name:product.name,price:product.price,description:product.description,image:image},{
            headers:{
                'Authorization': 'Bearer ' + Cookies.get('jwtToken')
            }
        })
            .then((res) => {
                window.location.reload();
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <div id='sellPageHeading'>
                Enter Product Details
            </div>
            <div className='SellForm'>
                <Form onSubmit={uploadProduct}>
                    <Form.Group className='my-2' controlId="formBasicProductName">
                        <Form.Label className='mb-0'>Product Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Product Name" autoComplete='off' value={product.name} onChange={(e) => { setProduct({ ...product, name: e.target.value }) }} required />
                    </Form.Group>
                    <Form.Group className='my-2' controlId='formBasicProductPrice'>
                        <Form.Label className='mb-0'>Product Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter Product Price" autoComplete='off' value={product.price} onChange={(e) => { setProduct({ ...product, price: e.target.value }) }} required />
                    </Form.Group>
                    <Form.Group className='my-2' controlId='formBasicProductDescription'>
                        <Form.Label className='mb-0'>Product Description</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter Product Description" autoComplete='off' value={product.description} onChange={(e) => { setProduct({ ...product, description: e.target.value }) }} maxLength={50} required />
                    </Form.Group>
                    <Form.Group className='my-2' controlId='formBasicProductImage'>
                        <Form.Label className='mb-0'>Product Image</Form.Label>
                        <Form.Control type="file" placeholder="Enter Product Image" autoComplete='off' onChange={async (e) => { const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        console.log(reader.result)
        setImage(reader.result);
    };
    reader.readAsDataURL(file);
 }} required />
                    </Form.Group>
                    <div className='d-flex justify-content-center'>
                        <Button variant="dark" type="submit" className='w-75 fs-1 py-1'>
                            Submit
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
    )
}

export default SellForm
