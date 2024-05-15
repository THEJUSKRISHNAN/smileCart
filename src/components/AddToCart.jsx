import React from 'react'
import useCartItemsStore from '../stores/useCartItemsStore';
import { shallow } from 'zustand/shallow';
import { isNil, paths } from 'ramda';
import ProductQuantity from "./commons/ProductQuantity"


const AddToCart = ({slug}) => {
    const [selectedQuantity, setSelectedQuantity] = useCartItemsStore(
        paths([["cartItems", slug], ["setSelectedQuantity"]]),
        shallow
      );

    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setSelectedQuantity(slug, 1)
    };


    return (
        <button className=" pt-2 font-semibold bg-blue-700 text-white px-3 py-2 rounded-lg align-middle my-3 ml-[3rem]" onClick={handleClick}>
            {isNil(selectedQuantity) ? "Add to cart" : <ProductQuantity slug={slug} /> }
        </button>
    )
}

export default AddToCart
