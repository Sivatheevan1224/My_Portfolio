"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { EXPERIENCES } from "@/constants";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { FaUniversity } from "react-icons/fa";
import SectionFloatingIcons from "./SectionFloatingIcons";

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  status?: string;
  location: string;
  institution?: string;
  logo: StaticImageData;
  logoBg?: string;
  linkedin?: string;
  description: string;
  skills?: string[];
}

const Experience = () => {
  return (
    <section className="relative min-h-screen text-gray-900 dark:text-white w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20" id="experience">
      {/* Edge-to-Edge Background canvas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-transparent dark:bg-black/90" />
        <SectionFloatingIcons />
      </div>

      <div className="relative max-w-5xl mx-auto space-y-10 sm:space-y-12 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-3"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Work & <span className="text-blue-600 dark:text-cyan-400">Experience</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 mx-auto rounded-full section-underline shadow-md shadow-blue-500/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto font-medium">
            My professional development journey, industry software engineering internships, and hands-on experience
          </p>
        </motion.div>

        {/* Experience List Container */}
        <div className="space-y-8">
          {(EXPERIENCES as ExperienceItem[]).map((exp, index) => (
            <motion.div
              key={exp.id || index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative backdrop-blur-2xl bg-white/95 dark:bg-gray-900/80 p-6 sm:p-8 rounded-3xl border border-gray-200/90 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-blue-500/15 dark:hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)] hover:border-blue-500/70 dark:hover:border-cyan-400/70 transition-all duration-300 overflow-hidden group"
            >
              {/* Top Accent Gradient Line (Grows on hover) */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:h-1.5 transition-all duration-300" />

              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                {/* Company Logo Container */}
                <div className="flex-shrink-0">
                  <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ${exp.logoBg || "bg-white dark:bg-gray-800 p-1"} border-2 border-gray-200 dark:border-white/15 shadow-md group-hover:scale-105 group-hover:border-blue-500/50 dark:group-hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center`}>
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 space-y-3 w-full">
                  {/* Title & Status Bar */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mt-1">
                        <FiBriefcase className="w-4 h-4 text-blue-500" />
                        {exp.linkedin ? (
                          <a
                            href={exp.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span>{exp.company}</span>
                        )}
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          {exp.employmentType}
                        </span>
                      </div>
                    </div>

                    {/* Active Status Badge */}
                    {exp.status && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold shadow-sm">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        {exp.status}
                      </div>
                    )}
                  </div>

                  {/* Metadata Row (Period, Location, University Association) */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <FiCalendar className="w-4 h-4 text-purple-500" />
                      <span>{exp.period}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <FiMapPin className="w-4 h-4 text-pink-500" />
                      <span>{exp.location}</span>
                    </div>

                    {exp.institution && (
                      <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                        <FaUniversity className="w-4 h-4" />
                        <span>{exp.institution}</span>
                      </div>
                    )}
                  </div>

                  {/* Role Description */}
                  <p className="text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed font-normal pt-1">
                    {exp.description}
                  </p>

                  {/* Key Skills & Tech Stack Pills */}
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="pt-2 space-y-2">
                      <div className="text-xs font-extrabold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                        <FiCheckCircle className="w-3.5 h-3.5 text-blue-500" />
                        Core Skills & Competencies
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="px-3 py-1 rounded-xl text-xs font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/15 shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;