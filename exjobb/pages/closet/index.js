import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "styles/closet.module.scss";
import Navbar from '../../src/components/Navbar'

export const getStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/closet')
    const data = await response.json()

    return {
        props: { closet: data }
    }
}

const Closet = ({ closet }) => {
    const [clothing, setClothing] = useState('');
    return (
        <div className={styles.closet__container}>
            <Navbar />
            <div className={styles.under__navbar}>
                <button className={`${styles.button} ${styles.all}`} onClick={()=>{setClothing('')}}>All </button>
                <button className={styles.button} onClick={()=>{setClothing('top')}}>Top</button>
                <button className={styles.button} onClick={()=>{setClothing('bottom')}}>Bottom</button>
                <button className={styles.button} onClick={()=>{setClothing('shoe')}}>Shoes</button>
            </div>
            <div className={styles.closet}>
                {closet.clothes.filter((f) => {return f.typ.includes(clothing)}).map(c => (
                    <div className={styles.closet__image} key={closet.id}>
                        <Link href={`/garment/${c.id}`}>
                            <img src={c.url} />
                        </Link>
                    </div>
                ))}
            </div>
            {/*
            <div className={styles.closet}>
                {closet.clothes.map(c => (
                    <div className={styles.closet__image} key={closet.id}>
                        <Link href={`/garment/${c.id}`}>
                            <img src={c.url} />
                        </Link>
                    </div>
                ))}
            </div>
                */}
        </div>
    )
}
export default Closet