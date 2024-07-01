import React from 'react'
import { gt, keys } from "ramda";
import useCartItemsStore from '../../stores/useCartItemsStore';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const PriceCard = ({ totalMrp, totalOfferPrice }) => {
    const totalDiscounts = totalMrp - totalOfferPrice;
    const isDiscountPresent = gt(totalDiscounts, 0);
    const discountPercentage = ((totalDiscounts / totalMrp) * 100).toFixed(1);
  
    const itemsCount = useCartItemsStore(store => keys(store.cartItems).length);
    
  return (
 
    <div className='border-2 border-black mt-5 ml-5 w-[20rem] h-[15rem] p-5 text-center '>
      <p className='text-lg font font-semibold line-through'>Total MRP:${totalMrp}</p>
      {isDiscountPresent && (<div className='py-2'>
        <p className='pb-2 font-bold text-green-600'>Total discount:{totalDiscounts}({discountPercentage}%)</p>
      <p className='font-bold'>Total offerprice: ${totalOfferPrice}</p></div>)}
      <Link className='bg-blue-700 text-white font-bold py-1 px-3 rounded-md mt-2 ' to={'/checkout'} >Buy now</Link>
    </div>
  
  )
}

export default PriceCard
