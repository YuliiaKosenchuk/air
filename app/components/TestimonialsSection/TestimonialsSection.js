"use client";
import * as motion from "motion/react-client";
import styles from "./TestimonialsSection.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { testimonials } from "../../../data/testimonials";
import Autoplay from "embla-carousel-autoplay";
import { CARD_CONTAINER, FADE_IN_VIEW } from "../../../constants/animation";
import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  ]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div className={styles.header} {...FADE_IN_VIEW}>
          <span className={styles.subTitle}>TESTIMONIALS</span>
          <h2 className={styles.title}>
            What <br /> people say
          </h2>
        </motion.div>
        <motion.div
          className={styles.emblaWrapper}
          variants={CARD_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className={styles.embla} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {testimonials.map((item) => (
                <div className={styles.emblaSlide} key={item.id}>
                  <TestimonialCard data={item} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
