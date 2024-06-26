import React from 'react'
import { useState, useEffect } from "react"
import { CiSearch } from "react-icons/ci";
import AllProductsApi from '../../apis/showAllProduts'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Nav from '../Nav'
import useDebounce from '../../hooks/useDebounce';
import AddToCartBtn from '../buttons/AddToCartBtn';
import CartIcon from '../icons/CartIcon';
import { Helmet } from 'react-helmet';
import { useFetchProducts } from '../../hooks/reactQuery/useProductApi';
import Loader from '../Loader';




const Products = () => {
    const [searchKey, setSearchKey] = useState("");
    const debouncedSearchKey = useDebounce(searchKey);
    

    const {data: {products = []}={},isLoading} = useFetchProducts(debouncedSearchKey)
    if(isLoading) return <Loader/>
    


    


    return (
        <>
            <Helmet>
                <title>Smile Cart</title>
            </Helmet>
            <Nav actionBlock={<div className='flex'>
                <div className='relative'>
                    <input type="search" name="" id="" placeholder='Search Product'
                        className='w-[15rem] h-[2rem] pl-6 border border-gray-600 rounded-lg'
                        value={searchKey}
                        onChange={event => setSearchKey(event.target.value)} />
                    <CiSearch className='absolute top-2 left-1' />
                </div>
                <Link to='/cart'><CartIcon /></Link>
            </div>} />

            <section className='flex justify-center flex-wrap gap-8 mb-7 pt-[5rem]  max-sm:grid-cols-1  '>
                {products.map((item) => {
                    return <Link to={`product/${item.slug}`} className='mt-10 ' key={item.name}>
                        <div className='border-2 border-black w-[15rem] rounded-xl h-[35rem] p-4' >
                            <img src={item.image_url} alt="" width={300} className='py-5 h-[15rem]' />
                            <h1 href="#" className='font-bold text-center text-xl hover:cursor-pointer h-[5rem] overflow-hidden'>{item.name}</h1>
                            <p className="text-center pt-2 font-semibold">MRP:{item.mrp}</p>
                            <p className="text-center pt-2 font-semibold">Offer Price:{item.offer_price}</p>
                            <p className="text-center pt-2 font-semibold">Available Quantity:{item.available_quantity}</p>
                            <AddToCartBtn slug={item.slug} availableQuantity={item.available_quantity} />
                        </div>
                    </Link>
                })}



            </section>
            {products.length === 0 && <h1 className='text-[5rem] text-center mt-[15rem] font-bold'>NO DATA FOUND</h1>}
        </>


    )
}

export default Products
