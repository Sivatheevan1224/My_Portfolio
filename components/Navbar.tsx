"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAVIGATION_LINKS } from '@/constants';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { FiSun, FiMoon, FiHome } from 'react-icons/fi';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const checkActiveSection = () => {
            const threshold = 240; // Pixels from viewport top (below navbar)

            let current = 'hero';

            for (const link of NAVIGATION_LINKS) {
                const id = link.href.replace('#', '');
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // Section top has reached or scrolled past the threshold, and its bottom is still visible
                    if (rect.top <= threshold && rect.bottom > 80) {
                        current = id;
                    }
                }
            }

            // Check if user has scrolled to the very bottom of the document
            const scrollHeight = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight
            );
            const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
            const isScrollable = scrollHeight > window.innerHeight + 150;
            if (isScrollable && window.innerHeight + scrollPos >= scrollHeight - 60) {
                current = 'contact';
            }

            setActiveSection(current);
        };

        window.addEventListener('scroll', checkActiveSection, { passive: true, capture: true });
        document.addEventListener('scroll', checkActiveSection, { passive: true, capture: true });
        window.addEventListener('resize', checkActiveSection, { passive: true });

        // Run immediately and after initial render
        checkActiveSection();
        const timer = setTimeout(checkActiveSection, 150);

        return () => {
            window.removeEventListener('scroll', checkActiveSection, { capture: true });
            document.removeEventListener('scroll', checkActiveSection, { capture: true });
            window.removeEventListener('resize', checkActiveSection);
            clearTimeout(timer);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const handleLinkClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        href: string
    ) => {
        e.preventDefault();
        const targetId = href.startsWith('#') ? href.substring(1) : href;
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setIsMobileMenuOpen(false);
    };

    const isActive = (href: string) => {
        const id = href.startsWith('#') ? href.substring(1) : href;
        return activeSection === id;
    };


    return (
        <div>
            <nav className='fixed left-0 right-0 top-4 z-50 px-2 sm:px-4'>
                <div className='mx-auto hidden w-fit items-center 
                justify-center rounded-full bg-white/80 dark:bg-black/60
                py-2.5 px-6 backdrop-blur-2xl border border-gray-200/80 dark:border-white/20 shadow-xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300
                lg:flex'>
                    <div className='flex items-center justify-center gap-4 xl:gap-6'>
                        <div>
                            <ul className='flex items-center gap-3 xl:gap-5 justify-center'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a 
                                            href={item.href} 
                                            className={`
                                                ${index === 0 ? 'flex items-center justify-center p-2' : 'text-sm xl:text-base'} 
                                                font-semibold transition-all duration-300 touch-manipulation relative group
                                                ${isActive(item.href) 
                                                    ? 'text-blue-600 dark:text-cyan-400 scale-105' 
                                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:scale-105'
                                                }
                                            `}
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {index === 0 ? (
                                                <FiHome className="w-5 h-5 transition-all duration-300" />
                                            ) : (
                                                item.label
                                            )}
                                            {isActive(item.href) && (
                                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full animate-pulse"></span>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className='w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm border border-gray-200/60 dark:border-white/10'
                            aria-label='Toggle theme'
                        >
                            {theme === 'dark' ? (
                                <FiSun className='w-4 h-4 text-yellow-400' />
                            ) : (
                                <FiMoon className='w-4 h-4 text-blue-600' />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Bar */}
                <div className='lg:hidden max-w-md mx-auto'>
                    <div className='flex items-center justify-between bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-gray-200/90 dark:border-white/15 shadow-xl rounded-full px-4 py-2 transition-all duration-300'>
                        {/* Brand Logo / Monogram */}
                        <a 
                            href="#hero" 
                            onClick={(e) => handleLinkClick(e, '#hero')}
                            className="flex items-center gap-2.5 group"
                        >
                            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
                                S
                            </span>
                            <span className="font-extrabold text-sm tracking-tight text-gray-900 dark:text-white">
                                Sivatheevan<span className="text-blue-600 dark:text-cyan-400">.</span>
                            </span>
                        </a>

                        {/* Action Buttons: Theme Toggle + Hamburger Toggle */}
                        <div className="flex items-center gap-2">
                            {/* Mobile Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className='w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105 border border-gray-200/60 dark:border-white/10'
                                aria-label='Toggle theme'
                            >
                                {theme === 'dark' ? (
                                    <FiSun className='w-4 h-4 text-yellow-400' />
                                ) : (
                                    <FiMoon className='w-4 h-4 text-blue-600' />
                                )}
                            </button>

                            {/* Hamburger Menu Toggle Button */}
                            <button 
                                className='w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-105 border border-gray-200/60 dark:border-white/10 text-gray-800 dark:text-white focus:outline-none touch-manipulation'
                                onClick={toggleMobileMenu}
                                aria-label='Toggle mobile menu'
                            >
                                {isMobileMenuOpen ? (
                                    <FaTimes className='h-4 w-4' />
                                ) : (
                                    <FaBars className='h-4 w-4' />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Dropdown Menu with AnimatePresence */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className='mt-2.5 overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl border border-gray-200/90 dark:border-white/15 shadow-2xl p-3 sm:p-4 rounded-3xl'
                            >
                                <ul className='flex flex-col gap-1'>
                                    {NAVIGATION_LINKS.map((item, index) => {
                                        const active = isActive(item.href);
                                        return (
                                            <li key={index}>
                                                <a 
                                                    href={item.href}
                                                    className={`
                                                        flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-sm sm:text-base font-semibold transition-all duration-200
                                                        ${active 
                                                            ? 'bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400 font-bold border border-blue-500/20 dark:border-cyan-500/20' 
                                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-white/5 hover:text-blue-600 dark:hover:text-cyan-400'
                                                        }
                                                    `}
                                                    onClick={(e) => handleLinkClick(e, item.href)}
                                                >
                                                    {index === 0 ? (
                                                        <FiHome className="w-4 h-4" />
                                                    ) : (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                                                    )}
                                                    {item.label}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
