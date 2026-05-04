import React, { useContext } from 'react'
import { products } from '../utils/product'
import { getimage } from '../utils/productImage'
import Rating from './Rating'
import { GoPlus } from "react-icons/go";
import { CardContext } from '../context/CardProduct';



const ProductCart = ({ product }) => {
    const { addToCard } = useContext(CardContext)
    return (



        <div className='shadow-md'>

            <img src={getimage(product.imageUrl)} alt={product.imageUrl} />
            <div className='bg-white rounded-b-md dark:bg-gray-700  p-4'>
                <h3 className='text-base font-normal text-[#8D8D8D] dark:text-white mb-1.5'>{product.category}</h3>
                <h2 className='text-[20px] font-semibold text-[#0D1B39] dark:text-white mb-1'>{product.name}</h2>
                <Rating rating={product.rating} />
                <div className='flex items-center justify-between '>
                    <div className='text-[20px] font-semibold text-[#0D1B39] dark:text-white'> <sup>$</sup> <span>{product.price}</span> </div>

                    <button
                        onClick={() => {
                            addToCard(product)
                        }}
                        className='bg-[#0D1B39] rounded-full cursor-pointer  '>
                        <GoPlus className='text-white text-[20px] ' />

                    </button>


                </div>

            </div>


        </div>




    )
}

export default ProductCart