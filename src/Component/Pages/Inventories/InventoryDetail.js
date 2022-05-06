import React from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import useDetail from '../../../Hooks/useDetail';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [detail] = useDetail(inventoryId);

    return (
        <div className='w-sm-100 border border-secondary mx-2 px-2 py-1 '>
            <div className='py-1 px-2 mx-1'>
                <img src={detail.imgUrl} alt="" className='w-25' />
            </div>
            <div className='border py-1 px-2 mx-1'>
                <h3>{detail.name}</h3>
                <p>Price: ${detail.price}</p>
                <p>Quantity: {detail.quantity}</p>
                <p>Supplier Name: {detail.supplier}</p>
                <p>Description</p>
                <p>{detail.description}</p>
                <Button variant='primary' className='my-2'>Add Stock</Button><br />
                <Button variant='primary' className='my-2'>Delete</Button><br />
            </div>
        </div>
    )
};

export default InventoryDetail;