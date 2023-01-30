import React, { useEffect, useState } from 'react';

const UseInventory = () => {
    const [inventories, setInventories] =useState([]);

    useEffect(() => {
        const url ="https://core-inventory.onrender.com/product"
        fetch(url)
        .then(res=>res.json())
        .then(data=>setInventories(data))
      
    }, [])
    

    return [inventories, setInventories];
};

export default UseInventory;