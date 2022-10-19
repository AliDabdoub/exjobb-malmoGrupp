import React from "react";
import EmblaCarousel from "components/EmblaCarousel/EmblaCarousel";
// import db from "db";


const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys())

const CreatePage = (props) => {
  // const {someProp} = props

  // React.useEffect(() => {
  //  localStorage.set('saved-set', JSON.stringify({ lala: 'bla' }))

  //   const lalaObject = JSON.parse(localStorage.get('saved-set'))
  // },[])

  return (
    <main>
      <div>
        <EmblaCarousel slides={slides} />
        <EmblaCarousel slides={slides} />
        <EmblaCarousel slides={slides} />
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

