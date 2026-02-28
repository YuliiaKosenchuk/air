"use client";

import { motion, useSpring, useTransform } from "motion/react";
import styles from "./BackgroundShapes.module.scss";
import { useEffect } from "react";
import { CARD_CONTAINER, CARD_ITEM } from "../../../constants/animation";
const GLOBAL_ROTATE = 25;

const SHAPES = [
  // left side shapes
  { id: 1, top: "20%", centerX: -500, size: "tiny", factor: 0.9 },
  { id: 2, top: "14%", centerX: -250, size: "small", factor: 1.5 },
  { id: 3, top: "45%", centerX: -450, size: "large", factor: 3.5 },
  { id: 4, top: "52%", centerX: -650, size: "medium", factor: 2.5 },
  { id: 5, top: "68%", centerX: -280, size: "tiny", factor: 0.8 },
  { id: 6, top: "85%", centerX: -540, size: "small", factor: 1.2 },

  // right side shapes
  { id: 7, top: "20%", centerX: 680, size: "tiny", factor: 0.9 },
  { id: 8, top: "25%", centerX: 460, size: "large", factor: 3.2 },
  { id: 9, top: "45%", centerX: 710, size: "small", factor: 2.1 },
  { id: 10, top: "58%", centerX: 350, size: "small", factor: 1.4 },
  { id: 11, top: "82%", centerX: 560, size: "medium", factor: 1.8 },
  { id: 12, top: "55%", centerX: 500, size: "medium", factor: 3.2 },
  { id: 13, top: "75%", centerX: 180, size: "tiny", factor: 0.7 },
];

//FloatingShape component to handle individual shape rendering and animation
function FloatingShape({ shape, mouseX, mouseY }) {
  const moveX = useTransform(mouseX, (val) => (val / 50) * shape.factor);
  const moveY = useTransform(mouseY, (val) => (val / 50) * shape.factor);

  return (<motion.div
    variants={CARD_ITEM}
    className={`${styles.shape} ${styles[shape.size]}`}
    style={{
      top: shape.top,
      left: `calc(50% + ${shape.centerX}px)`,
      rotate: GLOBAL_ROTATE,
      x: moveX,
      y: moveY,
    }}
  >
    <motion.div
      className={styles.innerGlow}
      animate={{ opacity: [0.4, 0.6, 0.4] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
  </motion.div>);
}

// Main BackgroundShapes component to render all shapes and handle mouse movement
export default function BackgroundShapes() {
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
   <motion.div 
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={CARD_CONTAINER}
    >
      {SHAPES.map((shape) => (
        <FloatingShape 
          key={shape.id} 
          shape={shape} 
          mouseX={mouseX} 
          mouseY={mouseY} 
        />
      ))}
    </motion.div>
  );
}