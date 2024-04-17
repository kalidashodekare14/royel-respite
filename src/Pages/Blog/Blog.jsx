import './Blog.css'
import img from '../../assets/img.jpg'
import { useLoaderData } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaArrowRight, FaRegFolderOpen } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
const Blog = () => {

    const blogs = useLoaderData()

    return (
        <div>
            <Helmet>
                <title>Blog | Royal Respite</title>
            </Helmet>
            <div className='blogImage bg-no-repeat bg-center bg-cover h-[60vh] flex justify-center items-center'>
                <h1 data-aos="fade-down" data-aos-duration="1000" className="text-7xl text-white font-popins mt-10">Blog</h1>
            </div>
            <div className='flex flex-col lg:flex-row my-20 lg:mx-20 lg:space-x-10 mx-5'>
                <div className=' space-y-5 lg:w-[70%]'>
                    {
                        blogs.map(blog =>
                            <div className='' key={blog.id}>

                                <div data-aos="zoom-in-right" data-aos-duration="1000" className="card lg:card-side flex-col bg-base-100 shadow-xl ">
                                    <figure className='flex-1 relative'>
                                        <img className='h-full w-full' src={blog.image} alt="Movie" />
                                        <div>
                                        <span className='absolute left-3 top-3 p-3 bg-[#0fb469] text-white font-semibold'>{blog.date}</span>
                                        </div>
                                    </figure>

                                    <div className=" flex-1">
                                        <div className='space-y-5 p-3 lg:p-8'>
                                            <div className='flex items-center space-x-5'>
                                                <span className='font-popins  text-[#afacac]'>{blog.admin}</span>
                                                <span className='font-popins text-[#afacac]'>Comments {blog.comments}</span>
                                            </div>
                                            <h1 className='text-3xl font-popins'>{blog.title}</h1>
                                            <p className='font-semibold text-[#a2a2a2]'>{blog.description}</p>
                                            <div className=''>

                                                <button className='btn border-[#0fb469] hover:bg-[#0fb469] hover:text-white font-bold'>
                                                    Read More
                                                    <FaArrowRight />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                    }

                </div>
                <div className='lg:w-[30%] mt-10'>
                    <div data-aos="fade-left" data-aos-duration="1000" className='flex items-center border '>
                        <input className='input w-full' placeholder='Type here...' type="text" />
                        <div className='bg-[#0fb469] p-3 rounded-r'>

                            <CiSearch className='text-3xl text-white' />
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="1000" className='mt-10 bg-[#f8f8f8] p-5 space-y-5'>
                        <h1 data-aos="fade-top" data-aos-delay="2000" className="text-2xl">Category</h1>
                        <div data-aos="zoom-in-left" data-aos-delay="2200" className='hover:bg-[#0fb469] duration-700 hover:font-bold hover:text-white border p-3 flex items-center justify-between text-[16px]'>
                            <FaArrowRight />
                            <p className='font-popins font-[500]'>Rental Offers</p>
                            <span className=''>05</span>
                        </div>

                        <div data-aos="zoom-in-left" data-aos-delay="2300" className='hover:bg-[#0fb469] duration-700 hover:font-bold hover:text-white border p-3 flex items-center justify-between text-[16px]'>
                            <FaArrowRight />
                            <p className='font-popins font-[500]'>Sales Trends</p>
                            <span className=''>03</span>
                        </div>
                        <div data-aos="zoom-in-left" data-aos-delay="2400" className='hover:bg-[#0fb469] duration-700 hover:font-bold hover:text-white border p-3 flex items-center justify-between text-[16px]'>
                            <FaArrowRight />
                            <p className='font-popins font-[500]'>Luxury Living</p>
                            <span className=''>09</span>
                        </div>
                        <div data-aos="zoom-in-left" data-aos-delay="2500" className='hover:bg-[#0fb469] duration-700 hover:font-bold hover:text-white border p-3 flex items-center justify-between text-[16px]'>
                            <FaArrowRight />
                            <p className='font-popins font-[500]'>Rental Offers</p>
                            <span className=''>04</span>
                        </div>
                    </div>
                    <div className='p-5 border space-y-5 mt-10 bg-[#f8f8f8]'>
                        <h1 data-aos="zoom-in" data-aos-duration="1000" className='text-3xl'>Recent Post</h1>
                        <div data-aos="flip-left" data-aos-delay="1000" className='flex bg-white p-2'>
                            <div>
                                <img className='max-w-28 w-32 h-[20vh]' src="https://image-tc.galaxy.tf/wijpeg-avfbbqo2rx7r5x2cus19lpja8/testdream-nashville1-high-res.jpg?width=1920" alt="" />
                            </div>
                            <div className='space-y-3 mt-3'>
                                <div className='flex items-center ms-3 space-x-2 '>
                                    <FaRegFolderOpen className='text-[#f47c21]' />
                                    <span className='font-semibold text-[#cabebe]'>Category</span>
                                </div>
                                <h1 className='ms-3 text-[17px] font-prompt'>January Hotel Sales: Starting the Year Strong</h1>

                            </div>

                        </div>
                        <div data-aos="flip-left" data-aos-delay="2000" className='flex bg-white p-2'>
                            <div>
                                <img className='max-w-28 w-32 h-[20vh]' src="https://img.freepik.com/premium-photo/minsk-belarus-august-2017-columns-guestroom-hall-reception-modern-luxury-hotel_97694-6572.jpg" alt="" />
                            </div>
                            <div className='space-y-3 mt-3'>
                                <div className='flex items-center ms-3 space-x-2 '>
                                    <FaRegFolderOpen className='text-[#f47c21]' />
                                    <span className='font-semibold text-[#cabebe]'>Category</span>
                                </div>
                                <h1 className='ms-3 text-[17px] font-prompt'>February Rental Specials: Unbeatable Deals Await</h1>

                            </div>

                        </div>
                        <div data-aos="flip-left" data-aos-delay="2200" className='flex bg-white p-2'>
                            <div>
                                <img className='max-w-28 w-32 h-[20vh]' src="https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp" alt="" />
                            </div>
                            <div className='space-y-3 mt-3'>
                                <div className='flex items-center ms-3 space-x-2 '>
                                    <FaRegFolderOpen className='text-[#f47c21]' />
                                    <span className='font-semibold text-[#cabebe]'>Category</span>
                                </div>
                                <h1 className='ms-3 text-[17px] font-prompt'>February Rental Specials: Unbeatable Deals Await</h1>

                            </div>

                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='bg-[#f8f8f8] mt-20 p-5 space-y-5'>
                        <h1 data-aos="zoom-in" data-aos-delay="1000" className="text-2xl">Tags</h1>
                        <div className='grid grid-cols-3 gap-5 text-[16px] '>
                            <span data-aos="zoom-in-left" data-aos-delay="2000" className='border p-3 font-semibold text-[#6b6b6b]'>trends</span>
                            <span data-aos="zoom-in-left" data-aos-delay="2200" className='border p-3 font-semibold text-[#6b6b6b]'>spring</span>
                            <span data-aos="zoom-in-left" data-aos-delay="2300" className='border p-3 font-semibold text-[#6b6b6b]'>Offers</span>
                            <span data-aos="zoom-in-left" data-aos-delay="2400" className='border p-3 font-semibold text-[#6b6b6b]'>paradise</span>
                            <span data-aos="zoom-in-left" data-aos-delay="2500" className='border p-3 px-3 font-semibold text-[#6b6b6b]'>specials</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;