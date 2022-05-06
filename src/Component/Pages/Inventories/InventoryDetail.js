import React from 'react';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useDetail from '../../../Hooks/useDetail';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [detail] = useDetail(inventoryId);

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
                        <Button variant='primary' className='my-2'>Delete This Inventory</Button>
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