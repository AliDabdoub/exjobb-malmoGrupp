import React from "react";
import { getMediaById } from 'db';
import { useRouter } from 'next/router';
import Navbar from '../../src/components/Navbar';
import styles from "styles/Garment.module.scss";

const CreatePage = (props) => {
    const { garment = {} } = props
    const router = useRouter()

    return (
        <div className={styles.garment}>
            <Navbar/>
            <div className={styles.garment__content}>
                <img src={garment.url} />
                <div className={styles.button__area}>
                    <button className={styles.button__closet} onClick={() => router.back()}>
                        Back to Closet             
                    </button>
                </div>
            </div>
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

