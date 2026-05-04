import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating }) => {
    const totalStar = 5;

    return (
        <div className='flex space-x-2 mb-6'>
            {
                Array.from({ length: totalStar }, (_, index) => {
                    const starIndex = index + 1;
                    return starIndex <= rating ? (<AiFillStar key={index} className='text-[#F6B76F]' />) : (<AiOutlineStar key={index} className='text-[#F6B76F]' />)
                })
            }
        </div>
    )
}

export default Rating