"use client";

import * as motion from "motion/react-client";
import Button from "../Button/Button";
import styles from "./SuccessModal.module.scss";
import { FADE_IN_UP } from "../../../constants/animation";

export default function SuccessModal({ onClose }) {
  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.content}
        {...FADE_IN_UP}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.iconWrapper}>✨</div>
        <h3 className={styles.title}>Thank You</h3>
        <p className={styles.text}>
          Your message has been sent successfully. <br />
          We&apos;ll get back to you soon.
        </p>
        <Button
          btnText="Great!"
          onClick={onClose}
          className={styles.modalBtn}
        />
      </motion.div>
    </motion.div>
  );
}