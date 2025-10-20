"use client";
import { EDUCATION } from '@/constants';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import SectionFloatingIcons from './SectionFloatingIcons';

const EducationSection = () => {
    return (
        <section className='relative min-h-screen text-gray-900 dark:text-white w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20' id='education'>
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                {/* light-mode subtle backdrop; dark-mode keeps dark backdrop */}
                <div className="absolute inset-0 bg-white/60 dark:bg-black/90" />
                <SectionFloatingIcons />
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className='text-center mb-6 sm:mb-12 md:mb-16'
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                        Education Journey
                    </h2>
                    <motion.div 
                        className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-3 sm:mb-6"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                    <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4'>
                        My academic journey and educational achievements that shaped my professional path
                    </p>
                </motion.div>

                <div className='max-w-4xl mx-auto relative'>
                    {/* Timeline line */}
                    <div className='absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 z-0'></div>

                    {Array.isArray(EDUCATION) && EDUCATION.map((edu, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            key={index}
                            className='relative flex flex-col gap-4 mb-6 sm:mb-8 md:mb-12 group'
                        >
                            {/* Timeline dot */}
                            <div className='absolute left-3 xs:left-4 transform -translate-x-1/2 w-5 xs:w-6 sm:w-8 md:w-10 h-5 xs:h-6 sm:h-8 md:h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-[2px] xs:border-[3px] sm:border-4 border-black shadow-lg shadow-blue-500/25 z-10'>
                                <FaGraduationCap className="w-2 xs:w-2.5 sm:w-3 md:w-4 h-2 xs:h-2.5 sm:h-3 md:h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
                            </div>

                            {/* Content */}
                            <div className='pl-6 xs:pl-8 w-full'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        y: -10,
                                        rotateY: 5,
                                        transition: { 
                                            type: "spring", 
                                            stiffness: 300, 
                                            damping: 20 
                                        }
                                    }}
                                    className='bg-white/80 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 p-3 xs:p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-sm dark:shadow-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md dark:hover:shadow-2xl dark:hover:shadow-blue-500/30 transition-all duration-500 relative overflow-hidden card-item'
                                >
                                    <div className='relative z-10'>
                                        <div className='flex items-start gap-2 xs:gap-3 sm:gap-4 md:gap-6 mb-2 xs:mb-3 sm:mb-4 md:mb-6'>
                                            <motion.div 
                                                className='w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0 bg-white/70 dark:bg-gradient-to-br dark:from-blue-500/20 dark:to-purple-500/20 flex items-center justify-center transition-all duration-300 relative z-30'
                                                whileHover={{ 
                                                    scale: 1.2, 
                                                    rotate: 360,
                                                    transition: { duration: 0.6 }
                                                }}
                                            >
                                                {edu.img}
                                            </motion.div>
                                            <div className='min-w-0 flex-1'>
                                                <motion.h3 
                                                    className='text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-0.5 xs:mb-1 sm:mb-2 break-words transition-all duration-300'
                                                    whileHover={{ x: 5 }}
                                                >
                                                    {edu.degree}
                                                </motion.h3>
                                                <motion.div 
                                                    className='flex items-center gap-1.5 xs:gap-2 text-blue-500 hover:text-blue-400'
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <motion.div
                                                        whileHover={{ rotate: 360, scale: 1.2 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        <FaUniversity className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                                    </motion.div>
                                                    <p className='text-[10px] xs:text-xs sm:text-sm md:text-base font-medium break-words text-gray-700 dark:text-gray-300'>
                                                        {edu.institution}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        </div>
                                        
                                        <div className='space-y-1.5 xs:space-y-2 sm:space-y-3 md:space-y-4'>
                                            <motion.div 
                                                className='flex items-center gap-1.5 xs:gap-2 text-purple-500 hover:text-purple-400'
                                                whileHover={{ x: 5 }}
                                            >
                                                <motion.div
                                                    whileHover={{ scale: 1.3, rotate: 15 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <FaCalendarAlt className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                                                </motion.div>
                                                <p className='text-[10px] xs:text-xs sm:text-sm md:text-base font-medium text-gray-700 dark:text-gray-300'>
                                                    {edu.duration}
                                                </p>
                                            </motion.div>
                                            <motion.p 
                                                className='text-[10px] xs:text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed hover:text-gray-900 dark:hover:text-white transition-colors duration-300'
                                                whileHover={{ x: 5 }}
                                            >
                                                {edu.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EducationSection;
