import React from 'react'
import ButtonIcon from './ButtonIcon'


const Why = () => {
    return (
        <section className='my-24 font-poppins container max-w-360 mx-auto px-4'  >
            <div className=' grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12'>
                <div>
                    <h2 className='text-4xl font-bold'>Why <br />Choosing Us</h2>
                </div>
                <div>
                    <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
                    <p className='text-base text-secondary mb-1 dark:text-white'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    <ButtonIcon text={"More Info"} />

                </div>
                <div>
                    <h3 className='text-2xl font-semibold mb-3'>Affordable Price</h3>
                    <p className='text-base text-secondary mb-1 dark:text-white'>You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.</p>
                    <ButtonIcon text={"More Info"} />

                </div>
                <div>
                    <h3 className='text-2xl font-semibold mb-3'>Many Choices</h3>
                    <p className='text-base text-secondary mb-1 dark:text-white'>We provide many unique work space choices so that you can choose the workspace to your liking.</p>
                    <ButtonIcon text={"More Info"} />

                </div>
            </div>
        </section>
    )
}

export default Why