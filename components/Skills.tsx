"use client"
import { skills } from '@/constants';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiTool, FiChevronRight } from 'react-icons/fi';
import FloatingIcons from './SectionFloatingIcons';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    rotateY: -45,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  exit: {
    opacity: 0,
    x: 30,
    rotateY: 45,
    scale: 0.8,
    transition: {
      duration: 0.3
    }
  }
}

const categories = [
  { id: "frontend", label: "Frontend", icon: FiCode, color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-500/10", borderColor: "border-blue-500" },
  { id: "backend", label: "Backend", icon: FiServer, color: "from-purple-500 to-pink-500", bgColor: "bg-purple-500/10", borderColor: "border-purple-500" },
  { id: "database", label: "Database", icon: FiDatabase, color: "from-orange-500 to-red-500", bgColor: "bg-orange-500/10", borderColor: "border-orange-500" },
  { id: "custom", label: "Other", icon: FiTool, color: "from-green-500 to-emerald-500", bgColor: "bg-green-500/10", borderColor: "border-green-500" }
];

const Skills = () => {
  const [active, setActive] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const handleCategoryChange = (index: number) => {
    setActive(index);
    setHoveredSkill(null); // Clear hover state when changing category
  };

  return (
    <section className='relative min-h-screen text-gray-900 dark:text-white w-full px-3 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20' id='skills'>
      {/* Background effects with FloatingIcons */}
      <div className="absolute inset-0 overflow-hidden">
        {/* lighter overlay in light mode, keep dark overlay for dark mode */}
        <div className="absolute inset-0 bg-white/60 dark:bg-black/90" />
        <FloatingIcons />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='relative max-w-6xl mx-auto'
      >
        {/* Section Header */}
        <motion.div 
          className='text-center mb-6 sm:mb-12 md:mb-16'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
            Technical Skills
          </h2>
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-3 sm:mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-3 sm:px-4'>
            A showcase of my technical expertise and the tools I use to build amazing web applications
          </p>
        </motion.div>

        {/* Modern Vertical Tab Navigation */}
        <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12'>
          {/* Category Sidebar */}
          <div className='w-full lg:w-64 flex-shrink-0'>
            <div className='flex lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-3 sm:mx-0 px-3 sm:px-0'>
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryChange(index)}
                    className={`relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center gap-3 sm:gap-4 min-w-max lg:min-w-0 group overflow-hidden
                      ${active === index 
                        ? `${category.bgColor} ${category.borderColor} border-2 text-white shadow-xl` 
                        : 'bg-white/60 dark:bg-gray-900/50 border-2 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-700'}`}
                  >
                    {/* Background gradient animation */}
                    {active === index && (
                      <motion.div
                        layoutId="activeTab"
                        className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20`}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <motion.div 
                      className='relative z-10'
                      animate={{ rotate: active === index ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${active === index ? 'text-white' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'}`} />
                    </motion.div>
                    <span className='relative z-10 flex-1 text-left'>{category.label}</span>
                    {active === index && (
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="relative z-10"
                      >
                        <FiChevronRight className="w-5 h-5" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Skills Content Area */}
          <div className='flex-1 min-w-0'>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6'
              >
                {skills[active].map((tech) => {
                  const skillId = `${active}-${tech.id}`;
                  const isHovered = hoveredSkill === skillId;
                  
                  return (
                  <motion.div
                    key={tech.id}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredSkill(skillId)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onTouchStart={() => setHoveredSkill(skillId)}
                    onTouchEnd={() => setTimeout(() => setHoveredSkill(null), 1000)}
                    className='relative'
                  >
                    {/* Card Container */}
                    <motion.div 
                      className={`relative p-3 sm:p-4 md:p-5 rounded-xl bg-white/80 dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 border-2 text-gray-900 dark:text-white overflow-hidden transition-all duration-200 h-28 sm:h-32 md:h-36
                        ${isHovered 
                          ? `${categories[active].borderColor} shadow-xl` 
                          : 'border-gray-200 dark:border-gray-800 shadow-md'}`}
                      whileHover={{
                        y: -4,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      transition={{ 
                        duration: 0.2,
                      }}
                    >
                      <div className='flex flex-col items-center justify-center gap-2 sm:gap-3 relative z-10 h-full'>
                        {/* Icon - simple scale on hover */}
                        <motion.div
                          whileHover={{
                            scale: 1.1,
                          }}
                          whileTap={{
                            scale: 1.05,
                          }}
                          transition={{ 
                            duration: 0.2,
                          }}
                          className='text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-shrink-0'
                        >
                          {tech.icon}
                        </motion.div>
                        
                        {/* Text - no animation */}
                        <p className='text-xs sm:text-sm font-semibold text-center text-gray-700 dark:text-gray-300'>
                          {tech.name}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills;
