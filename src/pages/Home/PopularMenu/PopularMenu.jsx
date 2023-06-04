import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === "popular");

    return (
        <section className='my-11'>
            <SectionTitle
                heading="Popular Items"
                subHeading="Check it out">
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-x-12 gap-y-6 md:mx-44 mt-11'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center mt-8'>
                <button className='btn btn-outline border-0 border-b-2 mt-4'>View Full Menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;