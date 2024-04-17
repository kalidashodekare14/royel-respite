import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './UpdateProfile.css'
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {

    const { user, updateProfileChange } = useContext(AuthContext)

    const handleUpdateProfile = e => {
        e.preventDefault()
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value
        updateProfileChange(name, photoUrl)

    }

    return (
        <div className='updateProfile bg-no-repeat bg-cover bg-center min-h-screen flex justify-center items-center'>
            <Helmet>
                <title>Update Profile | Royal Respite</title>
            </Helmet>
            <div data-aos="zoom-in" data-aos-duration="1000" className="lg:w-1/3 md:w-1/2 w-full mx-3 border border-spacing-1    shadow-xl bg-[#00000087]">
                <h1  className='text-center lg:text-4xl text-2xl my-5 text-white'>Update Your Profile</h1>
                <div className='flex justify-center'>
                    <img className='w-32 rounded-full' src={user.photoURL} alt="" />
                </div>
                <div className="px-3">
                    <form className='space-y-2 mb-5' onSubmit={handleUpdateProfile}>
                        <p  className='text-[18px] text-white'>Update Your Name</p>
                        <input  className='input input-bordered w-full' name='name' type="name" />
                        <br />
                        <p  className='text-[18px] text-white'>Update Your Photo Url</p>
                        <input  className='input input-bordered w-full' type="text" name='photoUrl' />
                        <br />
                        <div>

                            <input className='btn bg-[#0fb45f] text-white border-0' type="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;