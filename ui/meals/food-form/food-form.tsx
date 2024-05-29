"use client";

import { Food } from "@/lib/definitions";
import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./food-form.module.scss";
import { useFoods } from "@/contexts/FoodsContext";

export const FoodForm = () => {
  const { add } = useFoods();
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newFood: Food = {
      name: userInput,
      isBought: false,
      id: new Date().getTime(),
    };
    add(newFood);
    setUserInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.foodForm}>
      <div className={styles.headingContainer}>
        <p>Foods to buy</p>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          placeholder="Enter name of food"
          className={styles.input}
          required
        />
      </div>
      <div className={styles.buttonContainer}>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default FoodForm;
