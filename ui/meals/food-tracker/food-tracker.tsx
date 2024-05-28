"use client";

import { Food } from "@/lib/definitions";
import { useState } from "react";
import { FoodForm } from "../food-form/food-form";
import styles from "./food-tracker.module.scss";
import { useFoods } from "@/contexts/FoodsContext";

export const FoodTracker = () => {
  const { foods, toggle } = useFoods();

  return (
    <section className={styles.grid}>
      <div className={styles.formContainer}>
        <h1>Food Tracker</h1>
        <FoodForm />
      </div>
      <div className={styles.listContainer}>
        <h2>Foods</h2>
        <ul className={styles.list}>
          {foods.map((food) => (
            <li
              key={food.id}
              className={
                food.isBought ? styles.listItemBought : styles.listItem
              }
              onClick={() => toggle(food.id)}
            >
              {food.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FoodTracker;
