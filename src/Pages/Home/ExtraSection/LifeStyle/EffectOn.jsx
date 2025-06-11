import React from 'react';
import { motion } from "motion/react"
import { FaStar } from 'react-icons/fa';
const EffectOn = ({food}) => {
    console.log(food)
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='flex flex-col border-2 border-blue-500 rounded-xl bg-gradient-to-b from-white to-blue-100 shadow-2xl mx-12 md:mx-8 lg:mx-0 px-2 lg:px-2 my-5'>
            <div>
                <img className='w-70 h-40 px-2 rounded-2xl mt-4  mx-auto object-cover' src={food.img} alt="" />
            </div>
            <div className='mt-2 ml-10 space-y-1 flex-1'>
                <p className='font-semibold text-xl'>Title : {food.title}</p>
                <p className='font-medium text-md text-gray-600'> <span className='font-bold'>Action :</span> {food.action}</p>
                <p className='font-medium text-md text-gray-600'>
                  <span className='font-bold'> Benefit : </span> {food.tags.map(tag=><span >{tag}</span>)}</p>
                <p className='font-medium text-md text-gray-600 '>
                    <span className='font-bold'>Description : </span>{food.description}</p>
                <div className='flex justify-start gap-1 items-center font-medium text-md text-gray-600 '>
                    <span className='font-bold'>importance :</span><FaStar color='gold'></FaStar > {food.importance}</div>
            </div>
            <a href={food.link}>
                <button className='btn w-30 ml-10 mb-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-700 mt-3 font-bold'>Explore </button>
            </a>
        </motion.div>
    );
};

export default EffectOn;