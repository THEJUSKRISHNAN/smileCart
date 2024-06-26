import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState, useEffect } from 'react';
import productsApi from '../../apis/productsApi';
import Nav from '../Nav';
import AddToCartBtn from '../buttons/AddToCartBtn';
import CartIcon from '../icons/CartIcon';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Helmet } from 'react-helmet';
import { useShowProducts } from '../../hooks/reactQuery/useProductApi';
import Loader from '../Loader';



const Product = () => {
    const { slug } = useParams();


    const { data: product = {}, isLoading, isError } = useShowProducts(slug)
    if (isLoading) return <Loader />

    const {
        name,
        description,
        mrp,
        offer_price: offerPrice,
        image_url: imageUrl,
        available_quantity: availableQuantity,
    } = product;
    const totalDiscount = mrp - offerPrice;
    const discountPercentage = ((totalDiscount / mrp) * 100).toFixed(1);



    return (
        <>
            <Helmet>
                <title>{name}</title>
            </Helmet>
            <Nav home={name} isAddCart={true} isBack={true} actionBlock={<Link to='/cart'><CartIcon /></Link>} />
            <div className='grid justify-center h-screen w-screen items-center'>
                <div className='flex max-sm:flex-col max-sm:pt-[10rem] max-sm:justify-center'>
                    <div>
                        <img src={imageUrl} alt="image" className='w-[30rem] h-[30rem] ml-[10rem]' />
                    </div>
                    <div className='ml-[8rem] mt-[3rem] w-[40rem]'>
                        <h1 className='text-[3rem] font-bold'>{name}</h1>
                        <p className='mt-3 text-xl font-semibold'>{description}</p>
                        <p className='mt-3 text-xl font-semibold'>MRP: {mrp}$</p>
                        <p className='mt-3 text-xl font-semibold'>OFFER PRICE: {offerPrice}$</p>
                        <p className='mt-3 text-xl font-semibold text-green-600'>{discountPercentage}% off</p>
                        <div className='flex justify-center'>
                            <AddToCartBtn slug={slug} availableQuantity={availableQuantity} />
                            {availableQuantity > 0 ? <Link className='bg-blue-700 text-white font-bold rounded-md ml-3 h-[2.7rem] px-3 mt-3 pt-2.5' to={'/checkout'} >Buy now</Link> : null}
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Product
