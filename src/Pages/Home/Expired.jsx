import React from 'react';
import BeFore from './BeFore';

const Expired = ({expire}) => {
    // console.log(expire)
    return (
        <div className='max-w-5xl mx-auto mb-10 my-18'>
           <h1 className='font-bold text-2xl md:text-3xl mt-8 text-amber-500 mb-10 text-center'>Expired food</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-3 lg:gap-3'>
            {
            expire.map(before=><BeFore key={before._id} before={before}></BeFore>)
           }
           </div>
        </div>
    );
};

export default Expired;