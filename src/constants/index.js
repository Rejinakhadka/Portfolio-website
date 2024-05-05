import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  threejs,
  movix,
} from "../assets";

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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Rejinakhadka/crud_reactjs",
  },
];

export { services, technologies, experiences, testimonials, projects };
