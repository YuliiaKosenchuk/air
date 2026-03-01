"use client";
import useEmblaCarousel from "embla-carousel-react";
import * as motion from "motion/react-client";
import Autoplay from "embla-carousel-autoplay";
import styles from "./HeroSlider.module.scss";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence } from "motion/react";

export default function HeroSlider({ slides }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className={styles.embla}>
      {/* slider */}
      <div className={styles.emblaViewport} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {slides.map((slide) => (
            <div className={styles.emblaSlide} key={slide.id}>
              <div
                className={styles.imageCard}
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* static overlay */}
      <div className={styles.staticOverlay}>
        <div className={styles.controls}>
          <div className={styles.arrows}>
            <button onClick={scrollPrev} className={styles.arrowBtn}>
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button onClick={scrollNext} className={styles.arrowBtn}>
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>

          <div className={styles.info}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <span className={styles.title}>{slides[selectedIndex].title}</span>
                <p className={styles.infoText}>{slides[selectedIndex].text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}