import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom'
import img from '../../assets/img.jpg'

const Details = () => {

    const detailsData = useLoaderData();
    const { id } = useParams()
    const check = detailsData.find(ids => ids.id === id)
    console.log(check)

    return (
        <div className='grid grid-cols-4'>
            <div className='col-span-2 mr-5'>
                <img className='w-full h-[90vh]' src={check.image_url} alt="" />
            </div>
            <div className='col-span-2 m-10 space-y-5'>
                <h1 className='text-4xl'>{check.estate_title}</h1>
                <div>
                    <ul className='text-[18px] text-[#000000ac] font-[600] flex space-x-32'>
                        <li>#{check.segment_name}</li>
                        <li>On {check.status}</li>
                    </ul>
                </div>

                <p className='text-xl'><span className='text-2xl'>Price:</span> {check.price}</p>

                <p className='text-xl'><span className='text-2xl'>Area:</span> {check.area}</p>
                <p className='text-xl'><span className='text-2xl'>Location:</span> {check.location}</p>
                <div className='text-xl flex space-x-2'>
                    <h1 className='text-2xl'>Facilities:</h1>
                    <div className='flex justify-center space-x-3'>
                        <span className=''>{check.facilities[0]}</span>
                        <span>{check.facilities[1]}</span>
                        <span>{check.facilities[2]}</span>
                    </div>
                </div>
                <div>
                   
                    <p className='text-[19px]'><span className='text-2xl'>Description:</span> {check.description}</p>
                </div>
                <button className='btn'>Back</button>
            </div>
           
        </div>
    );
};

export default Details;