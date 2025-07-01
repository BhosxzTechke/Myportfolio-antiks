import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projectinguna from "@/public/1st proj.png";
import projectingdalawa from "@/public/photoshopWork.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;




export const educationdata = [
  {
    title: "The Fisher Valley College",
    description:
      "Bachelor of Science in Information Technology (2022–2025 expected). Received Certificate of Excellence for Academic Performance (2024).",
    tags: ["BSIT", "Academic Excellence", "VB.NET", "SQL Server"],
    imageUrl: "/fisher.png", // Make sure this image is in your /public folder
  },
];



export const experiencesData = [
  {
    title: "Graduated Senior High School",
    location: "Muntinlupa National High School",
    description:
      "I completed my senior high school with a focus on ICT, which introduced me to the fundamentals of technology and programming.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "College & Self-Study Journey",
    location: "The Fisher Valley College",
    description:
      "Currently pursuing a degree in Information Technology. I’ve led group projects and enhanced my skills through self-study in programming and system development.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 – Present",
  },
  {
    title: "Online Learning & UI/UX Exploration",
    location: "Remote / Home-based",
    description:
      "Expanding my skills through platforms like Udemy, focusing on UI/UX design, web development, and preparing for freelance opportunities.",
    icon: React.createElement(FaReact),
    date: "2025 – Present",
  },
] as const;



export const projectsData = [
  {
    title: "School Enrollment System",
    description:
      "A school project I worked on for Fisher Valley College. It wasn't a large-scale system, but I really enjoyed building it and learned a lot throughout the process.",
    tags: ["PHP", "HTML", "Bootstrap"],
    imageUrl: projectinguna,
  },
  {
    title: "Photoshop Project",
    description:
      "This was both a group and personal project where I created posters, magazines, mockups, and photo manipulations using Adobe Photoshop.",
    tags: ["Photoshop"],
    imageUrl: projectingdalawa,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count, and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "PHP",
  "Powerpoint",
  "Node.js",
  "Git",
  "Bootstrap",
  "Figma",
  "Notion",
  "MSSQL - MYSQL",
  "Python",
  "Adove Photoshop",
  "Microsoft Office",
  "FreshDesk(CRM)",
  "Microsoft Excel",
] as const;
