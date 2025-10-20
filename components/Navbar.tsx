"use client"
import React, { useState, useEffect } from 'react';
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
        // Use Intersection Observer for more reliable section detection
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -60% 0px', // Fixed pixel offset from top, percentage from bottom
            threshold: [0, 0.1, 0.2, 0.3, 0.5]
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            // Find the most visible section
            const visibleEntries = entries.filter(entry => entry.isIntersecting);
            
            if (visibleEntries.length > 0) {
                // Sort by intersection ratio and position to find the most visible section
                visibleEntries.sort((a, b) => {
                    // Prioritize by intersection ratio
                    const ratioDiff = b.intersectionRatio - a.intersectionRatio;
                    if (Math.abs(ratioDiff) > 0.1) {
                        return ratioDiff;
                    }
                    // If ratios are similar, prefer the one closer to top of viewport
                    const aTop = Math.abs(a.boundingClientRect.top);
                    const bTop = Math.abs(b.boundingClientRect.top);
                    return aTop - bTop;
                });
                const mostVisible = visibleEntries[0];
                const id = mostVisible.target.getAttribute('id');
                if (id) {
                    setActiveSection(id);
                }
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        NAVIGATION_LINKS.forEach(link => {
            const id = link.href.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
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
            <nav className='fixed left-0 right-0 top-4 z-50 px-4'>
                <div className='mx-auto hidden w-fit items-center 
                justify-center rounded-3xl bg-white/10 dark:bg-black/30
                py-3 px-6 backdrop-blur-xl backdrop-saturate-150 border-2 border-white/30 dark:border-white/20 shadow-lg hover:border-white/40 dark:hover:border-white/30 transition-all duration-300
                lg:flex'>
                    <div className='flex items-center justify-center gap-4 xl:gap-6'>
                        <div className=''>
                            <ul className='flex items-center gap-3 xl:gap-4 justify-center'>
                                {NAVIGATION_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <a 
                                            href={item.href} 
                                            className={`
                                                ${index === 0 ? 'flex items-center justify-center p-2' : 'text-base xl:text-lg 2xl:text-xl'} 
                                                font-medium transition-all duration-300 touch-manipulation relative group
                                                ${isActive(item.href) 
                                                    ? 'text-special scale-110' 
                                                    : 'text-gray-300 hover:text-special hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(67,97,238,0.8)]'
                                                }
                                            `}
                                            style={isActive(item.href) ? {
                                                filter: 'drop-shadow(0 0 12px rgba(67, 97, 238, 0.8)) drop-shadow(0 0 20px rgba(67, 97, 238, 0.6))',
                                                textShadow: '0 0 10px rgba(67, 97, 238, 0.8)'
                                            } : {}}
                                            onClick={(e) => handleLinkClick(e, item.href)}
                                        >
                                            {index === 0 ? (
                                                <FiHome className="w-6 h-6 transition-all duration-300" />
                                            ) : (
                                                item.label
                                            )}
                                            {isActive(item.href) && (
                                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-special to-transparent animate-pulse"></span>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className='p-2 rounded-xl bg-white/5 hover:bg-white/20 dark:hover:bg-white/15 transition-all duration-300 hover:scale-105'
                            aria-label='Toggle theme'
                        >
                            {theme === 'dark' ? (
                                <FiSun className='w-6 h-6 text-yellow-400' />
                            ) : (
                                <FiMoon className='w-6 h-6 text-blue-500' />
                            )}
                        </button>
                    </div>
                </div>
                {/* mobile menu */}
                <div className='rounded-3xl lg:hidden overflow-hidden'>
                    <div className='flex items-center justify-end gap-4 bg-white/10 dark:bg-black/30 backdrop-blur-xl backdrop-saturate-150 border-2 border-white/30 dark:border-white/20 shadow-lg rounded-3xl p-2 hover:border-white/40 dark:hover:border-white/30 transition-all duration-300'>
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className='p-2 rounded-xl bg-white/5 hover:bg-white/20 dark:hover:bg-white/15 transition-all duration-300 hover:scale-105'
                            aria-label='Toggle theme'
                        >
                            {theme === 'dark' ? (
                                <FiSun className='w-6 h-6 text-yellow-400' />
                            ) : (
                                <FiMoon className='w-6 h-6 text-blue-500' />
                            )}
                        </button>
                        <div className='flex items-center'>
                            <button className='focus:outline-none lg:hidden p-3 sm:p-4 touch-manipulation'
                                onClick={toggleMobileMenu}>
                                {isMobileMenuOpen ? (
                                    <FaTimes className='m-2 h-6 w-6 sm:h-7 sm:w-7 backdrop-blur-lg' />
                                ) : (
                                    <FaBars className='m-2 h-6 w-6 sm:h-7 sm:w-7 backdrop-blur-lg' />
                                )}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className='mt-4 flex flex-col gap-4 bg-white/10 dark:bg-black/30 backdrop-blur-xl backdrop-saturate-150 border-2 border-white/30 dark:border-white/20 shadow-lg p-5 rounded-3xl text-xl sm:text-2xl hover:border-white/40 dark:hover:border-white/30 transition-all duration-300'>
                            {NAVIGATION_LINKS.map((item, index) => (
                                <li key={index}>
                                    <a 
                                        href={item.href}
                                        className={`
                                            ${index === 0 ? 'flex items-center gap-3' : 'block w-full'}
                                            text-xl sm:text-2xl font-medium py-2 touch-manipulation transition-all duration-300
                                            ${isActive(item.href) 
                                                ? 'text-special scale-105' 
                                                : 'text-gray-300 hover:text-special hover:translate-x-2 hover:drop-shadow-[0_0_10px_rgba(67,97,238,0.8)]'
                                            }
                                        `}
                                        style={isActive(item.href) ? {
                                            filter: 'drop-shadow(0 0 12px rgba(67, 97, 238, 0.8)) drop-shadow(0 0 20px rgba(67, 97, 238, 0.6))',
                                            textShadow: '0 0 10px rgba(67, 97, 238, 0.8)'
                                        } : {}}
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {index === 0 && <FiHome className="w-6 h-6" />}
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
