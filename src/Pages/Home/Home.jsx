import { Helmet } from "react-helmet-async";
import Estate from "../../Estate/Estate";
import Slider from "../Slider/Slider";
import { useLoaderData } from 'react-router-dom'



const Home = () => {

    const estateData = useLoaderData()


    return (
        <div className="relative">
            <Helmet>
                <title>Home | Royal Respite</title>
            </Helmet>
            <div data-aos="zoom-in" data-aos-duration="1000"  className="absolute font-roboto z-10 top-52 md:left-[10%]  lg:left-[30%] bg-[#000000a4] rounded lg:w-[40%] p-5 text-center space-y-3">
                <h1 data-aos="fade-right" data-aos-delay="1000"
                    className="text-5xl text-white">Urban Oasis Awaits</h1>
                <p data-aos="fade-left" data-aos-delay="2000" className="text-[#fca311] tracking-[.25em]">Ultimate Destination for Exceptional Residential Experiences.</p>
            </div>
            <div className="">
                <Slider>
                </Slider>
                {/* <Sliders></Sliders> */}
            </div>
            <div className="my-32 flex-col">
                <div  className="my-20 space-y-3">
                    <h1 data-aos="fade-right"  data-aos-deration="1000" className="text-4xl text-center uppercase font-fontLato">Properties</h1>
                    <p data-aos="fade-left"  data-aos-delay="1000" className="text-center text-[#0fb469] text-[13px] tracking-[.30em]">Find Your Homes</p>
                </div>
                <div className=" font-roboto lg:mx-20 mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-col">
                    {
                        estateData.map(userData => <Estate key={userData.id} userData={userData}></Estate>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;