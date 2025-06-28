import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaGitAlt, FaPython, FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa6";
import { FaLinux, FaNode } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { SiSqlalchemy, SiFlask, SiThreedotjs, SiPostman, SiTailwindcss, SiInkscape, SiBlender } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 12, suffix: "+", label: "Months of Experience" },
  { value: 100, suffix: "%", label: "Dedication" },
  { value: 110, suffix: "%", label: "Eagerness to Learn" },
  { value: 100, suffix: "%", label: "Positive Aura" },
];

const logoIconsList = [
  {
    type: "icon", 
    icon: FaGitAlt, 
    name: "Git",
  },
  {
    type: "icon",
    icon: FaPython,
    name: "Python",
  },
  {
    type: "icon",
    icon: FaHtml5,
    name: "HTML",
  },
  {
    type: "icon",
    icon: FaCss3,
    name: "CSS",
  },
  {
    type: "icon",
    icon: FaJs,
    name: "JavaScript",
  },
  {
    type: "icon",
    icon: FaReact,
    name: "React",
  },
  {
    type: "icon",
    icon: FaLinux,
    name: "Linux",
  },
  {
    type: "icon",
    icon: FaNode,
    name: "Node.js",
  },
  {
    type: "icon",
    icon: PiFileSql,
    name: "SQL",
  },
  {
    type: "icon",
    icon: SiSqlalchemy,
    name: "SQLAlchemy",
  },
  {
    type: "icon",
    icon: SiFlask,
    name: "Flask",
  },
  {
    type: "icon",
    icon: SiThreedotjs,
    name: "Three.js",
  },
  {
    type: "icon",
    icon: SiPostman,
    name: "Postman",
  },
  {
    type: "icon",
    icon: SiTailwindcss,
    name: "Tailwind CSS",
  },
  {
    type: "icon",
    icon: SiInkscape,
    name: "Inkscape",
  },
  {
    type: "icon",
    icon: SiBlender,
    name: "Blender",
  },
  {
    type: "icon",
    icon: VscVscode,
    name: "VS Code",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Detail-oriented and committed to writing clean, well-tested code.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Clear communicator and proactive collaborator for trasparent project updates.",
  },
  {
    imgPath: "/images/time.png",
    title: "Time Efficient",
    desc: "Efficient problem-solver, delivering quality solutions in a timely manner.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

/** For the WorkExperience component  */
const expCards = [
  {
    review: "",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "Date - Date",
    responsibilities: [
      "",
      "",
      "",
    ],
  },
  {
    review: "",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "Date - Date",
    responsibilities: [
      "",
      "",
      "",
    ],
  },
  {
    review: "",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "Date - Date",
    responsibilities: [
      "",
      "",
      "",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];
/* End WorkExperience component */

const certificates = [
  {
    review: "State of the Art!",
    name: "Diploma of Graphic Design",
    imgPath: "/images/cert5.png",
    logoPath: "/images/sae.png",
    title: "Diploma of Graphic Design",
    date: "2019",
    description: [
      "Learn the ins and outs of Graphic Design from pencil to computer.",
      "Gain a solid understanding of typography, color theory, and layout.",
      "Develop an understanding of UX/UI Design and Website building principles."
    ]
  },
  {
    review: "Crazy Syntaxes!",
    name: "Learn JavaScript",
    imgPath: "/images/cert1.png",
    logoPath: "/images/scrimba1.png",
    title: "Learn JavaScript",
    date: "2025",
    description: [
      "Deep dive into the Basics of JavaScript development",
      "Build 4 different projects from scratch",
      "Understand the core concepts of JavaScript"
    ]
  },
  {
    review: "More Typing Safer Code, keen to learn more!",
    name: "Learn TypeScript",
    imgPath: "/images/cert2.png",
    logoPath: "/images/scrimba1.png",
    title: "Learn TypeScript",
    date: "2025",
    description: [
      "Introduction to TypeScript and its features",
      "Understand the fundamental of TypeScript"
    ]
  },
  {
    review: "Amazing!",
    name: "Learn React",
    imgPath: "/images/cert3.png",
    logoPath: "/images/scrimba1.png",
    title: "Learn React",
    date: "2025",
    description: [
      "Gain all the basic knowledge of React",
      "Learn the most common React Hooks and Context API",
      "Understand the core concepts of React"
    ]
  },
  {
    review: "Super!",
    name: "Learn Node.js",
    imgPath: "/images/cert6.png",
    logoPath: "/images/scrimba1.png",
    title: "Learn Node.js",
    date: "2025",
    description: [
      "Learn the core concepts of Node.js",
    ]
  },
  {
    review: "Interesting!",
    name: "Learn Next.js",
    imgPath: "/images/cert7.png",
    logoPath: "/images/scrimba1.png",
    title: "Learn Next.js",
    date: "2025",
    description: [
      "Learn the basics of Next.js",
      "Develop a Next.js Project",
    ]
  },
  {
    review: "Backend can be sometimes simpler!",
    name: "Learn Express.js",
    imgPath: "/images/cert9.png",
    logoPath: "/images/scrimba1.png",
    title: "Learn Express.js",
    date: "2025",
    description: [
      "Look at the syntaxes of Express.js",
      "Understand the core concepts of Express.js"
    ]
  },
  {
    review: "Love it!",
    name: "Advanced React",
    imgPath: "/images/cert4.png",
    logoPath: "/images/scrimba1.png",
    title: "Advanced React",
    date: "2025",
    description: [
      "Explore the more advanced features of React",
      "Dive deeper into react hooks and stucture",
      "Learn React Router and many more React Libraries",
      "Build 5+ Projects"
    ]
  },
  {
    review: "More Crazy Syntaxes, but I got the hang of it!",
    name: "Advanced JavaScript",
    imgPath: "/images/cert8.png",
    logoPath: "/images/scrimba1.png",
    title: "Advanced JavaScript",
    date: "2025",
    description: [
      "Explore the more advanced concepts in JavaScript",
      "Advanced Foundations of JavaScript",
      "Methods, Async, Classes, Advanced Objects and Function Patters",
    ]
  },
];

const certificateLogos = [
  {
    name: "logo1",
    imgPath: "/images/sae.png"
  },
  {
    name: "logo2",
    imgPath: "/images/masterschool.png"
  },
  {
    name: "logo3",
    imgPath: "/images/scrimba1.png"
  }
]
/** For Testimonial component when i get some clients */
const testimonials = [
  {
    name: "",
    mentions: "",
    review:
      "",
    imgPath: "/images/client1.png",
  },
  {
    name: "",
    mentions: "",
    review:
      "",
    imgPath: "/images/client3.png",
  },
  {
    name: "",
    mentions: "",
    review:
      "",
    imgPath: "/images/client2.png",
  },
  {
    name: "",
    mentions: "",
    review:
      "",
  },
  {
    name: "",
    mentions: "",
    review:
      "",
    imgPath: "/images/client4.png",
  },
  {
    name: "",
    mentions: "",
    review:
      "",
    imgPath: "/images/client6.png",
  },
];

const socialIcons = [
  {
    name: "insta",
    url: "https://www.instagram.com/matt__wil/",
    icon: FaInstagram
  },
  {
    name: "fb",
    url: "https://www.facebook.com/profile.php?id=754405944",
    icon: FaFacebook
  },
  {
    name: "Github",
    url: "https://github.com/matt-wil",
    icon: FaGithub
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/matt-s-williams",
    icon: FaLinkedin
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialIcons,
  techStackIcons,
  techStackImgs,
  navLinks,
  certificates,
  certificateLogos,
};
