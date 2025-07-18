import React from 'react';
import { motion } from "motion/react"
import { FaStar } from 'react-icons/fa';
const EffectOn = ({food}) => {
    // console.log(food)
    const fadeIn = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 10 },
  };
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.05 }}
             initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 ,delay:0.2}}
            className='flex flex-col border-2 border-blue-500 rounded-xl bg-gradient-to-b from-white to-blue-100 shadow-2xl mx-12 md:mx-8 lg:mx-0 px-2 lg:px-2 my-5'>
            <div>
                <img className='w-70 h-40 px-2 rounded-2xl mt-4  mx-auto object-cover' src={food.img} alt="" />
            </div>
            <div className='mt-2 ml-10 space-y-1 flex-1'>
                <p className='font-semibold text-xl'>Title : {food.title}</p>
                <p className='font-medium text-md text-gray-600'> <span className='font-bold'>Action :</span> {food.action}</p>
                <p className='font-medium text-md text-gray-600'>
                  <span className='font-bold'> Benefit : </span> {food.tags.map((tag,index)=><span key={index} >{tag}</span>)}</p>
                <p className='font-medium text-md text-gray-600 '>
                    <span className='font-bold'>Description : </span>{food.description}</p>
                <div className='flex justify-start gap-1 items-center font-medium text-md text-gray-600 '>
                    <span className='font-bold'>importance :</span><FaStar color='gold'></FaStar > {food.importance}</div>
            </div>
                <a href={food.link} className='btn w-30 ml-10 mb-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-700 mt-3 font-bold'>Explore </a>
        </motion.div>
    );
};

export default EffectOn;