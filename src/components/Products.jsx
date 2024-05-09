import React from 'react'
import { useState, useEffect } from "react"
import AllProductsApi from '../../src/apis/showAllProduts'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Products = () => {
    const [record, setRecord] = useState([])

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await AllProductsApi.showAllProducts();
            setRecord(response.products)
        } catch (error) {
            console.log("An error occurred:", error);
        }


    };

    return (
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


    )
}

export default Products
