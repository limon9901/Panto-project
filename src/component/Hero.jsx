import React, { useContext } from 'react'
import bannerimage from '../assets/banner.png'
import { BsMoon, BsSearch, BsSun } from "react-icons/bs";
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext)
    return (
        <section style={{ backgroundImage: `url(${bannerimage})` }} className='h-screen bg-cover bg-center relative text-white '>
            <div className='flex flex-col items-center justify-center py-30 md:w-1/2 mx-auto font-poppins '>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-medium   text-center leading-snug mb-10'>Make your interior more
                    minimalistic & modern</h1>
                <p className=' md:text-2xl font-normal text-sm md:w-2/3 text-center px-2 text-white mb-6'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
                <div className='relative flex items-center justify-center bg-white/15 rounded-full shadow-lg border border-gray-300 w-full px-4 '>
                    <input type="text" placeholder='Search furniture' className='focus:outline-none py-2 px-6 focus:text-white' />
                    <span className='bg-primary rounded-full p-2'><BsSearch /></span>
                </div>
            </div>

            {/* hover button for displayiing tooltip box */}
            <div className='absolute bottom-40 left-24 group hidden md:block'>
                <button className='relative bg-white/25 rounded-full p-4 border-2 border-white  '>
                    {/* <div className='bg-red-700 size-6 rounded-full'></div> */}
                    <div className='hidden : absolute bottom-full group-hover:flex  space-x-2 bg-white/25 rounded-lg   text-xl  transform -translate-x-1/2    mb-3 shadow-md p-2 '>
                        <div className=' bg-primary size-6 rounded-full border border-white bottom-full '></div>
                        <div className=' bg-[#00D6C9] size-6 rounded-full border border-white bottom-full '></div>
                        <div className=' bg-[#7C7C7C] size-6 rounded-full border border-white bottom-full '></div>
                        {/* tooltip arrow */}
                        <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35  ' >
                        </div>
                    </div>



                </button>

            </div>
            {/* botton blur effect */}
            <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-linear-to-t from-white via-transparent to-transparent blur-sm' ></div>

            {/* Dark ang Night  */}
            <div className='absolute z-40 bottom-28 right-20'>
                <button
                    onClick={toggleTheme}
                    className='bg-black text-lg p-5 rounded-full'>
                    {
                        isDarkMode ? <BsSun className='text-yellow-300' /> : <BsMoon className='text-yellow-300' />
                    }
                </button>

            </div>

        </section>
    )
}

export default Hero
