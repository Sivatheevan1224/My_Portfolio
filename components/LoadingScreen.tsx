"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import logo from '@/assets/hero4.png';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return prev + 10;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white dark:bg-black bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-black dark:to-gray-950 text-gray-900 dark:text-white opacity-100 overflow-hidden"
        >
          {/* Subtle Ambient Light Gradients for Light and Dark Modes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 blur-[120px] opacity-75" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center max-w-sm">
            {/* High-Tech Glowing Logo Frame */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="relative"
            >
              {/* Rotating Outer Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md opacity-70"
              />

              {/* Profile/Logo Container */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300 dark:border-white/30 shadow-2xl bg-white dark:bg-gray-900 p-0.5">
                <Image 
                  src={logo} 
                  alt="Sivatheevan Portfolio" 
                  width={96} 
                  height={96}
                  style={{ width: "auto", height: "auto" }}
                  className="object-cover w-full h-full rounded-full"
                  priority
                />
              </div>
            </motion.div>

            {/* Developer Branding & Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-1.5"
            >
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Full-Stack Developer
              </span>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                SIVATHEEVAN
              </h1>
            </motion.div>

            {/* Theme Responsive Progress Bar & Counter */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-full space-y-3"
            >
              <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-900 rounded-full overflow-hidden border border-gray-300 dark:border-gray-800 p-0.5 shadow-inner">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                />
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-gray-600 dark:text-gray-400 px-1">
                <span className="animate-pulse">Loading experience...</span>
                <span className="text-gray-900 dark:text-white font-mono font-bold">{progress}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
