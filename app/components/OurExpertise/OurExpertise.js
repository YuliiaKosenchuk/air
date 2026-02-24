import ExpertiseCard from "../ExpertiseCard/ExpertiseCard";
import { EXPERTISE_DATA } from "../../../data/expertise";
import styles from "./OurExpertise.module.scss";

export default function OurExpertise() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Our Expertise</h2>
        <div className={styles.cardsContainer}>
          {EXPERTISE_DATA.map((item) => (
            <ExpertiseCard
              key={item.id}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
