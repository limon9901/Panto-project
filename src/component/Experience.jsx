import React from 'react'
import experience from "../assets/expricences.png"
import ButtonIcon from './ButtonIcon'

const Experience = () => {
    return (
        <section className='container max-w-360 mx-auto my-24 px-4 flex flex-col md:flex-row justify-center gap-20 font-poppins '>
            <div className='max-w-135 md:w-1/2'>
                <img src={experience} alt="expricense" className='w-full h-full' />

            </div>
            <div className='md:w-1/2 py-12'>
                <h3 className='uppercase text-primary text-lg font-semibold mb-4'>experiences</h3>
                <h2 className='md:text-4xl text-3xl font-bold md:w-2/3 leading-snug '>We provide you the best experience</h2>
                <p className='text-secondary dark:text-white text-lg font-normal md:w-139 mb-1'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                <ButtonIcon text={"More Info"} />
            </div>


        </section>
    )
}

export default Experience