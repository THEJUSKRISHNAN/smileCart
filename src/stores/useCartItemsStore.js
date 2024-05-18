import { assoc, dissoc, evolve } from "ramda";
import { create } from "zustand";

const useCartItemsStore = create(set => ({
  cartItems: {},
  setSelectedQuantity: (slug, quantity) =>
    set(({ cartItems }) => {
      if (quantity <= 0) {
        return { cartItems: dissoc(slug, cartItems) };
      }

      return { cartItems: assoc(slug, quantity, cartItems) };
    }),
    removeCartItem: slug => set(evolve({ cartItems: dissoc(slug) })),
}));

export default useCartItemsStore;