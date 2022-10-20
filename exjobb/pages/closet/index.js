import React, { useEffect, useState } from "react";
// import "../clothes/clothes.json"

export const getStaticProps = async () => {
        const response = await fetch ('http://localhost:3000/api/closet')
        const data = await response.json()

        return{
            props: { closet: data }
        }
} 

const Closet = ({ closet }) => {
    return(
        <div>
            {closet.clothes.map(c =>(
                <div key={closet.id}>
                    <img src={c.url}/>
                </div>
            ))}
        </div>
    )
}
export default Closet


/*const Clothing = ({ cloth = {} })=> {
    const router = useRouter()
    const clothingId = router.query.clothingId
  
    return (
      <div>
        <h1>{clothingId}</h1>
  
        <img src={cloth.url} />
      </div>
    )
  } 
  
  export default Clothing
  
  
  export async function getServerSideProps({ params }) {
    const { clothingId: id } = params
  
    const raw = await fetch(`http://localhost:3000/api/clothes/${id}`)
  
    const res = await raw.json()
  
    return {
      props: {
        // id: id,
        // clothes : res, 
        cloth : res, 
      
      }, 
    }
  }
  */