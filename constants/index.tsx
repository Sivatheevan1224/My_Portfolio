import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";
import projectImage7 from "../assets/project7.png";
import projectImage8 from "../assets/project8.png";
import projectImage9 from "../assets/project9.png";
import projectImage10 from "../assets/project10.png";
import projectImage11 from "../assets/project11.png";
import projectImage12 from "../assets/project12.png";
import projectImage13 from "../assets/project13.png";

import htmlImg from "@/assets/html.png";
import cssImg from "@/assets/css.png";
import jsImg from "@/assets/JavaScript.png";
import bootstrapImg from "@/assets/bootstrap.png";
import tailwindcssImg from "@/assets/tailwindcss.png";
import reactImg from "@/assets/react.png";
import nextjsImg from "@/assets/nextJs.png";
import typescriptImg from "@/assets/typescript.png";
import reactnativeImg from "@/assets/reactnative.png";
import phpImg from "@/assets/php.png";
import nodejsImg from "@/assets/nodeJs.png";
import expressJsImg from "@/assets/expressJs.png";
import mongodbImg from "@/assets/mongoDB.png";
import mysqlImg from "@/assets/mysql.png";
import firebaseImg from "@/assets/firebase.png";
import cImg from "@/assets/c.png";
import javaImg from "@/assets/java.png";
import pythonImg from "@/assets/python.png";
import Image from "next/image";
import uwuImg from "@/assets/uwu.jpg";
import jhcImg from "@/assets/jhc.png";
import djangoImg from "@/assets/django.png";
import laravelImg from "@/assets/laravel.png";
import supabaseImg from "@/assets/supabase.png";
import postgresImg from "@/assets/postgresqlicon.png";
import gitImg from "@/assets/git.png";
import githubImg from "@/assets/github.png";
import vscodeImg from "@/assets/vscode.png";
import postmanImg from "@/assets/postman.png";
import linuxImg from "@/assets/linux.png";
import figmaImg from "@/assets/figma.png";
import androidStudioImg from "@/assets/androidstudio.png";
import springbootImg from "@/assets/springboot.png";
import firestoreImg from "@/assets/firestore.png";
import csiDevImg from "@/assets/CSI_DEV.jpg";
import vinasaiImg from "@/assets/vinasai.png";
import { i } from "framer-motion/client";



