import React from 'react';
import Button from 'react-bootstrap/Button';
import {  useNavigate } from 'react-router-dom';

const Inventory = (props) => {
    const navigate = useNavigate()
    const { id, img, name, quantity, price, supplier } = props


    const showInventoryDetail = (id) => {
        navigate(`/inventory/${id}`)
        console.log(id)
    }
    return (
        <div className='col-12 d-md-flex border border-secondary my-2 px-2 py-1 '>
            <div className='col-md-3 col-sm-12 border py-1 px-2 mx-1'>
                <img src={img} alt="" className='w-25' />
            </div>
            <div className='col-md-2 col-sm-12 border py-1 px-2 mx-1'>
                <p>{name}</p>
            </div>
            <div className='col-md-1 col-sm-12 border py-1 px-2 mx-1'>
                <p>{price}</p>
            </div>
            <div className='col-md-1 col-sm-12 border py-1 px-2 mx-1'>
                <p>{quantity}</p>
            </div>
            <div className='col-md-2 col-sm-12 border py-1 px-2 mx-1'>
                <p>{supplier}</p>
            </div>
            <div className='col-md-1 col-sm-12  py-1 px-2 mx-1'>
                <Button onClick={() => showInventoryDetail(id)}>Details</Button>
            </div>
        </div>
    )
};

export default Inventory;