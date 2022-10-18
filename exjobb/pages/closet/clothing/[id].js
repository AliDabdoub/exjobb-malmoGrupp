import { useState, useEffect } from 'react';

const Clothing = (props)=> {
    const { id } = props

    return(
        <div>
            <h1>{id}</h1>
            <img src='/jpg-clothes/bottom1.jpg'></img>
        </div>
    )
}

export default Clothing

//http://localhost:3000/closet/
//http://localhost:3000/closet/clothing/2
//http://localhost:3000/outfit/
//http://localhost:3000/create/
//http://localhost:3000/

export async function getServerSideProps({ params }) {
    const { id } = params

    // const raw = await fetch(`https://someApi.com/endpoint/${id}`)
    // const res = await raw.json()

    return {
      props: {
        id: id,
        // data : res,
      }, 
    }
  }
  