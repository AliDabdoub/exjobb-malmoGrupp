import React from "react";
import EmblaCarousel from "components/EmblaCarousel/EmblaCarousel";
// import db from "db";

// let demo = React.createElement( 
//     "h1", { style: { color: "green" } }, "Welcome to GeeksforGeeks"
// )



function create (){
    return(
        <div>
            <h1>create outfits page</h1>
        </div>
    )
}

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const CreatePage = () => (
  <main>
    <div>
      <EmblaCarousel slides={slides} />
    </div>
  </main>
);


export default CreatePage