export const NAVIGATION_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Sivatheevan",
  greet: "Full Stack Developer",
  description:
    "Crafting seamless digital experiences with cutting-edge technologies.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "PyramidEdu",
    type: "Full-Stack Web & Mobile Application",
    status: "Completed & Verified",
    description:
      "PyramidEdu (Academic project) is an enterprise-grade smart institute management ecosystem offering multi-role access management (Admin, Manager, Teacher, Student, Support Staff), QR code-based digital attendance verification, student academic performance analytics with at-risk monitoring, AI-powered study tutor & intelligent learning recommendations with RAG, automated parent reporting & email digests, comprehensive fee tracking & salary payroll management, and real-time announcements developed with a Next.js 16 web portal, React Native (Expo) mobile app, and Node.js-Express-Prisma-PostgreSQL backend.",
    image: projectImage12,
    images: [projectImage12, projectImage13],
    githubLink: "https://github.com/Sivatheevan1224/PyramidEdu_Frontend.git",
    backendLink: "https://github.com/Sivatheevan1224/PyramidEdu_Backend.git",
    viewDemo: "https://www.linkedin.com/in/sivatheevan/",
    tech: ["Next.js", "React Native", "Node.js", "Express.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: 2,
    name: "GearSphere ",
    type: "Full-Stack Web Application",
    status: "Completed & Verified",
    description:
      "GearSphere(Academic project) is an advanced PC parts marketplace offering role-based user management, intelligent budget-driven PC builder tool, automated PC building recommendations, complete shopping experience, professional technician services, and comprehensive order tracking system developed with React.js frontend and PHP-MySQL backend",
    image: projectImage1,
    githubLink: "https://github.com/Sivatheevan1224/GearSphere-FrontEnd.git",
    viewDemo:
      "https://www.linkedin.com/posts/sivatheevan_gearsphere-academicproject-webdevelopment-activity-7382678017401155585-xJ2u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7T3LABOicd7vvlnlzcIfzhLBMQLB8yeSQ",
    tech: ["React.js", "Bootstrap", "PHP", "MySQL"],
  },

  {
    id: 3,
    name: "Sivatheevan Portfolio",
    type: "Personal Portfolio & Web Showcase",
    status: "Completed & Verified",
    description: "Modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations using Framer Motion, dark/light mode toggle, interactive project showcase, skills section with floating icons, and contact form. Fully optimized for performance and SEO.",
    image: projectImage5,
    githubLink: "https://github.com/Sivatheevan1224/My_Portfolio",
    viewDemo: "https://sivatheevan1224.github.io/My_Portfolio/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 4,
    name: "NexusAI – Enterprise AI Customer Support & RAG Platform",
    type: "Enterprise AI System & Copilot",
    status: "In Progress (Under Development)",
    description: "Full-stack enterprise AI customer support system and copilot platform built with Spring Boot 3, Java 17, and Next.js 14. Features vector Retrieval-Augmented Generation (RAG) powered by Google Gemini AI for automated Knowledge Base answers, automated ticket escalation for low-confidence queries (<45%), an Agent Command Workspace with customer sentiment analysis (FRUSTRATED, URGENT), 1-click AI draft replies, and real-time operations telemetry.",
    image: projectImage11,
    githubLink: "https://github.com/Sivatheevan1224/ai-customer-support-app.git",
    viewDemo: "https://ai-customer-support-app-tawny.vercel.app/",
    tech: ["Spring Boot 3", "Java 17", "Next.js 14", "React", "Google Gemini AI", "PostgreSQL", "Tailwind CSS", "Docker"]
  },

  {
    id: 5,
    name: "Care Connect – Community Healthcare Platform",
    type: "Healthcare Web Platform",
    status: "Completed & Verified",
    description: "Full-stack MERN-based community healthcare platform developed during a 12-hour overnight hackathon. Features secure authentication, patient appointment booking, admin and doctor management, and responsive user-friendly interfaces. Designed with scalability, performance, and real-world clinic workflows in mind.",
    image: projectImage8,
    githubLink: "https://github.com/Sivatheevan1224/Care_Connect",
    viewDemo: "https://care-connect-swart.vercel.app/",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "JWT"]
  },
  {
    id: 6,
    name: "GYM Management System",
    type: "Management System Web Application",
    status: "Completed & Verified",
    description:
      "The Gym Management System is designed to help gyms and fitness centres efficiently manage their operations, including member enrolment, trainer assignments, and payment tracking, through a single unified interface. This system is ideal for small to medium-sized gyms looking to digitize their management processes and can also serve as a valuable learning resource for developers interested in understanding how to build a real-world CRUD web application using PHP, a database, and user role management.",
    image: projectImage2,
    githubLink: "https://github.com/Sivatheevan1224/Gym_Management_System.git",
    viewDemo:
      "",
    tech: ["PHP", "CSS", "HTML", "MySQL"],
  },
  {
    id: 7,
    name: "AI-Powered Resume Builder",
    type: "AI Web Application",
    status: "Completed & Verified",
    description: "Full-stack web application that revolutionizes resume creation using AI technology. Features Groq AI (Llama 3.3) for automatic resume parsing, 5 professional templates, smart image processing with background removal, JWT authentication, and one-click PDF export. Built with MERN stack and cloud services.",
    image: projectImage6,
    githubLink: "https://github.com/Sivatheevan1224/Resume_Builder",
    viewDemo: "https://resumebuilderfrontend.vercel.app/",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq AI", "Tailwind CSS", "ImageKit", "JWT"]
  },
  {
    id: 8,
    name: "FlexiRide - On-Demand Rideshare App",
    type: "Cross-Platform Mobile Application",
    status: "Completed & Verified",
    description: "A cross-platform mobile app (Expo + React Native) that simplifies on-demand rides and vehicle bookings. Uses Firebase for secure authentication and real-time data; includes an intuitive booking flow, searchable vehicle listings, user profiles with booking history, and an admin dashboard for managing vehicles, users, and revenue. Designed with responsive UI and dark/light theme support for a polished mobile experience.",
    image: projectImage9,
    githubLink: "https://github.com/Sivatheevan1224/FlexiRide_MAD.git",
    viewDemo: "https://www.linkedin.com/posts/sivatheevan_flexiride-mobileappdevelopment-reactnative-ugcPost-7444207556866179072-0-tq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7T3LABOicd7vvlnlzcIfzhLBMQLB8yeSQ",
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "TailwindCSS/NativeWind"],
  },
  {
    id: 9,
    name: 'ProGarage',
    type: "Management Web Application",
    status: "Completed & Verified",
    description:
      'A full-stack garage management system for customer, vehicle, service, and billing operations. Built with Django REST Framework and React, it streamlines job cards, technician assignments, invoice generation, payment tracking, and service history management with a clean responsive interface.',
    image: projectImage10,
    githubLink: 'https://github.com/Sivatheevan1224/Garage_Management_System.git',
    viewDemo: 'https://www.linkedin.com/posts/sivatheevan_progarage-django-react-ugcPost-7443873298976854016-KWIr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7T3LABOicd7vvlnlzcIfzhLBMQLB8yeSQ',
    tech: ['React', 'Vite', 'Django REST Framework', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 10,
    name: "AI Image Generator",
    type: "AI Creative Web Application",
    status: "Completed & Verified",
    description:
      "A modern web application that generates AI-powered images using Hugging Face's inference API. Features multiple AI models, customizable aspect ratios, batch generation, and dark/light theme support.",
    image: projectImage7,
    githubLink: "https://github.com/Sivatheevan1224/AI_Image_Generator.git",
    viewDemo:
      "https://sivatheevan1224.github.io/AI_Image_Generator/",
    tech: ["HTML", "CSS", "JavaScript", "Hugging Face API"],
  },
];

