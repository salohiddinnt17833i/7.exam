import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedContext, loggedUserName } from '../App';

function Login() {
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedContext);
    const [loggedUser, setLoggedUser] = useContext(loggedUserName)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storeUsers = JSON.parse(localStorage.getItem('users'));
        if (storeUsers) {
            setUsers(storeUsers);
        }
    }, []);

    function handleLogin() {
        const email = emailRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        if (!users.length > 0) {
            navigate('/register')
        }

        const user = users.find(user => user.userEmail === email && user.userPassword === password);

        if (user) {
            setIsLoggedIn(true);
            setLoggedUser(user.userName);
            navigate('/');
            localStorage.setItem('isLoggedIn', true)
        } else {
            setIsLoggedIn(false);
            passwordRef.current.value = '';
            emailRef.current.value = '';
        }
    }

    return (
        <div className='w-60 sm:w-96 m-auto mt-20 flex flex-col gap-6'>
            <h1 className='text-xl sm:text-4xl text-center'>Log In</h1>
            <label className="input input-bordered flex items-center gap-2">
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input ref={emailRef} type="email" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                <input ref={passwordRef} type="password" className="grow" placeholder='****' />
            </label>
            <button className='btn btn-primary text-xl' onClick={handleLogin}>Log In</button>
            {/* Show message to register instead of redirecting */}
            <p className="text-center text-primary">
                Don't have an account? <Link to="/register" className='hover:underline'>Register here</Link>
            </p>
        </div>
    );
}

export default Login;
