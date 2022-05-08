import  { useEffect, useState } from 'react';

const useDetail = inventoryId => {
    const [detail, setDetail] =useState({});

    useEffect( () => {
        const url =`http://localhost:5000/product/${inventoryId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetail(data))
      
    }, [inventoryId, detail])
    

    return [detail, setDetail];
};

export default useDetail;