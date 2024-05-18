import React from 'react'
import Nav from '../Nav'
import CartIcon from '../icons/CartIcon'
import { useEffect, useState } from 'react'
import productsApi from '../../apis/productsApi'
import { keys,isEmpty } from 'ramda'
import useCartItemsStore from '../../stores/useCartItemsStore'
import { shallow } from 'zustand/shallow'
import ProductCard from './ProductCard'

const Cart = () => {
    const [products, setProducts] = useState([]);
    const slugs = useCartItemsStore(store => keys(store.cartItems), shallow);

  const fetchCartProducts = async () => {
    try {
      const responses = await Promise.all(
        slugs.map(slug => productsApi.fetch(slug))
      );

      setProducts(responses);
      console.log(responses);
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, []);

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
  
  return (
    <div>
      <Nav  home='My cart' isAddCart={true} isBack={true} actionBlock={<CartIcon/>}/>
      <div className='ml-10'>
      {products.map(product => (
            <ProductCard slug={product.slug}
            {...product} />
          ))}
      </div>
    
    
    
    </div>
  )
}

export default Cart
