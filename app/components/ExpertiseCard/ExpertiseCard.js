import Image from "next/image";
import styles from "./ExpertiseCard.module.scss";

export default function ExpertiseCard({ title, description, imageSrc }) {
  return (
    <div className={styles.card}>
      <Image
        src={imageSrc}
        alt={title}
        width={166}
        height={166}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
