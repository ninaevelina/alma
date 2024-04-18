"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface CatContextProps {
  feed: () => void;
  lastFed: Date | null;
}

interface CatProviderProps {
  children: ReactNode;
}

const CatContext = createContext<CatContextProps>({
  feed: () => {
    throw new Error("Provider not found");
  },
  lastFed: null,
});

export const useCat = () => {
  const context = useContext(CatContext);
  if (!context) {
    throw new Error("useCat can only be used within the provider");
  }
  return context;
};

export const CatProvider = ({ children }: CatProviderProps) => {
  const [lastFed, setLastFed] = useState<Date | null>(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("lastFed");
      return storedValue ? new Date(storedValue) : null;
    } else {
      return null;
    }
  });

  useEffect(() => {
    if (lastFed) {
      localStorage.setItem("lastFed", lastFed.toISOString());
    } else {
      localStorage.removeItem("lastFed");
    }
  }, [lastFed]);

  const feed = () => {
    const currentDateTime = new Date();
    setLastFed(currentDateTime);
    console.log(
      `Alma the cat was successfully fed at ${currentDateTime.toLocaleTimeString()} ${
        currentDateTime.toLocaleDateString
      }`
    );
  };

  return (
    <CatContext.Provider value={{ feed, lastFed }}>
      {children}
    </CatContext.Provider>
  );
};
