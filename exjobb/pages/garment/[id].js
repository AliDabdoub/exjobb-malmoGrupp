import React from "react";
import { getMediaById } from 'db'

const CreatePage = (props) => {
    const { garment = {} } = props

    return (
        <div>
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

