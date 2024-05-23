"use client";

import { useCat } from "@/contexts/CatContext";
import Image from "next/image";
import almaImage from "@/public/alma-cropped.png";
import styles from "./status.module.scss";
import bubbleFull from "@/public/pixel-speech-bubble-2.png";
import bubbleHungry from "@/public/pixel-speech-bubble.png";

export const Status = () => {
  const { lastFed } = useCat();
  const date = new Date();
  const difference = date.valueOf() - lastFed?.time.valueOf();
  const differenceInHrs = difference / 1000 / 60 / 60;

  const showHidePrompt = () => {
    //Todo: change image of alma when hungry
    if (differenceInHrs > 4) {
      return (
        <div className={styles.imageContainer}>
          <div className={styles.imageCat}>
            <Image
              src={almaImage.src}
              height={240}
              width={140}
              alt="Image of Alma"
            />
            <div className={styles.imageBubble}>
              <Image
                src={bubbleHungry.src}
                height={100}
                width={140}
                alt="Chat bubble"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.imageContainer}>
          <div className={styles.imageCat}>
            <Image
              src={almaImage.src}
              height={240}
              width={140}
              alt="Image of Alma"
            />
          </div>
          <div className={styles.imageBubble}>
            <Image
              src={bubbleFull.src}
              height={40}
              width={140}
              alt="Chat bubble"
            />
          </div>
        </div>
      );
    }
  };

  return <div className={styles.status}>{showHidePrompt()}</div>;
};

export default Status;
