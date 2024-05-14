import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const CartIcon = () => {
  return (
    <div>
      <div className='relative flex pl-7'>
                    <FaCartShopping className='text-4xl' />
                    <span className='absolute bottom-8 right-0 font-bold '>0</span>
                </div>
    </div>
  )
}

export default CartIcon
