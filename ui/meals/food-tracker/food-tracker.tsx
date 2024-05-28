"use client";

import { Food } from "@/lib/definitions";
import { useState } from "react";
import { FoodForm } from "../food-form/food-form";
import styles from "./food-tracker.module.scss";

export const FoodTracker = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  const addFood = (food: Food) => {
    setFoods((prevFoods) => [...prevFoods, food]);
  };

  return (
    <section className={styles.grid}>
      <div className={styles.formContainer}>
        <h1>Food Tracker</h1>
        <FoodForm addFood={addFood} />
      </div>
      <div className={styles.listContainer}>
        <h2>Foods</h2>
        <ul className={styles.list}>
          {foods.map((food, index) => (
            <li key={index} className={styles.listItem}>
              {food.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FoodTracker;
