import React from 'react'
import useCartItemsStore from '../../stores/useCartItemsStore';
import { shallow } from 'zustand/shallow';
import { isNil, paths } from 'ramda';
import ProductQuantityBtn from "./ProductQuantityBtn"


const AddToCartBtn = ({slug,availableQuantity}) => {
    const [selectedQuantity, setSelectedQuantity] = useCartItemsStore(
        paths([["cartItems", slug], ["setSelectedQuantity"]]),
        shallow
      );

    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if(availableQuantity>0)
            {
                setSelectedQuantity(slug, 1)
            }
        
    };


    return (
        <button className=" pt-2 font-semibold bg-blue-700 text-white px-3 py-2 rounded-lg align-middle my-3 ml-[3rem]" onClick={handleClick}>
            {availableQuantity>0 ? isNil(selectedQuantity) ? "Add to cart" : <ProductQuantityBtn slug={slug} availableQuantity={availableQuantity}/> : "out of stock"}
        </button>
    )
}

export default AddToCartBtn
