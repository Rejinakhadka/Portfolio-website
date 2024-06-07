import {

  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,

  git,
 

  jobit,
 
  threejs,
  movix,
  resume,
 
} from "../assets";

import newsbite from "../assets/newsbite.png"
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "React.js Developer (Internship)",
    company_name: "Treeleaf.ai",
    icon: "https://cdn.sanity.io/images/dn908w7j/production/910196a3e37ad448c9da73091041fffa49e4c44b-225x225.png",
    iconBg: "#383E56",
    date: "Jan 2024 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      " Led UI design and API integration for Treelytics project.",
      "Utilzed ReactQuery , Redux Toolkit ,Ant Design, react grid layout , react monaco editor , recharts",
    ],
  },
  {
    title: "Front-end Developer - Project Based Internship",
    company_name: "Spell Innovation",
    icon: "https://spellinnovation.com/uploads/22-10-16-12-02-34Frame%203.png",
    iconBg: "#E6DEDD",
    date: "July 2023 - October 2023",
    points: [
      "Developing UI of A Trek and Travel Website.",
      "Utilized Tailwind css for styling.",
    ],
  },
];


const projects = [
  {
    name: "Movix",
    description:
      "Web-based platform that allows users to browse varours trending movies and watch trailer.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reduxjs/toolkit",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: movix,
    source_code_link: "https://github.com/Rejinakhadka/movixreactwebapp",
  },
  {
    name: "Resume_Builder",
    description:
      "ResumeBuilder is a user-friendly web app for creating resumes with real-time previews and easy printing/downloading.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      
      {
        name: "React Hook Form",
        color: "pink-text-gradient",
      },
      
    ],
    image: resume,
    source_code_link: "https://buildportfolio.netlify.app",
  },
  {
    name: "Crud ",
    description: "A simple Form Management System.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "local storage",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },

    ],
    image: jobit,
    source_code_link: "https://profiledata11.netlify.app/",
  },
  {
    name: "News Bite ",
    description:
      "A React application that fetches and displays news articles from different sources. Users can read the latest news in various categories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "News Api",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: newsbite,
    source_code_link: "https://github.com/Rejinakhadka/NewsProject",
  },
];

export { services, technologies, experiences, projects };



