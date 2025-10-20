"use client";
import { HERO, SOCIAL_MEDIA_LINKS } from "@/constants";
import React from "react";
import cardimg from "@/assets/hero3.png";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiEye } from 'react-icons/fi';
import HeroFloatingIcons from './HeroFloatingIcons';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiPython,
  SiHtml5, SiCss3, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiDjango, SiPhp, SiC, SiBootstrap, SiFramer, SiExpress
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const techStack = [
  { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: SiCss3, name: "CSS", color: "text-blue-500" },
  { icon: SiJavascript, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
  { icon: SiReact, name: "React", color: "text-cyan-400" },
  { icon: SiGit, name: "Git", color: "text-orange-600" },
  { icon: SiGithub, name: "GitHub", color: "text-gray-700 dark:text-white" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-cyan-500" },
  { icon: SiDjango, name: "Django", color: "text-green-700" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-400" },
  { icon: SiPython, name: "Python", color: "text-blue-400" },
  { icon: FaJava, name: "Java", color: "text-red-500" },
  { icon: SiC, name: "C", color: "text-blue-600" },
  { icon: SiPhp, name: "PHP", color: "text-indigo-500" },
  { icon: SiMysql, name: "MySQL", color: "text-blue-600" },
  { icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-gray-900 dark:text-white" },
  { icon: SiExpress, name: "Express.js", color: "text-gray-600 dark:text-gray-400" },
  { icon: SiBootstrap, name: "Bootstrap", color: "text-purple-600" },
  { icon: SiFramer, name: "Framer Motion", color: "text-pink-500" },
];

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[90vh] sm:min-h-screen text-gray-900 dark:text-white overflow-hidden w-screen" id="hero">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden w-screen">
          <div className="absolute inset-0 bg-white/80 dark:bg-black w-screen" />
          <HeroFloatingIcons />
        </div>

        <div className="relative w-full flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 pt-20 sm:pt-24 md:pt-32 xl:pt-40 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
                Hello <span className="text-special">.</span>
              </h1>
              
              <div className="relative inline-block md:block pl-6 mb-4 sm:mb-6">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[2px] bg-special"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl">
                  I&apos;m {HERO.name}
                </h2>
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-6 sm:mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Software Developer
              </h3>
            </motion.div>

            {/* Social Media Links */}
            <motion.div 
              className="flex items-center justify-center md:justify-start gap-4 sm:gap-6 mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {SOCIAL_MEDIA_LINKS.map((link, index) => {
                const isMail = typeof link.href === 'string' && link.href.startsWith('mailto:');
                const hrefValue = isMail ? '#contact' : link.href;
                return (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={hrefValue}
                    target={isMail ? undefined : '_blank'}
                    rel={isMail ? undefined : 'noopener noreferrer'}
                    aria-label={isMail ? `Go to contact form` : undefined}
                    onClick={(e) => {
                      if (isMail) {
                        e.preventDefault();
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="p-2 rounded-lg bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 transition-colors text-xl sm:text-2xl"
                  >
                    {link.icon}
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group flex items-center gap-2 px-6 sm:px-8 py-3 bg-gradient-to-r from-[#4361ee] to-[#3a0ca3] text-white rounded-full text-sm sm:text-base font-medium hover:from-[#5a76f7] hover:to-[#4a1cb3] transition-all duration-300"
              >
                Hire Me
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* CV buttons: View and Download with icons */}
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ translateY: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href="/Sankeethan-SoftwareEngineer-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
                  aria-label="View CV in new tab"
                >
                  <FiEye className="w-4 h-4" />
                  <span className="hidden sm:inline">View CV</span>
                </motion.a>

                <motion.a
                  whileHover={{ translateY: -3 }}
                  whileTap={{ scale: 0.98 }}
                  href="/Sankeethan-SoftwareEngineer-Resume.pdf"
                  download="Sankeethan-SoftwareEngineer-Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:opacity-90 transition-all duration-200"
                  aria-label="Download CV"
                >
                  <FiDownload className="w-4 h-4" />
                  <span className="hidden sm:inline">Download CV</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              />
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                src={cardimg.src}
                alt="my image"
                className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[580px] xl:max-w-[650px] h-auto object-contain"
                width={650}
                height={600}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Tech Stack */}
      <div className="relative overflow-hidden py-6 sm:py-8 border-t border-gray-200 dark:border-gray-800 w-full">
        <div className="absolute inset-0 bg-white dark:bg-black" />
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap gap-8 sm:gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the array for seamless loop */}
            {[...techStack, ...techStack].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center justify-center"
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className={`${tech.color} text-3xl sm:text-4xl md:text-5xl`} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;