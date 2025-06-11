import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import img1 from '/top-view-cooked-bell-peppers-with-different-seasonings-dark-grey-surface-food-dolma-vegetable-meal-beef.jpg'
import img2 from '/top-view-fresh-vegetables-greens-sliced-cabbage-carrots-peppers-with-notepad-bright-blue-food-meal-vegetable-lunch-healthy-salad.jpg'
import img3 from '/front-view-sugar-cookies-with-nuts-jam-light-surface.jpg'
import img4 from '/fresh-dairy-products.jpg'
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <Swiper
                slidesPerView={1}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, deleteSpeed: 8000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                modules={[Navigation, Pagination, Autoplay]}>
                <SwiperSlide>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover' src={img1} alt="slide-1" />
                        <div className='absolute top-20 md:top-60 md:left-50 lg:left-100 space-y-4'>
                            <h1 className='font-bold text-2xl md:text-4xl text-white text-center'>
                                <Typewriter
                                    words={["Vegetable Snack Deligh"]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={80}
                                    delaySpeed={1000}
                                />
                            </h1>
                            <p className='font-medium test-xs md:font-bold text-white text-center text-balance'>Crunchy, colorful bites served fresh for healthy afternoon snack cravings.</p>
                            <Link to='/fridge' className='bg-yellow-500 px-4 py-3 rounded-3xl text-white font-semibold  hover:bg-orange-500 hover:text-white hover:rounded-md ml-38 md:ml-60'>View food</Link>
                        </div>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover' src={img2} alt="slide-2" />
                        <div className='absolute top-20 md:top-60 md:left-50 lg:left-100 space-y-4'>
                            <h1 className='font-bold text-2xl md:text-4xl text-white text-center'>
                                <Typewriter
                                    words={["Fresh Garden Harvest"]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={80}
                                    delaySpeed={1000}
                                /></h1>
                            <p className='font-medium test-xs md:font-bold text-white text-center text-balance'>Crisp, vibrant vegetables picked straight from the garden for freshness.</p>
                            <Link to='/fridge' className='bg-yellow-500 px-4 py-3 rounded-3xl text-white font-semibold  hover:bg-orange-500 hover:text-white hover:rounded-md ml-38 md:ml-50'>View food</Link>
                        </div>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover ' src={img3} alt="slide-3" />
                        <div className='absolute  top-20 md:top-60 md:left-50 lg:left-100  space-y-4'>
                            <h1 className='font-bold text-2xl md:text-4xl text-white text-center'>
                                <Typewriter
                                    words={["Cookie Corn Crunch"]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={80}
                                    delaySpeed={1000}
                                /></h1>
                            <p className='font-medium test-xs md:font-bold text-white text-center text-balance'>Golden cookies with sweet corn crunch offer a unique delight.</p>
                            <Link to='/fridge' className='bg-yellow-500 px-4 py-3 rounded-3xl text-white font-semibold  hover:bg-orange-500 hover:text-white hover:rounded-md ml-38 md:ml-50'>View food</Link>
                        </div>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className='relative'>
                        <img className='w-[500px] md:w-full h-[300px] md:h-[500px] object-cover ' src={img4} alt="slide-4" />
                        <div className='absolute  top-20 md:top-60 md:left-50 lg:left-100  space-y-4'>
                            <h1 className='font-bold text-2xl md:text-4xl text-white text-center '>
                                <Typewriter
                                    words={["Sweet Milky Treat"]}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={80}
                                    delaySpeed={1000}
                                /></h1>
                            <p className='font-medium test-xs md:font-bold text-white text-center text-balance'>Creamy milk pairs perfectly with soft, sugary traditional sweet treats.</p>
                            <Link to='/fridge' className='bg-yellow-500 px-4 py-3 rounded-3xl text-white font-semibold  hover:bg-orange-500 hover:text-white hover:rounded-md ml-38 md:ml-50'>View food</Link>
                        </div>
                    </motion.div>
                </SwiperSlide>
            </Swiper>
        </motion.div>
    );
};

export default Banner;