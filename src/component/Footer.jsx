import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <footer className='md:mt-40 mt-20 bg-black/5 font-poppins'>
            <div className='container max-w-360 mx-auto py-20 px-5 '>
                <div className='grid grid-cols-1 md:grid-cols-5  '>
                    {/* logo */}
                    <div className='md:col-span-2'>
                        <h3 className='text-secondary dark:text-white font-bold text-2xl hover:text-primary transition-colors mb-5 '>
                            <Link to="/">Panto</Link>
                        </h3>
                        <p className='text-sm font-medium text-secondary dark:text-white w-73 mb-4'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                    </div>
                    {/* Services */}
                    <div>
                        <ul>
                            <li className='text-lg font-bold text-primary dark:text-white mb-4'>
                                <Link to="/">Services</Link>
                            </li>
                            <li className='text-sm text-secondary dark:text-white mb-4'>
                                <Link to="/">Email Marketing</Link>
                            </li>
                            <li className='text-sm text-secondary dark:text-white mb-4'>
                                <Link to="/">Campaigns</Link>
                            </li>
                            <li className='text-sm text-secondary dark:text-white mb-4'>
                                <Link to="/">Branding</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Furniture */}
                    <div>
                        <ul>
                            <li className='text-lg font-bold text-primary mb-4'>
                                <Link to="/">Furniture</Link>
                            </li>
                            <li className='text-sm text-secondary dark:text-white mb-4'>
                                <Link to="/">Beds</Link>
                            </li>
                            <li className='text-sm text-secondary dark:text-white mb-4'>
                                <Link to="/">Chair</Link>
                            </li>
                            <li className='text-sm text-secondary dark:text-white mb-4'>
                                <Link to="/">All</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Follow Us */}
                    <div>
                        <ul>
                            <li className='text-lg font-bold text-primary mb-4'>
                                <Link to="/">Follow Us</Link>
                            </li>
                            <li className='text-sm text-secondary dark:text-white mb-4'>
                                <Link to="/" className='flex items-center  space-x-1 hover:text-primary text-sm'>
                                    <FaFacebookF />
                                    <span>Facebook</span>

                                </Link>
                            </li>
                            <li className='text-sm text-secondary mb-4 dark:text-white'>
                                <Link to="/" className='flex items-center  space-x-1 hover:text-primary text-sm'>
                                    <FaTwitter />
                                    <span>Twitter</span>

                                </Link>
                            </li>
                            <li className='text-sm text-secondary dark:text-white mb-4'>
                                <Link to="/" className='flex items-center  space-x-1 hover:text-primary text-sm'>
                                    <FaInstagram />
                                    <span>Instagram</span>

                                </Link>
                            </li>

                        </ul>
                    </div>


                </div>

            </div>
            <div className='container max-w-7xl mx-auto flex items-center justify-between p-4 '>
                <div>
                    <p className='text-sm text-[#1E2833] dark:text-white'>Copyright © {new Date().getFullYear()}</p>

                </div>
                <div className='flex items-center justify-between gap-5'>
                    <p className='text-secondary dark:text-white text-sm'>Terms & Conditions</p>
                    <p className='text-secondary dark:text-white text-sm'>Privacy Policy</p>
                </div>

            </div>




        </footer>
    )
}

export default Footer