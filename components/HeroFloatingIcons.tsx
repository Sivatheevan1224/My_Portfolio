"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroStarBackground from './HeroStarBackground';
import { 
  FiCode, FiGitBranch, FiTerminal, FiDatabase, FiServer, FiLayers, FiCpu, FiCloud,
  FiBox, FiCommand, FiZap, FiPackage, FiTool, FiMonitor
} from 'react-icons/fi';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiPython,
  SiHtml5, SiCss3, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiDocker, SiVisualstudiocode, SiBootstrap, SiPhp, SiC, SiSpringboot
} from 'react-icons/si';

const HeroFloatingIcons = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      setViewport({ width: window.innerWidth, height: window.innerHeight });
      const handleResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }
    return () => {};
  }, []);

  const icons = [
    // Frontend
    { Icon: SiReact, color: 'text-cyan-400', size: 'text-4xl', delay: 0 },
    { Icon: SiNextdotjs, color: 'text-gray-600 dark:text-white', size: 'text-3xl', delay: 0.5 },
    { Icon: SiHtml5, color: 'text-orange-500', size: 'text-4xl', delay: 1 },
    { Icon: SiCss3, color: 'text-blue-500', size: 'text-3xl', delay: 1.5 },
    { Icon: SiTailwindcss, color: 'text-cyan-500', size: 'text-4xl', delay: 2 },
    { Icon: SiBootstrap, color: 'text-purple-500', size: 'text-3xl', delay: 2.5 },
    
    // Backend
    { Icon: SiSpringboot, color: 'text-emerald-500', size: 'text-4xl', delay: 0.3 },
    { Icon: SiNodedotjs, color: 'text-green-500', size: 'text-4xl', delay: 0.7 },
    { Icon: SiPython, color: 'text-blue-400', size: 'text-4xl', delay: 1.7 },
    { Icon: SiPhp, color: 'text-indigo-400', size: 'text-3xl', delay: 0.4 },
    
    // Languages
    { Icon: SiTypescript, color: 'text-blue-500', size: 'text-4xl', delay: 0.9 },
    { Icon: SiJavascript, color: 'text-yellow-400', size: 'text-3xl', delay: 1.4 },
    { Icon: SiC, color: 'text-blue-600', size: 'text-3xl', delay: 2.4 },
    
    // Databases
    { Icon: SiMongodb, color: 'text-green-500', size: 'text-4xl', delay: 0.6 },
    { Icon: SiPostgresql, color: 'text-blue-400', size: 'text-3xl', delay: 1.1 },
    { Icon: SiMysql, color: 'text-cyan-600', size: 'text-4xl', delay: 1.6 },
    
    // Tools & DevOps
    { Icon: SiGit, color: 'text-orange-500', size: 'text-4xl', delay: 0.8 },
    { Icon: SiGithub, color: 'text-white', size: 'text-3xl', delay: 1.3 },
    { Icon: SiDocker, color: 'text-blue-500', size: 'text-4xl', delay: 1.8 },
    { Icon: SiVisualstudiocode, color: 'text-blue-400', size: 'text-3xl', delay: 2.3 },
    
    // General Icons
    { Icon: FiCode, color: 'text-purple-400', size: 'text-4xl', delay: 0.2 },
    { Icon: FiGitBranch, color: 'text-orange-400', size: 'text-3xl', delay: 0.7 },
    { Icon: FiTerminal, color: 'text-green-400', size: 'text-4xl', delay: 1.2 },
    { Icon: FiDatabase, color: 'text-indigo-400', size: 'text-3xl', delay: 1.7 },
    { Icon: FiServer, color: 'text-pink-400', size: 'text-4xl', delay: 2.2 },
    { Icon: FiLayers, color: 'text-teal-400', size: 'text-3xl', delay: 2.7 },
    { Icon: FiCpu, color: 'text-red-400', size: 'text-4xl', delay: 0.4 },
    { Icon: FiCloud, color: 'text-sky-400', size: 'text-3xl', delay: 0.9 },
    { Icon: FiBox, color: 'text-violet-400', size: 'text-4xl', delay: 1.4 },
    { Icon: FiCommand, color: 'text-lime-400', size: 'text-3xl', delay: 1.9 },
    { Icon: FiZap, color: 'text-yellow-500', size: 'text-4xl', delay: 2.4 },
    { Icon: FiPackage, color: 'text-amber-400', size: 'text-3xl', delay: 0.5 },
    { Icon: FiTool, color: 'text-slate-400', size: 'text-4xl', delay: 1.0 },
    { Icon: FiMonitor, color: 'text-fuchsia-400', size: 'text-3xl', delay: 1.5 },
  ];

  // Positions strictly placed in outer background perimeter to keep center text area 100% clean
  const positions = [
    'top-[6%] left-[3%]', 'top-[12%] right-[4%]', 'top-[18%] left-[6%]', 'top-[24%] right-[5%]',
    'top-[32%] left-[4%]', 'top-[42%] right-[3%]', 'top-[52%] left-[5%]', 'top-[62%] right-[4%]',
    'top-[72%] left-[3%]', 'top-[82%] right-[5%]', 'top-[90%] left-[6%]', 'top-[94%] right-[3%]',
    'top-[8%] left-[10%]', 'top-[15%] right-[11%]', 'top-[78%] left-[11%]', 'top-[86%] right-[10%]',
    'top-[4%] left-[25%]', 'top-[6%] right-[25%]', 'top-[4%] left-[45%]', 'top-[6%] right-[45%]',
    'top-[88%] left-[22%]', 'top-[92%] right-[22%]', 'top-[90%] left-[40%]', 'top-[92%] right-[40%]',
    'top-[28%] left-[2%]', 'top-[36%] right-[2%]', 'top-[48%] left-[3%]', 'top-[58%] right-[2%]',
    'top-[66%] left-[2%]', 'top-[74%] right-[3%]', 'top-[84%] left-[4%]', 'top-[92%] right-[6%]',
    'top-[10%] left-[15%]', 'top-[14%] right-[16%]', 'top-[80%] left-[16%]', 'top-[88%] right-[15%]',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* Interactive Shooting Star & Twinkle Starfield Canvas */}
      <HeroStarBackground />

      {/* Crisp Subtle Background Accent Glows - Zero Heavy Blur Veil */}
      <div 
        className="absolute inset-0 opacity-40 dark:opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(67, 97, 238, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.12) 0%, transparent 50%)'
        }}
      />

      {/* Floating Tech & Developer Icons - Crisp & subtle background icons */}
      <div className="opacity-80 dark:opacity-45 pointer-events-none">
        {icons.map((item, index) => {
          const { Icon, color, size, delay } = item;
          const position = positions[index % positions.length];

          // Calculate mouse-based movement - smooth parallax
          const moveX = (mousePosition.x - viewport.width / 2) / (45 + index * 2);
          const moveY = (mousePosition.y - viewport.height / 2) / (45 + index * 2);

          return (
            <motion.div
              key={index}
              className={`absolute ${position} ${color} ${size}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.5, 0.95, 0.5],
                scale: [0.9, 1.15, 0.9],
                y: [0, -25, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6 + index * 0.25,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
              style={{
                transform: `translate(${moveX}px, ${moveY}px)`,
                transition: 'transform 0.3s ease-out',
                filter: 'drop-shadow(0 0 6px rgba(67, 97, 238, 0.25))',
              }}
            >
              <Icon />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroFloatingIcons;
