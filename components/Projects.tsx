/* eslint-disable @next/next/no-img-element */
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
  type?: string;
  status?: string;
  description: string;
  image: StaticImageData;
  images?: StaticImageData[];
  githubLink: string;
  backendLink?: string;
  viewDemo: string;
  tech: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
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

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  // Bulletproof Code button style helper to guarantee BLACK text in light mode
  const getCodeButtonStyle = () => {
    if (theme === 'dark') {
      return 'bg-white text-gray-900 hover:bg-gray-100 border border-white/20 shadow-md';
    }
    return 'bg-gray-100 text-black border-2 border-gray-900 hover:bg-gray-200 shadow-md';
  };

  const getSecondaryButtonStyle = () => {
    if (theme === 'dark') {
      return 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700 shadow-md';
    }
    return 'bg-white text-black border-2 border-gray-900 hover:bg-gray-100 shadow-md';
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
            className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 mx-auto rounded-full mb-3 section-underline shadow-md shadow-blue-500/30"
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
              onClick={() => handleOpenProject(project)}
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

                  {/* Action Buttons */}
                  <div className='flex items-center gap-1.5 sm:gap-2 pt-1' onClick={(e) => e.stopPropagation()}>
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`flex-1 flex items-center justify-center gap-1 px-2.5 sm:px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${getCodeButtonStyle()}`}
                      >
                        <FiGithub className="text-sm" />
                        {project.backendLink ? "Frontend" : "Code"}
                        <MdArrowOutward className="text-xs" />
                      </motion.a>
                    )}
                    {project.backendLink && (
                      <motion.a
                        href={project.backendLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={`flex-1 flex items-center justify-center gap-1 px-2.5 sm:px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${getSecondaryButtonStyle()}`}
                      >
                        <FiGithub className="text-sm" />
                        Backend
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
                        className='flex-1 flex items-center justify-center gap-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-2.5 sm:px-3 py-2 rounded-xl text-xs font-bold hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-md shadow-blue-500/20'
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
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[88vh] bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden text-gray-900 dark:text-white"
            >
              {/* Header Bar - Fixed Top */}
              <div className="flex items-center justify-between gap-4 px-6 sm:px-8 py-4 border-b border-gray-200/80 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md flex-shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 border border-blue-500/20 shadow-sm">
                    <FiCode className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                      <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                        Project Showcase
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {selectedProject.status || "Completed & Verified"}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white leading-tight truncate">
                      {selectedProject.name}
                    </h3>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 sm:p-2.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-200 shadow-sm flex-shrink-0"
                  aria-label="Close modal"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Body Content */}
              <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-5">
                {/* Meta Badges Ribbon - Full Text, No Cramping */}
                <div className="flex flex-wrap items-center gap-2 pb-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    <FiCheckCircle className="w-3.5 h-3.5 text-blue-500" />
                    {selectedProject.type || "Full-Stack Application"}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    <FiLayers className="w-3.5 h-3.5 text-purple-500" />
                    {selectedProject.tech.length} Technologies
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {selectedProject.status || "Completed & Verified"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column: Image preview + Switcher */}
                  <div className="md:col-span-6 flex flex-col gap-3">
                    {/* Image Selector Tabs (if multiple images) */}
                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <div className="inline-flex items-center p-1 rounded-xl bg-gray-100 dark:bg-white/10 border border-gray-200/80 dark:border-white/10 w-fit">
                        <button
                          onClick={() => setActiveImageIndex(0)}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                            activeImageIndex === 0
                              ? "bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm"
                              : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                          }`}
                        >
                          Web Portal
                        </button>
                        <button
                          onClick={() => setActiveImageIndex(1)}
                          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 ${
                            activeImageIndex === 1
                              ? "bg-white dark:bg-blue-600 text-blue-600 dark:text-white shadow-sm"
                              : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                          }`}
                        >
                          Mobile App
                        </button>
                      </div>
                    )}

                    {/* Image Viewer */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800/80 border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center">
                      <img
                        src={
                          selectedProject.images && selectedProject.images[activeImageIndex]
                            ? selectedProject.images[activeImageIndex].src
                            : selectedProject.image.src
                        }
                        alt={selectedProject.name}
                        className={`w-full h-full ${
                          selectedProject.images && activeImageIndex === 1
                            ? "object-contain py-2 bg-black/5 dark:bg-black/30"
                            : "object-cover"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Right Column: Description & Technologies */}
                  <div className="md:col-span-6 flex flex-col justify-between gap-5">
                    {/* Full Project Overview */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Full Project Overview & Key Features
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-normal bg-gray-50/80 dark:bg-white/[0.03] p-4 rounded-2xl border border-gray-200/70 dark:border-white/5">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Technologies & Frameworks */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Technologies & Frameworks
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 rounded-xl border border-gray-200 dark:border-white/10 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Fixed Bottom Footer CTA Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 border-t border-gray-200/80 dark:border-gray-800 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-md flex-shrink-0">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 min-w-[130px] flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${getCodeButtonStyle()}`}
                  >
                    <FiGithub className="text-sm sm:text-base" />
                    {selectedProject.backendLink ? "Frontend Source" : "View Source Code"}
                    <MdArrowOutward className="text-xs" />
                  </a>
                )}
                {selectedProject.backendLink && (
                  <a
                    href={selectedProject.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 min-w-[130px] flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${getSecondaryButtonStyle()}`}
                  >
                    <FiGithub className="text-sm sm:text-base" />
                    Backend Source
                    <MdArrowOutward className="text-xs" />
                  </a>
                )}
                {selectedProject.viewDemo && selectedProject.viewDemo.trim().length > 0 && (
                  <a
                    href={selectedProject.viewDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[130px] flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-md shadow-blue-500/20"
                  >
                    <FiExternalLink className="text-sm sm:text-base" />
                    View Live Demo
                    <MdArrowOutward className="text-xs" />
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
