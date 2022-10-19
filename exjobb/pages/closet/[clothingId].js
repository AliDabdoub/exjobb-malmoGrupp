import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'

// const Clothing = ({props})=> {
//     const { id } = props

//     return(
//         <div>
//             <img
//               src={``}
//               />
//         </div>
//     )
// }


// const Clothing = ()=> {
//   const router = useRouter()
//   const clothingId = router.query.clothingId.id
//   return (
//     <div>
//       <img src={`http://localhost:8000/clothes/${clothingId}`}/>
//     </div>
    
//     )
//   } 

const Clothing = ({ cloth = {} })=> {
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
  
  if (!id) {
    return {
      props: {
        cloth: {}
      }
    }
  }

  const raw = await fetch(`http://localhost:3000/api/clothes/${id}`)

  if (!raw.ok)  {
    return {
      props: {
        cloth: {}
      }
    }
  }

  const res = await raw.json()

  return {
    props: {
      // id: id,
      // clothes : res, 
      cloth : res, 
    
    }, 
  }
}


//http://localhost:3000/closet/
//http://localhost:3000/closet/2
//http://localhost:3000/outfit/
//http://localhost:3000/create/
//http://localhost:3000/
  