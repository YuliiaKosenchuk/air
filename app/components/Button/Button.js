import * as motion from "motion/react-client";
import styles from "./Button.module.scss";
import { BUTTON_ANIMATION } from "../../../constants/animation";

export default function Button({ btnText, onClick, type = "button", className = "" }) {
  return (
    <motion.button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      {...BUTTON_ANIMATION}
    >
      {btnText}
    </motion.button>
  );
}