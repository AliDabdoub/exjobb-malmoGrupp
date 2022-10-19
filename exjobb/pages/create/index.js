import React from "react";
import EmblaCarouselTop from "components/EmblaCarousel/EmblaCarousel1";
import EmblaCarouselBottom from "components/EmblaCarousel/EmblaCarousel2";
import EmblaCarouselShoe from "components/EmblaCarousel/EmblaCarousel3";
// import db from "db";


const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());


const CreatePage = (props) => {
  // const {someProp} = props

  // React.useEffect(() => {
  //  localStorage.set('saved-set', JSON.stringify({ lala: 'bla' }))

  //   const lalaObject = JSON.parse(localStorage.get('saved-set'))
  // },[])

  return (
    <main>
      <div>
        <EmblaCarouselTop slides={slides} />
        <EmblaCarouselBottom slides={slides} />
        <EmblaCarouselShoe slides={slides} />
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

