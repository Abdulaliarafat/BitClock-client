import React, { useEffect, useState } from 'react';
import Food from './Food';
import FoodAnimation from '../../assets/test food.json';
import Lottie from 'lottie-react';
import { motion } from 'motion/react'
import axios from 'axios';
// import { useLoaderData } from 'react-router';

const Fridge = () => {
    // const allFood = useLoaderData()
     // console.log(allFood)
    //  add search functionality
    const [allFood,setAllFood]=useState([])
    const [searchText,setSearchText]=useState('')
    const fetchFood=async(query='')=>{
        try{
            axios.get(`http://localhost:3000/food?search=${query}`).then(res=>{
           setAllFood(res.data)
           })      
        }
        catch(error){
             console.log(error)
        }
    }
     useEffect(() => {
        fetchFood();
    }, []);
   const handleSearch = () => {
        fetchFood(searchText);
    };

    return (
        <div className='max-w-5xl mx-auto mb-10'>
            <div className='flex md:justify-center items-center mb-5'>
                <Lottie className='w-28 md:w-35 ' animationData={FoodAnimation}></Lottie>
                <h1 className='font-bold text-2xl md:text-3xl mt-8 text-amber-500'>Test your Favorite Food</h1>
            </div>
            {/* Search Box */}
              <div className='mb-6 flex gap-2'>
                <input
                    type='text'
                    placeholder='Search by title or category'
                    className='border border-gray-300 px-4 py-2 rounded w-full'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    onClick={handleSearch}
                    className='bg-amber-500 text-white px-4 py-2 rounded'>
                    Search
                </button>
            </div>  
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{duration:0.8,ease:'easeOut'}}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1 md:gap-2 lg:gap-4'>
                {
                    allFood.map(food => <Food key={food._id} food={food}></Food>)
                }
            </motion.div>
        </div>
    );
};

export default Fridge;