import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide1 from "./slide_1/slide_1";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Swiper1() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Slide1/></SwiperSlide>
                <SwiperSlide><Slide1/></SwiperSlide>
                <SwiperSlide><Slide1/></SwiperSlide>
                <SwiperSlide><Slide1/></SwiperSlide>
            </Swiper>
        </>
    );
}