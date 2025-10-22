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
    name: "GYM Management System",
    description:
      "The Gym Management System is designed to help gyms and fitness centres efficiently manage their operations, including member enrolment, trainer assignments, and payment tracking, through a single unified interface. It simplifies administrative tasks by replacing manual logs and spreadsheets with a streamlined web-based platform, ensuring better record-keeping and organization of member details, trainer data, and payment histories. This system is ideal for small to medium-sized gyms looking to digitize their management processes and can also serve as a valuable learning resource for developers interested in understanding how to build a real-world CRUD web application using PHP, a database, and user role management.",
    image: projectImage2,
    githubLink: "https://github.com/Sivatheevan1224/Gym_Management_System.git",
    viewDemo:
      "",
    tech: ["PHP", "CSS", "HTML","MySQL"],
  },
  {
    id: 3,
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
id: 4,
name: "Restaurant Website",
description: "Responsive restaurant landing site built with HTML, CSS and vanilla JavaScript; features menu sections, image gallery, and a mobile-friendly layout.",
image: projectImage4,
githubLink: "https://github.com/Sivatheevan1224/Restaurant-Website",
viewDemo: "",
tech: ["HTML", "CSS", "JavaScript"]
},
];

export const BIO = [
  "I am an enthusiastic Full Stack Developer with a strong foundation in modern technologies like React, Node.js, and PHP. My journey began with a fascination for technology, leading me to create seamless web applications that enhance user experiences.",
  "Collaboration drives my work ethic. I thrive in dynamic environments, exchanging ideas with fellow developers and designers to craft innovative solutions. My focus on clean, efficient code ensures that projects remain maintainable.",
  "In my spare time, I explore new programming languages and frameworks, continuously expanding my skill set and pushing the boundaries of software development.",
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
