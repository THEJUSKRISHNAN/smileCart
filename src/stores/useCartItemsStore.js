import { without } from "ramda";
import { createWithEqualityFn } from 'zustand/traditional'


  const useCartItemsStore = createWithEqualityFn(set => ({
  cartItems: [],
  toggleIsInCart: slug =>
    set(({ cartItems }) => {
      if (cartItems.includes(slug)) {
        return { cartItems: without([slug], cartItems) };
      }

      return { cartItems: [slug, ...cartItems] };
    }),
}));

export default useCartItemsStore;