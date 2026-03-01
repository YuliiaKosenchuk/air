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

  const targetY = isEven && !isMobile ? -130 : 0;
  const travelDistance = 20;

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: targetY + travelDistance 
    },
    visible: {
      opacity: 1,
      y: targetY,
      transition: CARD_ITEM.visible.transition
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