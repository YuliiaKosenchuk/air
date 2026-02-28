"use client";
import * as motion from "motion/react-client";
import BackgroundShapes from "../BackgroundShapes/BackgroundShapes";
import Button from "../Button/Button";
import styles from "./VisionSection.module.scss";
import { FADE_IN_VIEW, getFadeInView } from "../../../constants/animation";

export default function VisionSection() {
  const handleApply = () => {
    console.log("Відкрито форму подачі заявки");
  };

  return (
    <section className={styles.visionSection}>
      <div className={styles.shapesWrapper}>
        <BackgroundShapes />
      </div>

      <div className="container">
        <div className={styles.content}>
          <motion.div {...FADE_IN_VIEW}>
            <h2 className={styles.title}>Vision, Passion, Results</h2>
            <p className={styles.text}>
              We are sure that first-rate job is possible only if all three
              components are united.
            </p>
          </motion.div>
          
          <motion.div {...getFadeInView(0.3)}>
            <Button
              className={styles.applyBtn}
              btnText="Apply"
              onClick={handleApply}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
