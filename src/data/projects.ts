export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  featured: boolean;
  category: "Full Stack" | "Backend" | "AI & Systems";
  badge?: string;
}

export const projectsData: Project[] = [
  {
    id: "teerthankar-ai",
    title: "Teerthankar AI Platform",
    subtitle: "AI-Powered Career & Placement Preparation Suite",
    description:
      "A production-grade AI career acceleration platform equipped with an automated Resume Builder, Tailored Cover Letter Generator, and Dynamic Mock Interview simulation.",
    highlights: [
      "Integrated Google Gemini APIs for contextual career content generation and automated feedback scoring.",
      "Engineered event-driven background jobs using Inngest for automated industry data and trend refreshing.",
      "Architected secure Clerk authentication with role-based access control (RBAC) and isolated PostgreSQL schemas via Prisma ORM.",
    ],
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma ORM", "Gemini AI", "Clerk", "Inngest", "Tailwind CSS"],
    github: "https://github.com/Vansh7818/teerthankarai",
    live: "https://teerthankarai.vercel.app/",
    featured: true,
    category: "Full Stack",
    badge: "Flagship Project",
  },
  {
    id: "tdc-matchmaker",
    title: "TDC Matchmaker Operations Dashboard",
    subtitle: "Real-Time Matchmaking Algorithm & Operations MVP",
    description:
      "Operations dashboard and matchmaking algorithmic control center designed for The Date Crew (TDC), featuring an integrated AI Copilot and pipeline monitoring.",
    highlights: [
      "Engineered responsive administrative dashboard with real-time candidate queuing, algorithmic affinity scoring, and workflow controls.",
      "Integrated AI Copilot module to assist operations staff in match recommendations and conflict detection.",
      "Built with high-performance Next.js 14 App Router, modular TypeScript components, and automated Vercel CI/CD.",
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "AI Copilot", "Lucide React", "Vercel"],
    github: "https://github.com/Vansh7818/tdc-matchmaker-dashboard",
    live: "https://tdc-matchmaker-dashboard-psi.vercel.app",
    featured: true,
    category: "Full Stack",
    badge: "Production MVP",
  },
  {
    id: "ecommerce-fullstack",
    title: "Full-Stack Enterprise E-Commerce",
    subtitle: "Scalable Storefront & Merchant Operations Platform",
    description:
      "End-to-end e-commerce web platform featuring complete product discovery, dynamic cart state management, checkout workflows, and a protected admin management suite.",
    highlights: [
      "Engineered decoupled React 19/Vite frontend with an Express.js REST API supporting dual user/admin roles.",
      "Secured API endpoints with JWT tokens, bcrypt password hashing, Helmet headers, and IP-based rate limiting.",
      "Modeled relational database schemas in SQLite using Sequelize ORM with comprehensive transaction handling.",
    ],
    tech: ["React 19", "Vite", "Node.js", "Express.js", "SQLite", "Sequelize ORM", "JWT", "Tailwind CSS"],
    github: "https://github.com/Vansh7818/ecommerce-fullstack",
    live: "https://ecommerce-fullstack-brown.vercel.app/",
    featured: true,
    category: "Full Stack",
  },
  {
    id: "almeno-pipeline",
    title: "Almeno Async Transaction Pipeline",
    subtitle: "High-Throughput Distributed Processing Pipeline",
    description:
      "Asynchronous transaction ingestion and processing system architected with FastAPI, Celery distributed worker tasks, Redis caching, and Gemini AI analysis.",
    highlights: [
      "Engineered decoupled background worker queues utilizing Celery and Redis to handle concurrent non-blocking transaction streams.",
      "Integrated Gemini AI for automated payload classification and anomaly detection across transaction payloads.",
      "Persisted transaction states in PostgreSQL with strict ACID guarantees and audit trails.",
    ],
    tech: ["Python", "FastAPI", "Celery", "Redis", "PostgreSQL", "Gemini AI", "Docker"],
    github: "https://github.com/Vansh7818/almeno-backend-internship",
    featured: true,
    category: "AI & Systems",
    badge: "Systems Architecture",
  },
  {
    id: "graphql-user-management",
    title: "Enterprise GraphQL & Spring Boot User Service",
    subtitle: "Declarative Identity & User Administration System",
    description:
      "Enterprise backend service built using Java and Spring Boot implementing GraphQL APIs for flexible, over-fetching-free identity and permission management.",
    highlights: [
      "Implemented schema-first GraphQL endpoints with Spring Boot and Java, drastically cutting client data payloads.",
      "Integrated Spring Data JPA with MySQL, implementing pagination, filtering, and optimized SQL queries.",
      "Structured with clean layered architecture (Controller, Service, Repository, DTO) and comprehensive unit tests.",
    ],
    tech: ["Java", "Spring Boot", "GraphQL", "Spring Data JPA", "MySQL", "Maven"],
    github: "https://github.com/Vansh7818/graphql-user-management-system",
    featured: false,
    category: "Backend",
  },
  {
    id: "weather-task-planner",
    title: "Weather-Smart Task Planner",
    subtitle: "Context-Aware Intelligent Activity Scheduler",
    description:
      "An intelligent scheduling application that combines live meteorological forecasts with automated task feasibility analysis and explainable AI reasoning.",
    highlights: [
      "Integrated OpenWeather REST APIs to retrieve multi-day environmental variables (precipitation, UV index, wind speed).",
      "Built deterministic rule-engine coupled with AI heuristics to recommend optimal time slots for outdoor and field activities.",
      "Crafted responsive dashboard with dark-mode visualization and real-time agenda rescheduling.",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API", "REST APIs"],
    github: "https://github.com/Vansh7818/Weather-Smart-Task-Planner",
    featured: false,
    category: "AI & Systems",
  },
  {
    id: "sales-challan-erp",
    title: "Sales Challan ERP System",
    subtitle: "Automated Commercial Dispatch & Invoicing Tool",
    description:
      "Enterprise workflow tool built for commercial sales teams to generate, track, and export compliant sales challans and dispatch records with precision.",
    highlights: [
      "Automated tax, line-item, and discount calculations with print-ready PDF invoice generation.",
      "Implemented responsive data grid for instant filtering, sorting, and customer record lookups.",
      "Deployed on Vercel with zero-configuration client-side data caching.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/Vansh7818/Sales_Challan",
    live: "https://sales-challan-erp.vercel.app",
    featured: false,
    category: "Full Stack",
  },
  {
    id: "java-auth-system",
    title: "Advanced Java Enterprise Auth System",
    subtitle: "Session Lifecycle & Security Service",
    description:
      "Server-side Java web application implementing secure session lifecycle management, login/logout validation, and database security patterns using Jakarta Servlets and JSP.",
    highlights: [
      "Implemented HTTP session management with cookie security flags and timeout policies.",
      "Utilized JDBC connection pooling and prepared statements to prevent SQL injection vulnerabilities.",
      "Followed MVC enterprise software architecture deployed on Apache Tomcat.",
    ],
    tech: ["Java", "Servlets", "JSP", "MySQL", "JDBC", "Apache Tomcat"],
    github: "https://github.com/Vansh7818/java-login-logout-system",
    featured: false,
    category: "Backend",
  },
];

export default projectsData;
