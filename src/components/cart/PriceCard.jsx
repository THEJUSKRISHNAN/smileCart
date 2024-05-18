import React from 'react'
import { gt, keys } from "ramda";
import useCartItemsStore from '../../stores/useCartItemsStore';


const PriceCard = ({ totalMrp, totalOfferPrice }) => {
    const totalDiscounts = totalMrp - totalOfferPrice;
    const isDiscountPresent = gt(totalDiscounts, 0);
    const discountPercentage = ((totalDiscounts / totalMrp) * 100).toFixed(1);
  
    const itemsCount = useCartItemsStore(store => keys(store.cartItems).length);
    
  return (
 
    <div className='border-2 border-black mt-5 ml-5 w-[20rem] h-[12rem] p-5 text-center'>
      <p className='text-lg font font-semibold line-through'>Total MRP:${totalMrp}</p>
      {isDiscountPresent && (<div className='py-2'>
        <p className='pb-2 font-bold text-green-600'>Total discount:{totalDiscounts}({discountPercentage}%)</p>
      <p className='font-bold'>Total offerprice: ${totalOfferPrice}</p></div>)}
      <button className='bg-blue-700 text-white font-bold py-1 px-3 rounded-md mt-2'>Buy now</button>
    </div>
  
  )
}

export default PriceCard
