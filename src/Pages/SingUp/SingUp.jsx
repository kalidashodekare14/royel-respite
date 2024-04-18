import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { FaEyeSlash } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
import './SingUp.css'
import { Helmet } from 'react-helmet-async';


const SingUp = () => {

    const { registerUser, updateProfileChange } = useContext(AuthContext)
    const [passwordShow, setPasswordShow] = useState(true)
    const [passwordError, setPasswordError] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError,] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const photoUrl = e.target.photo.value
        const password = e.target.password.value
        // console.log(name, email, photoUrl, password)

        setPasswordError('')
        setSuccess('')
        setError('')

        

        if (password.length < 6) {
            setPasswordError('Password must be 6 Character')
            toast.warning("Password must be 6 Character")
            return
        }
        else if (!/[a-z]/.test(password)) {
            setPasswordError('Must be lowercase Character')
            toast.warning("Must be lowercase Character")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setPasswordError('Any single character must be uppercase')
            toast.warning("Any single character must be uppercase")
            return

        }

        registerUser(email, password)
            .then(result => {
                console.log(result.user)
                updateProfileChange(name, photoUrl)
                
                setSuccess('Your Register Successfully')
                toast("Your Register Successfully")
            })
            .catch(error => {
                console.log(error.message)
                setError('Your Email Already Use', error.message)
                toast.error("Your Email Already Use")
            })


    }

    






    return (
        <div className='singUpBackground bg-no-repeat bg-center bg-cover lg:min-h-screen h-[120vh] flex justify-center items-center'>
            <Helmet>
                <title>SingUp | Royal Respite</title>
            </Helmet>
            <div data-aos="zoom-in" data-aos-duration="1000" className="lg:w-[50%] w-full mx-5 px-5 border  shadow-lg bg-[#000000c5]">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="font-roboto mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Sing Up to your account
                    </h2>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleRegister} className="space-y-3" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="text-white block font-roboto text-sm font-medium leading-">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input name='name' type='text' required className="input input-bordered w-full"
                                />

                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-roboto text-sm font-medium leading-6 text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input name='email' type='email' required className="input input-bordered w-full"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className=" block font-roboto text-sm font-medium leading-6 text-white">
                                photo URL
                            </label>
                            <div className="mt-2">
                                <input name='photo' type='photo' required className="input input-bordered w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block font-roboto text-sm font-medium leading-6 text-white">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <div className='flex items-center input-bordered border rounded-xl px-2 bg-[white]'>
                                    <input name='password' required type={passwordShow ? 'password' : 'text'}
                                        className="input  w-full"
                                    />
                                    {
                                        passwordShow ?
                                            <div onClick={() => setPasswordShow(!passwordShow)} >
                                                <FaEye className='text-[18px]' />
                                            </div>
                                            :
                                            <div onClick={() => setPasswordShow(!passwordShow)} >
                                                <FaEyeSlash className='text-[18px]' />
                                            </div>
                                    }

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
                            {
                                success && <span className='text-blue-500'>{success}</span>
                            }
                            {
                                error && <span className='text-red-500'>{error}</span>
                            }
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
            <ToastContainer />
        </div>
    );
};

export default SingUp;