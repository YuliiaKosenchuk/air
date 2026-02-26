import Image from "next/image";
import * as motion from "motion/react-client";
import styles from "./ExpertiseCard.module.scss";
import { getFadeInView } from "../../../constants/animation";

export default function ExpertiseCard({ title, description, imageSrc, index }) {
  return (
    <motion.div className={styles.card} {...getFadeInView(index * 0.2)}>
      <motion.div
        className={styles.imageWrapper}
        initial={{
          y: 0,
          filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))",
        }}
        whileHover={{
          y: -10,
          filter: "drop-shadow(0px 0px 15px rgba(37, 99, 235, 0.4))",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={166}
          height={166}
          className={styles.image}
          priority={index < 3}
        />
      </motion.div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </motion.div>
  );
}
