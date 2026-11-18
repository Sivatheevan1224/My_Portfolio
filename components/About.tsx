"use client"
import React from 'react'
import { motion } from 'framer-motion';
import { FiMonitor, FiLayers, FiCheckCircle, FiAward, FiBriefcase } from 'react-icons/fi'
import { FaMobileAlt } from 'react-icons/fa'
import SectionFloatingIcons from './SectionFloatingIcons';
// import Certificates from './Certificates';

const services = [
  {
    icon: <FiMonitor className="w-8 h-8" />,
    title: "Web Development",
    description: "Creating responsive, modern, and high-performance web applications.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <FaMobileAlt className="w-7 h-7" />,
    title: "Mobile App Development",
    description: "Building cross-platform mobile solutions with React Native & Expo.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <FiLayers className="w-7 h-7" />,
    title: "Full-Stack Architecture",
    description: "Connecting frontend interfaces with robust APIs and cloud databases.",
    color: "from-orange-500 to-red-500"
  },
];

const stats = [
  {
    number: "10",
    suffix: "+",
    text: "Completed Projects",
    icon: <FiCheckCircle className="w-6 h-6 text-blue-500 dark:text-blue-400" />,
    bgColor: "bg-blue-500/10 dark:bg-blue-500/15 border-blue-500/20 group-hover:bg-blue-500/25"
  },
  {
    number: "95",
    suffix: "%",
    text: "Client Satisfaction",
    icon: <FiAward className="w-6 h-6 text-amber-500 dark:text-amber-400" />,
    bgColor: "bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/20 group-hover:bg-amber-500/25"
  },
  {
    number: "01",
    suffix: "+",
    text: "Years of Experience",
    icon: <FiBriefcase className="w-6 h-6 text-purple-500 dark:text-purple-400" />,
    bgColor: "bg-purple-500/10 dark:bg-purple-500/15 border-purple-500/20 group-hover:bg-purple-500/25"
  }
];

const About = () => {
  return (
    <section className='relative min-h-screen text-gray-900 dark:text-white px-4 sm:px-6 md:px-12 lg:px-24 py-16 sm:py-20' id='about'>
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-transparent dark:bg-black" />
        <SectionFloatingIcons />
      </div>

      <div className="container relative mx-auto space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About me
          </motion.h2>
          <motion.div
            className="w-20 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full section-underline shadow-md shadow-purple-500/40"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Main 2-Column Grid */}
        <div className='grid md:grid-cols-2 gap-12 md:gap-16 items-start'>
          {/* Services Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative flex gap-4 items-start pl-16 group"
                >
                  <div className="absolute left-0 w-16 h-16 flex items-center justify-center">
                    <div className={`absolute w-4 h-4 rounded-full bg-gradient-to-br ${service.color} shadow-lg shadow-blue-500/50`} />
                    <div className={`absolute w-3 h-3 rounded-full bg-gradient-to-br ${service.color} animate-ping opacity-75`} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-4 items-center">
                      <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-900 group-hover:bg-gradient-to-br ${service.color} group-hover:bg-opacity-10 transition-all duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className={`text-xl sm:text-2xl font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 pl-[52px] group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              className="p-6 sm:p-8 rounded-3xl backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-white/10 shadow-xl space-y-4"
              whileHover={{ y: -3 }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Full-Stack Developer (Web & Mobile)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  B.Sc (Hons) CST Scholar
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Passionate about building scalable Web & Mobile digital solutions
              </h3>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                I’m a Full Stack Web & Mobile Developer and Computer Science student at <strong>Uva Wellassa University of Sri Lanka</strong>, driven by curiosity and a passion for engineering high-performance software applications.
              </p>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in crafting full-stack web and mobile solutions using <strong>React, Next.js, Node.js, Express.js, Spring Boot, Django, PHP, React Native, MySQL, MongoDB, and Tailwind CSS</strong>. My focus is on clean architecture, intuitive UI/UX design, and scalable code standards.
              </p>

              {/* Key Tech Badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                {["React.js", "Next.js", "React Native", "Node.js", "Spring Boot", "Django", "PHP", "MySQL", "MongoDB", "Python", "Java", "Tailwind CSS"].map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-white/10">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Sleek Glassmorphic Stats Grid Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-4"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 rounded-2xl backdrop-blur-2xl bg-white/90 dark:bg-white/[0.04] border border-gray-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-sm transition-all duration-300 group-hover:scale-110 flex-shrink-0 ${stat.bgColor}`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
                  {stat.text}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates card (hidden) */}
        {/* <div className="pt-2">
          <Certificates />
        </div> */}
      </div>
    </section>
  )
}

export default About
