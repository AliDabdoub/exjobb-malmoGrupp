import React, { useEffect, useState } from "react";
import clothingId from "./[clothingId]" 
// import "../clothes/clothes.json"

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/closet')
    const data = await response.json()

    return {
        props: { closet: data }
    }
}

const Closet = ({ closet }) => {

    // const handleClick = event => {
    //     return(
            
        
    //     )
    // }

    return (
        <div>
            {closet.clothes.map(c => (
                <div key={closet.id}>
                    <img src={c.url}
                        onClick={handleClick}
                    />
                </div>
            ))}
        </div>
    )
}
export default Closet