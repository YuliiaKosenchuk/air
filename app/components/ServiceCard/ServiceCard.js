"use client";
import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import styles from "./ServiceCard.module.scss";
import { CARD_ITEM} from "../../../constants/animation";
import { useEffect, useState } from "react";

export default function ServiceCard({ item }) {
  const [isMobile, setIsMobile] = useState(false);
  const isEven = Number(item.id) % 2 === 0;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const cardVariants = {
    hidden: CARD_ITEM.hidden,
    visible: {
      ...CARD_ITEM.visible,
      y: isEven && !isMobile ? -130 : 0,
    },
  };

  return (
    <motion.div 
      className={styles.card}
      variants={cardVariants}
    >
      <span className={styles.idBadge}>{item.id}</span>
      <div className={styles.content}>
        <ul className={styles.list}>
          {item.list.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
      <button className={styles.learnMore}>
        <div className={styles.iconWrapper}>
          <ArrowRight size={20} color="white" />
        </div>
        <span>Learn more</span>
      </button>
    </motion.div>
  );
}