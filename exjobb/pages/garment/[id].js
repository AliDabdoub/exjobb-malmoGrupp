import React from "react";
import { getMediaById } from 'db'
import Navbar from '../../src/components/Navbar'
import styles from "styles/Garment.module.scss";

const CreatePage = (props) => {
    const { garment = {} } = props

    return (
        <div className={styles.garment}>
            <Navbar/>
            <img src={garment.url} />
        </div>
    )
};

export async function getServerSideProps({ params }) {
    const id = params.id
    const garment = getMediaById(id)

    if (!id || !garment) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            garment
        }
    }
}


export default CreatePage

