export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  badge?: string;
  description: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
  details: string[];
}

export interface AchievementItem {
  title: string;
  category: string;
  metric: string;
  description: string;
  link?: string;
}

export interface CertificationItem {
  issuer: string;
  title: string;
  year?: string;
  badgeColor?: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: "KyronDataTech",
    role: "Software Development Intern",
    period: "Sep 2026 – Present",
    location: "Remote",
    type: "Internship",
    badge: "Current Role",
    description:
      "Engineering enterprise-level frontend architectures and financial workflow modules for next-generation simulated banking and payment systems.",
    bullets: [
      "Architecting modular React dashboards supporting discrete access roles across customer, merchant, and bank-staff views with stateful transaction monitoring.",
      "Engineering complete simulated UPI transfer lifecycles including MPIN verification, Virtual Payment Address (VPA) lookup, and real-time transaction ledger rendering.",
      "Bridging React interfaces with Java enterprise REST backends via JWT authentication, strict RBAC guards, and a Maker–Checker dual-authorization view for high-value transactions.",
    ],
    technologies: ["React.js", "Java REST APIs", "JWT", "RBAC", "Tailwind CSS", "Financial Workflows"],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Parul University",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Aug 2023 – May 2027",
    location: "Vadodara, Gujarat, India",
    grade: "CGPA: 7.66 / 10 (Through Sem 6)",
    details: [
      "Rigorous coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, and Operating Systems.",
      "Active participant in technical symposiums and competitive algorithmic problem-solving communities.",
    ],
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "100+ LeetCode DSA Problems in Java",
    category: "Algorithmic Problem Solving",
    metric: "100+ Solved",
    description:
      "Consistent practice across fundamental data structures: arrays, hashing, two pointers, binary search, trees, recursion, backtracking, and dynamic programming.",
    link: "https://leetcode.com/Vansh7818/",
  },
  {
    title: "Hackathon Competitor",
    category: "Rapid Prototyping & Collaboration",
    metric: "2 Hackathons",
    description:
      "Competed in the Wind Hackathon and ODOX Hackathon, delivering collaborative full-stack web solutions under 24-48 hour sprint constraints.",
  },
];

export const certifications: CertificationItem[] = [
  {
    issuer: "Amazon Web Services (AWS)",
    title: "Cloud Practitioner Essentials & Academy Cloud Foundations",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
  },
  {
    issuer: "IBM",
    title: "AI Fundamentals & Getting Started with AI",
    badgeColor: "border-blue-500/30 text-blue-400 bg-blue-500/10",
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Introduction to Modern AI",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
  },
];
