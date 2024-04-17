import React, { useContext } from 'react';
import './UserProfile.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaChevronRight } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import userNull from '../../assets/userNull.png'
import { Helmet } from 'react-helmet-async';

const UserProfile = () => {

    const { user, loader } = useContext(AuthContext)

    return (
        <div className='loginBackground bg-no-repeat bg-center bg-cover lg:min-h-screen h-[120vh] flex justify-center items-center'>
            <Helmet>
                <title>User Profile | Royal Respite</title>
            </Helmet>
            <div data-aos="fade-down"  data-aos-duration="1000" className='card lg:w-2/5 lg:h-[70vh] border border-spacing-1 bg-[#000000b0] lg:space-y-3 lg:p-5 mx-5 md:mt-20'>
                <div className='flex justify-center items-center mb-10'>
                    {
                        user ? <div>
                            {
                                user.photoURL ? <div>
                                    <img  className='w-32 rounded-full' src={user.photoURL} alt="" />
                                </div>
                                : <img className='w-32 rounded-full' src={userNull} alt="" />
                            }
                        </div>  
                        : <span className="loading loading-spinner loading-lg"></span>
                    }
                </div>
                <div className='flex items-center space-x-2'>
                    <FaChevronRight  className='text-3xl text-white' />
                    <h1  className='text-2xl text-white'>
                        Name: {user.displayName}
                    </h1>
                </div>
                <div className='flex items-center space-x-2'>
                    <FaChevronRight  className='text-3xl text-white' />
                    <h1  className='text-2xl text-white'>Email: {user.email}</h1>
                </div>
                <div className='flex justify-end items-center mb-5 mr-5'>
                    <Link to="/update_profile">
                        <button  className='btn mt-10 border-0 text-white bg-[#0fb45f]'>
                            <FaEdit className='text-3xl' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;