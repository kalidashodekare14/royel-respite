import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { IoIosPricetags } from "react-icons/io";
import { BiArea } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDescription } from "react-icons/md";

const Details = () => {

    const detailsData = useLoaderData();
    const { id } = useParams()
    const check = detailsData.find(ids => ids.id === id)
    console.log(check)

    return (
        <div className='mx-20 flex justify-center items-center m-10 space-x-10'>
            <div className='flex-1'>
                <img className='h-[70vh]' src={check.image_url} alt="" />
            </div>
            <div className='flex-1 space-y-3'>
                <h1 className='text-4xl font-popins'>

                    {check.estate_title}</h1>
                <div>
                    <ul className='text-[18px] font-roboto text-[#000000ac] font-[600] flex space-x-32'>
                        <li className='bg-[#57CC99] px-3 py-1 rounded-full'>#{check.segment_name}</li>
                        <li className='bg-[#57CC99] px-3 py-1 rounded-full'>On {check.status}</li>
                    </ul>
                </div>

                <div className='flex items-center space-x-2'>
                    <IoIosPricetags className='text-2xl' />
                    <p className='text-[18px] font-popins'><span className='text-[20px]'>Price: </span>
                        {check.price}
                    </p>
                </div>
                <div className='flex items-center space-x-2'>
                    <BiArea className='text-[25px]' />
                    <p className='text-[18px] font-popins'><span className='text-[20px]'>Area:</span> {check.area}</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <FaLocationDot className='text-2xl' />
                    <p className='text-[18px] font-popins'><span className='text-[20px]'>Location:</span> {check.location}</p>
                </div>
                <div className='text-xl flex space-x-2'>
                    <h1 className='text-[20px] font-popins'>Facilities:</h1>
                    <div className='flex justify-center space-x-3'>
                        <span className='text-[18px] font-popins'>{check.facilities[0]}</span>
                        <span className='text-[18px] font-popins'>{check.facilities[1]}</span>
                        <span className='text-[18px] font-popins'>{check.facilities[2]}</span>
                    </div>
                </div>
                <div className='flex space-x-2'>
                    <MdOutlineDescription className='text-3xl' />
                    <p className='text-[18px] font-popins'><span className='text-[20px] '>Description:</span> {check.description}</p>
                </div>
                <Link to="/">
                    <button className='btn font-popins mt-3 bg-[#57CC99]'>Back</button>
                </Link>
            </div>

        </div>
    );
};

export default Details;