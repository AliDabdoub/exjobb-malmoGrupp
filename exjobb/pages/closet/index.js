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

const parts = {
    All: '',
    Top: 'top',
    Bottom: 'bottom',
    Shoe: 'shoe'
}

const Closet = ({ closet }) => {
    const [clothing, setClothing] = useState('');
    return (
        <div className={styles.closet__container}>
            <Navbar />

            <div className={styles.under__navbar}>
                {Object.keys(parts).map((c, i) => (
                    <button 
                        className={`${styles.button} ${clothing === parts[c] ? styles.buttonActive : ''}`} 
                        key={i} 
                        onClick={()=>{setClothing(parts[c])}}
                    >{c}</button>
                ))}
            </div>

            <div className={styles.closet}>
                {closet.clothes.filter((f) => f.typ.includes(clothing)).map((c,i) => (
                    <div className={styles.closet__image} key={i}>
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