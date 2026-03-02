"use client";
import { useState } from "react";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Footer.module.scss";

export default function Footer() {
  const [hoveredItem, setHoveredItem] = useState(null);
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper} onMouseLeave={() => setHoveredItem(null)}>
          <Logo />
          <nav className={styles.footerNav}>
            <NavLinks
              type="footer"
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
            />
          </nav>
        </div>
      </div>
    </footer>
  );
}
