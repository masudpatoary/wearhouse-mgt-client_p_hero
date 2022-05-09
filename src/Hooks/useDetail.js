import  { useEffect, useState } from 'react';

const useDetail = inventoryId => {
    const [detail, setDetail] =useState({});

    useEffect( () => {
        const url =`https://pure-fjord-01730.herokuapp.com/product/${inventoryId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetail(data))
      
    }, [inventoryId, detail])
    

    return [detail, setDetail];
};

export default useDetail;