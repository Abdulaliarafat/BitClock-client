import React, { use } from 'react';
import { motion } from "motion/react"
import EffectOn from './EffectOn';
const LifeStylePromise = fetch('/LifeStyle.json')
                        .then(res => res.json())
const LiteStyle = () => {
    const data=use(LifeStylePromise)
    console.log(data)
    return (
       <div
            className='max-w-6xl mx-auto mb-10 my-18'>
            <h1 className='font-bold text-2xl md:text-3xl mt-8 text-amber-500 mb-10 text-center'>Food effect on LifeStyle</h1>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.08, ease: "easeOut" }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 lg:gap-6'>
                {
                    data.map(food => <EffectOn key={food.id} food={food}></EffectOn>)
                }
            </motion.div>
        </div>
    );
};

export default LiteStyle;