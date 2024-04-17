import React from 'react';
import './Contact.css'
import 'leaflet/dist/leaflet.css'

import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineTabletAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Helmet } from 'react-helmet-async';
import { Icon } from 'leaflet'



const Contact = () => {

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
        iconSize: [38, 38]
    })

    return (
        <div>
            <Helmet>
                <title>Contact | Royal Respite</title>
            </Helmet>
            <div className='contactBackground bg-no-repeat bg-cover bg-center h-[70vh] flex flex-col justify-center items-center '>
                <h1 data-aos="fade-down" data-aos-duration="1000" className='text-6xl text-white font-popins'>Contact</h1>
            </div>
            <div data-aos="zoom-in" data-aos-delay="1000" className='lg:mx-20  mx-5 lg:m-10 my-10'>
                <div className='lg:w-full'>
                    <MapContainer className='h-[70vh]' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]} icon={customIcon}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center lg:mx-20 mx-5 my-5'>
                <div className='flex-1 space-y-5'>
                    <textarea data-aos="fade-right" data-aos-duration="1000" placeholder='Enter your Message' className='border w-full' name="" id="" cols="30" rows="10"></textarea>
                    <div className='flex flex-col lg:flex-row justify-center item-center lg:space-x-3'>
                        <input data-aos="fade-right" data-aos-delay="1000" className='input input-bordered w-full mb-5' placeholder='Enter your name' type="name" />
                        <input data-aos="fade-left" data-aos-delay="2000" className='input input-bordered w-full' placeholder='Enter email address' type="email" />
                    </div>
                    <input data-aos="fade-up" data-aos-delay="2200" className='input input-bordered w-full' placeholder='Enter your subject' type="subject" />
                    <button data-aos="fade-up" data-aos-delay="2200" className='w-32 h-12 border border-[#57CC99] text-[#57CC99] hover:text-white hover:bg-[#2dca86] text-[16px] bg-ho  text-1xl'>Send</button>
                </div>
                <div className='lg:ms-20 my-10 space-y-5'>
                    <div data-aos="fade-left" data-aos-delay="2400" className='flex items-center space-x-5 text-xl'>
                        <div>
                            <IoHomeOutline className='text-3xl' />
                        </div>
                        <div>
                            <p className='font-[500] text-[#000000de] font-popins text-[18px]'>Buttonwood, California.</p>
                            <span className='text-[#000000bc] font-popins text-[15px]'>Rosemead, CA 91770</span>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="2500" className='flex items-center text-xl space-x-5'>
                        <div>
                            <MdOutlineTabletAndroid className='text-3xl' />
                        </div>
                        <div>
                            <p className='text-[#000000de] font-popins text-[18px]'>+1 253 565 2365</p>
                            <span className='text-[15px]'>Mon to Fri 9am to 6pm</span>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="2600" className='flex items-center text-xl space-x-5'>
                        <div>
                            <MdEmail className='text-3xl' />
                        </div>
                        <div>
                            <p className='text-[#000000de] font-popins text-[18px]'>support@colorlib.com</p>
                            <span className='text-[15px]'>Send us your query anytime!</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;