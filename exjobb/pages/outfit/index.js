import {useEffect, useState} from 'react'
import { getMediaById } from "db";
import { STORAGE_KEY } from "constants";
import Navbar from '../../src/components/Navbar'


function Outfit({ Component, pageProps }) {
  const [outfits, setOutfits] = useState([])

function removeItem(idx) {
  return () => {
    const list = [...outfits]
    list.splice(idx, 1)

    setOutfits(list)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  }
}

  useEffect(() => {
    const savedOutfitList = JSON.parse(localStorage.getItem(STORAGE_KEY))
    setOutfits(savedOutfitList)
  },[])
  
  return (
    <div>
    <Navbar />
    
      <h1>Here is your outfits</h1>

      {outfits.map((obj, i) => {
      
        const top = getMediaById(obj.top)
        const bottom = getMediaById(obj.bottom)
        const shoe = getMediaById(obj.shoe)
        return (
          <div key={i} style={{border: '2px dashed #2a324b', maxWidth: 300, margin: '15px auto'}}>
            
            <img src={top?.url} />
            <img src={bottom?.url} />
            <img src={shoe?.url} />
            <button 
            type="button"
            onClick={removeItem(i)}>delete</button>
          </div>
      )})}
    </div>
  )
}

export default Outfit
