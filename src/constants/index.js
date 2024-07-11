import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  c,
  comfyUI,
  figma,
  illustrator,
  java,
  mysql,
  numpy,
  pandas,
  photoshop,
  python,
  scikitlearn,
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    id: 1,
    imageUrl: python,
    name: "Python",
    type: "ML",
  },
  {
    id: 2,
    imageUrl: numpy,
    name: "Numpy",
    type: "FrameWork",
  },
  {
    id: 3,
    imageUrl: pandas,
    name: "Pandas",
    type: "FrameWork",
  },
  {
    id: 4,
    imageUrl: scikitlearn,
    name: "ScikitLearn",
    type: "FrameWork",
  },
  {
    id: 5,
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    id: 6,
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    id: 7,
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    id: 8,
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    id: 9,
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    id: 10,
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    id: 11,
    imageUrl: c,
    name: "C",
    type: "backend",
  },
  {
    id: 12,
    imageUrl: java,
    name: "Java",
    type: "backend",
  },
  {
    id: 13,
    imageUrl: mysql,
    name: "MySQL",
    type: "backend",
  },
  {
    id: 14,
    imageUrl: illustrator,
    name: "Illustrator",
    type: "Design",
  },
  {
    id: 15,
    imageUrl: photoshop,
    name: "PhotoShop",
    type: "Design",
  },
  {
    id: 16,
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
  {
    id: 17,
    imageUrl: comfyUI,
    name: "ComfyUI",
    type: "Design",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
