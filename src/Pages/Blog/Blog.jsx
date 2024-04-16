import './Blog.css'
import img from '../../assets/img.jpg'
import { useLoaderData } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaArrowRight, FaRegFolderOpen } from 'react-icons/fa';
const Blog = () => {

    const blogs = useLoaderData()

    return (
        <div>
            <div className='blogImage bg-no-repeat bg-center bg-cover min-h-[60vh] flex justify-center items-center'>
                <h1 className="text-7xl text-white font-popins">Blog</h1>
            </div>
            <div className='flex my-20 mx-20 space-x-10'>
                <div className=' space-y-5 w-[70%]'>
                    {
                        blogs.map(blog =>
                            <div className='border' key={blog.id}>
                                <div className='flex'>
                                    <div>
                                        <img className='h-[50vh] max-w-80' src={img} alt="" />
                                    </div>
                                    <div className='space-y-5 p-8'>
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
                            </div>)
                    }

                </div>
                <div className='w-[30%]'>
                    <div className='flex items-center border '>
                        <input className='input w-full' placeholder='Type here...' type="text" />
                        <div className='bg-[#0fb469] p-3 rounded-r'>

                            <CiSearch className='text-3xl text-white' />
                        </div>
                    </div>
                    <div className='mt-10 bg-[#f8f8f8] p-5 space-y-5'>
                        <h1 className="text-2xl">Category</h1>
                        <div className='hover:bg-[#0fb469] duration-700 hover:font-bold hover:text-white border p-3 flex items-center justify-between text-[16px]'>
                            <FaArrowRight />
                            <p className='font-popins font-[500]'>Rental Offers</p>
                            <span className=''>05</span>
                        </div>

                        <div className='hover:bg-[#0fb469] duration-700 hover:font-bold hover:text-white border p-3 flex items-center justify-between text-[16px]'>
                            <FaArrowRight />
                            <p className='font-popins font-[500]'>Sales Trends</p>
                            <span className=''>03</span>
                        </div>
                        <div className='hover:bg-[#0fb469] duration-700 hover:font-bold hover:text-white border p-3 flex items-center justify-between text-[16px]'>
                            <FaArrowRight />
                            <p className='font-popins font-[500]'>Luxury Living</p>
                            <span className=''>09</span>
                        </div>
                        <div className='hover:bg-[#0fb469] duration-700 hover:font-bold hover:text-white border p-3 flex items-center justify-between text-[16px]'>
                            <FaArrowRight />
                            <p className='font-popins font-[500]'>Rental Offers</p>
                            <span className=''>04</span>
                        </div>
                    </div>
                    <div className='p-5 border space-y-5 mt-10 bg-[#f8f8f8]'>
                        <h1 className='text-3xl'>Recent Post</h1>
                        <div className='flex bg-white p-2'>
                            <div>
                                <img className='max-w-26 h-[20vh]' src={img} alt="" />
                            </div>
                            <div className='space-y-3 mt-3'>
                                <div className='flex items-center ms-3 space-x-2 '>
                                    <FaRegFolderOpen className='text-[#f47c21]' />
                                    <span className='font-semibold text-[#cabebe]'>Category</span>
                                </div>
                                <h1 className='ms-3 text-[17px] font-prompt'>January Hotel Sales: Starting the Year Strong</h1>

                            </div>

                        </div>
                        <div className='flex bg-white p-2'>
                            <div>
                                <img className='max-w-28 h-[20vh]' src={img} alt="" />
                            </div>
                            <div className='space-y-3 mt-3'>
                                <div className='flex items-center ms-3 space-x-2 '>
                                    <FaRegFolderOpen className='text-[#f47c21]' />
                                    <span className='font-semibold text-[#cabebe]'>Category</span>
                                </div>
                                <h1 className='ms-3 text-[17px] font-prompt'>February Rental Specials: Unbeatable Deals Await</h1>

                            </div>

                        </div>
                        <div className='flex bg-white p-2'>
                            <div>
                                <img className='max-w-28 h-[20vh]' src={img} alt="" />
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
                    <div className='bg-[#f8f8f8] mt-20 p-5 space-y-5'>
                        <h1 className="text-2xl">Tags</h1>
                        <div className='grid grid-cols-3 gap-5 text-[16px] '>
                            <span className='border p-2 font-semibold text-[#6b6b6b]'>trends</span>
                            <span className='border p-2 font-semibold text-[#6b6b6b]'>spring</span>
                            <span className='border p-2 font-semibold text-[#6b6b6b]'>Offers</span>
                            <span className='border p-2 font-semibold text-[#6b6b6b]'>paradise</span>
                            <span className='border p-2 font-semibold text-[#6b6b6b]'>investment</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;