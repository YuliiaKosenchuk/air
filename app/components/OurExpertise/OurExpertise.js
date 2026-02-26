import * as motion from "motion/react-client";
import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";
import { EXPERTISE_DATA } from "../../../data/expertise";
import styles from "./OurExpertise.module.scss";
import { FADE_IN_VIEW } from "../../../constants/animation";

export default function OurExpertise() {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2
          className={styles.title}
          {...FADE_IN_VIEW}
        >
          Our Expertise
        </motion.h2>
        <div className={styles.cardsContainer}>
          {EXPERTISE_DATA.map((item) => (
            <ExpertiseCard
              key={item.id}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              index={item.id - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
