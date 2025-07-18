import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react'
const fadeIn = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 10 },
}
const Food = ({ food }) => {
    // console.log(food)
    const expirydate = new Date(food.expirydate).toISOString().slice(0, 10)
    const today = new Date().toISOString().slice(0, 10)
    const expiration = expirydate < today

    return (
        <motion.div
             whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.05 }}
             initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 ,delay:0.2}}
            className={`${expiration ? 'border-4 border-red-700 bg-gradient-to-b from-white to-red-100' : "border-3 border-amber-500 bg-gradient-to-b from-white to-yellow-100"} rounded-xl  shadow-2xl mx-12 md:mx-8 lg:mx-0 px-4 lg:px-2`}>
            <div>
                <img className='w-50 h-30 px-2 my-1 mx-auto object-cover' src={food.photoURL} alt="" />
            </div>
            <div className='mt-2 relative ml-4'>
                <p className='font-semibold text-xl'>Food : {food.foodtitle}</p>
                <p className='font-medium text-md text-gray-600'>Category : {food.foodcategory}</p>
                <p className='font-medium text-md text-gray-600'>Quantity : {food.quantity}</p>
                <p className='font-medium text-md text-gray-600 '>Expiry date : {food.expirydate}</p>
                {
                    expiration && <span className='text-xs ml-1 text-white px-3 py-1.5 rounded-2xl font-bold bg-red-600 mt-2 absolute top-17 left-46 md:right-10'> Expired</span>
                }
            </div>
            <Link to={`/foodDetails/${food._id}`} className={`${expiration ? 'btn w-30 ml-4 mb-2 bg-gradient-to-r from-red-500 to-red-600 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-red-700 hover:to-red-700 mt-3 font-bold' : 'btn w-30 ml-4 mb-2 bg-gradient-to-r from-yellow-600 to-green-700 text-white hover:rounded-2xl hover:bg-gradient-to-r hover:from-yellow-800 hover:to-green-800 mt-3 font-bold'} `}>See Details</Link>
        </motion.div>
    );
};

export default Food;