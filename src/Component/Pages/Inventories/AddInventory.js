import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AddInventory = () => {
    return (
        
        <Container className='d-flex justify-content-center'>
            <Row>
                <Col className='border m-2 p-3'>
                    <form action="">
                        <h2 className='border px-2 py-1'>Fillup The Form and add inventories</h2>
                        <form action="">
                            <div className="d-flex justify-content-between align-items-center ">
                                <label>Inventory Name:</label>
                                <input className='px-2 py-1 m-1 w-50 ' type="text" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center  ">
                                <label>Image Url:</label>
                                <input className='px-2 py-1 m-1 w-50' type="text" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <label>Supplier Name:</label>
                                <input className='px-2 py-1 m-1 w-50' type="text" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <label>Price:</label>
                                <input className='px-2 py-1 m-1 w-50' type="text" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <label>Stock:</label>
                                <input className='px-2 py-1 m-1 w-50' type="text" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <label>Description:</label>
                                <input className='px-2 py-1 m-1 w-50' type="text-field" name="" id="" />
                            </div>

                            <input type="button" value="Add this Inventory" className='btn btn-outline-primary my-2 px-5' />
                            <br />
                        </form>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddInventory;