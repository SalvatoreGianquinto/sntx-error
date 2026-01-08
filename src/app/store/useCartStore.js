import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useCartStore = create()(
  persist(
    (set) => ({
      cart: [],
      isCartOpen: false,
      setIsCartOpen: (open) => set({ isCartOpen: open }),
      addToCart: (product, size) =>
        set((state) => ({
          cart: [...state.cart, { ...product, size }],
          isCartOpen: true,
        })),

      clearCart: () => set({ cart: [] }),
      removeFromCart: (index) =>
        set((state) => ({
          cart: state.cart.filter((_, i) => i !== index),
        })),
    }),
    { name: "snxt-cart-storage" }
  )
)
