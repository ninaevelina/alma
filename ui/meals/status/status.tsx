"use client";

import { useCat } from "@/contexts/CatContext";
import Image from "next/image";
import almaImage from "@/public/alma.png";
import styles from "./status.module.css";

export const Status = () => {
  const { lastFed } = useCat();
  const date = new Date();
  const difference = date.valueOf() - lastFed?.valueOf();
  const differenceInHrs = difference / 1000 / 60 / 60;

  const showHidePrompt = () => {
    //Todo: change image of alma when hungry
    if (differenceInHrs > 4) {
      return (
        <div>
          <div className={styles.imageContainer}>
            {" "}
            <Image
              src={almaImage.src}
              height={341}
              width={256}
              alt="Image of Alma"
            />
          </div>
          <p className={styles.imageText}>Feed me, I am hungry</p>
        </div>
      );
    } else {
      return (
        <div>
          <div className={styles.imageContainer}>
            <Image
              src={almaImage.src}
              height={341}
              width={256}
              alt="Image of Alma"
            />
          </div>
          <p className={styles.imageText}>I am full, no food for me thanks.</p>{" "}
        </div>
      );
    }
  };

  return (
    <div className={styles.center}>
      <div className={styles.statusText}>
        <p>
          Last fed: {lastFed ? lastFed.toLocaleTimeString() : "Not fed yet"}
        </p>
      </div>
      {showHidePrompt()}
    </div>
  );
};

export default Status;