export const BIO = [
  "I am an enthusiastic Full Stack Developer and a Computer Science and Technology student at Uva Wellassa University of Sri Lanka, driven by a passion for continuous learning, innovation, and problem-solving. My journey began with a fascination for technology, which inspired me to build efficient and user-centric web applications using modern technologies.",
  "Collaboration drives my work ethic. I thrive in dynamic environments, exchanging ideas with fellow developers and designers to craft innovative, scalable solutions. I prioritize writing clean, maintainable, and efficient code that ensures long-term project quality and performance.",
  "Beyond academics, I actively explore emerging technologies, programming languages, and frameworks through hands-on projects and continuous learning. My dedication to lifelong growth, adaptability, and technical excellence empowers me to contribute meaningfully to the evolving landscape of the tech industry.",
];


export const FRONTENDSKILLS = [
  {
    id: 1,
    icon: <Image src={nextjsImg} alt="nextJs" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "Next.js",
  },
  {
    id: 2,
    icon: <Image src={typescriptImg} alt="typescript" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "TypeScript",
  },
  {
    id: 3,
    icon: <Image src={reactImg} alt="react" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "React",
  },
  {
    id: 4,
    icon: (
      <Image src={tailwindcssImg} alt="tailwindcss" width={60} height={60} style={{ width: "auto", height: "auto" }} />
    ),
    name: "Tailwind CSS",
  },
  {
    id: 5,
    icon: (
      <Image src={reactnativeImg} alt="reactnative" width={60} height={60} style={{ width: "auto", height: "auto" }} />
    ),
    name: "React Native",
  },
  {
    id: 6,
    icon: <Image src={bootstrapImg} alt="bootstrap" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "Bootstrap",
  },
  {
    id: 7,
    icon: <Image src={jsImg} alt="javascript" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "JavaScript",
  },
  {
    id: 8,
    icon: <Image src={cssImg} alt="css" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "CSS",
  },
  {
    id: 9,
    icon: <Image src={htmlImg} alt="html" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "HTML",
  },
];

export const BACKENDSKILLS = [
  {
    id: 1,
    icon: <Image src={djangoImg} alt="django" width={100} height={100} style={{ width: "auto", height: "auto" }} />,
    name: "Django",
  },
  {
    id: 2,
    icon: <Image src={nodejsImg} alt="nodeJs" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "Node.js",
  },
  {
    id: 3,
    icon: <Image src={expressJsImg} alt="expressJs" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "Express.js",
  },
  {
    id: 4,
    icon: <Image src={phpImg} alt="php" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "PHP",
  },
  {
    id: 5,
    icon: <Image src={firebaseImg} alt="firebase" width={60} height={60} />,
    name: "Firebase",
  },
  {
    id: 6,
    icon: <Image src={springbootImg} alt="springboot" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "Spring Boot",
  },
  // {
  //   id: 5,
  //   icon: (
  //     <Image src={laravelImg} alt="laravel" width={60} height={60} />
  //   ),
  //   name: "Laravel",
  // },

  // {
  //   id: 7,
  //   icon: <Image src={supabaseImg} alt="supabase" width={60} height={60} />,
  //   name: "Supabase",
  // },
];

