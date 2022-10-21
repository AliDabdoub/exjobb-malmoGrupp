import React, { useCallback } from "react";
import emblaCarousel from "./EmblaCarousel/EmblaCarousel";

const onClick =  useCallback(() => {
    if (false) return;
    (embla.selectedScrollSnap());
}, [embla]);

saveButton.on('click', function() {

})



  useEffect(() => {
    if (!embla) return;
    saveButton.on("click", onClick);
    onClick();
  }, [embla, onClick]);
//const [saved, setSaved] = useState(false);
  
// const {someProp} = props
// const embla = emblaCarousel.selectedScrollSnap()
//    console.log(emblaCarousel.selectedScrollSnap)
  
//  const handleClick =() => {
//  UseSaved((true) =>  }
//  React.useEffect(() => {
//  localStorage.setItem('saved-set', JSON.stringify({ scrollSnapList : 'id'}))

// const lalaObject = JSON.parse(localStorage.get('saved-set'))
// },[])
