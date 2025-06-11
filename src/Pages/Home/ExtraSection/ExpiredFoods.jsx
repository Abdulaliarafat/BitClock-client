import React from 'react';
import { motion } from "motion/react"

const ExpiredFoods = ({ food }) => {
    console.log(food)
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className='flex flex-col border-2 border-green-700 rounded-xl bg-gradient-to-b from-white to-green-200 shadow-2xl mx-12 md:mx-8 lg:mx-0 px-2 lg:px-2 my-5'>
            <div>
                <img className='w-70 h-40 px-2 rounded-2xl mt-4  mx-auto object-cover' src={food.img} alt="" />
            </div>
            <div className='mt-2 ml-10 space-y-2 flex-1'>
                <p className='font-semibold text-xl'>Use : {food.name}</p>
                <p className='font-medium text-md text-gray-600'>Expired food : {food.usefood}</p>
                <p className='font-medium text-md text-gray-600'>Fartilizer For : {food.fartilizerFor}</p>
                <p className='font-medium text-md text-gray-600 '>Benefit : {food.benefit}</p>
            </div>
            <a href={food.link}>
                <button className='btn w-30 ml-10 mb-2 bg-gradient-to-r from-green-500 to-green-600 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-green-700 hover:to-green-700 mt-3 font-bold'>Explore </button>
            </a>
        </motion.div>
    );
};

export default ExpiredFoods;