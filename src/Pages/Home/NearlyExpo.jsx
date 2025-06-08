import React from 'react';
import Nearly from './Nearly';

const NearlyExpo = ({nearlyExpo}) => {
    return (
        <div className='max-w-5xl mx-auto mb-10'>
           <h1 className='font-bold text-2xl md:text-3xl mt-8 text-amber-500 mb-10 text-center'>Nearly expiry food</h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-3 lg:gap-2'>
            {
            nearlyExpo.map(nearly=><Nearly key={nearly._id} nearly={nearly}></Nearly>)
           }
           </div>
        </div>
    );
};

export default NearlyExpo;