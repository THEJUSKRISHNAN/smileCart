import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import CartItemsContext from '../contexts/CartItemsContext';

const CartIcon = () => {
  const [cartItems]=useContext(CartItemsContext)
  const cartItemsCount = cartItems.length;
  return (
    <div>
      <div className='relative flex pl-7'>
                    <FaCartShopping className='text-4xl' />
                    <span className='absolute bottom-8 right-0 font-bold '>{cartItemsCount}</span>
                </div>
    </div>
  )
}

export default CartIcon
