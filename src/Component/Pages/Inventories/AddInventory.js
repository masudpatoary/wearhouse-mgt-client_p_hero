import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const AddInventory = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        console.log(data);
        console.log(register);
        await fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast('New inventory Successfully added')
        reset()
    };


    return (

        <Container className='d-flex justify-content-center'>
            <Row>
                <Col className='border m-2 p-3'>
                    <h2 className='border px-2 py-1'>Fillup The Form and add inventories</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='m-1 px-3' {...register("name")} placeholder='name' reset required /><br />
                        <input className='m-1 px-3' {...register("imgUrl")} placeholder='Give Image Url' required /><br />
                        <input className='m-1 px-3' {...register("supplier")} placeholder='Supplier Name' required /><br />
                        <input className='m-1 px-3' type="number" {...register("price")} placeholder='Price' required /><br />
                        <input className='m-1 px-3' type="number" {...register("quantity")} placeholder='Stock in Quantity' required /><br />
                        <input className='m-1 px-3' {...register("description")} placeholder='Description' required /><br />
                        <input className='m-1 px-3' type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddInventory;