import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { mediaByTop, mediaByBottom, mediaByShoe } from "db";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import styles from "styles/Embla.module.scss";

const EmblaCarousel = ({ slides = [], onSelect: onSelectProp }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    if (onSelectProp) {
      onSelectProp(slides[embla.selectedScrollSnap()])
    }

    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, i) => (
            <div className={styles.embla__slide } key={i}>
              <div className={styles.embla__slide__inner }>
                <img
                  className={styles.embla__slide__img }
                  src={slide.url} 
                  alt="Picture not available"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;