import React from "react";
import EmblaCarousel from "components/EmblaCarousel/EmblaCarousel";
// import db from "db";


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

