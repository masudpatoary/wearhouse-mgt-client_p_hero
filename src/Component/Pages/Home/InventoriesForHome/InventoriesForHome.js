import React from 'react';
import UseInventory from '../../../../Hooks/UseInventory';
import Inventory from '../../Inventories/Inventory';

const InventoriesForHome = () => {
    const [inventories] = UseInventory()
    const result = inventories.slice(-6)
    console.log(result)
    return (
        <div className='m-2 p-3 border border-secondary'>
            <h3>These Inventories are running out of stock</h3>
            <div className=''>
                {
                    result.map(inventoryForHome => <Inventory
                        key={inventoryForHome._id}
                        id={inventoryForHome._id}
                        img={inventoryForHome.imgUrl}
                        name={inventoryForHome.name}
                        quantity={inventoryForHome.quantity}
                        price={inventoryForHome.price}
                        supplier={inventoryForHome.supplier}
                    ></Inventory>)
                }
            </div>
        </div>
    );
};
export default InventoriesForHome;