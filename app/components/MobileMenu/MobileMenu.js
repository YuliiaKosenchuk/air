"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./MobileMenu.module.scss";
import { FADE_IN_DOWN, MOBILE_ASIDE } from "../../../constants/animation";

const burgerVariants = {
  closed: { x: 0 },
  open: { x: "calc(100vw - 160px)" },
};

const burgerTransition = {
  type: "tween",
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

const lineTopVariants = {
  closed: { 
    rotate: 0, 
    y: 0,
    transition: burgerTransition 
  },
  open: { 
    rotate: 45, 
    y: 4, 
    backgroundColor: "#fff",
    transition: burgerTransition 
  },
};

const lineBottomVariants = {
  closed: { 
    rotate: 0, 
    y: 0,
    transition: burgerTransition 
  },
  open: { 
    rotate: -45, 
    y: -4, 
    backgroundColor: "#fff",
    transition: burgerTransition 
  },
};
export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileHovered, setMobileHovered] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const mode = isOpen ? "open" : "closed";

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <motion.div {...FADE_IN_DOWN} className={styles.mobileWrapper}>
      <button className={styles.burger} onClick={toggleMenu} aria-label="Menu">
        <motion.div
          variants={burgerVariants}
          animate={mode}
          transition={burgerTransition}
          className={styles.burgerInner}
        >
          <motion.span
            variants={lineTopVariants}
            animate={mode}
            className={styles.line}
          />
          <motion.span
            variants={lineBottomVariants}
            animate={mode}
            className={styles.line}
          />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.aside {...MOBILE_ASIDE} className={styles.aside}>
            <nav
              className={styles.mobileNav}
              onMouseLeave={() => setMobileHovered(null)}
            >
              <NavLinks
                type="header"
                onClick={toggleMenu}
                hoveredItem={mobileHovered}
                setHoveredItem={setMobileHovered}
              />
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
