export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    icon: "Code2",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "Kotlin"],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "Spring Boot", "Servlets", "JSP", "REST APIs"],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["MySQL", "MongoDB", "JDBC"],
  },
  {
    category: "Tools & DevOps",
    icon: "Wrench",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Vercel", "Postman"],
  },
  {
    category: "Core CS",
    icon: "BookOpen",
    skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "OS", "Computer Networks"],
  },
];

export default skillsData;
