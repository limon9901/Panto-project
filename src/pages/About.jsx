import React from 'react'
import aboutbanner from "../assets/about-background.jpg"
import Experience from '../component/Experience'
import Footer from '../component/Footer'

const About = () => {
    return (
        <section>
            <div style={{ backgroundImage: `url(${aboutbanner})` }} className='w-full h-100  bg-cover bg-no-repeat flex items-center justify-center text-white'>
            <h1 className='text-5xl underline font-bold'>About Page</h1>

        </div>
        <Experience/>
        <Footer/>
        
        </section>
    )
}

export default About