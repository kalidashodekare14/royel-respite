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
        <div className='loginBackground bg-no-repeat bg-center bg-cover lg:min-h-screen h-[80vh] flex justify-center items-center'>
            <div data-aos="fade-down"  data-aos-duration="1000" className='card lg:w-2/5 lg:h-[70vh] border border-spacing-1 bg-[#000000b0] lg:space-y-3 lg:p-5'>
                <div className='flex justify-center items-center mb-10'>
                    {
                        user && <div>
                            {
                                user.photoURL ? <div>
                                    <img data-aos="fade-down"  data-aos-delay="1000" className='w-32 rounded-full' src={user.photoURL} alt="" />
                                </div>
                                : <img className='w-32 rounded-full' src={userNull} alt="" />
                            }
                        </div>  
                    }
                </div>
                <div className='flex items-center space-x-2'>
                    <FaChevronRight data-aos="zoom-in"  data-aos-delay="2000" className='text-3xl text-white' />
                    <h1 data-aos="fade-left"  data-aos-delay="2200" className='text-2xl text-white'>
                        Name: {user.displayName}
                    </h1>
                </div>
                <div className='flex items-center space-x-2'>
                    <FaChevronRight data-aos="zoom-in"  data-aos-delay="2300" className='text-3xl text-white' />
                    <h1 data-aos="fade-right"  data-aos-delay="2400" className='text-2xl text-white'>Email: {user.email}</h1>
                </div>
                <div className='flex justify-end items-center mb-5 mr-5'>
                    <Link to="/update_profile">
                        <button data-aos="zoom-in"  data-aos-delay="2500" className='btn mt-10 border-0 text-white bg-[#0fb45f]'>
                            <FaEdit className='text-3xl' />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;