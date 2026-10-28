export interface SkillGroup {
  title: string;
  category: string;
  icon: string;
  description: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export const skillsData: SkillGroup[] = [
  {
    title: "Programming Languages",
    category: "Languages",
    icon: "Code2",
    description: "Strong foundation in typed and scripting languages for production systems.",
    skills: [
      { name: "Java", highlight: true, level: "Core / Advanced" },
      { name: "JavaScript (ES6+)", highlight: true, level: "Advanced" },
      { name: "TypeScript", highlight: true, level: "Proficient" },
      { name: "Python", highlight: false, level: "Intermediate" },
      { name: "SQL", highlight: true, level: "Relational Design" },
    ],
  },
  {
    title: "Frontend Engineering",
    category: "Frontend",
    icon: "Monitor",
    description: "Crafting fast, responsive, accessible, and animated web interfaces.",
    skills: [
      { name: "React.js (v19)", highlight: true, level: "Production" },
      { name: "Next.js 14/15/16 (App Router)", highlight: true, level: "Production" },
      { name: "Tailwind CSS", highlight: true, level: "Mastery" },
      { name: "Framer Motion", highlight: false, level: "UI Animation" },
      { name: "HTML5 & Modern CSS3", highlight: false, level: "Semantic" },
      { name: "Responsive & Mobile-First", highlight: false, level: "Universal" },
    ],
  },
  {
    title: "Backend & Systems",
    category: "Backend",
    icon: "Server",
    description: "Architecting microservices, RESTful APIs, and secure server-side workflows.",
    skills: [
      { name: "Node.js & Express.js", highlight: true, level: "REST APIs" },
      { name: "Java Servlets & JSP", highlight: true, level: "Enterprise" },
      { name: "Spring Boot & GraphQL", highlight: true, level: "Services" },
      { name: "FastAPI & Celery", highlight: false, level: "Async Queues" },
      { name: "RESTful API Architecture", highlight: true, level: "Design" },
      { name: "JDBC & Connection Pooling", highlight: false, level: "Native DB" },
    ],
  },
  {
    title: "Databases & ORMs",
    category: "Databases",
    icon: "Database",
    description: "Relational modeling, document storage, and schema management.",
    skills: [
      { name: "PostgreSQL", highlight: true, level: "Relational" },
      { name: "MongoDB", highlight: true, level: "Document Store" },
      { name: "MySQL", highlight: true, level: "Relational" },
      { name: "SQLite", highlight: false, level: "Embedded" },
      { name: "Prisma ORM", highlight: true, level: "Type-Safe" },
      { name: "Sequelize ORM", highlight: false, level: "Node ORM" },
      { name: "Redis", highlight: false, level: "Caching & Queues" },
    ],
  },
  {
    title: "Authentication & Security",
    category: "Security",
    icon: "ShieldCheck",
    description: "Implementing industry security practices, data isolation, and RBAC.",
    skills: [
      { name: "JWT (JSON Web Tokens)", highlight: true, level: "Stateless Auth" },
      { name: "Clerk Authentication", highlight: true, level: "Multi-Tenant" },
      { name: "Role-Based Access (RBAC)", highlight: true, level: "Authorization" },
      { name: "bcrypt Hashing", highlight: false, level: "Crypto" },
      { name: "Session Lifecycle & Cookies", highlight: false, level: "Stateful" },
      { name: "Rate Limiting & Helmet", highlight: false, level: "Protection" },
    ],
  },
  {
    title: "Developer Tools & Cloud",
    category: "Tools",
    icon: "Wrench",
    description: "Modern deployment workflows, API testing, and version control.",
    skills: [
      { name: "Git & GitHub", highlight: true, level: "Version Control" },
      { name: "Postman API Testing", highlight: true, level: "Testing" },
      { name: "Vercel & Render CI/CD", highlight: true, level: "Cloud Hosting" },
      { name: "Inngest Event Jobs", highlight: false, level: "Background Work" },
      { name: "VS Code & IntelliJ IDEA", highlight: false, level: "IDE" },
      { name: "AWS Cloud Essentials", highlight: false, level: "Cloud" },
    ],
  },
  {
    title: "Core Computer Science",
    category: "CoreCS",
    icon: "BookOpen",
    description: "Rigorous algorithmic thinking, systems knowledge, and object-oriented design.",
    skills: [
      { name: "DSA (100+ LeetCode Java)", highlight: true, level: "Problem Solving" },
      { name: "Object-Oriented Programming (OOP)", highlight: true, level: "Architecture" },
      { name: "Database Management (DBMS)", highlight: true, level: "ACID & Indexing" },
      { name: "Operating Systems (OS)", highlight: false, level: "Concurrency" },
      { name: "Computer Networks (CN)", highlight: false, level: "HTTP/TCP" },
    ],
  },
];

export default skillsData;
