// src/data/skills.ts
import {
    SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiPython, SiSharp,
    SiTailwindcss, SiMui, SiFramer, SiNodedotjs, SiExpress, SiFastapi,
    SiPostgresql, SiMysql, SiPrisma, SiFirebase,
    SiOpenai, SiTensorflow, SiKeras, SiLangchain,
    SiN8N, SiTelegram, SiSocketdotio, SiPwa,
    SiDocker, SiGit, SiGithub, SiBitbucket,
    SiLighthouse, SiGoogleanalytics, SiWhatsapp, SiMeta
} from "react-icons/si";
import { BiBrain, BiNetworkChart, BiCodeAlt, BiSearchAlt } from "react-icons/bi";
import { TbApi, TbBrandSpeedtest } from "react-icons/tb";
import { FiCpu, FiLayers, FiDatabase, FiSettings, FiCheckCircle } from "react-icons/fi";

export const skillCategories = [
    {
        title: "Programming Languages",
        description: "Core languages used across backend, frontend, and AI pipelines.",
        skills: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "JavaScript", icon: SiJavascript },
            { name: "Python", icon: SiPython },
            { name: "C#", icon: SiSharp },
        ]
    },
    {
        title: "Frontend & Mobile",
        description: "High-performance, responsive UI/UX and cross-platform mobile apps.",
        skills: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "React", icon: SiReact },
            { name: "React Native", icon: SiReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Material UI", icon: SiMui },
            { name: "Framer Motion", icon: SiFramer },
            { name: "Responsive UI/UX", icon: FiLayers },
            { name: "i18n", icon: BiCodeAlt }
        ]
    },
    {
        title: "Backend & Architecture",
        description: "Scalable server architectures, high-throughput REST APIs and services.",
        skills: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "FastAPI", icon: SiFastapi },
            { name: "REST APIs", icon: TbApi },
            { name: "Backend Architecture", icon: FiCpu },
            { name: "API Integrations", icon: BiNetworkChart },
        ]
    },
    {
        title: "Databases & ORMs",
        description: "Relational, cloud databases and schema orchestration.",
        skills: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MySQL", icon: SiMysql },
            { name: "Prisma ORM", icon: SiPrisma },
            { name: "Firebase", icon: SiFirebase },
        ]
    },
    {
        title: "AI / ML & Multi-Agent Systems",
        description: "Autonomous AI agents, LLM integrations, RAG systems, and neural networks.",
        skills: [
            { name: "AI Agents", icon: BiBrain },
            { name: "LangGraph", icon: SiLangchain },
            { name: "OpenAI", icon: SiOpenai },
            { name: "RAG & Vector Embeddings", icon: BiNetworkChart },
            { name: "Ollama / Local SLMs", icon: FiCpu },
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "Keras", icon: SiKeras },
        ]
    },
    {
        title: "Automation & Workflows",
        description: "End-to-end business automations, chatbots, and CRM integrations.",
        skills: [
            { name: "n8n", icon: SiN8N },
            { name: "Chatbot Workflows", icon: BiBrain },
            { name: "Bulk Messaging / Email", icon: TbApi },
            { name: "Telegram Bot", icon: SiTelegram },
        ]
    },
    {
        title: "Real-Time & Modern Web",
        description: "Real-time bidirectional communication, PWAs, and SSR pipelines.",
        skills: [
            { name: "Socket.IO", icon: SiSocketdotio },
            { name: "WebSocket", icon: BiNetworkChart },
            { name: "PWA", icon: SiPwa },
            { name: "SSR & App Router", icon: SiNextdotjs },
        ]
    },
    {
        title: "DevOps & Collaboration",
        description: "Containerization, version control, and continuous integration.",
        skills: [
            { name: "Docker", icon: SiDocker },
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Bitbucket", icon: SiBitbucket },
            { name: "CI/CD", icon: FiSettings },
        ]
    },
    {
        title: "Web Quality, SEO & Testing",
        description: "Optimized performance, technical SEO, and automated validation.",
        skills: [
            { name: "Lighthouse (90-100)", icon: SiLighthouse },
            { name: "Technical SEO (100/100)", icon: BiSearchAlt },
            { name: "Google Analytics", icon: SiGoogleanalytics },
            { name: "Search Console", icon: TbBrandSpeedtest },
            { name: "QA & Case Validation", icon: FiCheckCircle },
        ]
    },
    {
        title: "Third-Party & Business Integrations",
        description: "Official Meta APIs, WhatsApp Cloud API, and e-commerce bridges.",
        skills: [
            { name: "WhatsApp Business Cloud API", icon: SiWhatsapp },
            { name: "Coexistence & Meta Processes", icon: SiMeta },
            { name: "E-Commerce / Custom APIs", icon: TbApi },
        ]
    }
];