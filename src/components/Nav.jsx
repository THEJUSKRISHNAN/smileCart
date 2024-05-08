import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';

const Nav = ({ home = "Smile Cart", isAddCart = true, isBack = false }) => {
    const history = useHistory();
    const [searchKey, setSearchKey] = useState("");
    return (
        <nav className='flex border border-b-4 border-black justify-between h-[5rem] items-center px-7'>

            <div className='flex'>
                {isBack && <FaArrowLeft className='text-4xl mt-1 mr-4 hover:cursor-pointer' onClick={history.goBack} />}
                <div className='font-bold text-4xl '>{home}</div>
            </div>

            {isAddCart && <div className='flex'>
                <div className='relative'>
                    <input type="text" name="" id="" placeholder='Search Product' className='w-[15rem] h-[2rem] pl-6 border border-gray-600 rounded-lg' value={searchKey} onChange={event => setSearchKey(event.target.value)}/>
                    <CiSearch className='absolute top-2 left-1' />
                </div>

                <div className='relative flex pl-7'>
                    <FaCartShopping className='text-4xl' />
                    <span className='absolute bottom-8 right-0 font-bold '>0</span>
                </div>
            </div>}
        </nav>
    )
}

export default Nav
