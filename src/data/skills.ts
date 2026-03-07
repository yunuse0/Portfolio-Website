// src/data/skills.ts
import {
    SiNextdotjs, SiReact, SiTypescript, SiMui, SiTailwindcss,
    SiNodedotjs, SiSharp, SiDotnet, SiPython, SiPostgresql, SiMysql, SiPrisma,
    SiDocker, SiKubernetes, SiAmazon, SiLinux, SiGit,
    SiTensorflow, SiPytorch, SiScikitlearn,
    SiFirebase,
    SiExpress
} from "react-icons/si";
import { BiBrain } from "react-icons/bi"; // Genel ML ikonu için

export const skillCategories = [
    {
        title: "Frontend Development",
        description: "Modern and reactive user interfaces.",
        skills: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Material UI", icon: SiMui },
        ]
    },
    {
        title: "Backend & Database",
        description: "Scalable server architecture and data management.",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "C#", icon: SiSharp },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MySQL", icon: SiMysql },
            { name: "Prisma ORM", icon: SiPrisma },
            { name: "Firebase", icon: SiFirebase}
        ]
    },
    {
        title: "AI & Machine Learning",
        description: "Artifical intelligence models and data analyzes.",
        skills: [
            { name: "Python", icon: SiPython },
            { name: "PyTorch", icon: SiPytorch },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "Machine Learning", icon: BiBrain },
        ]
    },
    {
        title: "DevOps & Tools",
        description: "CI/CD processes, containerization ve cloud.",
        skills: [
            { name: "Docker", icon: SiDocker },
            { name: "Git & GitHub", icon: SiGit },
        ]
    }
];