import React from 'react';
import Nearly from './Nearly';
import { motion } from "motion/react"
import CountUp from 'react-countup';
const NearlyExpo = ({ nearlyExpo }) => {

    return (
        <div className='max-w-5xl mx-auto mb-10 my-15'>
           <h1 className='font-bold text-3xl md:text-3xl mt-8 text-amber-500 mb-8 text-center'>Nearly expiry food</h1>
           <p className='btn p-6.5 md:p-8 bg-gradient-to-r from-yellow-300 to-green-300 ml-25 md:ml-87 lg:ml-101 mb-9 text-green-700 font-bold text-xl'>Nearly expiry : <span className='text-2xl'><CountUp  end={nearlyExpo.length} duration={12}></CountUp></span></p>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.08, ease: "easeOut" }}
               
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-3 lg:gap-5'>
                {
                    nearlyExpo.map(nearly => <Nearly key={nearly._id} nearly={nearly}></Nearly>)
                }
            </motion.div>
        </div>
    );
};

export default NearlyExpo;