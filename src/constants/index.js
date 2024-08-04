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
  java,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  Mawradi,
  bseb,
  shopify,
  study,
  shoping,
  pass,
  tripguide,
  threejs,
 
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
 
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "Java",
    icon: java,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [

  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },


  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },

  {
    title: "Web Development Intern",
    company_name: "Octanet",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2024 - August 2024",
    points: [
      "Developing and maintaining web applications using various web technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior React.js Developer Intern",
    company_name: "TechCoKreators",
    icon: starbucks,
    iconBg: "#383E56",
    date: "October 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ],
  },


//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },

];


// Education Background Details

 const education = [
  {
      title: "Bachelor in Computer Engineering",
      institute_name: "Marwadi University",
      icon: Mawradi,
      iconBg: "#383E56",
      date: "August 2022 - August 2026",
      points: [
            "I am currently pursuing a B.Tech in Computer Engineering at Marwadi University, Rajkot. As a pre-final year student, I am deeply immersed in advanced computer engineering concepts and technologies, constantly seeking to expand my knowledge and practical skills in this dynamic field."
      ],
  },
  {
      title: "Senior Secondary Education",
      institute_name: "Jai Prakash University",
      icon: bseb,
      iconBg: "#383E56",
      date: "August 2020 - February 2022",
      points: [
            "I completed my senior secondary education with an impressive  80% grade, establishing a strong foundation for my academic and professional journey in computer engineering."
      ],
  },
  {
      title: "Secondary Education",
      institute_name: " Bihar Secondary School Examination Board",
      icon: bseb,
      iconBg: "#383E56",
      date: "December 2018 - March 2020",
      points: [
         "I completed my secondary education with an impressive 84% grade, demonstrating my dedication to academic excellence and laying a strong foundation for my studies in computer engineering."   
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
    name: "VidyaWani: An  Educational App",
    description:
          "Our study app enhances learning with personalized plans, interactive quizzes, and progress tracking. Easy to use on all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: study,
    source_code_link: "https://github.com/anuragtiwari3100/VidyaWani",
  },
  {
    name: "Shopping Cart",
    description:
"Web application that allows users to browse products, add items to a shopping cart, and securely complete purchases, with real-time inventory updates and personalized recommendations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "telwind",
        color: "pink-text-gradient",
      },
    ],
    image: shoping,
    source_code_link: "https://github.com/anuragtiwari3100/Shopping-Cart-websites",
  },
  {
    name: "Password-Generator",
    description:
        "A tool that generates secure, random passwords by combining letters, numbers, and special characters, ensuring strong protection against unauthorized access.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "telwind",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: pass,
    source_code_link: "https://github.com/anuragtiwari3100/Password-GEnerator",
  },
];

export { services, technologies,education, experiences, testimonials, projects };
