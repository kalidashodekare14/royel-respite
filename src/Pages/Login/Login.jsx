import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import google from '../../assets/google.png'
import github from '../../assets/github.png'
import { ToastContainer, toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { Helmet } from 'react-helmet-async';


const Login = () => {

    const { loginUser, googleSingIn, gitHubSingIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState('')




    const handlerLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        setError('')


        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                // navigate('/')
                toast.success('You have successfully logged in')
            })
            .catch(error => {
                console.log(error.message)
                setError('Your Email and password something wrong')
                toast.error('Your Email and password something wrong')
            })
    }




    const handleGoogleLogin = () => {
        googleSingIn()
            .then(result => {
                consle.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                consle.log(error.message)
            })
    }

    const handleGitHubSingIn = () => {

        gitHubSingIn()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div className='relative logBackground bg-no-repeat bg-cover bg-center lg:min-h-screen h-[120vh] flex justify-center items-center'>
            <Helmet>
                <title>Login | Royal Respite</title>
            </Helmet>
            <div data-aos="zoom-in-down" data-aos-duration="1000" className="z-0 bg-[#000000c5]  lg:w-[50%] w-full mx-5 border shadow-lg 
            px-3">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  text-white">
                        Sign in to your account
                    </h2>
                </div>

                <div className=" mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handlerLogin} className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input type='email' required name='email' className="block w-full  input   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input name='password' required type='password' className="block w-full  input  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                            </div>
                        </div>

                        <div>
                            <button

                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sign in
                            </button>
                            {
                                error && <span className='text-red-500'>{error}</span>
                            }

                        </div>
                        <div className='flex space-x-20 justify-center items-center'>
                            <span onClick={handleGoogleLogin} className='btn'>
                                <img className='w-8' src={google} alt="" />
                            </span>
                            <span onClick={handleGitHubSingIn} className='btn'>
                                <img className='w-8' src={github} alt="" />
                            </span>
                        </div>
                    </form>

                    <p className="mt-5 mb-5 text-center text-sm text-gray-500">
                        Don't have an account? {' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            <Link to="/signup">
                                Register
                            </Link>
                        </a>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;