import React from "react";
import ReactDOM from "react-dom";
import EmblaCarousel from "./EmblaCarousel";


const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const App = () => (
  <main>
    <div>
    <EmblaCarousel slides={slides} />
    </div>
  </main>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); 

function create (){
    return(
        <div>
            <h1>create outfits page</h1>
        </div>
    )
}

export default create

