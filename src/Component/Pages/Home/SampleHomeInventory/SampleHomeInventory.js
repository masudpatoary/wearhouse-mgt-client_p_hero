import React from 'react';
import UseInventory from '../../../../Hooks/UseInventory';
import HomeInventory from '../Inventory/HomeInventory';

const SampleHomeInventory = () => {
    const [inventories] = UseInventory()
    const result = inventories.slice(0,6)
    return (
        <div className='m-2 p-3 border border-secondary'>
            <h3>Inventories</h3>
            <div className='d-flex flex-wrap justify-content-center align-content-center'>
                {
                    result.map(inventoryForHome => <HomeInventory
                        key={inventoryForHome._id}
                        id={inventoryForHome._id}
                        img={inventoryForHome.imgUrl}
                        name={inventoryForHome.name}
                        quantity={inventoryForHome.quantity}
                        price={inventoryForHome.price}
                        supplier={inventoryForHome.supplier}
                    ></HomeInventory>)
                }
            </div>
        </div>
    );
};

export default SampleHomeInventory;