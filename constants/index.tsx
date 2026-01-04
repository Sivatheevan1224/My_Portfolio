import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
import projectImage5 from "../assets/project5.png";
import projectImage6 from "../assets/project6.png";
import projectImage7 from "../assets/project7.png";
import projectImage8 from "@/assets/book-review-logo.png";
import projectImage9 from "@/assets/signature.png";

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
import firestoreImg from "@/assets/firestore.png";



export const NAVIGATION_LINKS = [
  { label: "Home", href: "#hero"},
  { label: "About", href: "#about" },
  // { label: "Experience", href: "#experience" }, // Commented out for future use
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
    name: "GearSphere ",
    description:
      "GearSphere(Academic project) is an advanced PC parts marketplace offering role-based user management, intelligent budget-driven PC builder tool, automated PC building recommendations, complete shopping experience, professional technician services, and comprehensive order tracking system developed with React.js frontend and PHP-MySQL backend",
    image: projectImage1,
    githubLink: "https://github.com/Sivatheevan1224/GearSphere-FrontEnd.git",
    viewDemo:
      "https://www.linkedin.com/posts/sivatheevan_gearsphere-academicproject-webdevelopment-activity-7382678017401155585-xJ2u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE7T3LABOicd7vvlnlzcIfzhLBMQLB8yeSQ",
    tech: ["React.js", "Bootstrap", "PHP","MySQL"],
  },
  
  {
    id: 2,
    name: "Sivatheevan Portfolio",
    description: "Modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations using Framer Motion, dark/light mode toggle, interactive project showcase, skills section with floating icons, and contact form. Fully optimized for performance and SEO.",
    image: projectImage5,
    githubLink: "https://github.com/Sivatheevan1224/My_Portfolio_Siva",
    viewDemo: "https://sivatheevan1224.github.io/My_Portfolio/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 3,
    name: "GYM Management System",
    description:
      "The Gym Management System is designed to help gyms and fitness centres efficiently manage their operations, including member enrolment, trainer assignments, and payment tracking, through a single unified interface. This system is ideal for small to medium-sized gyms looking to digitize their management processes and can also serve as a valuable learning resource for developers interested in understanding how to build a real-world CRUD web application using PHP, a database, and user role management.",
    image: projectImage2,
    githubLink: "https://github.com/Sivatheevan1224/Gym_Management_System.git",
    viewDemo:
      "",
    tech: ["PHP", "CSS", "HTML","MySQL"],
  },
  {
    id: 4,
    name: "AI-Powered Resume Builder",
    description: "Full-stack web application that revolutionizes resume creation using AI technology. Features Groq AI (Llama 3.3) for automatic resume parsing, 5 professional templates, smart image processing with background removal, JWT authentication, and one-click PDF export. Built with MERN stack and cloud services.",
    image: projectImage6, 
    githubLink: "https://github.com/Sivatheevan1224/Resume_Builder", 
    viewDemo: "https://resumebuilderfrontend.vercel.app/", 
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq AI", "Tailwind CSS", "ImageKit", "JWT"]
},
{
    id: 5,
    name: "AI Image Generator",
    description:
      "A modern web application that generates AI-powered images using Hugging Face's inference API. Features multiple AI models, customizable aspect ratios, batch generation, and dark/light theme support.",
    image: projectImage7,
    githubLink: "https://github.com/Sivatheevan1224/AI_Image_Generator.git",
    viewDemo:
      "https://sivatheevan1224.github.io/AI_Image_Generator/",
    tech: ["HTML", "CSS", "JavaScript", "Hugging Face API"],
},
  {
    id: 6,
    name: "Instagram Clone",
    description:
      "Instagram-like frontend built with React and Vite using a local JSON data store to simulate API endpoints; includes responsive feed, stories, suggestions, and profile management.",
    image: projectImage3,
    githubLink: "https://github.com/Sivatheevan1224/InstagramCloneFrontEnd.git",
    viewDemo:
      "",
    tech: ["React", "json"],
  },
  {
    id: 7,
    name: "Restaurant Website",
    description: "Clean, responsive restaurant website built with semantic HTML, modern CSS (flexbox/grid) and vanilla JavaScript; includes an interactive menu, image gallery, and mobile-first layout. Ideal for showcasing menus and reservations.",
    image: projectImage4,
    githubLink: "https://github.com/Sivatheevan1224/Restaurant-Website",
    viewDemo: "",
    tech: ["HTML", "CSS", "JavaScript"]
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
    icon: <Image src={nextjsImg} alt="nextJs" width={60} height={60} />,
    name: "Next.js",
  },
  {
    id: 2,
    icon: <Image src={typescriptImg} alt="typescript" width={60} height={60} />,
    name: "TypeScript",
  },
  {
    id: 3,
    icon: <Image src={reactImg} alt="react" width={60} height={60} />,
    name: "React",
  },
  {
    id: 4,
    icon: (
      <Image src={tailwindcssImg} alt="tailwindcss" width={60} height={60} />
    ),
    name: "Tailwind CSS",
  },
  {
    id: 5,
    icon: (
      <Image src={reactnativeImg} alt="reactnative" width={60} height={60} />
    ),
    name: "React Native",
  },
  {
    id: 6,
    icon: <Image src={bootstrapImg} alt="bootstrap" width={60} height={60} />,
    name: "Bootstrap",
  },
  {
    id: 7,
    icon: <Image src={jsImg} alt="javascript" width={60} height={60} />,
    name: "JavaScript",
  },
  {
    id: 8,
    icon: <Image src={cssImg} alt="css" width={60} height={60} />,
    name: "CSS",
  },
  {
    id: 9,
    icon: <Image src={htmlImg} alt="html" width={60} height={60} />,
    name: "HTML",
  },
];

