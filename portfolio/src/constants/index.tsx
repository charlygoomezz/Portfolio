/**
 * @copyright 2025 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type { ExperienceType, LinksType, ProjectType, ServiceType, ToolsType } from '@/types';

/**
 * Assets
 */
import {
  Briefcase,
  FileText,
  Globe,
  Home,
  Layers,
  Mail,
  Palette,
  Rocket,
  Settings,
  Smartphone,
  User,
  Linkedin,
  Github,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  {
    label: 'Projects',
    link: '#projects',
    icon: Briefcase,
  },
  { label: 'About', link: '#about', icon: User },
  {
    label: 'Services',
    link: '#services',
    icon: Settings,
  },
  { label: 'Resume', link: '#resume', icon: FileText },
  { label: 'Contact', link: '#contact', icon: Mail },
];

const socialLinks: LinksType[] = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/cgomezprosper/',
  },
  {
    icon: Github,
    label: 'GitHub',
    link: 'https://github.com/charlygoomezz',
  },
];

const projectsData: ProjectType[] = [
  {
    imgSrc: '/images/renting-luxe.jpg',
    title: 'Full stack renting-car web',
    description: `Car rental web application with an admin panel for inventory management. 
    Implements a complete user flow including Clerk authentication, favorites management, 
    and secure payments via Stripe. Built with React, TypeScript, and Tailwind, using 
    Prisma and Neon for efficient and scalable data persistence.`,
    stack: [
      { label: 'React', imgSrc: '/images/tools/react.svg' },
      { label: 'Tailwind CSS', imgSrc: '/images/tools/tailwindcss.svg' },
      { label: 'Neon', imgSrc: '/images/tools/neon.svg' },
      { label: 'Typescript', imgSrc: '/images/tools/typescript.svg' },
      { label: 'Prisma', imgSrc: '/images/tools/prisma_dark.svg' },
      { label: 'Clerk', imgSrc: '/images/tools/clerk.svg' },
      { label: 'Stripe', imgSrc: '/images/tools/stripe.svg' },
    ],
    projectLink: 'https://renting-web-alpha.vercel.app/',
  },
  {
    imgSrc: '/images/glow-up.jpg',
    title: 'Final Degree Project - App mobile',
    description: `A native Android application dedicated to personalizing skincare routines. 
      Developed in Java and XML, it allows users to organize their daily habits 
      by integrating Firebase for cloud data management and JSON Server for 
      catalog management, resulting in a fluid and structured user experience.`,
    descriptionLink:
      'https://drive.google.com/file/d/1MPW-eCJqanddT5OH62vGZq_BniLPE3Vq/view?usp=drive_link',
    stack: [
      { label: 'Java', imgSrc: '/images/tools/java.svg' },
      { label: 'Android', imgSrc: '/images/tools/android-icon.svg' },
      { label: 'Firebase', imgSrc: '/images/tools/firebase.svg' },
      { label: 'LottieFiles', imgSrc: '/images/tools/lottiefiles.svg' },
    ],
    projectLink: 'https://github.com/charlygoomezz/android-project',
    secondaryLink:
      'https://www.figma.com/deck/oluoKoeoiNWQUnMrdq2B5m/Presentacion-Glowup?node-id=8-613&t=lD5NfibcY5IfnrjU-1&scaling=min-zoom&con',
  },
];

const education: ExperienceType[] = [
  {
    year: '2023 – 2025',
    title: 'Higher Technician Degree in DAM.',
    institute: 'Upgrade Hub',
    desc: `Focused on the design, development, and maintenance of applications for mobile and desktop 
    environments. The program covers interface development, application logic, database management, 
    and testing, with a strong emphasis on practical projects and real-world problem solving.`,
  },
  {
    year: '2016-2018',
    title: 'Bachelor’s Degree in Computer Engineering (Inc.)',
    institute: 'Alcala University',
    desc: 'Studies focused on the understanding and application of computer systems and advanced hardware.',
  },
];

const experience: ExperienceType[] = [
  {
    year: '2025 – 2026',
    title: 'Frontend Developer',
    institute: 'Waizar',
    desc: `Working on the development of web and mobile applications using React, Next.js, and Expo. 
    Focused on building responsive interfaces, reusable components, and clean, maintainable code, 
    while integrating APIs, managing application state, and collaborating within an agile, 
    cross-functional team.`,
  },
];

const tools: ToolsType[] = [
  {
    label: 'JavaScript',
    imgSrc: '/images/tools/javascript.svg',
  },
  {
    label: 'Typescript',
    imgSrc: '/images/tools/typescript.svg',
  },
  {
    label: 'Java',
    imgSrc: '/images/tools/java.svg',
  },
  {
    label: 'HTML',
    imgSrc: '/images/tools/html5.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/images/tools/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/images/tools/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/images/tools/react.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/images/tools/nodejs.svg',
  },
  {
    label: 'Figma',
    imgSrc: '/images/tools/figma.svg',
  },
  {
    label: 'Mongodb',
    imgSrc: '/images/tools/mongodb.svg',
  },

  {
    label: 'Expo',
    imgSrc: '/images/tools/expo.svg',
  },
  {
    label: 'Spring',
    imgSrc: '/images/tools/spring.svg',
  },
];

const services: ServiceType[] = [
  {
    title: 'Brand Identity',
    desc: 'I craft modern visual identities that help brands stand out through strong typography, colors, and minimal design.',
    projects: '32 Projects',
    icon: <Palette className="h-6 w-6 text-green-400" />,
  },
  {
    title: 'UI/UX Design',
    desc: 'Designing clean, intuitive, and user-friendly interfaces that improve user experience and boost conversions.',
    projects: '47 Projects',
    icon: <Layers className="h-6 w-6 text-green-400" />,
  },
  {
    title: 'Web Development',
    desc: 'Building high-performance, SEO-friendly websites using Next.js, Tailwind, and modern web technologies.',
    projects: '58 Projects',
    icon: <Globe className="h-6 w-6 text-green-400" />,
  },
  {
    title: 'Mobile App Design',
    desc: 'Creating pixel-perfect app interfaces optimized for both iOS and Android devices with smooth usability.',
    projects: '21 Projects',
    icon: <Smartphone className="h-6 w-6 text-green-400" />,
  },
  {
    title: 'Product Launch Strategy',
    desc: 'Helping startups prepare their digital products for launch with design systems, marketing pages, and assets.',
    projects: '15 Projects',
    icon: <Rocket className="h-6 w-6 text-green-400" />,
  },
];

export { socialLinks, projectsData, education, experience, tools, services, navLinks };
