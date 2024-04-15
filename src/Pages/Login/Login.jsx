import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import google from '../../assets/google.png'
import github from '../../assets/github.png'

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
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                setError('Your email is not registered, please register')
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
            .then(error => {
                console.log(error.message)
            })
    }



    return (
        <div className='relative bg-bgImage bg-no-repeat bg-cover bg-center min-h-screen flex justify-center items-center'>
            <div data-aos="zoom-in-down" data-aos-duration="1000" className="z-0 bg-[#000000c5]  w-[50%] border shadow-lg ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">

                    <h2 data-aos="zoom-in-down" data-aos-delay="1000" className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight  text-white">
                        Sign in to your account
                    </h2>
                </div>

                <div className=" mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handlerLogin} className="space-y-6" action="#" method="POST">
                        <div>
                            <label data-aos="fade-right" data-aos-delay="2000" htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input data-aos="fade-left" data-aos-delay="2200" type='email' required name='email' className="block w-full  input   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label data-aos="fade-right" data-aos-delay="2300" htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Password
                                </label>
                                <div data-aos="fade-left" data-aos-delay="2400" className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input data-aos="fade-right" data-aos-delay="2500" name='password' required type='password' className="block w-full  input  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                            </div>
                        </div>

                        <div>
                            <button
                                data-aos="fade-left" data-aos-delay="2600"
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Sign in
                            </button>
                            {
                                error && <span className='text-red-500'>Your Email and password something wrong</span>
                            }

                        </div>
                        <div className='flex space-x-20 justify-center items-center'>
                            <span data-aos="fade-right" data-aos-delay="2700" onClick={handleGoogleLogin} className='btn'>
                                <img className='w-8' src={google} alt="" />
                            </span>
                            <span data-aos="fade-left" data-aos-delay="2800" onClick={handleGitHubSingIn} className='btn'>
                                <img className='w-8' src={github} alt="" />
                            </span>
                        </div>
                    </form>

                    <p  data-aos="fade-up" data-aos-delay="2900" className="mt-5 mb-5 text-center text-sm text-gray-500">
                        Don't have an account? {' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            <Link to="/signup">
                                Register
                            </Link>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;