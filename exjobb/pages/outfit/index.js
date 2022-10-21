import {useEffect, useState} from 'react'
import { getMediaById } from "db";
import { STORAGE_KEY } from "constants";

function Outfit({ Component, pageProps }) {
  const [outfits, setOutfits] = useState([])

  useEffect(() => {
    const savedOutfitList = JSON.parse(localStorage.getItem(STORAGE_KEY))
    setOutfits(savedOutfitList)
  },[])

  return (
    <div>
      <h1>Outfit page</h1>

      {outfits.map((obj, i) => {
        const top = getMediaById(obj.top)
        const bottom = getMediaById(obj.bottom)
        const shoe = getMediaById(obj.shoe)
        return (
          <div key={i} style={{border: '1px dashed lime', maxWidth: 300, margin: '15px auto'}}>
            <img src={top?.url} />
            <img src={bottom?.url} />
            <img src={shoe?.url} />
          </div>
      )})}
    </div>
  )
}

export default Outfit
