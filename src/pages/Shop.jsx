import React from 'react'
import bannerimage from '../assets/banner.png'
import Product from '../component/Product'

const Shop = () => {
    return (
        <section style={{ backgroundImage: `url(${bannerimage})` }} className='h-100 bg-center bg-cover font-poppins'>
            <div className='container max-w-360 mx-auto px-4 '>
                <div className='flex flex-col items-center justify-center h-100'>
                    <h1 className='text-2xl md:text-4xl text-white font-bold'>Shop Our Product</h1>



                </div>



            </div>
            <Product text={"What's Your Choice"} />

        </section>
    )
}

export default Shop