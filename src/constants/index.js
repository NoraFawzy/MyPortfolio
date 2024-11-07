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
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  sql,
  php,
  laravel,
  mysql,
  postman,
  sakkny,
  arabic_mastery,
  clinic,
  isekai,
  depi,
  nti,
  alumasr
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
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React.js Specialist",
    icon: mobile, // consider an icon representing React or front-end work
  },
  {
    title: "UI/UX Enthusiast",
    icon: creator,
  },
  {
    title: "PHP & Laravel Developer",
    icon: backend, // you may choose a unique icon to represent backend or PHP work
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "Bootstrap",
    icon: bootstrap, 
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Laravel",
    icon: laravel, 
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Postman",
    icon: postman, 
  },

];

const experiences = [
  {
    title: "Front-End Developer (React.js)",
    company_name: "ISEKAI Code Company",
    icon: isekai, // replace with appropriate icon
    iconBg: "#383E56",
    date: "October 2024 - Present",
    points: [
      "Worked on large-scale, real-world projects, enhancing practical skills in React.js.",
      "Collaborated with a professional development team on complex projects, refining front-end development expertise.",
      "Focused on creating interactive, user-centered applications with a strong emphasis on performance and scalability.",
    ],
  },
  {
    title: "PHP Laravel Developer Intern",
    company_name: "DEPI",
    icon: depi, // replace with appropriate icon
    iconBg: "#E6DEDD",
    date:"July 2024 - October 2024",
    points: [
      "Developed web applications using PHP and the Laravel framework, following best practices for back-end development.",
      "Gained hands-on experience with MySQL, JavaScript, and other foundational web technologies.",
      "Collaborated with team members to analyze user requirements and implement features that meet project goals.",
      "Enhanced my skills in managing databases and optimizing server-side code.",
    ],
  },
  {
    title: "Web Design Trainee",
    company_name: "National Telecommunications Institute (NTI)",
    icon: nti, // replace with appropriate icon
    iconBg: "#383E56",
    date: "July 2024 - August 2024",
    points: [
      "Completed a comprehensive web design training program under the Ministry of Communications and Information Technology.",
      "Developed responsive websites using HTML5, CSS, JavaScript, and Bootstrap.",
      "Enhanced skills in modern web development practices and user-friendly interface design.",
    ],
  },
  {
    title: "ERP Intern",
    company_name: "ALUMISR Company",
    icon: alumasr, 
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2023",
    points: [
      "Gained experience with SAP Business One modules including Purchasing, Sales, Banking, and Warehouses.",
      "Developed and optimized SQL queries for data retrieval and manipulation.",
      "Created diverse reports using Crystal Reports, enhancing reporting and data analysis skills.",
      "Built foundational IT knowledge in ERP systems and business operations.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  
  {
    name: "Housing APP",
    description:
      "A real-world project aimed at helping university students find suitable housing. Property owners can list their properties, providing a seamless experience for both tenants and property owners.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sakkny, // replace with an actual image of the project if available
    source_code_link: "https://www.sakkny.elda7e7.com/", // replace with the actual repository link
    live_demo_link: "https://www.sakkny.elda7e7.com/", // link to the live project
  },
  {
    name: "ISEKAI Clinic ERP",
    description:
      "An ERP system for clinics and medical centers, designed to streamline clinic operations. Features include patient bookings, medical history, inventory management, and appointment scheduling.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: clinic, // replace with an actual image of the project if available
    source_code_link: "https://github.com/", // replace with the actual repository link if available
  },
  {
    name: "Arabic Mastery",
    description:
      "A comprehensive web application designed to teach Arabic, Tajweed, and Islamic Studies. It features structured lessons, exercises, and assessments in an interactive and user-friendly interface.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: arabic_mastery, // replace with an actual image of the project if available
    source_code_link: "https://www.arabic-mastery.elda7e7.com/", // replace with the actual repository link
    live_demo_link: "https://www.arabic-mastery.elda7e7.com/", // link to the live project
  },
];


export { services, technologies, experiences, testimonials, projects };
