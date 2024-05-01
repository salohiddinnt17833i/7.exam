import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { isLoggedContext, loggedUserName } from '../App';

function Navbar() {
    const [loggedUser, setLoggedUser] = useContext(loggedUserName)
    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedContext);
    function handleSignout() {
        setIsLoggedIn(false)
        localStorage.setItem('isLoggedIn', false)
    }
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
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </div>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
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