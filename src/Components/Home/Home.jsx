import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div className="relative">
            <div className="absolute z-10 top-[40%] left-[30%] bg-[#000000a4] rounded w-[40%] p-5 text-center space-y-3">
                <h1 className="text-5xl text-white">Urban Oasis Awaits</h1>
                <p className="text-white">Ultimate Destination for Exceptional Residential Experiences.</p>
                
            </div>
            <div className="">
                <Slider>
                </Slider>
            </div>
        </div>
    );
};

export default Home;