import React, { useContext } from 'react'
import CartItemsContext from '../contexts/CartItemsContext';
import { without } from 'ramda';

const AddToCart = ({slug}) => {
    const [cartItems,setCartItems] = useContext(CartItemsContext);

    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setCartItems(prevCartItems =>
            prevCartItems.includes(slug)
              ? without([slug], cartItems)
              : [slug, ...cartItems]
          );
    };

    return (
        <button className=" pt-2 font-semibold bg-blue-700 text-white px-3 py-2 rounded-lg align-middle my-3 ml-[3rem]" onClick={handleClick}>
            {cartItems.includes(slug) ? "Remove from cart" : "Add to cart"}
        </button>
    )
}

export default AddToCart
