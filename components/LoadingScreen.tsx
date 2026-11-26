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
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden p-4"
        >
          {/* Subtle Ambient Light Glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-500/10 via-sky-500/10 to-cyan-500/10 dark:from-blue-600/20 dark:via-sky-600/20 dark:to-cyan-600/20 blur-[120px] opacity-75" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center max-w-sm w-full">
            {/* Logo Frame with Subtle Accent Ring */}
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
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 blur-sm opacity-60 dark:opacity-80"
              />

              {/* Profile/Logo Container */}
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200 dark:border-white/20 shadow-xl bg-white dark:bg-gray-900 p-0.5">
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
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-blue-600 dark:text-cyan-400">
                Full-Stack Developer
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                SIVATHEEVAN
              </h1>
            </motion.div>

            {/* High-Contrast Progress Bar & Counter (Crisp & clearly visible in Light Mode) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="w-full space-y-2.5"
            >
              {/* Visible progress bar track in light mode (bg-slate-200/90 with border) and dark mode */}
              <div className="w-full h-2.5 bg-slate-200 dark:bg-gray-800 rounded-full overflow-hidden border border-slate-300 dark:border-gray-700 p-0.5 shadow-inner">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.15 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 dark:from-blue-500 dark:via-sky-400 dark:to-cyan-400 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]"
                />
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-gray-700 dark:text-gray-300 px-1">
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
