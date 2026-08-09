"use client"
import { PROJECTS } from '@/constants'
import React, { useState, useEffect } from 'react'
import { MdArrowOutward } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import { StaticImageData } from 'next/image'
import { FiGithub, FiExternalLink, FiX, FiLayers, FiCode, FiCheckCircle } from 'react-icons/fi'
import SectionFloatingIcons from './SectionFloatingIcons'
import { useTheme } from '@/contexts/ThemeContext'

interface Project {
  id: number;
  name: string;
  description: string;
  image: StaticImageData;
  githubLink: string;
  viewDemo: string;
  tech: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { theme } = useTheme();

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Bulletproof Code button style helper to guarantee BLACK text in light mode
  const getCodeButtonStyle = () => {
    if (theme === 'dark') {
      return 'bg-white text-gray-900 hover:bg-gray-100 border border-white/20 shadow-md';
    }
    return 'bg-gray-100 text-black border-2 border-gray-900 hover:bg-gray-200 shadow-md';
  };

  return (
    <section className='relative min-h-screen text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16' id='projects'>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-transparent dark:bg-black/60" />
        <SectionFloatingIcons />
      </div>

      <div className="relative container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12"
        >
          <motion.h2
            className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full mb-3 section-underline shadow-md shadow-purple-500/40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
            Click any project card to view full project architecture, features & live links
          </p>
        </motion.div>

        {/* Compact 3-Column Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-7xl mx-auto'>
          {(PROJECTS as Project[]).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className='group backdrop-blur-2xl bg-white/90 dark:bg-gray-900/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-blue-500/60 dark:hover:border-blue-500/60 flex flex-col h-full cursor-pointer'
            >
              {/* Image Container */}
              <div className='relative aspect-[16/10] max-h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0'>
                <motion.img
                  src={project.image.src}
                  alt={project.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-xs font-extrabold text-white bg-blue-600 dark:bg-blue-600 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                    <FiLayers className="text-xs" /> Click for details
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className='p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3'>
                <div className='space-y-2'>
                  <h3 className='text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1'>
                    {project.name}
                  </h3>

                  <p className='text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-3'>
                    {project.description}
                  </p>
                </div>

                <div className='space-y-3 pt-2 border-t border-gray-200/80 dark:border-gray-800'>
                  {/* Compact Tech Tags */}
                  <div className='flex flex-wrap gap-1.5'>
                    {project.tech.map((tech: string, techIdx: number) => (
                      <span
                        key={techIdx}
                        className='px-2.5 py-0.5 text-[11px] font-semibold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-white/10 rounded-md border border-gray-200 dark:border-white/10'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Guaranteed Visible Action Buttons */}
                  <div className='flex items-center gap-2 pt-1' onClick={(e) => e.stopPropagation()}>
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${getCodeButtonStyle()}`}
                      >
                        <FiGithub className="text-sm" />
                        Code
                        <MdArrowOutward className="text-xs" />
                      </motion.a>
                    )}
                    {project.viewDemo && project.viewDemo.trim().length > 0 && (
                      <motion.a
                        href={project.viewDemo}
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className='flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-3 py-2 rounded-xl text-xs font-bold hover:from-blue-500 hover:to-pink-500 transition-all duration-200 shadow-md'
                      >
                        <FiExternalLink className="text-sm" />
                        Demo
                        <MdArrowOutward className="text-xs" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Premium Glassmorphic Project Details Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-lg overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 25 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl my-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)] space-y-6 text-gray-900 dark:text-white"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-200/80 dark:border-gray-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <FiCode className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Project Showcase
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white leading-tight">
                      {selectedProject.name}
                    </h3>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-200 shadow-sm"
                  aria-label="Close modal"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* High-res Banner Image */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 shadow-md">
                <img
                  src={selectedProject.image.src}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200/80 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400">Type</div>
                    <div className="text-xs font-semibold text-gray-900 dark:text-white">Full-Stack Application</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FiLayers className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400">Tech Stack</div>
                    <div className="text-xs font-semibold text-gray-900 dark:text-white">{selectedProject.tech.length} Technologies</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <FiExternalLink className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-500 dark:text-gray-400">Status</div>
                    <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">Completed & Verified</div>
                  </div>
                </div>
              </div>

              {/* Comprehensive Description */}
              <div className="space-y-2">
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Full Project Overview & Key Features
                </h4>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Full Technology Stack */}
              <div className="space-y-2">
                <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 rounded-xl border border-gray-300 dark:border-white/15 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Guaranteed Visible Footer CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${getCodeButtonStyle()}`}
                  >
                    <FiGithub className="text-base" />
                    View Source Code
                    <MdArrowOutward className="text-sm" />
                  </a>
                )}
                {selectedProject.viewDemo && selectedProject.viewDemo.trim().length > 0 && (
                  <a
                    href={selectedProject.viewDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold hover:from-blue-500 hover:to-pink-500 transition-all duration-200 shadow-lg"
                  >
                    <FiExternalLink className="text-base" />
                    View Live Demo
                    <MdArrowOutward className="text-sm" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
