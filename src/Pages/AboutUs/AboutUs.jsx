import React from 'react';
import './AboutUs.css'
import man from '../../assets/man.jpg'
import aboutMan from '../../assets/aboutMission.webp'
import { Helmet } from 'react-helmet-async';



const AboutUs = () => {
    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>About Us | Royal Respite</title>
            </Helmet>
            <div className='aboutBackground bg-no-repeat bg-center bg-cover h-[70vh] text-white'>
                <div className="flex flex-col justify-center items-center h-[70vh]">
                    <h1 data-aos="fade-down" data-aos-duration="1000" className='text-5xl'>About Us</h1>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center my-10 lg:mx-20 mx-5 lg:space-x-20 md:mx-20 md:mb-32'>
                <div data-aos="fade-right" data-aos-delay="1000" className='lg:mb-20 mb-4'>
                    <img className='rounded-2xl' src={aboutMan} alt="" />
                </div>
                <div className='flex-1 '>
                    <h1 data-aos="fade-left" data-aos-duration="1000" className='text-5xl font[500] font-popins mb-3'>Our Mission</h1>
                    <p data-aos="fade-left" data-aos-delay="2000" className='text-[16px] font-popins leading-7 text-[#000000c2]'>Amidst the abundance of vintage Trips found in charity shops and car boot sales, we offer a unique experience by providing refurbished models. Today, replacement leatherette is readily available in a variety of colors, revitalizing these timeless pieces. Personally, I cherish my Trip, finding solace in its simplicity whenever I use it.</p>
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center my-10 lg:mx-20 md:mx-20 mx-5 space-x-5'>
                <div className='flex-1 space-y-3 md:mt-20'>
                    <h1 data-aos="fade-right" data-aos-duration="1000" className='text-4xl mb-6 font-[500]'>Questions</h1>
                    <div className="collapse collapse-arrow border-b">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div data-aos="fade-right" data-aos-delay="1000" className="collapse-title text-[16px] font-medium text-[#000000dd] font-popins">
                            What is the mission of your residential company?
                        </div>
                        <div data-aos="fade-right" data-aos-delay="2000" className="collapse-content">
                            <p className='text-[#000000cd] font-[400] font-popins'>Our mission is to provide comfortable and affordable living spaces that foster a sense of community and well-being for our residents. We strive to create environments where people feel at home and where their needs are met with care and attention to detail.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b">
                        <input type="radio" name="my-accordion-2" />
                        <div data-aos="fade-right" data-aos-delay="2200" className="collapse-title text-[16px] font-medium text-[#000000dd] font-popins">
                            What sets your residential properties apart from others?
                        </div>
                        <div data-aos="fade-right" data-aos-delay="2300" className="collapse-content">
                            <p className='text-[#000000cd] font-[400] font-popins'>At our residential properties, we prioritize quality, convenience, and community. From our meticulously designed living spaces to our amenities and services, we aim to exceed expectations. Our focus on fostering a sense of belonging among residents and creating spaces that enhance their lifestyles sets us apart.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow border-b">
                        <input type="radio" name="my-accordion-2" />
                        <div data-aos="fade-right" data-aos-delay="2400" className="collapse-title text-[16px] font-medium text-[#000000dd] font-popins">
                            How do you ensure the safety and security of residents?
                        </div>
                        <div data-aos="fade-right" data-aos-delay="2500" className="collapse-content">
                            <p className='text-[#000000cd] font-[400] font-popins'>The safety and security of our residents are paramount. We employ state-of-the-art security systems and protocols to ensure a secure living environment. Additionally, our staff undergoes rigorous training to respond effectively to any situation that may arise, providing residents with peace of mind.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000">
                    <img className='rounded-2xl' src={man} alt="" />

                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default AboutUs;