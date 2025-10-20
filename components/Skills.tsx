"use client"
import { skills } from '@/constants';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiTool, FiChevronRight } from 'react-icons/fi';
import FloatingIcons from './FloatingIcons';

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
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const [direction, setDirection] = useState(1);

  const handleCategoryChange = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  return (
    <section className='relative min-h-screen text-white w-full px-3 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-20' id='skills'>
      {/* Background effects with FloatingIcons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-100" />
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
          <p className='text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-3 sm:px-4'>
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
                        : 'bg-gray-900/50 border-2 border-gray-800 text-gray-400 hover:text-white hover:border-gray-700'}`}
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
                      className="relative z-10"
                      animate={{ rotate: active === index ? 360 : 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${active === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
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
                {skills[active].map((tech, index) => (
                  <motion.div
                    key={tech.id}
                    variants={itemVariants}
                    onHoverStart={() => setHoveredSkill(index)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    whileHover={{ 
                      y: -10,
                      rotateY: 10,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className='relative group perspective-1000'
                  >
                    {/* Card Container with 3D effect */}
                    <div className={`relative p-4 sm:p-6 md:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border-2 transition-all duration-500
                      ${hoveredSkill === index 
                        ? `${categories[active].borderColor} shadow-2xl` 
                        : 'border-gray-800 hover:border-gray-700'}`}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Animated background glow */}
                      <motion.div 
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${categories[active].color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                        animate={{
                          scale: hoveredSkill === index ? [1, 1.2, 1] : 1,
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl overflow-hidden"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12`} />
                      </motion.div>

                      <div className='flex flex-col items-center justify-center gap-3 sm:gap-4 relative z-10'>
                        <motion.div
                          animate={{
                            scale: hoveredSkill === index ? [1, 1.2, 1] : 1,
                            rotate: hoveredSkill === index ? [0, 10, -10, 0] : 0,
                          }}
                          transition={{ 
                            duration: 0.6,
                            repeat: hoveredSkill === index ? Infinity : 0,
                            repeatDelay: 0.5
                          }}
                          className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl filter drop-shadow-lg'
                        >
                          {tech.icon}
                        </motion.div>
                        <motion.p 
                          className='text-xs sm:text-sm md:text-base font-semibold text-center text-gray-300 group-hover:text-white transition-colors'
                          animate={{ y: hoveredSkill === index ? [0, -3, 0] : 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          {tech.name}
                        </motion.p>
                      </div>

                      {/* Corner accent */}
                      <div className={`absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br ${categories[active].color} rounded-bl-2xl rounded-tr-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills;
