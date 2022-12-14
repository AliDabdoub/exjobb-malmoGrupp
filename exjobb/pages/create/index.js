import React, { useState } from "react";
import EmblaCarousel from "components/EmblaCarousel/EmblaCarousel";
import { mediaByTop, mediaByBottom, mediaByShoe } from "db";
// import emblaCarouselReact from "embla-carousel-react";
import { STORAGE_KEY } from "constants";
import Navbar from '../../src/components/Navbar'
// import styles from "styles/Embla.module.scss"


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
  
    const initialText = 'Save this outfit';
    const [buttonText, setButtonText] = useState(initialText);
  
    function handleClick() {
      setButtonText('Saved!');
  
      setTimeout(() => {
        setButtonText(initialText);
      }, 3000);
    }

  return (
    <main>
      <div>
      <Navbar />
        <EmblaCarousel slides={mediaByTop} onSelect={handleSelect('top')} />
        <EmblaCarousel slides={mediaByBottom} onSelect={handleSelect('bottom')} />
        <EmblaCarousel slides={mediaByShoe} onSelect={handleSelect('shoe')} />
        <div className="save"><button type="button" className="saveButton" onClick={() => {
          handleSave();
          handleClick();
        }}>{buttonText}</button>
        </div>
      </div>
    </main>
  )
};

export default CreatePage