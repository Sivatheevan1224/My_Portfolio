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

const roles = ["Software Engineer", "Full Stack Developer"];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const basePath = process.env.NODE_ENV === 'production' ? '/My_Portfolio' : '';
  
  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let loopTimeout: NodeJS.Timeout;

    const typeWriter = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting && charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex));
        charIndex++;
        loopTimeout = setTimeout(typeWriter, 100);
      } else if (!isDeleting && charIndex > currentRole.length) {
        loopTimeout = setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 2000);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTypedText(currentRole.slice(0, charIndex));
        loopTimeout = setTimeout(typeWriter, 40);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        loopTimeout = setTimeout(() => {
          typeWriter();
        }, 400);
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
        className="relative min-h-[85vh] lg:h-[88vh] lg:max-h-[880px] text-gray-900 dark:text-white overflow-hidden w-full flex flex-col justify-between" 
        id="hero"
      >
        <div className="absolute inset-0 overflow-hidden w-full pointer-events-none z-0">
          <div className="absolute inset-0 bg-transparent dark:bg-black/50 w-full" />
          <HeroFloatingIcons />
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 xl:gap-14 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 pt-12 sm:pt-14 lg:pt-10 pb-2 my-auto z-10">
          
          {/* Left Text & CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left z-10"
          >
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold mb-3 sm:mb-3.5 shadow-sm hover:border-blue-500/50 transition-all"
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
              className="mb-3 sm:mb-3.5"
            >
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-black mb-1 tracking-tight"
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
                className="relative inline-block lg:block pl-6 mb-2 sm:mb-2.5"
              >
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 22 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                  I&apos;m <span className="font-bold text-gray-900 dark:text-white">{HERO.name}</span>
                </h2>
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold tracking-wide mb-3 sm:mb-4 min-h-[36px] sm:min-h-[44px] flex items-center justify-center lg:justify-start"
              >
                <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-400 dark:via-sky-300 dark:to-cyan-300 bg-clip-text text-transparent select-text">
                  {typedText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block ml-1 text-cyan-500 dark:text-cyan-400 font-extralight text-xl sm:text-2xl md:text-3xl select-none"
                >
                  |
                </motion.span>
              </motion.h3>
            </motion.div>

            {/* Social Media Links with Glass Hover */}
            <motion.div 
              className="flex items-center justify-center lg:justify-start gap-3 sm:gap-3.5 mb-4 sm:mb-4.5"
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
                    whileHover={{ scale: 1.1, rotate: 5, y: -2 }}
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
                    className="p-2.5 sm:p-3 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-white/10 border border-gray-200/80 dark:border-white/10 shadow-md hover:shadow-lg hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all text-lg sm:text-xl text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400"
                  >
                    {link.icon}
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.04, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.96 }}
                href="#contact"
                className="group flex items-center gap-2 px-5 sm:px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-lg shadow-blue-500/25"
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
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)" }}
                whileTap={{ scale: 0.96 }}
                href={`${basePath}/CV/Sivatheevan_CV_SE_Intern.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-gray-900 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20 shadow-sm transition-all duration-200"
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
                whileHover={{ scale: 1.04, y: -2, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.96 }}
                href={`${basePath}/CV/Sivatheevan_CV_SE_Intern.pdf`}
                download="Sivatheevan_CV_SE_Intern.pdf"
                className="flex items-center gap-1.5 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-white text-black border-2 border-gray-900 hover:bg-gray-100 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 shadow-md transition-all duration-200"
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
            className="relative w-full lg:w-1/2 flex justify-center items-center py-2 lg:py-1"
          >
            {/* Main Interactive Glass Container with Subtle 3D Perspective */}
            <div 
              className="relative z-10 transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${-mousePos.y * 6}deg) rotateY(${mousePos.x * 6}deg)`,
              }}
            >
              {/* Glassmorphic Background Card */}
              <div className="relative p-2.5 sm:p-3.5 rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-white/5 border border-gray-200/80 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                
                {/* Glow ring behind image */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-cyan-500/20 to-blue-600/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

                {/* Hero Image - Trimmed height */}
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  src={cardimg.src}
                  alt="Sivatheevan"
                  className="relative w-full max-w-[240px] sm:max-w-[300px] md:max-w-[360px] lg:max-w-[420px] xl:max-w-[460px] max-h-[38vh] sm:max-h-[44vh] lg:max-h-[48vh] h-auto object-contain rounded-2xl filter drop-shadow-2xl"
                  width={460}
                  height={440}
                />
              </div>

              {/* ------------------------------------------------------------- */}
              {/* STATIC CORNER STAT BADGES (NO JITTER, NEVER COVERS SUBJECT)   */}
              {/* ------------------------------------------------------------- */}

              {/* Stat Badge 1: Top-Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-3 -left-3 sm:-top-2 sm:-left-5 lg:-left-7 z-20 p-2.5 sm:p-3.5 rounded-2xl backdrop-blur-2xl bg-white/95 dark:bg-gray-900/90 border border-gray-200/90 dark:border-white/20 shadow-xl shadow-blue-500/10 dark:shadow-blue-500/20 flex items-center gap-2.5 sm:gap-3 cursor-pointer group hover:border-blue-500/50 transition-colors"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-base sm:text-lg shadow-md shadow-blue-500/30 group-hover:rotate-12 transition-transform">
                  <FiCode />
                </div>
                <div>
                  <div className="text-sm sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    Projects Completed
                  </div>
                </div>
              </motion.div>

              {/* Stat Badge 2: Bottom-Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-3 -right-3 sm:-bottom-2 sm:-right-5 lg:-right-7 z-20 p-2.5 sm:p-3.5 rounded-2xl backdrop-blur-2xl bg-white/95 dark:bg-gray-900/90 border border-gray-200/90 dark:border-white/20 shadow-xl shadow-cyan-500/10 dark:shadow-cyan-500/20 flex items-center gap-2.5 sm:gap-3 cursor-pointer group hover:border-cyan-500/50 transition-colors"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white text-base sm:text-lg shadow-md shadow-cyan-500/30 group-hover:-rotate-12 transition-transform">
                  <FiCpu />
                </div>
                <div>
                  <div className="text-sm sm:text-lg font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                    15+
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    Technologies Used
                  </div>
                </div>
              </motion.div>

              {/* Stat Badge 3: Top-Right (Degree & University) */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-3 -right-3 sm:-top-2 sm:-right-5 lg:-right-7 z-20 p-2.5 sm:p-3.5 rounded-2xl backdrop-blur-2xl bg-white/95 dark:bg-gray-900/90 border border-gray-200/90 dark:border-white/20 shadow-xl shadow-emerald-500/10 dark:shadow-emerald-500/20 hidden sm:flex items-center gap-2.5 sm:gap-3 cursor-pointer group max-w-[210px] sm:max-w-[240px] hover:border-emerald-500/50 transition-colors"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center text-white text-base sm:text-lg shadow-md shadow-emerald-500/30 group-hover:scale-110 transition-transform flex-shrink-0">
                  <FiCheckCircle />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white leading-tight truncate">
                    B.Sc (Hons) CST
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-medium text-gray-600 dark:text-gray-400 leading-snug mt-0.5 truncate">
                    Uva Wellassa University
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scrolling Infinite Tech Marquee Bar */}
        <div className="relative overflow-hidden py-2.5 sm:py-3 border-t border-gray-200/80 dark:border-gray-800/80 w-full backdrop-blur-md bg-white/50 dark:bg-black/50 z-10 flex-shrink-0">
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex whitespace-nowrap gap-6 sm:gap-8"
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
                    className="flex items-center gap-2 px-2.5 py-1 rounded-xl backdrop-blur-sm bg-white/40 dark:bg-white/5 border border-gray-200/50 dark:border-white/10 shadow-sm"
                    whileHover={{ scale: 1.15, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className={`${tech.color} text-lg sm:text-xl`} />
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
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