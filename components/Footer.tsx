"use client"
import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '@/constants'
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='relative border-t border-gray-200 dark:border-gray-800 w-full text-gray-900 dark:text-white'>
            <div className='w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
                {/* Gradient Overlay - Dark in dark mode, Light in light mode */}
                <div className='absolute inset-0 bg-gradient-to-t from-white/10 dark:from-black/10 via-transparent to-transparent pointer-events-none' />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'
                >
                    {/* Contact Info */}
                    <div className='text-center sm:text-left'>
                        <h3 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4'>
                            Get in Touch
                        </h3>
                        <div className='space-y-3'>
                            <div className='flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'>
                                <FiPhone className="w-4 h-4" />
                                <span className='font-mono'>+94 76 375 3730</span>
                            </div>
                            <div className='flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors'>
                                <a href="#contact" className='flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition-colors' aria-label="Go to contact form">
                                    <FiMail className="w-4 h-4" />
                                    <span>Sivatheevan1224@gmail.com</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className='text-center'>
                        <h3 className='text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4'>
                            Connect With Me
                        </h3>
                        <div className='flex items-center justify-center gap-4 sm:gap-6'>
                            {SOCIAL_MEDIA_LINKS.map((link, index) => (
                                <motion.a
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.2, rotate: 8 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: index * 0.1
                                    }}
                                    href={link.href}
                                    key={index}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 hover:bg-gray-200 dark:hover:bg-white/5 rounded-full'
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Name and Copyright */}
                    <div className='text-center lg:text-right'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white'>
                                Sivatheevan
                            </h2>
                            <p className='text-sm text-gray-600 dark:text-gray-400 mb-4'>
                                Full Stack Developer
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='relative z-10 mt-12 pt-8 border-t border-gray-200 dark:border-gray-800'
                >
                    <p className='text-center text-sm text-gray-600 dark:text-gray-400'>
                        &copy; {new Date().getFullYear()} Sivatheevan. All rights reserved.
                        <span className='block sm:inline sm:ml-1'>
                            Crafted with ❤️ using Next.js & TailwindCSS
                        </span>
                    </p>
                </motion.div>
            </div>
            {/* Floating WhatsApp button */}
            <a
                href="https://wa.me/94763753730"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed right-6 bottom-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-200"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="w-6 h-6" />
            </a>
        </footer>
    )
}

export default Footer
