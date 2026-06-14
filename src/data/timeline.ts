export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tags: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: "2024 — Present",
    title: "Full-Stack Development & Internship Preparation",
    description:
      "Actively building production-grade full-stack applications using React, Next.js, Node.js, and MongoDB. Focused on clean architecture, scalable systems, and real-world deployment on Vercel.",
    tags: ["Next.js", "React", "Node.js", "Vercel"],
  },
  {
    year: "2024",
    title: "Java Backend & Spring Boot Engineering",
    description:
      "Built enterprise-level Java applications using Spring Boot, Servlets, and JSP. Developed a full Movie Review platform with Java REST APIs and MongoDB, deepening backend engineering foundations.",
    tags: ["Java", "Spring Boot", "REST APIs", "MongoDB"],
  },
  {
    year: "2023 — 2024",
    title: "DSA Mastery & Algorithmic Problem Solving",
    description:
      "Dedicated practice on LeetCode and competitive platforms solving Data Structures & Algorithms problems in Java. Focused on arrays, trees, graphs, dynamic programming, and interview-level problem sets.",
    tags: ["Java", "DSA", "LeetCode", "Algorithms"],
  },
  {
    year: "2023",
    title: "Frontend Engineering & UI Craft",
    description:
      "Deepened frontend skills by building responsive, animated interfaces using React, Tailwind CSS, and Framer Motion. Developed Destinofy — a premium AI travel UI with production-quality design.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "UI/UX"],
  },
  {
    year: "2022 — 2023",
    title: "B.Tech CSE Foundations & First Projects",
    description:
      "Began B.Tech in Computer Science Engineering. Laid strong foundations in C, Java, OOP, DBMS, and OS. Built first full-stack applications including an E-Commerce platform and Authentication system.",
    tags: ["Java", "C", "OOP", "DBMS"],
  },
];

export default timelineData;
