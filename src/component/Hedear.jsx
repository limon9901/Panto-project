import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router'
import { FaBagShopping } from "react-icons/fa6";
import { TfiMenu } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import { BsSun } from 'react-icons/bs';
import { CardContext } from '../context/CardProduct';

const Hedear = () => {
    const [hamburgerMenu, sethumburgerMebu] = useState(false)
    const [isScroll, setisScroll] = useState(false)
    // When scroll

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setisScroll(true)
            }
            else {
                setisScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.addEventListener('scroll', handleScroll)
        }
    }, [])
    const { cardCound } = useContext(CardContext)

    return (
        <header className={`font-poppins fixed z-50 right-0 top-0 left-0 ${isScroll ? "bg-white text-black transition-colors shadow-md" : "bg-transparent text-white transition-colors"} `}>
            <div className='container max-w-360 mx-auto flex items-center justify-between py-6  px-4'>
                {/* logo */}
                <div >

                    <NavLink to="/" className='text-2xl font-black ' >Panto</NavLink>
                </div>
                {/* mobile hamburgermenu */}
                <div onClick={() => sethumburgerMebu(!hamburgerMenu)} className='block md:hidden text-2xl z-50 ' >
                    {
                        hamburgerMenu ? <RxCross2 className='text-white' /> : <TfiMenu />
                    }

                </div>
                {/* mobile menu */}
                <div className={`md:hidden fixed w-full top-0 left-0 bg-black/90 h-screen z-40 ${hamburgerMenu ? " translate-x-0 transition-transform duration-300" : " translate-x-full transition-transform duration-300 "}  `}>
                    <ul className='flex flex-col items-center justify-center space-y-6 gap-6 py-28 ' >
                        <li>
                            <NavLink onClick={() => sethumburgerMebu(false)

                            } to="/" className={({ isActive }) =>
                                isActive ? "text-primary font-semibold" : "text-white hover:text-primary font-semibold"
                            }>Furniture</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => sethumburgerMebu(false)

                            } to="/shops" className={({ isActive }) =>
                                isActive ? "text-primary font-semibold" : "text-white hover:text-primary font-semibold"
                            }>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => sethumburgerMebu(false)

                            } to="/about" className={({ isActive }) =>
                                isActive ? "text-primary font-semibold" : "text-white hover:text-primary font-semibold"
                            }>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => sethumburgerMebu(false)

                            } to="/contact" className={({ isActive }) =>
                                isActive ? "text-primary font-semibold" : "text-white hover:text-primary font-semibold"
                            }>Contact</NavLink>
                        </li>
                    </ul>

                </div>



                {/* desktop menu */}
                <div className='hidden md:block'>
                    <ul className='flex items-center justify-center space-x-8 gap-8' >
                        <li>
                            <NavLink to="/" className={({ isActive }) =>
                                isActive ? "text-primary font-semibold" : " hover:text-primary "
                            }>Furniture</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shops" className={({ isActive }) =>
                                isActive ? "text-primary font-semibold" : " hover:text-primary "
                            }>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) =>
                                isActive ? "text-primary font-semibold" : " hover:text-primary "
                            }>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) =>
                                isActive ? "text-primary font-semibold" : " hover:text-primary "
                            }>Contact</NavLink>
                        </li>
                    </ul>

                </div>
                {/* Buy */}
                <div className='relative hidden md:block'>
                    <FaBagShopping className='text-2xl block  ' />
                    <sub className=' absolute top-0 -right-3 bg-primary text-white flex items-center justify-center rounded-full p-2 text-sm '>{cardCound}</sub>

                </div>
            </div>



        </header>
    )
}

export default Hedear