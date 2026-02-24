import styles from "./WhoWeAre.module.scss";

export default function WhoWeAre() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>Who We Are</h2>
        <p className={styles.text}>
          We embrace a strategic approach to creative ideas. We are interested
          in people and human relationships. This is the main thing you need to
          know about us. We believe in the power of bold ideas that can solve
          business challenges.
        </p>
      </div>
    </section>
  );
}
