import * as motion from "motion/react-client";
import styles from "./WhoWeAre.module.scss";
import { FADE_IN_VIEW } from "../../../constants/animation";

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.content}
        {...FADE_IN_VIEW}
      >
        <h2 className={styles.title}>Who We Are</h2>
        <p className={styles.text}>
          We embrace a strategic approach to creative ideas. We are interested
          in people and human relationships. This is the main thing you need to
          know about us. We believe in the power of bold ideas that can solve
          business challenges.
        </p>
      </motion.div>
    </section>
  );
}
