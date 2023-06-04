import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from "../../shared/MenuItem/MenuItem";
import Cover from '../../shared/Cover/Cover';

const MenuCategory = ({ items, title, subTitle, img }) => {
    return (
        <div className='my-6'>
            {title && <Cover img={img} title={title} subTitle={subTitle}></Cover>}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 md:mx-44 mt-11">
                {
                    items.map((item) =>
                        <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                }
            </div>
            <div className="flex justify-center items-center">
                <Link
                    to={`/order/${title}`}
                    className="btn btn-outline border-0 border-b-2 text-center mt-4"
                >
                    ORDER YOUR FAVORITE FOOD
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;