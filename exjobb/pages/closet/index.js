import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "styles/closet.module.scss";
// import clothingId from "./[clothingId]" 

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
        <div className={styles.closet__container}>
            <div className={styles.closet}>
                {closet.clothes.map(c => (
                    <div className={styles.closet__image} key={closet.id}>
                        <Link href={`/garment/${c.id}`}>
                            <img src={c.url} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Closet