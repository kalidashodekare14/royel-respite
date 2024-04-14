import React from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";

const Estate = ({ userData }) => {

    const { id, image_url, estate_title, segment_name, status, location } = userData

    return (
        <div>
            <div data-aos="zoom-in" data-aos-duration="1000" className="rounded-2xl p-3 bg-base-100 shadow-xl flex-col ">
                <figure className='relative'><img className='rounded-2xl w-full md:h-[40vh] lg:h-[40vh]' src={image_url} alt="Shoes" />
                    <span className='absolute top-2 left-2 bg-[#0000008b] px-3 py-2 text-white rounded font-roboto'>{status}</span>
                </figure>
                <div className="space-y-3 ">
                    <span className='absolute  bg-[#57CC99] p-2 -mt-10 text-[14px] text-[#000000c6] font-[600] font-roboto'>{segment_name}</span>
                    <div className='h-[10vh]'>
                        <h2 className="card-title font-roboto">{estate_title}</h2>
                    </div>
                    <div className='h-[10vh]'>
                        <h4 className='text-[17px] font-semibold text-[#000000c4] flex font-roboto'><FaLocationDot className='mr-1' /> {location}</h4>
                    </div>
                    <Link to={`/details/${id}`}>
                        <button className="btn w-full  font-roboto  bg-[#57CC99]">View Property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Estate;