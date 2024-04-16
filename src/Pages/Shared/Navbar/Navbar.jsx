import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import userNull from '../../../assets/userNull.png'
import logo from '../../../../public/logo.png'

const Navbar = () => {

    const { user, useSignOut } = useContext(AuthContext)
    console.log(user)

    const links = <>
        <li className='text-[16px] text-black'>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white active:bg-[#0fb469] focus:bg-[#0fb469] focus:text-white bg-[#0fb469]" : ""
            } to="/">Home</NavLink>
        </li>
        <li className='text-[16px] text-black'>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white active:bg-[#0fb469] focus:bg-[#0fb469] focus:text-white bg-[#0fb469]" : ""
            } to="/about_us">About Us</NavLink>
        </li>
        <li className='text-[16px] text-black'>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white active:bg-[#0fb469] focus:bg-[#0fb469] focus:text-white bg-[#0fb469]" : ""
            } to="/contact">Contact</NavLink>
        </li>
        <li className={`${user ? 'visible' : 'hidden'} text-black text-[16px]`}>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white active:bg-[#0fb469] focus:bg-[#0fb469] focus:text-white bg-[#0fb469]" : ""
            } to="/blog">Blog</NavLink>
        </li>
        <li className={`${user ? 'visible' : 'hidden'} text-black text-[16px]`}>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white active:bg-[#0fb469] focus:bg-[#0fb469] focus:text-white bg-[#0fb469]" : ""
            } to="/update_profile">Update Profile</NavLink>
        </li>
        <li className={`${user ? 'visible' : 'hidden'} text-black text-[16px]`}>
            <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white active:bg-[#0fb469] focus:bg-[#0fb469] focus:text-white bg-[#0fb469]" : ""
            } to="/user_profile">User Profile</NavLink>
        </li>

    </>

    const handleSignOut = () => {
        useSignOut()
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="absolute bg-base-100  navbar text-white">
            <div className="navbar-start">
                <div className="dropdown z-0">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className=" btn-ghost text-xl text-black">
                    <img className='w-52' src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className='flex justify-end items-center space-x-2'>
                        <div className="tooltip tooltip-left" data-tip={user.displayName}>
                            {
                                user.photoURL ? <div className='border-[3px] border-[#0fb469] rounded-full '>
                                    <img className=' lg:w-[100%] h-[10vh] rounded-full shadow-black' src={user.photoURL} alt="" />
                                </div>
                                    : <img className=' lg:w-[100%] h-[10vh] rounded-full shadow-black' src={userNull} alt="" />
                            }
                        </div>
                        <button onClick={handleSignOut} className="btn bg-[#0077b6] text-white">Log Out</button>
                    </div>
                        :
                        <Link to="/signin">
                            <button className="btn bg-[#57cc99] text-white">Sign in</button>
                        </Link>

                }

            </div>
        </div>
    );
};

export default Navbar;