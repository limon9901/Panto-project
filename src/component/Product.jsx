import React, { useState } from 'react'
import ProductCart from './ProductCart'
import { products } from '../utils/product'

import btnIcon from "../assets/button-icon.png"


const Product = ({ text }) => {
    const catagory = ["Chair", "Beds", "Sofa", "Lamp"]
    const [selectCategory, setSlectCategory] = useState("Chair");
    const [visibleProduct, setVisible] = useState(4)

    const filterProduct = products.filter((product) => product.category === selectCategory);
    const loadmoreproduct = () => {
        setVisible((product) => product + 4)

    }



    return (
        <section className='bg-secondary-bg py-10 font-poppins dark:bg-gray-900'>
            <div className=' container max-w-360 mx-auto flex items-center justify-center  '>
                <div className=''>
                    <h1 className='text-4xl font-bold mb-5'>{text}</h1>
                    <div className='max-w-md flex items-center justify-between p-2  rounded-full bg-[#EEEEEE] dark:bg-gray-700'>
                        {
                            catagory.map((catagorys, index) => (

                                <button
                                    onClick={() => {
                                        setSlectCategory(catagorys)
                                        setVisible(4)
                                    }}
                                    key={index} className={`text-lg font-semibold hover:bg-primary hover:text-white transition-colors py-2 px-4 rounded-full ${selectCategory === catagorys ? "bg-white text-primary" : ""} `}>{catagorys}</button>
                            ))
                        }

                    </div>


                </div>

            </div>
            <div className='container max-w-360 mx-auto  py-7 px-4'>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
                    {
                        filterProduct.slice(0, visibleProduct).map((product, index) => (
                            <ProductCart key={index} product={product} />

                        ))
                    }


                </div>
                {/* Load more button */}
                {
                    visibleProduct < filterProduct.length && (
                        <div className='flex items-center justify-center mt-8'>
                            <button onClick={loadmoreproduct} className='text-base text-primary flex items-center gap-1'>
                                View All
                                <img src={btnIcon} alt="" />

                            </button>

                        </div>
                    )

                }
            </div>

        </section>
    )
}

export default Product