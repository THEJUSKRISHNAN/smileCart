import React from 'react'
import Nav from '../Nav'
import CartIcon from '../icons/CartIcon'
import { useEffect, useState } from 'react'
import productsApi from '../../apis/productsApi'
import { keys,isEmpty } from 'ramda'
import useCartItemsStore from '../../stores/useCartItemsStore'
import { shallow } from 'zustand/shallow'
import ProductCard from './ProductCard'
import { cartTotalOf } from '../utils'
import { MRP, OFFER_PRICE } from '../constants'
import PriceCard from './PriceCard'
import { Helmet } from 'react-helmet'
import Loader from '../Loader'

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const slugs = useCartItemsStore(store => keys(store.cartItems), shallow);
    const { cartItems, setSelectedQuantity } = useCartItemsStore();


  const fetchCartProducts = async () => {
    try {
      const responses = await Promise.all(
        slugs.map(slug => productsApi.fetch(slug))
      );
      setIsLoading(true);
      setProducts(responses);
      
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  



  useEffect(() => {
    fetchCartProducts();
  }, [cartItems]);
  
  if(!isLoading) return <Loader/>
  if (isEmpty(products)) {
    return (
      <> 
      
        <Nav  home='My cart' isAddCart={true} isBack={true} actionBlock={<CartIcon/>}/>
        <div className="flex h-[85vh] items-center justify-center text-[5rem] font-bold">
          Your cart is empty!
        </div>
      </>
    );
  }

  const totalMrp = cartTotalOf(products,MRP);
  const totalOfferPrice = cartTotalOf(products,OFFER_PRICE);

  
  
  return (
    <>
    <Helmet>
        <title>My cart</title>
      </Helmet>
    <Nav  home='My cart' isAddCart={true} isBack={true} actionBlock={<CartIcon/>}/>
    <div className='flex justify-evenly pt-[10rem]'>
      
      <div className='ml-10'>
      {products.map(product => (
            <ProductCard slug={product.slug}
            {...product} />
          ))}
      </div>
    
          <PriceCard {...{ totalMrp, totalOfferPrice }}/>
    
    </div>
    </>
  )
}

export default Cart
