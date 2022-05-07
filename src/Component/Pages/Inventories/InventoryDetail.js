import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row, Toast } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import useDetail from '../../../Hooks/useDetail';
import UseInventory from '../../../Hooks/UseInventory';
import { toast } from 'react-toastify';


const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [detail] = useDetail(inventoryId);
    
    const navigate = useNavigate()
    const [inventories, setInventories] = UseInventory();
    // console.log(detail)
   
    
    const handleDelete = async id => {

        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            console.log(url)
            await fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = inventories.filter(service => service._id !== id);
                    setInventories(remaining);
                })
            toast(`successfully deleted ${detail.name}`)
        }
        navigate('/inventories');

    }
    let [updatedQty, setUpdatedQty] = useState(detail.quantity)
    console.log( detail.quantity)
    const handleUpdateQty = async() => {
        let oldQty = parseInt(detail.quantity)

        setUpdatedQty(++oldQty)
        console.log(typeof (updatedQty), updatedQty)
        console.log(typeof (oldQty), oldQty)
        const url = `http://localhost:5000/product/${inventoryId}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQty)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast(`user added successfully ${data}`)
            })
    }

    return (
        <Container className=' d-flex justify-content-center'>
            <Row className='border border-secondary m-2 px-2 py-1 mx-auto'>
                <h1>{detail.name}</h1>
                <Row>
                    <Col sm={12} md={6} >
                        <img src={detail.imgUrl} alt="" className='img-fluid' />
                    </Col>
                    <Col sm={12} md={6} >
                        <p>Price: ${parseFloat(detail.price)}</p>
                        <p>Quantity: {detail.quantity}</p>
                        <p>Quantity: {updatedQty}</p>
                        <p>Supplier Name: {detail.supplier}</p>
                        <h3>Description</h3>
                        <p>{detail.description}</p>
                        <form action="" className='d-flex align-items-center justify-content-center'>
                            <input type="number" className='py-1' placeholder='Input stock number' />
                            <input  className='my-2 btn btn-primary ms-3' type="submit" value='Add Stock' />
                        </form>
                        <Button onClick={handleUpdateQty}> add</Button>
                        <Button
                            onClick={() => handleDelete(inventoryId)}
                            variant='primary' className='my-2'>
                            Delete This Inventory
                        </Button>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Row>
        </Container>
    )
};

export default InventoryDetail;