import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useState ,useEffect} from 'react';
import productsApi from '../../apis/productsApi';
import Nav from '../Nav';
import AddToCartBtn from '../buttons/AddToCartBtn';
import CartIcon from '../icons/CartIcon';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Helmet } from 'react-helmet';



const Product = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(() => {
      fetchProduct();
    }, [])
    

    const fetchProduct = async () => {
        try {
            const response = await productsApi.fetch(slug)
            setProduct(response);
        } catch (error) {
            console.log(error)
        }
    }

    const {
        name,
        description,
        mrp,
        offer_price: offerPrice,
        image_url: imageUrl,
        available_quantity: availableQuantity,
      } = product;
     const totalDiscount = mrp-offerPrice;
     const discountPercentage=((totalDiscount/mrp)*100).toFixed(1);
    
    

    return (
        <>
        <Helmet>
        <title>{name}</title>
      </Helmet>
        <Nav home={name} isAddCart={true} isBack={true} actionBlock={<Link to='/cart'><CartIcon/></Link>}/>
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
                <div className='flex'>
                    <AddToCartBtn slug={slug} availableQuantity={availableQuantity} />
                    <button className='pt-2 font-semibold bg-blue-700 text-white px-3 py-2 rounded-lg align-middle my-3 ml-[3rem]'>buy now</button>
                </div>
            </div>

            
        </div>
        </>
    )
}

export default Product
