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

            <div className='flex justify-between items-center'>
                <div>
                    <select onChange={e => setCategory(e.target.value)}
                        className=' w-xs p-2 mb-2 border-3 border-yellow-500 rounded-xl font-bold text-yellow-600' >
                        <option value="All">All</option>
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
                <div className='mb-6 flex gap-2 w-md'>
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