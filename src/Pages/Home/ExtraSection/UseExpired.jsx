import React, { use } from 'react';
import ExpiredFoods from './ExpiredFoods';
import { motion } from "motion/react"
const useExpoPromise = fetch('/UseExpired.json').then(res => res.json())
const UseExpired = () => {
    const expoFood = use(useExpoPromise)
    return (
        <div
            className='max-w-6xl mx-auto mb-10 my-18'>
            <h1 className='font-bold text-2xl md:text-3xl mt-8 text-amber-500 mb-10 text-center'>Best use of expired food</h1>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.08, ease: "easeOut" }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-6'>
                {
                    expoFood.map(food => <ExpiredFoods key={food.id} food={food}></ExpiredFoods>)
                }
            </motion.div>
        </div>
    );
};

export default UseExpired;

