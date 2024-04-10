import Estate from "../../Estate/Estate";
import Slider from "../Slider/Slider";
import { useLoaderData } from 'react-router-dom'


const Home = () => {

    const estateData = useLoaderData()


    return (
        <div className="relative">
            <div className="absolute z-10 top-52  lg:left-[30%] bg-[#000000a4] rounded lg:w-[40%] p-5 text-center space-y-3">
                <h1 className="text-5xl text-white">Urban Oasis Awaits</h1>
                <p className="text-[#fca311] tracking-[.25em]">Ultimate Destination for Exceptional Residential Experiences.</p>
            </div>
            <div className="">
                <Slider>
                </Slider>
            </div>
            <div className="my-32">
                <div className="my-20">
                    <h1 className="text-4xl text-center uppercase">Properties</h1>
                    <p className="text-center text-[13px] tracking-[.30em]">Find Your Homes</p>
                </div>
                <div className="mx-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {
                        estateData.map(userData => <Estate key={userData.id} userData={userData}></Estate>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;