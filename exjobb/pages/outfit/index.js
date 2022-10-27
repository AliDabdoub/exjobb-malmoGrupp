import { useEffect, useState } from 'react'
import { getMediaById } from "db";
import { STORAGE_KEY } from "constants";
import styles from "../../src/styles/outfit.module.scss"
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
  }, [])

  return (
    <div >
      <Navbar />

      <h1 className={styles.div__outfits}>Saved outfits</h1>

      <div className={styles.outfits}>
        {outfits ? outfits.map((obj, i) => {
          const top = getMediaById(obj.top)
          const bottom = getMediaById(obj.bottom)
          const shoe = getMediaById(obj.shoe)
          return (
            <div className={styles.outfit} key={i}>
              <div className={styles.outfitParts} key={i} >
                <img src={top?.url} />
                <img src={bottom?.url} />
                <img src={shoe?.url} />
              </div>

              <button className={styles.deleteBtn} onClick={removeItem(i)}>Remove</button>
            </div>
          )
        }) : <div className={styles.div__outfits}>
          No outfits saved
        </div>}
      </div>

    </div>
  )
}

export default Outfit
