import React from 'react'
import { useState, useEffect } from "react"
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import AllProductsApi from '../../src/apis/showAllProduts'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Nav from './Nav'
import searchApi from '../apis/searchProducts';

const Products = () => {
    const [record, setRecord] = useState([])
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        // fetchProducts();
        fetchSearchProducts();
    }, [searchKey]);

    const fetchProducts = async () => {
        try {
            const response = await AllProductsApi.showAllProducts();
            setRecord(response.products)
        } catch (error) {
            console.log("An error occurred:", error);
        }
    };

    // search products

    
    const fetchSearchProducts = async () => {
        try {
          const data = await searchApi.search(searchKey);
          setRecord(data.products);
        } catch (error) {
          console.log("error", error);
        }
      };

    return (
        <>
            <Nav actionBlock={<div className='flex'>
                <div className='relative'>
                    <input type="search" name="" id="" placeholder='Search Product'
                     className='w-[15rem] h-[2rem] pl-6 border border-gray-600 rounded-lg'
                     value={searchKey}
                      onChange={event => setSearchKey(event.target.value)} />
                    <CiSearch className='absolute top-2 left-1' />
                </div>

                <div className='relative flex pl-7'>
                    <FaCartShopping className='text-4xl' />
                    <span className='absolute bottom-8 right-0 font-bold '>0</span>
                </div>
            </div>} />

            <section className='grid grid-cols-4 mx-7 mb-7'>
                {record.map((item) => {
                    return <Link to={`product/${item.slug}`} className='mt-10 mx-5' key={item.name}>
                        <div className='border-2 border-black w-[15rem] rounded-xl h-[35rem] p-4' >
                            <img src={item.image_url} alt="" width={300} className='py-5 h-[15rem]' />
                            <h1 href="#" className='font-bold text-center text-xl hover:cursor-pointer'>{item.name}</h1>
                            <p className="text-center pt-2 font-semibold">MRP:{item.mrp}</p>
                            <p className="text-center pt-2 font-semibold">Offer Price:{item.offer_price}</p>
                            <p className="text-center pt-2 font-semibold">Available Quantity:{item.available_quantity}</p>
                            <button className=" pt-2 font-semibold bg-blue-700 text-white px-3 py-2 rounded-lg align-middle my-3 ml-[3rem]">Add to cart</button>
                        </div>
                    </Link>
                })}
                
                

            </section>
            {record.length===0 && <h1 className='text-[5rem] text-center mt-[15rem] font-bold'>NO DATA FOUND</h1>}
        </>


    )
}

export default Products
