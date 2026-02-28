"use client";
import { useState } from "react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { CARD_ITEM } from "../../../constants/animation";
import styles from "./TestimonialCard.module.scss";

export default function TestimonialCard({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.card}
      variants={CARD_ITEM}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <motion.div
          className={`${styles.shape} ${styles.shapeTop}`}
          animate={{ y: isHovered ? -8 : 0, rotate: 45 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className={`${styles.shape} ${styles.shapeBottom}`}
          animate={{ y: isHovered ? 8 : 0, rotate: 45 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />

        <div className={styles.avatar}>
          <Image src={data.image} alt={data.name} width={140} height={140} />
        </div>
      </div>

      <div className={styles.content}>
        <Image
          className={styles.quoteIcon}
          src="/images/testimonials/quote.svg"
          alt="Quote icon"
          width={24}
          height={24}
        />
        <p className={styles.text}>{data.text}</p>
      </div>

      <div className={styles.divider}>
        <h4 className={styles.name}>{data.name}</h4>
        <p className={styles.role}>{data.role}</p>
      </div>
    </motion.div>
  );
}
