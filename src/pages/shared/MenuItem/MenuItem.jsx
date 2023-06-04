import React from 'react';

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        <div className="flex space-x-4">
            <img
                style={{ borderRadius: "0 200px 200px 200px" }}
                className="h-[6.25rem] w-[6.25rem]"
                src={image} />
            <div>
                <h4 className="uppercase">{name} ------------------------</h4>
                <p className='text-slate-500'>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItem;