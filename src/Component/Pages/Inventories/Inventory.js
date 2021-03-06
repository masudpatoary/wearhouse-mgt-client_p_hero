import React from 'react';
import Button from 'react-bootstrap/Button';
import {  useNavigate } from 'react-router-dom';

const Inventory = (props) => {
    const navigate = useNavigate()
    const { id, img, name, quantity, price, supplier } = props


    const showInventoryDetail = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='col-12 d-md-flex border border-secondary my-2 px-2 py-1 text-start'>
            <div className='col-md-3 col-sm-12 border py-1 px-2 mx-1 d-flex  align-items-center'>
                <img src={img} alt="" className='w-50' />
            </div>
            <div className='col-md-2 col-sm-12 border py-1 px-2 mx-1 d-flex  align-items-center'>
                <p>Name: {name}</p>
            </div>
            <div className='col-md-1 col-sm-12 border py-1 px-2 mx-1 d-flex  align-items-center'>
                <p>Price: ${price}</p>
            </div>
            <div className='col-md-1 col-sm-12 border py-1 px-2 mx-1 d-flex  align-items-center'>
                <p>Quantity: {quantity}</p>
            </div>
            <div className='col-md-2 col-sm-12 border py-1 px-2 mx-1 d-flex  align-items-center'>
                <p>Supplier: {supplier}</p>
            </div>
            <div className='col-md-1 col-sm-12 py-1 px-2 mx-1 d-flex  align-items-center'>
                <Button onClick={() => showInventoryDetail(id)}>Details</Button>
            </div>
        </div>
    )
};

export default Inventory;