"use client";

import Link from "next/link";
import { NAV_LINKS } from "../../../data/nav_links";
import * as motion from "motion/react-client";
import styles from "./NavLinks.module.scss";
import { useState } from "react";
import {
  CARD_CONTAINER,
  CARD_ITEM,
  NAV_UNDERLINE,
} from "../../../constants/animation";

export default function NavLinks({ type, hoveredItem, setHoveredItem }) {
  const [localHoveredIndex, setLocalHoveredIndex] = useState(null);

  const linksToRender =
    type === "header" ? NAV_LINKS.filter((link) => link.inHeader) : NAV_LINKS;

  const isHeader = type === "header";
  const isExternalControl =
    type === "header" && typeof setHoveredItem === "function";

  const handleInteraction = (id, index) => {
    if (isHeader && typeof setHoveredItem === "function") {
      setHoveredItem(id);
    } else {
      setLocalHoveredIndex(index);
    }
  };

  return (
    <motion.ul
      className={styles.navLinks}
      variants={CARD_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      {linksToRender.map((link, index) => {
        const isHovered = isExternalControl
          ? hoveredItem === link.id
          : localHoveredIndex === index;

        return (
          <motion.li
            key={link.id}
            variants={CARD_ITEM}
            className={styles.navLi}
            onMouseEnter={() => handleInteraction(link.id, index)}
          >
            <Link href={link.href} className={styles.navItem}>
              {link.name}
            </Link>

            {isHovered && (
              <motion.div
                layoutId="nav-underline"
                className={styles.underline}
                {...NAV_UNDERLINE}
              />
            )}
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
