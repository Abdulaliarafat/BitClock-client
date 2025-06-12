import React from 'react';
import BeFore from './BeFore';
import { motion } from "motion/react"
import CountUp from 'react-countup';

const Expired = ({expire}) => {
    // console.log(expire)
    return (
        <div className='max-w-5xl mx-auto mb-10 my-18'>
           <h1 className='font-bold text-2xl md:text-3xl mt-8 text-amber-500 mb-10 text-center'>Expired food</h1>
            <p className='btn p-6.5 md:p-8 bg-gradient-to-r from-yellow-300 to-red-300 ml-25 md:ml-87 lg:ml-101 mb-9 text-green-600 font-bold text-xl'>Expired food : <span className='text-2xl'><CountUp  end={expire.length} duration={17}></CountUp></span></p>
           <motion.div 
           initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.09, ease: "easeOut" }}
           className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-3 lg:gap-5'>
            {
            expire.map(before=><BeFore key={before._id} before={before}></BeFore>)
           }
           </motion.div>
        </div>
    );
};

export default Expired;