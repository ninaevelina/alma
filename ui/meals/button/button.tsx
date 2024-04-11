"use client";

import { useCat } from "@/contexts/CatContext";
import styles from "./button.module.css";

export const Button = () => {
  const { feed } = useCat();

  return (
    <div className={styles.buttonContainer}>
      <button onClick={feed} className={styles.feedButton}>
        Feed
      </button>
    </div>
  );
};

export default Button;
