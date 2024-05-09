import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Nav = ({ home = "Smile Cart", isAddCart = true, isBack = false ,actionBlock }) => {
    const history = useHistory();


    return (
        <nav className='flex border border-b-4 border-black justify-between h-[5rem] items-center px-7'>

            <div className='flex'>
                {isBack && <FaArrowLeft className='text-4xl mt-1 mr-4 hover:cursor-pointer' onClick={history.goBack} />}
                <div className='font-bold text-4xl '>{home}</div>
            </div>

            {isAddCart && actionBlock}
        </nav>
    )
}

export default Nav
