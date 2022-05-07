import React from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import useDetail from '../../../Hooks/useDetail';
import UseInventory from '../../../Hooks/UseInventory';
import { toast } from 'react-toastify';


const InventoryDetail = () => {
    const navigate = useNavigate()
    const { inventoryId } = useParams();
    const [detail] = useDetail(inventoryId);
    const [inventories, setInventories] = UseInventory();

    const handleDelete = async id => {
        console.log(id)
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            console.log(url)
            await fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(service => service._id !== id);
                    setInventories(remaining);
                })
        }
        navigate('/inventories');
        toast(`successfully deleted ${detail.name}`)
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
                        <p>Price: ${detail.price}</p>
                        <p>Quantity: {detail.quantity}</p>
                        <p>Supplier Name: {detail.supplier}</p>
                        <h3>Description</h3>
                        <p>{detail.description}</p>
                        <Button variant='primary' className='my-2'>Update Stock</Button><br />

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
            {/* 
            <div className='py-1 px-2 mx-1 border my-2'>

            </div>
            <div className='border py-1 px-2 mx-1 text-start'>
                <br />
            </div> */}
        </Container>
    )
};

export default InventoryDetail;