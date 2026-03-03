import * as motion from "motion/react-client";
import Link from "next/link";
import styles from "./NotFound.module.scss";
import BackgroundShapes from "../app/components/BackgroundShapes/BackgroundShapes";
import { FADE_IN_UP, getFadeInView } from "../constants/animation";

export default function NotFound() {
  return (<main className={styles.container}>
      <div className={styles.shapesWrapper}>
        <BackgroundShapes />
      </div>

      <motion.h1 
        className={styles.title}
        {...FADE_IN_UP}
      >
        404
      </motion.h1>

      <motion.h2 
        className={styles.subtitle}
        {...getFadeInView(0.2)}
      >
        Page Not Found — But Creativity Is.
      </motion.h2>

      <motion.p 
        className={styles.text}
        {...getFadeInView(0.6)}
      >
        The idea you&apos;re looking for isn&apos;t here.
But great ideas are everywhere else on our site.

      </motion.p>

      <motion.div {...getFadeInView(0.8)}>
        <Link href="/" className={styles.backLink}>
          Back to Home
        </Link>
      </motion.div>
    </main>
  );
}
