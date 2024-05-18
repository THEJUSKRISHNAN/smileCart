import ProductQuantityBtn from "../buttons/ProductQuantityBtn";
import React from 'react'
import { MdDelete } from "react-icons/md";

const ProductCard = ({slug,
    image_url,
    offer_price,
    mrp,
    name,
    availableQuantity,}) => (
    <div className="border-2 border-black h-[10rem] mt-5 flex justify-between w-[35rem] items-center">
        <div className="flex">
                <img src={image_url} alt="" height={90} width={90} className="ml-3"/>
            <div className="pl-5 pt-5">
                <h1 className="font-bold text-lg">{name}</h1>
                <p>MRP: ${mrp}</p>
                <p>OfferPrice: ${offer_price}</p>
            </div>

        </div>
        <div className="flex justify-between w-[10rem] pr-3">
                <ProductQuantityBtn slug={slug} availableQuantity={availableQuantity}/>
                <MdDelete className="text-2xl hover:cursor-pointer"/>

        </div>
      
    </div>
  )


export default ProductCard
