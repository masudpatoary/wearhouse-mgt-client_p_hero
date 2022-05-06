import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import UseInventory from '../../../Hooks/UseInventory';
import Inventory from './Inventory';

const Inventories = () => {
    const [inventories, setInventories] = UseInventory();

    return (
        <div>
            <h1 className='tect-center fw-bold'>All Inventories</h1>
            <Link to='/addnewinventoryitem' className='text-end'><Button>Add New Item</Button></Link>
            <div className='w-100 p-md-5 p-sm-2 '>
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        id={inventory._id}
                        img={inventory.imgUrl}
                        name={inventory.name}
                        quantity={inventory.quantity}
                        price={inventory.price}
                        supplier={inventory.supplier}
                    ></Inventory>)
                }
            </div>
        </div>
    )
};

export default Inventories;