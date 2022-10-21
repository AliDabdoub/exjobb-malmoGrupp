import React, { useState } from "react";
import EmblaCarousel from "components/EmblaCarousel/EmblaCarousel";
import { mediaByTop, mediaByBottom, mediaByShoe } from "db";
import emblaCarouselReact from "embla-carousel-react";
import { STORAGE_KEY } from "constants";


const CreatePage = (props) => {
   const [data, setData] = useState({})
   
  const handleSelect = (type) => (obj) => {
    setData(prev => {
      const newState = {...prev}
      newState[type] = obj.id
      return newState
    })
  }

  const handleSave = () => {
    const savedOutfitList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

    savedOutfitList.push(data)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedOutfitList))
  }

  console.log('DATA', data)

  return (
    <main>
      <div>
        <EmblaCarousel slides={mediaByTop} onSelect={handleSelect('top')} />
        <EmblaCarousel slides={mediaByBottom} onSelect={handleSelect('bottom')} />
        <EmblaCarousel slides={mediaByShoe} onSelect={handleSelect('shoe')} />

        <button type="button" onClick={handleSave}>Save this outfit!</button>
      </div>
    </main>
  )
};

export async function getServerSideProps({ params }) {
  return {
    props: {
      someProp: 'lala'
    }
  }
}


export default CreatePage