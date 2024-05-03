import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import oval from '../assets/checkout/true.svg'
import head from '../assets/headphones/xx99-headphones1.png'
function Checkout() {

    const [storeData, setStoreData] = useState([]);
    const [allPrice, setAllPrice] = useState(0);

    useEffect(() => {
        let storedData = localStorage.getItem('storeData');
        if (storedData && storedData.length > 0) {
            const parsedData = JSON.parse(storedData);
            setStoreData(parsedData);
        }
    }, []);

    useEffect(() => {
        let all = 0;
        storeData.forEach(ele => {
            all += ele.price * ele.number;
        });
        setAllPrice(all);
    }, [storeData]);


    function handlePay() {

    }


    return (
        <div className='w-[full] bg-[white]'>
            <div className='w-[1110px] m-auto pt-20 pb-10'>
                <Link to={'/'}>Go back</Link>
            </div>
            <div className='w-[1110px] flex gap-10 m-auto'>
                <div className='w-[730px] h-[1126px] shadow-lg p-6'>
                    <h1 className='text-[32px] text-black font-semibold'>CHECKOUT</h1>
                    <div className='mt-10'>
                        <h3 className='uppercase text-orange-400 font-semibold'>Billing Detailes</h3>
                        <form className='grid grid-cols-2 gap-8'>
                            <label htmlFor="">
                                <span className='text-black font-medium'>Name</span>
                                <input type="text" placeholder="Alexei Ward" className="input bg-transparent input-bordered w-full max-w-xs mt-4" />
                            </label>

                            <label htmlFor="">
                                <span className='text-black font-medium'>Email Address</span>
                                <input type="email" placeholder="alexei@mail.com" className="input bg-transparent input-bordered w-full max-w-xs mt-4" />
                            </label>

                            <label htmlFor="">
                                <span className='text-black font-medium'>Phone Number</span>
                                <input type="tel" placeholder="+1 202-555-0136" className="input bg-transparent input-bordered w-full max-w-xs mt-4" />
                            </label>
                        </form>
                    </div>
                    <div className='mt-10'>
                        <h3 className='uppercase text-orange-400 font-semibold'>shipping info</h3>
                        <form className='w-full mt-4'>
                            <label className='flex flex-col w-[full]'>
                                <span className='text-black font-medium'>Adress</span>
                                <input type="text" placeholder="1137 Williams Avenue" className="input bg-transparent input-bordered w-full  mt-4" />
                            </label>
                        </form>
                        <form className='grid grid-cols-2 gap-8 mt-6'>
                            <label htmlFor="">
                                <span className='text-black font-medium'>Zip code</span>
                                <input type="number" placeholder="10001" className="input bg-transparent input-bordered w-full max-w-xs mt-4" />
                            </label>

                            <label htmlFor="">
                                <span className='text-black font-medium'>City</span>
                                <input type="text" placeholder="New York" className="input bg-transparent input-bordered w-full max-w-xs mt-4" />
                            </label>

                            <label htmlFor="">
                                <span className='text-black font-medium'>Country</span>
                                <input type="tel" placeholder="United States" className="input bg-transparent input-bordered w-full max-w-xs mt-4" />
                            </label>
                        </form>
                    </div>
                    <div className='mt-10'>
                        <h2 className='uppercase text-orange-400 font-semibold'>Payment Detailes</h2>
                        <form className='grid grid-cols-2'>
                            <h3 className='text-black font-semibold mt-4'>Payment Method</h3>
                            <div className='mt-10 flex flex-col gap-4'>
                                <div className="form-control">
                                    <label className="label border cursor-pointer max-w-xs p-4 border-gray-900 rounded-xl">
                                        <input type="radio" name="radio-10" className="radio checked:bg-orange-400" checked />
                                        <span className="label-text text-black text-[15px] font-semibold">e-Money</span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label border cursor-pointer max-w-xs p-4 border-gray-900 rounded-xl">
                                        <input type="radio" name="radio-10" className="radio checked:bg-orange-400" />
                                        <span className="label-text text-black text-[15px] font-semibold">Cash on Delivery</span>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='grid grid-cols-2 w-[full] mt-10'>
                        <label htmlFor="">
                            <span className='text-black font-medium'>e-Money Number</span>
                            <input type="number" placeholder="238521993" className="input bg-transparent input-bordered w-full max-w-xs mt-4" />
                        </label>

                        <label htmlFor="">
                            <span className='text-black font-medium'>e-Money PIN</span>
                            <input type="text" placeholder="6891" className="input bg-transparent input-bordered w-full max-w-xs mt-4" />
                        </label>
                    </div>
                </div>
                <div className='w-[350px] scroll shadow-lg p-6'>
                    <h2 className='text-[18px] text-black font-semibold'>SUMMARY</h2>
                    <div className='flex flex-col gap-3'>
                        {
                            storeData.map((ele, index) => {
                                return (
                                    <div key={index} className='flex items-center justify-between'>
                                        <div className='flex gap-6 items-center'>
                                            <div className='w-[64px] h-[64px] bg-[#F1F1F1] flex justify-center rounded-lg'>
                                                <img className='w-[35px] my-auto h-[40px]' src={ele.img} alt="" />
                                            </div>
                                            <div>
                                                <p className='text-black font-semibold'>{ele.name}</p>
                                                <p>$ {ele.price}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span>x{ele.number}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='mt-6'>
                        <span className='flex items-center justify-between mt-2'>
                            <span>TOTAL</span>
                            <span className='font-bold text-black'>$ {allPrice}</span>
                        </span>
                        <span className='flex items-center justify-between mt-2'>
                            <span>SHIPPING</span>
                            <span className='font-bold text-black'>$ 50</span>
                        </span>
                        <span className='flex items-center justify-between mt-2'>
                            <span>VAT (INCLUDED)</span>
                            <span className='font-bold text-black'>$ 1079</span>
                        </span>

                        <span className='flex items-center justify-between mt-4'>
                            <span>GRAND TOTAL</span>
                            <span className='font-bold text-orange-400'>$ {allPrice + 50 + 1079}</span>
                        </span>
                        <button onClick={() => handlePay(document.getElementById('my_modal_5').showModal())} className='w-full mt-10 btn bg-orange-400 text-white rounded-none border-none'>CONTINUE & PAY</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className='p-2'>
                                    <img src={oval} alt="" />
                                    <h2 className="py-4 text-[32px] text-white">THANK YOU FOR YOUR ORDER</h2>
                                    <p className=''>You will receive an email confirmation shortly.</p>
                                </div>
                                <div>
                                    <div className='flex items-center justify-center'>
                                        <div className="carousel h-[150px] carousel-vertical rounded-box">
                                            {
                                                storeData.length > 0 && storeData.map((ele, index) => {
                                                    <div className="carousel-item  mt-5">
                                                        <div className='w-[246px] h-[140px] rounded-l-lg p-5 bg-[#F1F1F1] flex items-center gap-4'>
                                                            <img className='w-[28px] h-[32px] ' src={ele.img} alt="Img" />
                                                            <div className='flex items-center gap-5'>
                                                                <span className='flex flex-col'>
                                                                    <span className=' font-semibold text-black uppercase'>{ele.name}</span>
                                                                    <span>$ {ele.price}</span>
                                                                </span>

                                                                <span>x{ele.umber}</span>
                                                            </div>
                                                        </div>
                                                        <div className='w-[198px] h-[140px] rounded-r-lg p-10 bg-[#000000]'>
                                                            <span className=' flex flex-col gap-2 mx-auto my-auto'>
                                                                <span>GRANT TOTAL</span>
                                                                <span className='text-white font-semibold'>$ {allPrice + 50 + 1079}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                                <div className="modal-action justify-center">
                                    <form method="dialog">
                                        <button className="w-[444px]  btn bg-orange-400 text-[20px] text-white hover:bg-orange-300">BACK TO HOME</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout