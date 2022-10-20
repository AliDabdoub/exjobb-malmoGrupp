import React, { useState } from "react";
import EmblaCarousel from "components/EmblaCarousel/EmblaCarousel";
import { mediaByTop, mediaByBottom, mediaByShoe } from "db";
import emblaCarouselReact from "embla-carousel-react";

const CreatePage = (props) => {
  // const [saved, UseSaved] = useState(false)
  
  // // const {someProp} = props
  const embla = emblaCarouselReact.selectedScrollSnap()
    console.log(emblaCarouselReact.selectedScrollSnap)
  
  // const handleClick =() => {
  //   UseSaved((true) => 
  // }
  // React.useEffect(() => {
  //  localStorage.setItem('saved-set', JSON.stringify({ scrollSnaplist : 'id'}))

  //   // const lalaObject = JSON.parse(localStorage.get('saved-set'))
  // },[])

  return (
    <main>
      <div>
        <EmblaCarousel slides={mediaByTop} />
        <EmblaCarousel slides={mediaByBottom} />
        <EmblaCarousel slides={mediaByShoe} />
        <button type="button">Save this outfit!</button>
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

