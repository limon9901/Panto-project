import React from 'react'
import Footer from '../component/Footer'
import contactimage from "../assets/contact-background.jpg"
import Materials from '../component/Materials'
import Testimetion from '../component/Testimetion'

const Contact = () => {
    return (
        <section>
            <div style={{ backgroundImage: `url(${contactimage})` }} className='w-full h-100  bg-cover bg-no-repeat flex items-center justify-center text-white'>
                <h1 className='text-5xl underline font-bold'>Contact Page</h1>

            </div>
            <Materials />
            <Testimetion />


            <Footer />

        </section>
    )
}

export default Contact