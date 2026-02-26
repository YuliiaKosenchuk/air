import Link from "next/link";
import * as motion from "motion/react-client";
import Image from "next/image";
import { FADE_IN_DOWN } from "../../../constants/animation";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <motion.div
        {...FADE_IN_DOWN}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 },
        }}
      >
        <Image
          src="/images/logo/logo_air.svg"
          alt="Air Logo"
          width={45}
          height={25}
          priority
        />
      </motion.div>
    </Link>
  );
}
