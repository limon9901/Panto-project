import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';
import { reviews } from '../utils/reviews';
import Rating from './Rating';
// import required modules
import { Navigation } from 'swiper/modules';

const Testimetion = () => {
    return (
        <section className='  container max-w-360 px-4 mx-auto font-poppins '>
            <div className='flex flex-col items-center justify-center mb-12 '>
                <h3 className='text-primary capitalize  font-semibold text-lg mb-4'>Testimonials</h3>
                <h2 className='text-3xl md:text-4xl font-bold '>Our Client Reviews</h2>
            </div>
            {/* last section */}
            <Swiper 
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,

                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}

                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {

                    reviews.map((review, index) => (
                        <SwiperSlide key={index} style={{ backgroundImage: `url(${review.coverImg})`, }} className='bg-no-repeat bg-cover rounded-lg  '>
                            <div className='h-145 mb-4 flex  items-center justify-center text-center  '>
                                <div className='relative mt-30  bg-white dark:bg-gray-700 rounded-lg h-65 w-4/5  '>
                                    <div className='flex flex-col items-center  justify-center mt-15 px-5 '>
                                        <img src={review.image} alt="" className='absolute ring-2 size-20  ring-primary rounded-full object-cover -top-10  left-1/2 -translate-x-1/2  ' />
                                        <h3 className=' text-lg font-semibold mb-4 '>{review.name}</h3>
                                        <p className='text-sm text-secondary dark:text-white font-normal mb-6'>{review.review}</p>
                                        <Rating rating={review.rating} />

                                    </div>



                                </div>

                            </div>
                        </SwiperSlide>

                    ))
                }

            </Swiper>

        </section>
    )
}

export default Testimetion