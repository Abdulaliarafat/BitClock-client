import React from 'react';
import { useLoaderData } from 'react-router';
import Food from './Food';
import FoodAnimation from '../../assets/test food.json';
import Lottie from 'lottie-react';

const Fridge = () => {
    const allFood=useLoaderData()
    console.log(allFood)
    return (
        <div className='max-w-5xl mx-auto mb-10'>
            <div className='flex md:justify-center items-center mb-5'>
                <Lottie className='w-28 md:w-35 ' animationData={FoodAnimation}></Lottie>
                <h1 className='font-bold text-2xl md:text-3xl mt-8 text-amber-500'>Test your Favorite Food</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1 md:gap-2 lg:gap-3'>
               {
                allFood.map(food=><Food key={food._id} food={food}></Food>)
               }
            </div>
        </div>
    );
};

export default Fridge;