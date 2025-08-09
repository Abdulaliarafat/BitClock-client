import React from 'react';
import BeFore from './BeFore';
import { motion } from "motion/react"
import CountUp from 'react-countup';

const Expired = ({expire}) => {
    // console.log(expire)
    return (
        <div className='max-w-5xl mx-auto mb-10 my-18'>
           <h1 className='font-semibold text-2xl md:text-2xl mt-8 text-red-500 mb-3 text-center'>Expired food</h1>
            <p className='btn p-3 md:p-4 bg-gradient-to-r from-yellow-300 to-red-300 ml-34 md:ml-94 lg:ml-107 mb-9 text-red-700 font-semibold text-lg'>Expired food : <span className='text-xl'><CountUp  end={expire.length} duration={17}></CountUp></span></p>
           <motion.div 
           initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.05, ease: "easeOut" }}
           className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-3 lg:gap-5'>
            {
            expire.map(before=><BeFore key={before._id} before={before}></BeFore>)
           }
           </motion.div>
        </div>
    );
};

export default Expired;