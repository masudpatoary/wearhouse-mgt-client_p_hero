import React from 'react';
import Button from 'react-bootstrap/Button';
import {  useNavigate } from 'react-router-dom';

const HomeInventory = (props) => {
    const navigate = useNavigate()
    const { id, img, name, quantity, price, supplier } = props


    const showInventoryDetail = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div style={{width: "300px"}} className=' border border-secondary  m-2 px-2 py-1 text-start'>
            <div className=' border py-1 px-2 d-flex  align-items-center'>
                <img src={img} alt="" className='img-fluid' />
            </div>
            <div className=' border py-1 px-2 my-3'>
            <p className='fs-5 fw-bold'>Name: {name}</p>
                <p><b>Price: $</b>{price}</p>
                <p><b>Quantity:</b> {quantity}</p>
                <p><b>Supplier:</b> {supplier}</p>
            </div>
            <div className=' d-flex  align-items-center'>
                <Button onClick={() => showInventoryDetail(id)}>Details</Button>
            </div>
        </div>
    )
};

export default HomeInventory;