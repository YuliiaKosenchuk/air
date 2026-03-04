"use client";

import { motion } from "motion/react";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./ContactSection.module.scss";
import { FADE_IN_VIEW, getFadeInView } from "../../../constants/animation";
import { SiInstagram, SiX, SiFacebook } from "@icons-pack/react-simple-icons";

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <motion.div className={styles.grid} {...FADE_IN_VIEW}>
          <motion.div className={styles.formSide} {...getFadeInView(0.2)}>
            <h2 className={styles.title}>Send us a message</h2>
            <ContactForm />
          </motion.div>
          <motion.div className={styles.infoSide} {...getFadeInView(0.4)}>
            <div className={styles.infoBlock}>
              <h2 className={styles.title}>Contact us</h2>
              <div className={styles.item}>
                <span>CALL US</span>
                <a href="tel:654321987" className={styles.link}>
                  <p>654 321 987</p>
                </a>
              </div>
              <div className={styles.item}>
                <span>VISIT US</span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2905+West+Drive,+Buffalo+Grove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  <p>2905 West Drive, Buffalo Grove</p>
                </a>
              </div>
              <div className={styles.socials}>
                <span>OUR SOCIALS</span>
                <div className={styles.icons}>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <SiFacebook size={32} />
                  </a>

                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                  >
                    <SiX size={32} className={styles.activeIcon} />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <SiInstagram size={32} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
