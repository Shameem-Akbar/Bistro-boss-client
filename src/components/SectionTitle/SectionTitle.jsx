import React from 'react';

const SectionTitle = ({ heading, subHeading, clr }) => {
    return (
        <div className="flex flex-col justify-center items-center text-center my-6">
            <p className="text-yellow-500 italic pb-2">---{subHeading}---</p>
            <h3 className={`${clr && clr} text-4xl border-y-4 py-4 px-12 uppercase`}> {heading}</h3>
        </div >
    );
};

export default SectionTitle;