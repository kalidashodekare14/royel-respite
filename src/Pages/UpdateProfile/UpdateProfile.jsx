import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateEmail, updateProfile } from 'firebase/auth';
import auth from '../../Firebase/Firebase';
import './UpdateProfile.css'

const UpdateProfile = () => {

    const { user } = useContext(AuthContext)

    const handleUpdateProfile = e => {
        // e.preventDefault()
        const name = e.target.name.value
        const photoUrl = e.target.photoUrl.value
        // console.log(name, email)
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
            .then(() => {
                // console.log(result.user)
            })
            .catch(() => {
                // console.log(error.message)
            })




    }

    return (
        <div className='updateProfile bg-no-repeat bg-cover bg-center min-h-screen flex justify-center items-center'>
                <div className="w-1/3 border border-spacing-1    shadow-xl bg-[#00000087]">
                    <h1 className='text-center text-4xl my-5 text-white'>Update Your Profile</h1>
                    <div className='flex justify-center'>
                        <img className='w-32 rounded-full' src={user.photoURL} alt="" />
                    </div>
                    <div className="px-3">
                        <form className='space-y-2 mb-5' onSubmit={handleUpdateProfile}>
                            <p className='text-[18px] text-white'>Name: {user.displayName}</p>
                            <input className='input input-bordered w-full' name='name' type="name" />
                            <br />
                            <p className='text-[18px] text-white'>Enter Your Photo Url</p>
                            <input className='input input-bordered w-full' type="text" name='photoUrl' />
                            <br />
                            <input className='btn' type="Submit" />
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default UpdateProfile;