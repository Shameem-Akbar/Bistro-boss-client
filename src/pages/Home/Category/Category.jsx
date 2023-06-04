import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className="my-4 md:my-16 mx-4 md:mx-44">
            <SectionTitle
                heading="ORDER ONLINE"
                subHeading="From 11:00am to 10:00pm"
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper mt-11"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='absolute bottom-5 md:bottom-10 left-0 right-1 md:right-5 text-xs md:text-3xl uppercase text-center text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='absolute bottom-5 md:bottom-10 left-0 right-1 md:right-5 text-xs md:text-3xl uppercase text-center text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='absolute bottom-5 md:bottom-10 left-0 right-1 md:right-5 text-xs md:text-3xl uppercase text-center text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='absolute bottom-5 md:bottom-10 left-0 right-1 md:right-5 text-xs md:text-3xl uppercase text-center text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='absolute bottom-5 md:bottom-10 left-0 right-1 md:right-5 text-xs md:text-3xl uppercase text-center text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='absolute bottom-5 md:bottom-10 left-0 right-1 md:right-5 text-xs md:text-3xl uppercase text-center text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='absolute bottom-5 md:bottom-10 left-0 right-1 md:right-5 text-xs md:text-3xl uppercase text-center text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='absolute bottom-5 md:bottom-10 left-0 right-1 md:right-5 text-xs md:text-3xl uppercase text-center text-white'>Desserts</h3>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Category;