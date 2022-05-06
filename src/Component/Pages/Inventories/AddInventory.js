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
    let newInventoryData =
    {
        name,
        imgUrl,
        supplierName,
        price,
        stock,
        description
    }
    // let newInventoryData = 
    // { 
    //     "name":name, 
    //     "imgUrl":imgUrl, 
    //     "supplierName":supplierName, 
    //     "price":price, 
    //     "stock":stock, 
    //     "description":description 
    // }


    const addToServer = () => {
        if (price === NaN || stock === NaN || price < 0 || stock < 0) {
            toast('please put correct price or stock')
        }
        else {
            toast('Inventory Successfully Added')
            const url = 'http://localhost:5000/product';
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newInventoryData)
            })
                .then(res => res.json())
                .then(result => {
                    console.log("result", result);
                })
        }
    }

    return (

        <Container className='d-flex justify-content-center'>
            <Row>
                <Col className='border m-2 p-3'>
                    <h2 className='border px-2 py-1'>Fillup The Form and add inventories</h2>
                    <form >
                        <div className="d-flex justify-content-between align-items-center ">
                            <label>Inventory Name:</label>
                            <input onChange={(e) => setName(e.target.value)} className='px-2 py-1 m-1 w-50 ' type="text" name="name" id="" required />
                        </div>
                        <div className="d-flex justify-content-between align-items-center  ">
                            <label>Image Url:</label>
                            <input onChange={(e) => setImgUrl(e.target.value)} className='px-2 py-1 m-1 w-50' type="text" name="" id="" required />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <label>Supplier Name:</label>
                            <input onChange={(e) => setSupplierName(e.target.value)} className='px-2 py-1 m-1 w-50' type="text" name="" id="" required />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <label>Price:</label>
                            <input onChange={async (e) => await setPricee(parseInt(e.target.value))} className='px-2 py-1 m-1 w-50' type="number" name="price" id="" required />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <label>Stock:</label>
                            <input onChange={async (e) => await setStock(parseInt(e.target.value))} className='px-2 py-1 m-1 w-50' type="number" name="stock" id="" required />
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <label>Description:</label>
                            <textarea onChange={(e) => setDescription(e.target.value)} className='px-2 py-1 m-1 w-50' type="text-field" name="" id="" />
                        </div>

                        <input onClick={addToServer} type="button" value="Add this Inventory" />
                        <br />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddInventory;