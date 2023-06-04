import React from 'react';
import img from '../../../assets/home/chef-service.jpg'

const SmallBannerTop = () => {
    return (
        <div className='mx-44 relative'>
            <img src={img} alt="" />
            <div className='bg-white text-center absolute mx-16 p-16 top-16 space-y-3'>
                <h2 className='text-3xl'>BISTRO BOSS</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam recusandae veritatis vitae quis corrupti, placeat laborum hic illum officiis. Culpa soluta illo sit accusamus odit, assumenda laudantium deserunt voluptatem quibusdam ullam earum asperiores necessitatibus sunt voluptatibus delectus alias placeat aliquam? Fugit laboriosam expedita repudiandae?expedita repudiandae? </p>
            </div>
        </div>
    );
};

export default SmallBannerTop;