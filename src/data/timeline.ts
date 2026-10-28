export interface TimelineItem {
  year: string;
  role: string;
  organization: string;
  type: "experience" | "education" | "milestone";
  description: string;
  tags: string[];
}

export const timelineData: TimelineItem[] = [
  {
    year: "Sep 2026 — Present",
    role: "Software Development Intern",
    organization: "KyronDataTech (Remote)",
    type: "experience",
    description:
      "Developing production React dashboards for a simulated banking and UPI platform. Implementing MPIN flows, Maker-Checker authorization, and connecting to Java REST backends with JWT authentication.",
    tags: ["React", "Java REST APIs", "JWT", "UPI Flows", "RBAC"],
  },
  {
    year: "2024 — 2026",
    role: "Full-Stack System Engineering",
    organization: "Independent Projects & Open Source",
    type: "milestone",
    description:
      "Engineered high-impact applications: Teerthankar AI Platform (Next.js 14, Gemini AI, Clerk), TDC Matchmaker Dashboard MVP, Almeno Distributed Async Pipeline (FastAPI, Celery, Redis), and Full-Stack E-Commerce.",
    tags: ["Next.js 14", "PostgreSQL", "Prisma", "FastAPI", "Spring Boot"],
  },
  {
    year: "2023 — Present",
    role: "DSA & Core Problem Solving",
    organization: "LeetCode & Competitive Coding",
    type: "milestone",
    description:
      "Solved 100+ problems in Java spanning Arrays, Hashing, Two Pointers, Trees, Backtracking, and Dynamic Programming. Strengthened system fundamentals for SDE technical rounds.",
    tags: ["Java", "DSA", "LeetCode", "Algorithms"],
  },
  {
    year: "Aug 2023 — May 2027",
    role: "B.Tech in Computer Science & Engineering",
    organization: "Parul University (Vadodara, Gujarat)",
    type: "education",
    description:
      "Maintaining a strong 7.66/10 CGPA through Semester 6. Rigorous grounding in OOP, DBMS, OS, Computer Networks, and Enterprise Java software engineering.",
    tags: ["Parul University", "CGPA 7.66", "DBMS", "OOP", "Computer Networks"],
  },
];

export default timelineData;
