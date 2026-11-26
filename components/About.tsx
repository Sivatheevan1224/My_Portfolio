"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiLayers, FiCheckCircle, FiAward, FiBriefcase } from 'react-icons/fi';
import { FaMobileAlt } from 'react-icons/fa';
import SectionFloatingIcons from './SectionFloatingIcons';

const services = [
  {
    icon: <FiMonitor className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
    title: "Web Development",
    description: "Building fast, accessible, and responsive web applications using React, Next.js, and TypeScript.",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: <FaMobileAlt className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
    title: "Mobile App Development",
    description: "Creating fluid cross-platform iOS & Android mobile apps with React Native and Expo.",
    tags: ["React Native", "Expo", "Mobile UI", "Native APIs"],
  },
  {
    icon: <FiLayers className="w-5 h-5 text-blue-600 dark:text-cyan-400" />,
    title: "Backend & Database Architecture",
    description: "Designing reliable RESTful APIs, secure authentication, and scalable PostgreSQL/MongoDB databases.",
    tags: ["Node.js", "Express", "PostgreSQL", "MongoDB", "MySQL"],
  },
];

const highlights = [
  { label: "Current Role", value: "SE Intern", detail: "Vinasai Inc (Remote)" },
  { label: "Education", value: "B.Sc (Hons) CST", detail: "UWU (CGPA: 3.9 / 4.0)" },
  { label: "Focus", value: "Full-Stack & Mobile", detail: "React • Next.js • React Native" },
  { label: "Location", value: "Jaffna, Sri Lanka", detail: "Open to Remote Worldwide" },
];

const stats = [
  { number: "10+", text: "Projects Done", icon: <FiCheckCircle className="w-4 h-4 text-blue-600 dark:text-cyan-400" /> },
  { number: "95%", text: "Satisfaction", icon: <FiAward className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> },
  { number: "01+", text: "Years Exp", icon: <FiBriefcase className="w-4 h-4 text-blue-600 dark:text-cyan-400" /> },
];

const About = () => {
  return (
    <section 
      className="relative min-h-screen lg:h-screen lg:max-h-screen text-gray-900 dark:text-white px-4 sm:px-6 md:px-10 lg:px-16 py-12 lg:py-0 flex flex-col justify-center overflow-hidden" 
      id="about"
    >
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-transparent dark:bg-black/50" />
        <SectionFloatingIcons />
      </div>

      <div className="container relative mx-auto max-w-6xl z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2 mb-5 sm:mb-7"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-cyan-400">Me</span>
          </h2>
          <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 mx-auto rounded-full section-underline shadow-md shadow-blue-500/30" />
        </motion.div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Column: Personal Story, Highlights & Integrated Stats (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="lg:col-span-7 flex flex-col justify-between p-5 sm:p-7 rounded-2xl backdrop-blur-xl bg-white/95 dark:bg-gray-900/80 border border-gray-200/90 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-[0_15px_35px_rgba(6,182,212,0.1)] hover:border-blue-500/60 dark:hover:border-cyan-400/60 transition-all duration-300 space-y-4"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                  Software Engineer Intern @ Vinasai Inc
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
                  Dean&apos;s List Scholar (UWU)
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug">
                Building scalable web & cross-platform mobile solutions
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I am a Computer Science undergraduate at <strong>Uva Wellassa University of Sri Lanka</strong> (CGPA 3.9 / 4.0) and currently working as a <strong>Software Engineer Intern at Vinasai Inc</strong>.
                </p>
                <p>
                  I specialize in crafting full-stack web and mobile apps with clean architecture, responsive design, and production security using React, Next.js, React Native, Node.js, and SQL/NoSQL databases.
                </p>
              </div>
            </div>

            {/* Quick Highlights Matrix */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 sm:p-3 rounded-xl bg-gray-50/90 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-cyan-400/50 hover:bg-blue-50/40 dark:hover:bg-white/[0.08] transition-all duration-200"
                >
                  <div className="text-[10px] sm:text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate mt-0.5">
                    {item.value}
                  </div>
                  <div className="text-[11px] text-gray-600 dark:text-gray-400 truncate">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Integrated Compact Stats Row */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-200/80 dark:border-white/10">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-2 sm:p-2.5 rounded-xl bg-gray-50/60 dark:bg-white/[0.02] border border-gray-200/60 dark:border-white/5 flex items-center gap-2 hover:border-blue-500/40 dark:hover:border-cyan-400/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 dark:bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    {stat.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base font-extrabold text-blue-600 dark:text-cyan-400 leading-tight">
                      {stat.number}
                    </div>
                    <div className="text-[10px] text-gray-600 dark:text-gray-400 font-medium truncate">
                      {stat.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3 Core Capabilities / Services (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3 sm:gap-3.5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group relative flex-1 p-4 sm:p-4.5 rounded-2xl backdrop-blur-xl bg-white/95 dark:bg-gray-900/80 border border-gray-200/90 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-blue-500/15 dark:hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)] hover:border-blue-500/70 dark:hover:border-cyan-400/70 hover:bg-white dark:hover:bg-gray-800/90 transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Border on Hover */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/10 dark:bg-cyan-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 dark:border-cyan-500/20 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-cyan-500/15 transition-all duration-200">
                      {service.icon}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Tag Pills */}
                <div className="flex flex-wrap gap-1 pt-2.5 mt-2 border-t border-gray-100 dark:border-white/5">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-gray-100 dark:bg-white/[0.05] text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
