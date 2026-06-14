export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github: string;
  live: string;
  featured: boolean;
  category: string;
}

const projects: Project[] = [
  {
    title: "Sensai — AI Career Coach",
    description:
      "AI-powered career coaching platform that conducts mock exams, generates ATS-optimized resumes, and builds tailored cover letters for students using Gemini AI and advanced MERN technologies.",
    longDescription:
      "A comprehensive, production-grade AI career coaching application built with the MERN stack. Integrates Google's Gemini AI to conduct interactive role-based technical exams, evaluate user responses dynamically, and generate professional ATS-optimized resumes and custom cover letters, providing students with state-of-the-art tools for career readiness.",
    tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Gemini AI", "Tailwind CSS", "Clerk"],
    github: "https://github.com/Vansh7818",
    live: "https://teerthankarai.vercel.app/",
    featured: true,
    category: "Full Stack",
  },
  {
    title: "E-Commerce Full Stack Platform",
    description:
      "Production-grade e-commerce platform with JWT authentication, product catalog, dynamic cart, and full CRUD operations via RESTful APIs.",
    longDescription:
      "A scalable full-stack e-commerce solution with secure JWT authentication, modular product management, real-time cart state, and a fully responsive storefront built on the MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/Vansh7818/ecommerce-fullstack",
    live: "https://ecommerce-fullstack-brown.vercel.app/",
    featured: true,
    category: "Full Stack",
  },
  {
    title: "Weather Smart Task Planner",
    description:
      "AI-powered productivity platform integrating real-time weather forecasting with intelligent task scheduling and context-aware planning insights.",
    longDescription:
      "An intelligent planning application that combines live weather APIs with task management to give context-aware productivity recommendations. Features responsive dashboard UI, real-time data, and smart scheduling logic.",
    tech: ["React", "Node.js", "MongoDB", "Weather API", "REST APIs"],
    github: "https://github.com/Vansh7818/Weather-Smart-Task-Planner",
    live: "",
    featured: true,
    category: "Full Stack",
  },
  {
    title: "Movie Review Platform",
    description:
      "Full-stack movie discovery and review platform with Spring Boot backend, React frontend, and MongoDB persistence for dynamic user-generated content.",
    longDescription:
      "A full-stack movie platform enabling users to browse, rate, and review films. Built with a Spring Boot REST API, React SPA, and MongoDB — showcasing Java backend proficiency combined with modern frontend development.",
    tech: ["React", "Spring Boot", "MongoDB", "Java", "REST API"],
    github: "https://github.com/Vansh7818/movie-reviews-app",
    live: "",
    featured: true,
    category: "Full Stack",
  },
  {
    title: "Destinofy — AI Travel UI",
    description:
      "Modern AI-inspired travel website with immersive UI/UX, fluid Framer Motion animations, and a production-quality frontend architecture.",
    longDescription:
      "A premium AI travel platform UI built with React, Tailwind CSS, and Framer Motion. Demonstrates advanced frontend design skills including animation engineering, responsive layouts, and polished component architecture.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Vansh7818/destinofy-ai-website",
    live: "",
    featured: false,
    category: "Frontend",
  },
  {
    title: "Vite Developer Portfolio",
    description:
      "Personal developer portfolio built with React, Tailwind CSS, and Framer Motion, featuring smooth entrance animations, glassmorphic styles, and modern aesthetics.",
    longDescription:
      "A fully responsive and animated personal developer portfolio website designed to showcase projects, skills, and experience. Built with Vite, React, and Tailwind CSS, utilizing Framer Motion for high-quality fluid layout animations and page transitions.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/Vansh7818/vansh-portfolio",
    live: "https://vansh-portfolio-three-eta.vercel.app/",
    featured: false,
    category: "Frontend",
  },
  {
    title: "Java Auth System",
    description:
      "Enterprise-grade Java authentication system with secure session management, login/logout flows, and robust backend validation using Servlets and JSP.",
    longDescription:
      "A secure, server-side Java application implementing authentication, session lifecycle management, and backend validation using Jakarta EE Servlets and JSP — showcasing deep understanding of Java enterprise patterns.",
    tech: ["Java", "Servlets", "JSP", "MySQL", "JDBC"],
    github: "https://github.com/Vansh7818/java-login-logout-system",
    live: "",
    featured: false,
    category: "Backend",
  },
  {
    title: "Athlete Performance Tracker",
    description:
      "Java-based performance analytics system to track, manage, and analyze athlete training data with efficient database persistence using JDBC and MySQL.",
    longDescription:
      "A data-driven Java desktop application for tracking athlete performance metrics and training records. Demonstrates strong OOP principles, JDBC database management, and structured data analysis.",
    tech: ["Java", "MySQL", "JDBC", "OOP"],
    github: "https://github.com/Vansh7818/athlete-performance-tracker",
    live: "",
    featured: false,
    category: "Backend",
  },
];

export default projects;
