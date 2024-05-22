"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface CatContextProps {
  feed: (person: string) => void;
  lastFed: { time: Date; person: string } | null;
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
  const [lastFed, setLastFed] = useState<{ time: Date; person: string } | null>(
    () => {
      if (typeof window !== "undefined") {
        const storedValue = localStorage.getItem("lastFed");
        if (storedValue) {
          try {
            const parsedValue = JSON.parse(storedValue);
            return {
              time: new Date(parsedValue.time),
              person: parsedValue.feeder,
            };
          } catch (error) {
            console.error("Failed to parse value from LS:", error);
            return null;
          }
        }
      }
      return null;
    }
  );

  useEffect(() => {
    if (lastFed) {
      localStorage.setItem("lastFed", JSON.stringify(lastFed));
    } else {
      localStorage.removeItem("lastFed");
    }
  }, [lastFed]);

  const feed = (person: string) => {
    const currentDateTime = new Date();
    setLastFed({ time: currentDateTime, person });
    console.log(
      `Alma the cat was successfully fed by ${person} at ${currentDateTime.toLocaleTimeString()} ${
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
