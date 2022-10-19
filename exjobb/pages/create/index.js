import React from "react";
import EmblaCarousel from "components/EmblaCarousel/EmblaCarousel";
import { mediaByTop, mediaByBottom, mediaByShoe } from "db";

const CreatePage = (props) => {
  // const {someProp} = props

  // React.useEffect(() => {
  //  localStorage.set('saved-set', JSON.stringify({ lala: 'bla' }))

  //   const lalaObject = JSON.parse(localStorage.get('saved-set'))
  // },[])

  return (
    <main>
      <div>
        <EmblaCarousel slides={mediaByTop} />
        <EmblaCarousel slides={mediaByBottom} />
        <EmblaCarousel slides={mediaByShoe} />
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