export const BACKENDSKILLS = [
  {
    id: 1,
    icon: <Image src={djangoImg} alt="django" width={100} height={100} />,
    name: "Django",
  },
  {
    id: 2,
    icon: <Image src={nodejsImg} alt="nodeJs" width={60} height={60} />,
    name: "Node.js",
  },
  {
    id: 3,
    icon: <Image src={expressJsImg} alt="expressJs" width={60} height={60} />,
    name: "Express.js",
  },
  {
    id: 4,
    icon: <Image src={phpImg} alt="php" width={60} height={60} />,
    name: "PHP",
  },
  // {
  //   id: 5,
  //   icon: (
  //     <Image src={laravelImg} alt="laravel" width={60} height={60} />
  //   ),
  //   name: "Laravel",
  // },
  // {
  //   id: 6,
  //   icon: <Image src={firebaseImg} alt="firebase" width={60} height={60} />,
  //   name: "Firebase",
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
    icon: <Image src={mysqlImg} alt="mysql" width={60} height={60} />,
    name: "MySQL",
  },
  {
    id: 2,
    icon: <Image src={mongodbImg} alt="mongodb" width={60} height={60} />,
    name: "MongoDB",
  },
  // {
  //   id: 3,
  //   icon: <Image src={postgresImg} alt="postgres" width={60} height={60} />,
  //   name: "PostgreSQL",
  // },
  // {
  //   id: 4,
  //   icon: <Image src={firestoreImg} alt="firestore" width={60} height={60} />,
  //   name: "Firestore",
  // },
];

export const CUSTOMTECS = [
  {
    id: 1,
    icon: <Image src={javaImg} alt="java" width={60} height={60} />,
    name: "Java",
  },
  {
    id: 2,
    icon: <Image src={pythonImg} alt="python" width={60} height={60} />,
    name: "Python",
  },
  {
    id: 3,
    icon: <Image src={cImg} alt="C" width={60} height={60} />,
    name: "C",
  },
  {
    id: 4,
    icon: <Image src={figmaImg} alt="figma" width={100} height={100} />,
    name: "Figma",
  },
  {
    id: 5,
    icon: <Image src={androidStudioImg} alt="androidStudio" width={60} height={60} />,
    name: "Android Studio",
  },
  {
    id: 6,
    icon: <Image src={gitImg} alt="git" width={60} height={60} />,
    name: "Git",
  },
  {
    id: 7,
    icon: <Image src={githubImg} alt="github" width={60} height={60} />,
    name: "GitHub",
  },
  {
    id: 8,
    icon: <Image src={vscodeImg} alt="vscode" width={60} height={60} />,
    name: "VS Code",
  },
  // {
  //   id: 9,
  //   icon: <Image src={postmanImg} alt="postman" width={60} height={60} />,
  //   name: "Postman",
  // },
  // {
  //   id: 10,
  //   icon: <Image src={linuxImg} alt="linux" width={60} height={60} />,
  //   name: "Linux",
  // },
  
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
