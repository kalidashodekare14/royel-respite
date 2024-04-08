import React from 'react';
import { Link } from 'react-router-dom';

const Estate = ({ userData }) => {

    const { id, image_url, estate_title, segment_name, status, location } = userData

    return (
        <div>
            <div className="rounded-2xl p-3 bg-base-100 shadow-xl ">
                <figure><img className='rounded-2xl lg:w-[100%] lg:h-[40vh]' src={image_url} alt="Shoes" /></figure>
                <div className="p-3 space-y-2">
                    <h2 className="card-title">{estate_title}</h2>
                    <div>
                        <ul className='text-[14px] text-[#000000ac] font-[600] flex space-x-10'>
                            <li>#{segment_name}</li>
                            <li>On {status}</li>
                        </ul>
                    </div>
                    <h4 className='text-[17px] font-semibold text-[#000000c4]'>Location: {location}</h4>
                    <div className="card-actions ">
                        <Link to={`/details/${id}`}>
                            <button className="btn btn-primary">View Property</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;