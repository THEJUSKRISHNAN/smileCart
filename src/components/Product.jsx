import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState ,useEffect} from 'react';
import productsApi from '../apis/productsApi';
import Nav from './Nav';

const Product = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
      fetchProduct();
    }, [])
    

    const fetchProduct = async () => {
        try {
            const response = await productsApi.fetch(slug)
            setProduct(response.data);
        } catch (error) {
            console.log(error)
        }
    }
    console.log(product)
    const {
        name,
        description,
        mrp,
        offer_price: offerPrice,
        image_url: imageUrl,
      } = product;
     const totalDiscount = mrp-offerPrice;
     const discountPercentage=((totalDiscount/mrp)*100).toFixed(1);
    
    

    return (
        <>
        <Nav home={name} isAddCart={false} isBack={true} />
        <div className='flex mt-14 mx-[10rem]'>
            <div >
                <img src={imageUrl} alt="image" className='w-[30rem] h-[30rem]'/>
            </div>
            <div className='ml-[8rem] mt-[3rem] w-[40rem]'>
                <h1 className='text-[3rem] font-bold'>{name}</h1>
                <p className='mt-3 text-xl font-semibold'>{description}</p>
                <p className='mt-3 text-xl font-semibold'>MRP: {mrp}$</p>
                <p className='mt-3 text-xl font-semibold'>OFFER PRICE: {offerPrice}$</p>
                <p className='mt-3 text-xl font-semibold text-green-600'>{discountPercentage}% off</p>
            </div>

            
        </div>
        </>
    )
}

export default Product
