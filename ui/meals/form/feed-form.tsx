"use client";

import { useCat } from "@/contexts/CatContext";
import React, { useState } from "react";
import styles from "./feed-form.module.scss";

export const FeedForm = () => {
  const { feed, lastFed } = useCat();
  const [person, setPerson] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (person) {
      feed(person);
      setPerson(null);
    }
  };
  return (
    <section className={styles.formSection}>
      <form onSubmit={handleSubmit} className={styles.feedForm}>
        <div className={styles.textContainer}>
          <p>Who&apos;s feeding Alma?</p>
        </div>
        <div className={styles.header}>
          <p>Choose feeder:</p>
        </div>
        <div className={styles.inputs}>
          <label>
            <input
              type="radio"
              name="person"
              value="Donya"
              checked={person === "Donya"}
              onChange={() => setPerson("Donya")}
            />
            Donya
          </label>
          <label>
            <input
              type="radio"
              name="person"
              value="August"
              checked={person === "August"}
              onChange={() => setPerson("August")}
            />
            August
          </label>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.button}>
            Feed Alma
          </button>
        </div>
      </form>
      {lastFed && (
        <p>
          Last fed by {lastFed.person} at {lastFed.time.toLocaleTimeString()} on{" "}
          {lastFed.time.toLocaleDateString()}
        </p>
      )}
    </section>
  );
};

export default FeedForm;
