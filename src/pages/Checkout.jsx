import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <div className='w-[full] bg-[white]'>
            <div className='w-[1110px] m-auto pt-20 pb-10'>
                <Link to={'/'}>Go back</Link>
            </div>
            <div className='w-[1110px] flex gap-10 m-auto'>
                <div className='w-[730px] h-[1126px] shadow-lg p-6'>
                    <h1 className='text-[32px] text-black font-semibold'>CHECKOUT</h1>
                </div>
                <div className='w-[350px] h-[612px] shadow-lg'></div>
            </div>
        </div>
    )
}

export default Checkout