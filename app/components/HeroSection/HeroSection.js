"use client";
import * as motion from "motion/react-client";
import Button from "../Button/Button";
import HeroSlider from "../HeroSlider/HeroSlider";
import { slides } from "../../../data/slides";
import styles from "./HeroSection.module.scss";
import { FADE_IN_VIEW, getFadeInView } from "../../../constants/animation";

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        <motion.div className={styles.content} {...FADE_IN_VIEW}>
          <h1 className={styles.title}>Strategic Agency</h1>
          <p className={styles.description}>
            We believe in the power of bold ideas that can solve business
            challenges.
          </p>
          <Button btnText="Learn more" onClick={() => {}} className = {styles.heroBtn}/>
        </motion.div>

        <motion.div className={styles.sliderWrapper} {...getFadeInView(0.2)}>
          <HeroSlider slides={slides} />
        </motion.div>
      </div>
    </section>
  );
}
