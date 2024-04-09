import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {

    const { user } = useContext(AuthContext)
    console.log(user)

    const links = <>
        <li className='text-[16px]'><NavLink to="/">Home</NavLink></li>
        <li className='text-[16px]'><NavLink to="/about_us">About Us</NavLink></li>
        <li className='text-[16px]'><NavLink to="/gellary">Gellery</NavLink></li>
        <li className='text-[16px]'><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className="navbar sticky text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Royal Respite</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div>
                        {user.email}
                         <button className="btn bg-[#0077b6] text-white">Log Out</button>
                        
                    </div>
                        : 
                        <Link to="/signin">
                            <button className="btn bg-[#0077b6] text-white">Sign in</button>
                        </Link>

                }
                
            </div>
        </div>
    );
};

export default Navbar;