import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddInventory = () => {
    const [name, setName] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [supplierName, setSupplierName] = useState('')
    const [price, setPricee] = useState('')
    const [stock, setStock] = useState('')
    const [description, setDescription] = useState('')

    

    const addToServer =()=>{
        console.log(name, imgUrl, supplierName, typeof(price), price, typeof(stock), stock, description);
        if (price === NaN || stock === NaN || price < 0 || stock < 0) {
            toast('please put acorrect number')
        }

    }

    return (

        <Container className='d-flex justify-content-center'>
            <Row>
                <Col className='border m-2 p-3'>
                    <form action="" >
                        <h2 className='border px-2 py-1'>Fillup The Form and add inventories</h2>
                        <form action="">
                            <div className="d-flex justify-content-between align-items-center ">
                                <label>Inventory Name:</label>
                                <input onChange={(e) => setName(e.target.value)} className='px-2 py-1 m-1 w-50 ' type="text" name="name" id="" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center  ">
                                <label>Image Url:</label>
                                <input  onChange={(e) => setImgUrl(e.target.value)} className='px-2 py-1 m-1 w-50' type="text" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <label>Supplier Name:</label>
                                <input  onChange={(e) => setSupplierName(e.target.value)} className='px-2 py-1 m-1 w-50' type="text" name="" id="" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <label>Price:</label>
                                <input  onChange={async(e) => await setPricee(parseInt(e.target.value))} className='px-2 py-1 m-1 w-50' type="number" name="price" id="" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <label>Stock:</label>
                                <input  onChange={async(e) => await setStock(parseInt(e.target.value))} className='px-2 py-1 m-1 w-50' type="number" name="stock" id="" />
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <label>Description:</label>
                                <input  onChange={(e) => setDescription(e.target.value)} className='px-2 py-1 m-1 w-50' type="text-field" name="" id="" />
                            </div>

                            <input onClick={addToServer}  type="button" value="Add this Inventory" className='btn btn-outline-primary my-2 px-5' />
                            <br />
                        </form>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddInventory;