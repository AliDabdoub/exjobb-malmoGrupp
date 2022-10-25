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

