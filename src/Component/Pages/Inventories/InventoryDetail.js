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
    const [inputQty, setInputQty] = useState()
    const navigate = useNavigate()
    const [inventories, setInventories] = UseInventory();

    const handleDelete = async id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://core-inventory.onrender.com/product/${id}`;
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

    // const stockQty = async ()=>{
    //     await setInputQty(detail.quantity)
    //     console.log(inputQty)
    // }
    // stockQty()

    const handleUpdateQty = async () => {
        console.log(inputQty, 'inputQty')
        const url = `https://core-inventory.onrender.com/product/${inventoryId}`;
        await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity: inputQty })
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data)
                toast(`Inventory Stock Updated`)
            })

    }

    const handleDelivery = async ()=>{
        let qty = parseFloat(detail.quantity)
        let newQty =qty-1;
        await setInputQty(newQty)
        console.log(qty, newQty)
        await handleUpdateQty()
    }

    return (
        <Container className=' d-flex justify-content-center'>
            <Row className='border border-secondary m-2 px-2 py-1 mx-auto'>
                <h1>Details of <q>{detail.name}</q></h1>
                <Row>
                    <Col sm={12} md={6} >
                        <img src={detail.imgUrl} alt="" className='img-fluid' />
                    </Col>
                    <Col sm={12} md={6} >
                        <p>Price: ${parseFloat(detail.price)}</p>
                        <p>Quantity: {detail.quantity}</p>
                        <p>Supplier Name: {detail.supplier}</p>
                        <h3>Description</h3>
                        <p>{detail.description}</p>
                        <form

                            action="" className='d-flex align-items-center justify-content-center'>
                            <input onBlur={async e => {
                                const inputValueInNumber = parseFloat(e.target.value)
                                if (inputValueInNumber < 0 || NaN) {
                                    // console.log(`Input a Valid Number`, inputValueInNumber)
                                    toast(`Input a Valid Number`)
                                }
                                else {
                                    await setInputQty(inputValueInNumber)
                                }
                            }}
                                type="number" className='py-1' placeholder='Input stock number' />
                            <Button onClick={handleUpdateQty} className='my-2 btn btn-primary ms-3' >Update Stock</Button>
                        </form>

                        <Row className='mt-3'>
                            <Col>
                                <Button
                                    onClick={() => handleDelete(inventoryId)}
                                    variant='primary' className='my-2'>
                                    Delete This Inventory
                                </Button>
                                <Button onClick={handleDelivery} className='ms-4'>Delivered</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Row>
        </Container>
    )
};

export default InventoryDetail;