import React from 'react'
import { useState } from 'react'
const AddToCart = ({isInCart,toggleIsInCart}) => {

    // const [isInCart, setIsInCart] = useState(false)

    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        // setIsInCart(prevValue => !prevValue);
        toggleIsInCart();
    };

    return (
        <button className=" pt-2 font-semibold bg-blue-700 text-white px-3 py-2 rounded-lg align-middle my-3 ml-[3rem]" onClick={handleClick}>
            {isInCart ? "Remove from cart" : "Add to cart"}
        </button>
    )
}

export default AddToCart
