import React, { use } from 'react';
import Expired from '../Expired';
import ExpiredFoods from './ExpiredFoods';
const useExpoPromise=fetch('/UseExpired.json').then(res=>res.json())
const UseExpired = () => {
    const expoFood=use(useExpoPromise)
    return (
        <div className='max-w-6xl mx-auto mb-10 my-18'>
            <h1 className='font-bold text-2xl md:text-3xl mt-8 text-amber-500 mb-10 text-center'>Best use of expired food</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 md:gap-3 lg:gap-3'>
                {
                 expoFood.map(food=><ExpiredFoods key={food.id} food={food}></ExpiredFoods>)
                }
            </div>
        </div>
    );
};

export default UseExpired;