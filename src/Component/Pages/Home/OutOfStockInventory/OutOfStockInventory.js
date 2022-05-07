import React from 'react';
import Inventory from '../../Inventories/Inventory';
import UseInventory from './../../../../Hooks/UseInventory';

const OutOfStockInventory = () => {
    const [inventories] = UseInventory()
    const result = inventories.filter(item => (item.quantity <= 5))
    console.log(result)
    return (
        <div className='m-2 p-3 border border-secondary'>
            <h3>These Inventories are running out of stock</h3>
            <div className=''>
                {
                    result.map(runOutInventory => <Inventory
                        key={runOutInventory._id}
                        id={runOutInventory._id}
                        img={runOutInventory.imgUrl}
                        name={runOutInventory.name}
                        quantity={runOutInventory.quantity}
                        price={runOutInventory.price}
                        supplier={runOutInventory.supplier}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};

export default OutOfStockInventory;