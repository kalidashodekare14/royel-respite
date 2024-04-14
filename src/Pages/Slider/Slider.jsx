import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            
            <Swiper
                dir="rtl"
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='slider1 w-full h-full bg-cover bg-no-repeat bg-center'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider2 w-full h-full bg-cover bg-no-repeat bg-center'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider3 w-full h-full bg-cover bg-no-repeat bg-center'>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;