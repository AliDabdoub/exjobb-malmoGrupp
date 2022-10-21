import React, { useState } from "react";
import EmblaCarousel from "components/EmblaCarousel/EmblaCarousel";
import { mediaByTop, mediaByBottom, mediaByShoe } from "db";
import emblaCarouselReact from "embla-carousel-react";

const CreatePage = (props) => {
 
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

