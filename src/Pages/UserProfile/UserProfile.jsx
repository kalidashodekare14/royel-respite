import React, { useContext } from 'react';
import img from '../../assets/img.jpg'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UserProfile = () => {

    const { user } = useContext(AuthContext)

    return (
        <div className='flex justify-center space-x-5 items-center my-20'>
            <div className="card border border-spacing-1  w-2/1 bg-base-100 shadow-xl">
                <h1 className='text-center text-4xl my-10'>User Profile</h1>
                <div className='flex justify-center'>
                    <img className='w-32 rounded-full' src={user.photoURL} alt="" />
                </div>
                <div className="card-body">
                    <h1 className='text-3xl'>Name: <span className='text-blue-500'>{user.displayName}</span></h1>
                    <p className='text-2xl'>Email: {user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;