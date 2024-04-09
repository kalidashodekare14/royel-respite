import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaEye } from "react-icons/fa";


const SingUp = () => {

    const { registerUser } = useContext(AuthContext)
    const [passwordShow, setPasswordShow] = useState(true)
    const [passwordError, setPasswordError] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        // console.log(data.email)
        const { email, password } = data

        setPasswordError('')
        setSuccess('')
        setError('')

        if(!/[A-Z]/.test(password)){
            setPasswordError('Your password should  have at least one uppercase characters.')
            return
        }
        else if(!/[a-z]/.test(password)){
            setPasswordError('Lowercase letters are required')
            return
        }


        registerUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Your Sing Up Successfully')
            })
            .catch(error => {
                console.log(error.message)
                setError('Your Email Already Used')
            })
    }

    return (
        <div className="card border m-auto mt-10 shadow-lg lg:w-1/3 flex min-h-[50vh] flex-1 flex-col justify-center items-center px-6  lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sing Up to your account
                </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Full Name
                        </label>
                        <div className="mt-2">
                            <input type='text' {...register("fullName", {
                                required: {
                                    value: true,
                                    message: 'You must fill the input'
                                }
                            })} className="input input-bordered w-full"
                            />
                            {errors.fullName && <span className='text-red-500'>{errors.fullName.message}</span>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input type='email' {...register("email", {
                                required: true,
                                required: {
                                    value: true,
                                    message: 'Your must fill the input'
                                },

                            },

                            )} className="input input-bordered w-full"
                            />
                            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            photo URL
                        </label>
                        <div className="mt-2">
                            <input type='photo' {...register("photoUrl", {
                                required: {
                                    value: true,
                                    message: 'You must fill the input'
                                }
                            })} className="input input-bordered w-full"
                            />
                            {errors.photoUrl && <span className='text-red-500'>{errors.photoUrl.message}</span>}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <div className='flex items-center input-bordered border rounded-xl px-2'>
                                <input type={passwordShow ? 'password' : 'text'}
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'You must fill the input'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be at least 6 character'
                                        },
                                        
                                    })} className="input  w-full"
                                />
                                <div onClick={() => setPasswordShow(!passwordShow)} >
                                    <FaEye className='text-[16px]' />
                                </div>
                            </div>
                            {errors.password && <span className='text-red-500'>{errors.password.message}</span>}
                            {
                             passwordError && <span className='text-red-500'>{passwordError}</span>
                            }
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sing Up
                        </button>
                        {
                           success && <span className='text-blue-500'>{success}</span> 
                        }
                        {
                           error && <span className='text-red-500'>{error}</span> 
                        }
                    </div>
                </form>

                <p className="mt-4 mb-5 text-center text-sm text-gray-500">
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