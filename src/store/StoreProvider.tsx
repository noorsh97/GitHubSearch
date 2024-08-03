"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { Store, initializeStore } from "./store";


const StoreContext = createContext<Store | null>(null);

export const StoreProvider: React.FC<{
  initialData?: any;
  children: ReactNode;
}> = ({ children, initialData }) => {
  const store = initializeStore(initialData);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === null) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};
