"use client"
import { FRONTENDSKILLS, BACKENDSKILLS, DATABASE, CUSTOMTECS } from '@/constants';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiCpu, FiGrid } from 'react-icons/fi';
import SectionFloatingIcons from './SectionFloatingIcons';

interface SkillItem {
  id: number;
  icon: React.ReactNode;
  name: string;
  category?: string;
}

const allSkillCategories = [
  { id: "all", label: "All Skills", icon: FiGrid, color: "from-blue-600 to-purple-600" },
  { id: "frontend", label: "Frontend", icon: FiCode, color: "from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", icon: FiServer, color: "from-purple-500 to-pink-500" },
  { id: "database", label: "Database", icon: FiDatabase, color: "from-orange-500 to-red-500" },
  { id: "tools", label: "Languages & Tools", icon: FiCpu, color: "from-emerald-500 to-teal-500" }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryDataMap: Record<string, { title: string; skills: SkillItem[]; color: string }> = {
    frontend: {
      title: "Frontend Engineering",
      skills: FRONTENDSKILLS as SkillItem[],
      color: "from-blue-500 to-cyan-500"
    },
    backend: {
      title: "Backend Architecture",
      skills: BACKENDSKILLS as SkillItem[],
      color: "from-purple-500 to-pink-500"
    },
    database: {
      title: "Databases & Management",
      skills: DATABASE as SkillItem[],
      color: "from-orange-500 to-red-500"
    },
    tools: {
      title: "Languages, Tools & Mobile",
      skills: CUSTOMTECS as SkillItem[],
      color: "from-emerald-500 to-teal-500"
    }
  };

  const getFilteredCategories = () => {
    if (activeCategory === "all") {
      return Object.entries(categoryDataMap);
    }
    return [[activeCategory, categoryDataMap[activeCategory]]] as const;
  };

  return (
    <section className='relative min-h-screen text-gray-900 dark:text-white w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20' id='skills'>
      {/* Background canvas effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-transparent dark:bg-black/90" />
        <SectionFloatingIcons />
      </div>

      <div className='relative max-w-7xl mx-auto space-y-10 sm:space-y-12'>
        {/* Section Header */}
        <motion.div 
          className='text-center space-y-3'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className='text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tight'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technical Stack & Expertise
          </motion.h2>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full section-underline shadow-md shadow-purple-500/40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className='text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-medium'>
            A comprehensive overview of my technical capabilities, frameworks, databases, and development tools
          </p>
        </motion.div>

        {/* Category Filter Pills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto"
        >
          {allSkillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center gap-2 border shadow-sm ${
                  isActive
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 border-gray-900 dark:border-white shadow-md'
                    : 'bg-white/80 dark:bg-gray-900/60 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-white/10 hover:border-blue-500 hover:text-blue-600 dark:hover:text-white'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400 dark:text-blue-600' : 'text-gray-500 dark:text-gray-400'}`} />
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Categorized Skills Showcase */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-10 sm:space-y-12"
            >
              {getFilteredCategories().map(([catKey, category]) => (
                <div
                  key={catKey}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Category Group Header */}
                  <div className="flex items-center gap-3 pb-2 border-b border-gray-200 dark:border-white/10">
                    <div className="w-2.5 h-6 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2">
                      {category.title}
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      {category.skills.length} Items
                    </span>
                  </div>

                  {/* Skill Cards Responsive Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 sm:gap-5">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.id || index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        whileHover={{ y: -6, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="group relative backdrop-blur-xl bg-white/90 dark:bg-gray-900/80 p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-500/60 dark:hover:border-blue-400/60 shadow-md hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 cursor-pointer overflow-hidden"
                      >
                        {/* Top Accent Gradient Border Effect on Hover */}
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Glass Icon Badge Container */}
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-100 dark:bg-white/10 flex items-center justify-center p-3 border border-gray-200 dark:border-white/10 shadow-inner group-hover:scale-110 group-hover:bg-blue-500/10 transition-transform duration-300 flex-shrink-0">
                          <div className="w-full h-full relative flex items-center justify-center [&_img]:w-full [&_img]:h-full [&_img]:object-contain">
                            {skill.icon}
                          </div>
                        </div>

                        {/* Skill Label */}
                        <span className="text-xs sm:text-sm font-extrabold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
