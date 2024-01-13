import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: Product[];
  additem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      additem: (data: Product) => {
        set({ items: [...get().items, data] });
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
