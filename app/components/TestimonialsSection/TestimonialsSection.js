"use client";
import * as motion from "motion/react-client";
import styles from "./TestimonialsSection.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { testimonials } from "../../../data/testimonials";
import Autoplay from "embla-carousel-autoplay";
import { CARD_CONTAINER, FADE_IN_VIEW } from "../../../constants/animation";

export default function TestimonialsSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: true })
  ]);

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div className={styles.header} {...FADE_IN_VIEW}>
          <span className={styles.subTitle}>TESTIMONIALS</span>
          <h2 className={styles.title}>What <br></br>people say</h2>
        </motion.div>

        <div className={styles.embla} ref={emblaRef}>
          <motion.div 
            className={styles.emblaContainer}
            variants={CARD_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {testimonials.map((item) => (
              <div className={styles.emblaSlide} key={item.id}>
                <TestimonialCard data={item} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}