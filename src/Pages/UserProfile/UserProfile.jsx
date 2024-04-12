import React, { useContext } from 'react';
import './UserProfile.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaChevronRight } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import userNull from '../../assets/userNull.png'

const UserProfile = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className='loginBackground bg-no-repeat bg-center bg-cover min-h-screen flex justify-center items-center'>
            <div className='card w-2/5 h-[50vh] border border-spacing-1 bg-[#000000b0] space-y-3 p-5'>
                <div className='flex justify-center items-center mb-10'>
                    {
                        user && <div>
                            <img className='w-32 rounded-full' src={user.photoURL} alt="" />
                        </div>  
                    }
                </div>
                <div className='flex items-center space-x-2'>
                    <FaChevronRight className='text-3xl text-white' />
                    <h1 className='text-2xl text-white'>
                        Name: {user.displayName}
                    </h1>
                </div>
                <div className='flex items-center space-x-2'>
                    <FaChevronRight className='text-3xl text-white' />
                    <h1 className='text-2xl text-white'>Email: {user.email}</h1>
                </div>
                <div className='flex justify-end items-center'>
                    <Link to="/update_profile">
                        <button className='btn'>
                            <FaEdit className='text-4xl' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;