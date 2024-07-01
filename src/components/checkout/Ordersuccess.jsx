import React from 'react'
import { FaRegSmileBeam } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Helmet } from 'react-helmet'

const Ordersuccess = () => {
    return (
        <>

            <Helmet>
                <title>OrderSuccess</title>
            </Helmet>
            <div className='grid place-items-center mt-[10%]'>
                <FaRegSmileBeam className='text-[10rem] text-green-600' />
                <p className='text-[5rem]  text-green-600'>order placed successful</p>
                <Link to="/"> click here to go to home page</Link>
            </div>
            
        </>

    )
}

export default Ordersuccess
