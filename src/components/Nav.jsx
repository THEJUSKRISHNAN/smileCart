import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Nav = ({ home = "Smile Cart", isAddCart = true, isBack = false ,actionBlock }) => {
    const history = useHistory();


    return ( 
        <nav className='flex border border-b-4 border-black justify-between h-[5rem] items-center px-7 w-full fixed bg-white max-sm:flex-col max-sm:h-[7rem] max-sm:justify-center'>

            <div className='flex max-sm:pb-2'>
                {isBack && <FaArrowLeft className='text-4xl mt-1 mr-4 hover:cursor-pointer' onClick={history.goBack} />}
                <div className='font-bold text-4xl max-sm:h-[3rem] max-sm:overflow-hidden '>{home}</div>
            </div>

            {isAddCart && actionBlock}
        </nav>
    )
}

export default Nav
