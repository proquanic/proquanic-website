import React, { createContext, useContext, useEffect, useState } from "react";
import { RfqItem } from "../types";

interface RfqContextType {
  items: RfqItem[];
  addItem: (item: Omit<RfqItem, "id">) => void;
  removeItem: (id: string) => void;
  clearItems: () => void;
  updateQuantity: (id: string, qty: string) => void;
  totalItemsCount: number;
}

const RfqContext = createContext<RfqContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = "proquanic_rfq_requisition_items";

export const RfqProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<RfqItem[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage unavailable fallback
    }
  }, [items]);

  const addItem = (itemData: Omit<RfqItem, "id">) => {
    const newItem: RfqItem = {
      ...itemData,
      id: "item-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6),
    };
    setItems((prev) => [...prev, newItem]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearItems = () => {
    setItems([]);
  };

  const updateQuantity = (id: string, quantity: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <RfqContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearItems,
        updateQuantity,
        totalItemsCount: items.length,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
};

export const useRfq = () => {
  const context = useContext(RfqContext);
  if (!context) {
    throw new Error("useRfq must be used within an RfqProvider");
  }
  return context;
};
