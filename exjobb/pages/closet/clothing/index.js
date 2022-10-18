import { useState, useEffect } from 'react';

const Clothing = ()=> {

    useEffect(() => {
        fetch('../../../clothes/clothes.json')
            .then((response) => response.json())
    }, []);
    

    return(
        <div>
            
        </div>
    )
}

export default Clothing