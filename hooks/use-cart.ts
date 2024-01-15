import { create } from "zustand";
import { Product } from "@/types";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (data: Product, quantity: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product, quantity: number) => {
        const existingItem = get().items.find(
          (item) => item.product.id === data.id,
        );

        if (existingItem) {
          // If the product is already in the cart, update the quantity
          set({
            items: get().items.map((item) =>
              item.product.id === data.id
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            ),
          });
        } else {
          // If the product is not in the cart, add a new item
          set({ items: [...get().items, { product: data, quantity }] });
        }
      },
      removeItem: (id: string) => {
        set({ items: get().items.filter((item) => item.product.id !== id) });
      },
      removeAll: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
