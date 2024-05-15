import React from 'react'
import useCartItemsStore from '../stores/useCartItemsStore';
import { shallow } from 'zustand/shallow';

const AddToCart = ({slug}) => {
    const { isInCart, toggleIsInCart } = useCartItemsStore(
        store => ({
          isInCart: store.cartItems.includes(slug),
          toggleIsInCart: store.toggleIsInCart,
        }),
        shallow
      );

    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleIsInCart(slug);
    };

    return (
        <button className=" pt-2 font-semibold bg-blue-700 text-white px-3 py-2 rounded-lg align-middle my-3 ml-[3rem]" onClick={handleClick}>
            {isInCart ? "Remove from cart" : "Add to cart"}
        </button>
    )
}

export default AddToCart
