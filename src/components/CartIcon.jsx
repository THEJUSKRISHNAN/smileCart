import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import useCartItemsStore from '../stores/useCartItemsStore';

const CartIcon = () => {

  const cartItemsCount = useCartItemsStore(store => store.cartItems.length);
 
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
