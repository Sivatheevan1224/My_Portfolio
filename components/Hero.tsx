"use client";
import { HERO, SOCIAL_MEDIA_LINKS } from "@/constants";
import React from "react";
import cardimg from "@/assets/hero3.png";
import { motion } from "framer-motion";
import { FiArrowRight } from 'react-icons/fi';
import HeroFloatingIcons from './HeroFloatingIcons';
// import { Typewriter } from "react-simple-typewriter";

const techStack = ["HTML5", "CSS", "Javascript", "Node.js", "React", "Git", "Github", "TypeScript", "Tailwind CSS", "Django", "PostgreSQL", "Supabase", "Laravel", "Python", "Java", "C", "PHP", "MySQL", "MongoDB", "Next.js", "Express.js", "Bootstrap", "Framer Motion"];

const Hero = () => {
  return (
    <>
      <section className="relative min-h-[90vh] sm:min-h-screen text-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-40 overflow-hidden w-full" id="hero">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-100" />
          <HeroFloatingIcons />
        </div>

        <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16 pt-20 sm:pt-24 md:pt-32 xl:pt-40 max-w-full">
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
              {SOCIAL_MEDIA_LINKS.map((link, index) => (
                <motion.a
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xl sm:text-2xl"
                >
                  {link.icon}
                </motion.a>
              ))}
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
              
              {/* <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Sankeethan-SoftwareEngineer-Resume.pdf"
                download="Sankeethan-SoftwareEngineer-Resume.pdf"
                className="group flex items-center gap-2 px-6 sm:px-8 py-3 border border-special text-special rounded-full text-sm sm:text-base font-medium hover:bg-special hover:text-black transition-all duration-300"
              >
                My resume
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a> */}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full md:w-1/2 flex justify-center px-4 sm:px-6 md:px-0"
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
                className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain"
                width={500}
                height={450}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scrolling Tech Stack */}
      <div className="relative overflow-hidden py-4 sm:py-3 border-t border-gray-800 w-full">
        <div className="absolute inset-0 bg-black" />
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {techStack.map((tech, index) => (
              <motion.span 
                key={index} 
                className="text-gray-400 mx-6 sm:mx-8 text-base sm:text-lg lg:text-xl font-medium hover:text-special transition-colors touch-manipulation"
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;