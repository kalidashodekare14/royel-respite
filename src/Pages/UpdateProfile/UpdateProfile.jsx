import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateEmail, updateProfile } from 'firebase/auth';
import auth from '../../Firebase/Firebase';
import './UpdateProfile.css'

const UpdateProfile = () => {

    const { user, updateProfileChange} = useContext(AuthContext)

    const handleUpdateProfile = e => {
        e.preventDefault()
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value
        updateProfileChange(name, photoUrl)
        
    }

    return (
        <div className='updateProfile bg-no-repeat bg-cover bg-center min-h-screen flex justify-center items-center'>
                <div data-aos="zoom-in"  data-aos-duration="1000" className="lg:w-1/3 md:w-1/2 w-full mx-3 border border-spacing-1    shadow-xl bg-[#00000087]">
                    <h1 data-aos="fade-down"  data-aos-delay="1000" className='text-center lg:text-4xl text-2xl my-5 text-white'>Update Your Profile</h1>
                    <div data-aos="fade-down"  data-aos-delay="2000" className='flex justify-center'>
                        <img className='w-32 rounded-full' src={user.photoURL} alt="" />
                    </div>
                    <div className="px-3">
                        <form className='space-y-2 mb-5' onSubmit={handleUpdateProfile}>
                            <p data-aos="fade-left"  data-aos-delay="2200" className='text-[18px] text-white'>Name: {user.displayName}</p>
                            <input data-aos="fade-right"  data-aos-delay="2300" className='input input-bordered w-full' name='name' type="name" />
                            <br />
                            <p data-aos="fade-right"  data-aos-delay="2400" className='text-[18px] text-white'>Enter Your Photo Url</p>
                            <input data-aos="fade-left"  data-aos-delay="2500" className='input input-bordered w-full' type="text" name='photoUrl' />
                            <br />
                            <input data-aos="fade-up"  data-aos-delay="2600"  className='btn' type="Submit" />
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default UpdateProfile;