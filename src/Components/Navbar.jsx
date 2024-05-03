import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { isLoggedContext, loggedUserName } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { parse } from 'postcss';
import headphones2 from '../assets/headphones/xx99-headphones1.png';
import { remove } from '../store/storeData';

function Navbar() {
    const [loggedUser, setLoggedUser] = useContext(loggedUserName);
    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedContext);
    const [num, setNum] = useState(1);
    const [storeDataa, setStoreData] = useState([]);
    const [allPrice, setAllPrice] = useState(0);

    const dispatch = useDispatch()

    function handleSignout() {
        setIsLoggedIn(false);
        localStorage.setItem('isLoggedIn', false);
    }
    function handleInc() {
        if (num === 1) {
            setNum(num);
        } else {
            setNum(num - 1);
        }
    }
    function handleDec() {
        setNum(num + 1);
    }
    function handleCart() {
        let storeData = localStorage.getItem('storeData');
        if (storeData && storeData.length > 0) {
            const parsedData = JSON.parse(storeData);
            setStoreData(parsedData)
        }
    }

    function handleRemove() {
        localStorage.removeItem('storeData');
        dispatch(remove([]))
        setStoreData([])
    }

    useEffect(() => {
        let all = 0;
        storeDataa.forEach(ele => {
            all += ele.price * ele.number;
        });
        setAllPrice(all);
    }, [storeDataa]);


    return (
        <div className='w-full bg-[#131313]'>
            <div className='w-[1110px] m-auto'>
                <div className="navbar pb-3">
                    <div className="navbar-start">
                        <Link to={'/'} className="text-2xl font-bold text-white">audiophile</Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><NavLink className='hover:text-[#D87D4A] text-white hover:bg-transparent' to={'/'}>HOME</NavLink></li>
                            <li><NavLink className='hover:text-[#D87D4A] text-white hover:bg-transparent' to={'/headphones'}>HEADPHONES</NavLink></li>
                            <li><NavLink className='hover:text-[#D87D4A] text-white hover:bg-transparent' to={'/speakers'}>SPEAKERS</NavLink></li>
                            <li><NavLink className='hover:text-[#D87D4A] text-white hover:bg-transparent' to={'/earphones'}>EARPHONES</NavLink></li>
                        </ul>
                    </div>
                    <div className="navbar-end flex items-center gap-2">
                        <div className="dropdown dropdown-end">
                            <div onClick={handleCart} tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    {/* <span className="badge badge-sm indicator-item">8</span> */}
                                </div>
                            </div>
                            <div tabIndex={0} className="mt-3 p-5 z-[1] card card-compact dropdown-content w-[470px] bg-[white]  shadow">
                                <span className='text-black font-semibold uppercase flex items-center justify-between'>
                                    <span>Card ({storeDataa.length})</span>
                                    {storeDataa.length > 0 ? <span className='text-[10px] capitalize  underline cursor-pointer' onClick={handleRemove}>Remove All</span> : <></>}
                                </span>

                                <div className="card-body w-full">
                                    {
                                        storeDataa.map((ele, index) => {
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
                                                        <span className=' rounded-lg w-[100px] flex justify-center text-center text-black'>
                                                            <span onClick={handleInc} className='w-1/3 p-2 cursor-pointer bg-[#F1F1F1]'>-</span>
                                                            <span className='w-1/3 p-2 bg-[#F1F1F1]'>{ele.number}</span>
                                                            <span onClick={handleDec} className='w-1/3 p-2 cursor-pointer bg-[#F1F1F1]'>+</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className='w-full flex flex-col'>
                                        <span className='text-black font-semibold flex items-center justify-between p-2'>
                                            <span>TOTAL</span>
                                            <span>$ {allPrice}</span>
                                        </span>
                                        <div className='w-[full] px-16 mt-6'>
                                            {
                                                storeDataa.length > 0 ? <Link to={'/checkout'} className='btn mx-auto bg-orange-500 border-none text-white rounded-none w-[300px]    hover:bg-orange-300'>CHECKOUT</Link> : <></>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span onClick={handleSignout} className='cursor-pointer text-white bg-orange-400 rounded-lg py-1 px-2'>Sign Out</span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Navbar