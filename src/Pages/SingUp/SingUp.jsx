import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaEye } from "react-icons/fa";


const SingUp = () => {

    const { registerUser } = useContext(AuthContext)
    const [passwordShow, setPasswordShow] = useState(true)
    const [passwordError,  setPasswordError] = useState('')
    

    const handleRegister = e =>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photoUrl = e.target.photo.value
        const password = e.target.password.value
        // console.log(name, email, photoUrl, password)

        setPasswordError('')   

        if(password.length < 6){
           return setPasswordError('Password must be 6 Character')
        }
        else if(!/[a-z]/.test(password)){
            return setPasswordError('Must be lowercase Character')
        }
        else if(!/[A-Z]/.test(password)){
            return setPasswordError('Any single character must be uppercase')
        }

        registerUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error.message)
        })


    }
   
   

   

    return (
        <div className="card border m-auto mt-10 shadow-lg lg:w-1/3 flex min-h-[50vh] flex-1 flex-col justify-center items-center px-6  lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="font-roboto mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sing Up to your account
                </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleRegister}  className="space-y-3" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block font-roboto text-sm font-medium leading-6 text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input name='name' type='text' required className="input input-bordered w-full"
                            />
                            
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email"  className="block font-roboto text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input name='email' type='email' required  className="input input-bordered w-full"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-roboto text-sm font-medium leading-6 text-gray-900">
                            photo URL
                        </label>
                        <div className="mt-2">
                            <input name='photo' type='photo' required className="input input-bordered w-full"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block font-roboto text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <div className='flex items-center input-bordered border rounded-xl px-2'>
                                <input name='password' required type={passwordShow ? 'password' : 'text'}
                                    className="input  w-full"
                                />
                                <div onClick={() => setPasswordShow(!passwordShow)} >
                                    <FaEye className='text-[16px]' />
                                </div>
                            </div>
                            {
                                passwordError && <span className='text-red-500'>{passwordError}</span>
                            }
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex font-roboto w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sing Up
                        </button>
                        
                    </div>
                </form>

                <p className="mt-4 font-roboto mb-5 text-center text-sm text-gray-500">
                    Already have an account? {' '}
                    <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        <Link to="/signin">
                            Login
                        </Link>
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SingUp;