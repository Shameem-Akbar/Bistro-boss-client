import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mt-16 mb-8 mx-44">
            <SectionTitle
                heading="TESTIMONIALS"
                subHeading="What Our Clients Say"
            ></SectionTitle>
            <div className='mt-11'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col justify-center items-center text-center px-8 md:px-24 space-y-3">
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]"></FaQuoteLeft>
                                <p>{review.details}</p>
                                <h3 className="text-yellow-500 uppercase font-medium text-3xl pb-12">
                                    {review.name}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;