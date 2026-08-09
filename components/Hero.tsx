"use client";
import { HERO, SOCIAL_MEDIA_LINKS } from "@/constants";
import React, { useState, useEffect, useRef } from "react";
import cardimg from "@/assets/hero3.png";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiEye, FiCode, FiCpu, FiCheckCircle } from 'react-icons/fi';
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
  const [typedText, setTypedText] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const fullText = "Software Developer";
  const basePath = process.env.NODE_ENV === 'production' ? '/My_Portfolio' : '';
  
  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let loopTimeout: NodeJS.Timeout;

    const typeWriter = () => {
      if (!isDeleting && currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
        loopTimeout = setTimeout(typeWriter, 100);
      } else if (!isDeleting && currentIndex > fullText.length) {
        loopTimeout = setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 2000);
      } else if (isDeleting && currentIndex > 0) {
        currentIndex--;
        setTypedText(fullText.slice(0, currentIndex));
        loopTimeout = setTimeout(typeWriter, 50);
      } else if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        loopTimeout = setTimeout(() => {
          currentIndex = 0;
          typeWriter();
        }, 500);
      }
    };

    typeWriter();
    return () => clearTimeout(loopTimeout);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <>
      <section 
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative min-h-[90vh] sm:min-h-screen text-gray-900 dark:text-white overflow-hidden w-screen flex flex-col justify-between" 
        id="hero"
      >
        <div className="absolute inset-0 overflow-hidden w-screen pointer-events-none z-0">
          <div className="absolute inset-0 bg-transparent dark:bg-black/50 w-screen" />
          <HeroFloatingIcons />
        </div>

        <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">
          
          {/* Left Text & CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-center md:text-left z-10"
          >
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-5 shadow-sm hover:border-blue-500/50 transition-all"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
              </span>
              <span>Available for Internships & Projects</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-5 sm:mb-6"
            >
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-tight"
              >
                Hello <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
                  className="text-special inline-block"
                >...</motion.span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative inline-block md:block pl-6 mb-3 sm:mb-4"
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 24 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-[#4361ee] to-purple-500 rounded-full"
                />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                  I&apos;m <span className="font-bold text-gray-900 dark:text-white">{HERO.name}</span>
                </h2>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-5 sm:mb-6 min-h-[50px] flex items-center justify-center md:justify-start"
              >
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent select-text">
                  {typedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block ml-1 text-purple-500 font-extralight text-2xl sm:text-3xl md:text-4xl select-none"
                >
                  |
                </motion.span>
              </motion.h3>
            </motion.div>

            {/* Social Media Links with Glass Hover */}
            <motion.div 
              className="flex items-center justify-center md:justify-start gap-4 sm:gap-5 mb-6"
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
                    whileHover={{ scale: 1.12, rotate: 6, y: -2 }}
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
                    className="p-3 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-white/10 border border-white/40 dark:border-white/10 shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all text-xl sm:text-2xl text-gray-800 dark:text-white"
                  >
                    {link.icon}
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0 12px 35px rgba(67, 97, 238, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group flex items-center gap-2 px-7 sm:px-9 py-3.5 bg-gradient-to-r from-[#4361ee] via-[#3a0ca3] to-[#7209b7] text-white rounded-full text-sm sm:text-base font-semibold transition-all duration-300 shadow-xl"
              >
                Hire Me
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </motion.a>

              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.12)" }}
                whileTap={{ scale: 0.95 }}
                href={`${basePath}/CV/Sivatheevan_CV_SE_Intern.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold bg-white text-gray-900 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20 shadow-md transition-all duration-200"
                aria-label="View CV in new tab"
              >
                <motion.span
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FiEye className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </motion.span>
                View CV
              </motion.a>

              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)" }}
                whileTap={{ scale: 0.95 }}
                href={`${basePath}/CV/Sivatheevan_CV_SE_Intern.pdf`}
                download="Sivatheevan_CV_SE_Intern.pdf"
                className="flex items-center gap-2 px-7 sm:px-8 py-3.5 rounded-full text-sm sm:text-base font-bold bg-white text-black border-2 border-gray-900 hover:bg-gray-100 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 shadow-xl transition-all duration-200"
                aria-label="Download CV"
              >
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <FiDownload className="w-4 h-4" />
                </motion.span>
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Visual Section with 3D Glass Frame & Dynamic Cursor Crossover Stat Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full md:w-1/2 flex justify-center items-center py-6"
          >
            {/* Main Interactive Glass Container with 3D Tilt */}
            <div 
              className="relative z-10 transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${-mousePos.y * 10}deg) rotateY(${mousePos.x * 10}deg)`,
              }}
            >
              {/* Glassmorphic Background Card */}
              <div className="relative p-3 sm:p-4 rounded-3xl backdrop-blur-2xl bg-white/40 dark:bg-white/5 border border-white/40 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                
                {/* Glow ring behind image */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

                {/* Hero Image */}
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  src={cardimg.src}
                  alt="Sivatheevan"
                  className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] h-auto object-contain rounded-2xl filter drop-shadow-2xl"
                  width={520}
                  height={500}
                />
              </div>

              {/* ------------------------------------------------------------- */}
              {/* INTERACTIVE CURSOR CROSSOVER STAT BADGES                       */}
              {/* ------------------------------------------------------------- */}

              {/* Stat Badge 1: Top-Left (Moves WITH cursor offset: +X, +Y) */}
              <motion.div
                style={{
                  transform: `translate(${mousePos.x * 35}px, ${mousePos.y * 35}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -top-4 -left-4 sm:top-2 sm:-left-8 z-20 p-3 sm:p-4 rounded-2xl backdrop-blur-2xl bg-white/85 dark:bg-gray-900/85 border border-white/70 dark:border-white/20 shadow-2xl shadow-blue-500/20 flex items-center gap-3 cursor-pointer hover:scale-105 transition-all group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white text-lg sm:text-xl shadow-md shadow-blue-500/30 group-hover:rotate-12 transition-transform">
                  <FiCode />
                </div>
                <div>
                  <div className="text-base sm:text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    08+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    Projects Completed
                  </div>
                </div>
              </motion.div>

              {/* Stat Badge 2: Bottom-Right (Moves OPPOSITE to cursor: -X, -Y -> CROSSOVER EFFECT!) */}
              <motion.div
                style={{
                  transform: `translate(${-mousePos.x * 35}px, ${-mousePos.y * 35}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -bottom-4 -right-4 sm:bottom-4 sm:-right-8 z-20 p-3 sm:p-4 rounded-2xl backdrop-blur-2xl bg-white/85 dark:bg-gray-900/85 border border-white/70 dark:border-white/20 shadow-2xl shadow-purple-500/20 flex items-center gap-3 cursor-pointer hover:scale-105 transition-all group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white text-lg sm:text-xl shadow-md shadow-purple-500/30 group-hover:-rotate-12 transition-transform">
                  <FiCpu />
                </div>
                <div>
                  <div className="text-base sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-[11px] sm:text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    Technologies Used
                  </div>
                </div>
              </motion.div>

              {/* Stat Badge 3: Center-Right (Full University Name & Degree) */}
              <motion.div
                style={{
                  transform: `translate(${-mousePos.y * 30}px, ${mousePos.x * 30}px)`,
                  transition: 'transform 0.2s ease-out'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="absolute top-1/2 -right-6 sm:-right-14 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-2xl backdrop-blur-2xl bg-white/85 dark:bg-gray-900/85 border border-white/70 dark:border-white/20 shadow-2xl shadow-emerald-500/20 hidden sm:flex items-center gap-3.5 cursor-pointer hover:scale-105 transition-all group max-w-[240px] sm:max-w-[280px]"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-white text-lg sm:text-xl shadow-md shadow-emerald-500/30 group-hover:scale-110 transition-transform flex-shrink-0">
                  <FiCheckCircle />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-tight">
                    B.Sc (Hons) CST Student
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-gray-600 dark:text-gray-400 leading-snug mt-0.5">
                    Uva Wellassa University of Sri Lanka
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scrolling Infinite Tech Marquee Bar */}
        <div className="relative overflow-hidden py-4 border-t border-gray-200/80 dark:border-gray-800/80 w-full backdrop-blur-md bg-white/50 dark:bg-black/50 z-10">
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex whitespace-nowrap gap-8 sm:gap-10"
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
              {[...techStack, ...techStack].map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl backdrop-blur-sm bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 shadow-sm"
                    whileHover={{ scale: 1.15, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className={`${tech.color} text-xl sm:text-2xl`} />
                    <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;