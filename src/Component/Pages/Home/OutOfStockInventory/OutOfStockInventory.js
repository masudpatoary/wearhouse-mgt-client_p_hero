import React from 'react';
import HomeInventory from '../Inventory/HomeInventory';
import UseInventory from './../../../../Hooks/UseInventory';

const OutOfStockInventory = () => {
    const [inventories] = UseInventory()
    const result = inventories.filter(item => (item.quantity <= 5))
    return (
        <div className='m-2 p-3 border border-secondary '>
            <h3>These Inventories are running out of stock</h3>
            <div className='d-flex flex-wrap justify-content-center align-content-center'>
                {
                    result.map(runOutInventory => <HomeInventory
                        key={runOutInventory._id}
                        id={runOutInventory._id}
                        img={runOutInventory.imgUrl}
                        name={runOutInventory.name}
                        quantity={runOutInventory.quantity}
                        price={runOutInventory.price}
                        supplier={runOutInventory.supplier}
                    ></HomeInventory>)
                }
            </div>
        </div>
    );
};

export default OutOfStockInventory;