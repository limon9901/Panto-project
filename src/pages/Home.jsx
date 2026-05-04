import React from 'react'
import Hero from '../component/Hero'
import Why from '../component/Why'
import Product from '../component/Product'
import Experience from '../component/Experience'
import Materials from '../component/Materials'
import Testimetion from '../component/Testimetion'
import Footer from '../component/Footer'

const Home = () => {
    return (
        < >
            <Hero />
            <Why />
            <Product text={"Best Selling Product"} />
            <Experience />
            <Materials />
            <Testimetion />
            <Footer />
        </>
    )
}

export default Home