import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";

const Estate = ({ userData }) => {

    const { id, image_url, estate_title, segment_name, status, location, price } = userData

    return (
        <div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="bg-base-100 border flex-col ">
                <div className='relative'>
                    <img className=' w-full  md:h-[40vh] lg:h-[40vh]' src={image_url} alt="Shoes" />
                    <span className='absolute top-2 left-2 bg-[#0fb469] px-3 py-2 text-white rounded font-roboto'>For {status}</span>
                </div>
                <div className="space-y-3 p-3">
                    <div className='my-5'>
                        <h2 className="text-[20px] from-neutral-95000 font-prompt">{estate_title}</h2>
                    </div>
                    <div>
                        <h4 className='text-[14px] font-semibold text-[#000000c4] flex items-center font-roboto mb-5'><FaLocationDot className='mr-1 text-[#0fb469]' /> {location}</h4>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-[16px] font-semibold text-[#000000c4] flex items-center font-roboto'>#{segment_name}</h4>
                        <h4 className='text-[18px] font-semibold text-[#000000c4] flex font-roboto text-[#0fb469]'>{price}</h4>
                    </div>
                    <Link to={`/details/${id}`}>
                        <button className="btn  mt-5  bg-[#0fb469] text-white font-prompt">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Estate;