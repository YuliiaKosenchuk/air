import * as motion from "motion/react-client";
import { services } from "./../../../data/services";
import ServiceCard from "../ServiceCard/ServiceCard";
import styles from "./ServicesSection.module.scss";
import { CARD_CONTAINER, FADE_IN_VIEW } from "../../../constants/animation";

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.gridContainer}>
          <motion.div className={styles.headerColumn} {...FADE_IN_VIEW}>
            <span className={styles.overline}>SERVICES</span>
            <h2 className={styles.title}>
              Air is a full service creative agency
            </h2>
            <div className={styles.description}>
              <p>Deep analytics, strong strategy and bright creative ideas.</p>
              <p>
                We are sure that first-rate job is possible only if all three
                components are united.
              </p>
            </div>
          </motion.div>
          <motion.div
            className={styles.gridColumn}
            variants={CARD_CONTAINER}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
