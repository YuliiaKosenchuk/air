"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Header.module.scss";
import Link from "next/link";
import { FADE_IN_DOWN, NAV_UNDERLINE } from "../../../constants/animation";

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper} onMouseLeave={() => setHoveredItem(null)}>
          <Logo />
          <nav className={styles.desktopNav}>
            <NavLinks
              type="header"
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />
          </nav>
          <MobileMenu />
          <motion.div
            {...FADE_IN_DOWN}
            className={styles.hireUsWrapper}
            onMouseEnter={() => setHoveredItem("hire")}
            // onClick={() => setHoveredItem("hire")}
          >
            <Link href="/contact" className={styles.hireUsLink}>
              Hire Us
            </Link>

            {hoveredItem === "hire" && (
              <motion.div
                layoutId="nav-underline"
                className={styles.underline}
                {...NAV_UNDERLINE}
              ></motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </header>
  );
}
