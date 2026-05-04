import React from 'react'
import ButtonIcon from './ButtonIcon'
import material1 from "../assets/material1.png"
import material2 from "../assets/material2.png"
import material3 from "../assets/material3.png"
const Materials = () => {
    return (
        <section className='container max-w-360 mx-auto my-24 px-4 flex flex-col md:flex-row justify-center gap-20 font-poppins '>

            <div className='md:w-1/2 py-12'>
                <h3 className='uppercase text-primary text-lg font-semibold mb-4'>Materials</h3>
                <h2 className='md:text-4xl text-3xl font-bold md:w-100 leading-snug '>Very serious materials for making furniture</h2>
                <p className='text-secondary dark:text-white text-lg font-normal md:w-139 mb-1'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                <ButtonIcon text={"More Info"} />
            </div>
            <div className=" md:w-1/2 grid grid-cols-2 md:grid-cols-3 items-center md:items-end ">
                <div>
                    <img src={material1} alt="" />
                    <img src={material2} alt="" />

                </div>
                <div className=' md:col-span-2 col-span-1'>
                    <img src={material3} alt="" className='w-full md:h-135' />
                </div>

            </div>


        </section>
    )
}

export default Materials