"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, FiGitBranch, FiTerminal, FiDatabase, FiServer, FiLayers, FiCpu, FiCloud,
  FiBox, FiCommand, FiZap, FiPackage, FiTool, FiMonitor
} from 'react-icons/fi';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript, SiPython,
  SiHtml5, SiCss3, SiTailwindcss, SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiGithub, SiDocker, SiVisualstudiocode, SiBootstrap, SiPhp, SiC
} from 'react-icons/si';

const HeroFloatingIcons = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightningBolts, setLightningBolts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create lightning bolt effect randomly on mouse move
      if (Math.random() > 0.95) {
        const newBolt = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY
        };
        setLightningBolts(prev => [...prev, newBolt]);
        
        // Remove bolt after animation
        setTimeout(() => {
          setLightningBolts(prev => prev.filter(bolt => bolt.id !== newBolt.id));
        }, 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const icons = [
    // Frontend
    { Icon: SiReact, color: 'text-cyan-400', size: 'text-4xl', delay: 0 },
    { Icon: SiNextdotjs, color: 'text-white', size: 'text-3xl', delay: 0.5 },
    { Icon: SiHtml5, color: 'text-orange-500', size: 'text-4xl', delay: 1 },
    { Icon: SiCss3, color: 'text-blue-500', size: 'text-3xl', delay: 1.5 },
    { Icon: SiTailwindcss, color: 'text-cyan-500', size: 'text-4xl', delay: 2 },
    { Icon: SiBootstrap, color: 'text-purple-500', size: 'text-3xl', delay: 2.5 },
    
    // Backend
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

  const positions = [
    'top-[8%] left-[5%]', 'top-[15%] right-[8%]', 'top-[22%] left-[12%]', 'top-[30%] right-[15%]',
    'top-[38%] left-[8%]', 'top-[45%] right-[10%]', 'top-[52%] left-[15%]', 'top-[60%] right-[12%]',
    'top-[68%] left-[10%]', 'top-[75%] right-[8%]', 'top-[82%] left-[12%]', 'top-[90%] right-[15%]',
    'top-[12%] left-[45%]', 'top-[25%] right-[45%]', 'top-[40%] left-[48%]', 'top-[55%] right-[48%]',
    'top-[70%] left-[42%]', 'top-[85%] right-[42%]', 'top-[18%] left-[85%]', 'top-[32%] right-[88%]',
    'top-[48%] left-[88%]', 'top-[62%] right-[85%]', 'top-[78%] left-[85%]', 'top-[10%] right-[25%]',
    'top-[28%] left-[25%]', 'top-[44%] right-[28%]', 'top-[58%] left-[22%]', 'top-[72%] right-[22%]',
    'top-[88%] left-[28%]', 'top-[14%] left-[65%]', 'top-[35%] right-[65%]', 'top-[50%] left-[68%]',
    'top-[64%] right-[68%]', 'top-[80%] left-[65%]', 'top-[20%] right-[38%]', 'top-[42%] left-[35%]',
    'top-[56%] right-[35%]', 'top-[74%] left-[38%]', 'top-[26%] left-[58%]', 'top-[46%] right-[58%]',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Lightning bolts */}
      {lightningBolts.map((bolt) => (
        <motion.div
          key={bolt.id}
          className="absolute w-1 bg-gradient-to-b from-blue-400 via-purple-500 to-transparent"
          style={{
            left: bolt.x,
            top: bolt.y,
            transformOrigin: 'top',
          }}
          initial={{ height: 0, opacity: 1, scaleX: 1 }}
          animate={{ 
            height: [0, 200, 0],
            opacity: [1, 0.8, 0],
            scaleX: [1, 0.5, 0.2],
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Lightning glow */}
          <div className="absolute inset-0 blur-sm bg-gradient-to-b from-blue-300 via-purple-400 to-transparent" />
        </motion.div>
      ))}

      {/* Floating Icons with mouse interaction */}
      <div className="opacity-20 dark:opacity-30">
        {icons.map((item, index) => {
          const { Icon, color, size, delay } = item;
          const position = positions[index % positions.length];

          return (
            <motion.div
              key={index}
              className={`absolute ${position} ${color} ${size}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 6 + index * 0.3,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
              }}
              style={{
                transform: `translate(${(mousePosition.x - window.innerWidth / 2) / (50 + index * 2)}px, ${(mousePosition.y - window.innerHeight / 2) / (50 + index * 2)}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              <Icon />
            </motion.div>
          );
        })}
      </div>

      {/* Mouse follower glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default HeroFloatingIcons;
