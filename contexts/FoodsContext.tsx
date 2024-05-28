"use client";

import { Food } from "@/lib/definitions";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface FoodsContextProps {
  foods: Food[] | [];
  add: (food: Food) => void;
  toggle: (id: number) => void;
}

export interface FoodsProviderProps {
  children: ReactNode;
}

const FoodsContext = createContext<FoodsContextProps>({
  add: () => {
    throw new Error("Provider not found");
  },
  toggle: () => {
    throw new Error("Provider not found");
  },
  foods: [],
});

export const useFoods = () => {
  const context = useContext(FoodsContext);
  if (!context) {
    throw new Error("useFoods can only be used within the provider");
  }
  return context;
};

export const FoodsProvider = ({ children }: FoodsProviderProps) => {
  const [foods, setFoods] = useState<Food[]>(() => {
    if (typeof window !== undefined) {
      const storedFoods = localStorage.getItem("foods");
      if (storedFoods) {
        try {
          const parsedValue = JSON.parse(storedFoods) as Food[];
          return parsedValue;
        } catch (error) {
          console.error("Failed to parse value from LS:", error);
        }
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("foods", JSON.stringify(foods));
  }, [foods]);

  const add = (food: Food) => {
    setFoods((prevFoods) => [...prevFoods, food]);
  };

  const toggle = (id: number) => {
    setFoods((prevFoods) =>
      prevFoods.map((food) =>
        food.id === id ? { ...food, isBought: !food.isBought } : food
      )
    );
  };

  return (
    <FoodsContext.Provider value={{ foods, add, toggle }}>
      {children}
    </FoodsContext.Provider>
  );
};
