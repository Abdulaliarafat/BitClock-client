import React, { use, useEffect, useState } from 'react';
import Food from './Food';
import FoodAnimation from '../../assets/test food.json';
import Lottie from 'lottie-react';
import { motion } from 'motion/react'
import axios from 'axios';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { useLoaderData } from 'react-router';

const Fridge = () => {
    const { setLoading } = use(AuthContext)
    // const allFood = useLoaderData()
    // console.log(allFood)
    //  add search functionality
    const [allFood, setAllFood] = useState([])
    const [searchText, setSearchText] = useState('')
    const fetchFood = async (query = '') => {
        try {
            axios.get(`http://localhost:3000/food?search=${query}`).then(res => {
                setLoading(true)
                setAllFood(res.data)
            })
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchFood();
    }, [allFood]);
    const handleSearch = () => {
        fetchFood(searchText);
    };
    // Filtered category
    const [category, setCategory] = useState('All');
    const FilteredFood = category == 'All' ? allFood : allFood.filter(food=> food.foodcategory === category)

    return (
        <div className='max-w-5xl mx-auto mb-10'>
            <div className='flex md:justify-center items-center mb-5'>
                <Lottie className='w-28 md:w-35 ' animationData={FoodAnimation}></Lottie>
                <h1 className='font-bold text-2xl md:text-3xl mt-8 text-amber-500'>Test your Favorite Food</h1>
            </div>

            <div className='md:flex md:flex-row md:mx-6 lg:mx-0 justify-between items-center'>
                <div className='ml-8 md:ml-0' >
                    <select onChange={e => setCategory(e.target.value)}
                        className='w-51 lg:mx-1 mx-4  md:w-xs p-2 mb-2 lg:mb-5 md:mb-5 border-3 border-yellow-600 rounded-xl font-bold text-yellow-600' >
                        <option  value="All">All</option>
                        <option value="Dairy">🐄 Dairy</option>
                        <option value="Meat">🥩 Meat</option>
                        <option value="Vegetables">🥦 Vegetables</option>
                        <option value="Snacks">🍩 Snacks</option>
                        <option value="Bakery">🍞 Bakery</option>
                        <option value="Seafood">🐟 Seafood</option>
                        <option value="Fruits">🍎 Fruits</option>
                    </select>
                </div>
                {/* Search Box */}
                <div className='mb-6 ml-12 flex gap-2 md:mx-0 mx-4 md:w-md'>
                    <input
                        type='text'
                        placeholder='Search by title or category'
                        className='border-3 border-yellow-600 rounded-xl font-bold text-yellow-600 px-4 py-2 md:ml-12.5 md:w-74 lg:w-full'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        onClick={handleSearch}
                        className='bg-amber-500 text-white px-4 py-2 rounded'>
                        Search
                    </button>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1 md:gap-2 lg:gap-4'>
                {
                    FilteredFood.map(food => <Food key={food._id} food={food}></Food>)
                }
            </motion.div>
        </div>
    );
};

export default Fridge;