export const DATABASE = [
  {
    id: 1,
    icon: <Image src={mysqlImg} alt="mysql" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "MySQL",
  },
  {
    id: 2,
    icon: <Image src={mongodbImg} alt="mongodb" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "MongoDB",
  },
  {
    id: 3,
    icon: <Image src={postgresImg} alt="postgres" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "PostgreSQL",
  },
  {
    id: 4,
    icon: <Image src={firestoreImg} alt="firestore" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "Firestore",
  },

];

export const CUSTOMTECS = [
  {
    id: 1,
    icon: <Image src={javaImg} alt="java" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "Java",
  },
  {
    id: 2,
    icon: <Image src={pythonImg} alt="python" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "Python",
  },
  {
    id: 3,
    icon: <Image src={cImg} alt="C" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "C",
  },
  {
    id: 4,
    icon: <Image src={figmaImg} alt="figma" width={100} height={100} style={{ width: "auto", height: "auto" }} />,
    name: "Figma",
  },
  {
    id: 5,
    icon: <Image src={androidStudioImg} alt="androidStudio" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "Android Studio",
  },
  {
    id: 6,
    icon: <Image src={gitImg} alt="git" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "Git",
  },
  {
    id: 7,
    icon: <Image src={githubImg} alt="github" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "GitHub",
  },
  {
    id: 8,
    icon: <Image src={vscodeImg} alt="vscode" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "VS Code",
  },
  {
    id: 9,
    icon: <Image src={postmanImg} alt="postman" width={60} height={60} style={{ width: "auto", height: "auto" }} />,
    name: "Postman",
  },
  {
    id: 10,
    icon: <Image src={linuxImg} alt="linux" width={60} height={60} />,
    name: "Linux",
  },

];


export const skills = [FRONTENDSKILLS, BACKENDSKILLS, DATABASE, CUSTOMTECS];

export const EDUCATION = [
  {
    degree: "Bsc(Hons) in Computer Science and Technology",
    institution: "Uva Wellassa University",
    duration: "September 2023 - September 2027",
    description: "Fundamendals to Advance computer science field education.",
    img: (
      <Image
        src={uwuImg}
        alt="uwu"
        width={150}
        height={150}
        className="rounded-md object-cover"
      />
    ),
  },
  {
    degree: "Secondary Education",
    institution: "Jaffna Hindu College",
    duration: "January 2012 -   October 2020",
    description: "Secondary level education to advance level Mathematics",
    img: (
      <Image
        src={jhcImg}
        alt="jhc"
        width={150}
        height={150}
        className="rounded-md object-cover"
      />
    ),
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/Sivatheevan1224",
    icon: <FaGithub fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sivatheevan",
    icon: <FaLinkedin fontSize={50} className="hover:opacity-80" />,
  },
  {
    href: "mailto:sivatheevan1224@gmail.com",
    icon: <FaEnvelope fontSize={50} className="hover:opacity-80" />,
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Vinasai Inc",
    employmentType: "Internship",
    period: "Oct 2026 - Present · 2 mos",
    status: "Currently Active",
    location: "Canada · Remote",
    logo: vinasaiImg,
    logoBg: "bg-red-600 p-2.5",
    linkedin: "https://www.linkedin.com/in/sivatheevan/",
    description: "Working as a Software Engineer Intern at Vinasai Inc, developing full-stack web applications for real-world production projects including flyplaces.ca and primeville.ca. Collaborating remotely with engineering teams to build modern responsive user interfaces, develop robust API integrations, and deliver seamless digital experiences using agile workflows.",
    skills: [
      "Software Engineering",
      "Full-Stack Development",
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "API Integration",
      "Web Applications"
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer - Intern",
    company: "CSI-DevTeam",
    employmentType: "Part-time",
    period: "Jun 2026 - Present · 3 mos",
    status: "Currently Active",
    location: "Badulla District, Uva Province, Sri Lanka · Hybrid",
    institution: "Under Uva Wellassa University of Sri Lanka",
    logo: csiDevImg,
    description: "As a Full Stack Developer Intern at the CSI Dev Team, I am involved in developing and maintaining web applications using both frontend and backend technologies. My responsibilities include building responsive user interfaces, developing and integrating APIs, working with databases, and gaining practical experience in software development workflows, version control, and collaborative team environments.",
    skills: [
      "Mobile Application Development",
      "Full-Stack Development",
      "API Integration",
      "Web Applications",
      "Database Management"
    ],
  }
];
