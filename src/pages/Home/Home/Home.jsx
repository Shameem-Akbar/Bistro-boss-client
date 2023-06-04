import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import SmallBannerTop from '../SmallBannerTop/SmallBannerTop';
import CallUs from '../CallUs/CallUs';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <SmallBannerTop></SmallBannerTop>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;