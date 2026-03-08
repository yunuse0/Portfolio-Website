// src/data/projects.ts

export interface Project {
    id: string; // <-- DÜZELTME: Burası artık number değil string
    title: string;
    slug: string;
    description: string;
    summary: string;
    longDescription: string;
    fullContent: string;
    image: string;
    coverImage: string;
    tags: string[];
    technologies: string[];
    featured: boolean;
    githubLink?: string;
    demoLink?: string;
}

export const projects: Project[] = [
    {
        id: "1", // <-- DÜZELTME: Tırnak içine aldık
        title: "AI Powered Support Ticket System",
        slug: "support-ticket",
        description: "AI-powered SaaS platform using Python, Ollama, and Vector Embeddings to automate customer support emails.",
        summary: "Engineered an AI-powered SaaS platform using Python, Ollama, and Vector Embeddings to automate customer support emails.",
        longDescription: "Support Ticket AI is an intelligent, privacy-focused, on-premise customer support automation system. It autonomously analyzes incoming emails, classifies them using a hybrid approach, retrieves relevant past solutions (RAG), and generates professional responses using a local Small Language Model (SLM).Now features a modern, responsive Next.js frontend dashboard for managing tickets, visualizing AI reasoning, and reviewing      drafts before sending. Unlike wrapper-based AI tools, this project utilizes LangGraph for stateful orchestration with a fully-typed state machine, ensuring robust error handling and hallucination control.",
        fullContent: "Support Ticket AI is an intelligent, privacy-focused, on-premise customer support automation system. It autonomously analyzes incoming emails, classifies them using a hybrid approach, retrieves relevant past solutions (RAG), and generates professional responses using a local Small Language Model (SLM).Now features a modern, responsive Next.js frontend dashboard for managing tickets, visualizing AI reasoning, and reviewing      drafts before sending. Unlike wrapper-based AI tools, this project utilizes LangGraph for stateful orchestration with a fully-typed state machine, ensuring robust error handling and hallucination control.",
        image: "/images/support.jpg",
        coverImage: "/images/support.jpg",
        tags: ["Python","Ollama", "Vector Embeddings", "Next.js", "TypeScript", "AI" ],
        technologies: ["Python", "Ollama", "Vector Embeddings", "Next.js", "TypeScript",],
        featured: true,
        githubLink: "https://github.com/berkea8/AI-Powered-Ticketing-System",
    },
    {
        id: "2", // <-- DÜZELTME: Tırnak içine aldık
        title: "Multi-Agent Financial Analysis Platform",
        slug: "chimera-finans",
        description: "Orchestrating 5 autonomous AI agents for real-time parallel stock data analysis, trend prediction, and news retrieval via OpenAI.",
        summary: "Orchestrating 5 autonomous AI agents for real-time parallel stock data analysis, trend prediction, and news retrieval via OpenAI.",
        longDescription:"Built a sophisticated investment tool using LangGraph and Python, orchestrating 5 autonomous AI agents for real-time parallel stock data analysis, trend prediction, and news retrieval via OpenAI. Developed a feature-rich Next.js and Material UI (MUI) dashboard featuring interactive stock charts, an AI investment chatbot with SQLite authentication to manage secure user sessions locally.",
        fullContent:"Built a sophisticated investment tool using LangGraph and Python, orchestrating 5 autonomous AI agents for real-time parallel stock data analysis, trend prediction, and news retrieval via OpenAI. Developed a feature-rich Next.js and Material UI (MUI) dashboard featuring interactive stock charts, an AI investment chatbot with SQLite authentication to manage secure user sessions locally.",
        image: "/images/chimera.jpg",
        coverImage: "/images/chimera.jpg",
        tags: ["LangGraph", "Python", "Next.js", "TypeScript"],
        technologies: ["LangGraph", "Python", "OpenAI", "Next.js", "TypeScript"],
        featured: true,
        githubLink: "https://github.com/yunuse0/Chimera-Finance",
    },
    {
        id: "3", // <-- DÜZELTME: Tırnak içine aldık
        title: "X-Ray Defect Detection using Transformer-Based Vision Models",
        slug: "x-ray",
        description: "End-to-end computer vision pipeline by scraping and preprocessing medical X-ray images for binary classification (fractured vs. healthy).",
        summary: "End-to-end computer vision pipeline by scraping and preprocessing medical X-rayimages for binary classification (fractured vs. healthy).",
        longDescription: "Designed an end-to-end computer vision pipeline by scraping and preprocessing medical X-ray images for binary classification (fractured vs. healthy). Trained and benchmarked multiple transformer-based and CNN architectures (ViT, BEiT, Swin, DeiT, ConvNeXt) in a GPU-accelerated environment. Evaluated model performance through quantitative metrics and visualized training results to support comparative analysis.",
        fullContent: "Designed an end-to-end computer vision pipeline by scraping and preprocessing medical X-ray images for binary classification (fractured vs. healthy). Trained and benchmarked multiple transformer-based and CNN architectures (ViT, BEiT, Swin, DeiT, ConvNeXt) in a GPU-accelerated environment. Evaluated model performance through quantitative metrics and visualized training results to support comparative analysis.",
        image: "/images/ai.jpg",
        coverImage: "/images/ai.jpg",
        tags: ["Python", "TensorFlow", "Matplotlib", "Transformers", "AI"],
        technologies: ["Python", "TensorFlow", "Matplotlib", "Transformers", "Google Colab"],
        featured: false,
        githubLink: "https://github.com/yunuse0/Artificial-intelligence-project",
    },
    {
        id: "5", // <-- DÜZELTME: Tırnak içine aldık
        title: "Disaster Relief Communication System (TÜBİTAK 2209-A) ",
        slug: "disaster-communication",
        description: "Offline-first mobile application that utilizes Bluetooth Mesh technology to establish a decentralized communication network",
        summary: "Offline-first mobile application that utilizes Bluetooth Mesh technology to establish a decentralized communication network",
        longDescription: "Developing an offline-first mobile application that utilizes Bluetooth Mesh technology to establish a decentralized communication network, enabling data transmission without Internet or GSM. Implementing an AI-driven NLP module to analyze and prioritize help requests, generating realtime density maps to coordinate rescue teams effectively.",
        fullContent: "Developing an offline-first mobile application that utilizes Bluetooth Mesh technology to establish a decentralized communication network, enabling data transmission without Internet or GSM. Implementing an AI-driven NLP module to analyze and prioritize help requests, generating realtime density maps to coordinate rescue teams effectively.",
        image: "/images/mobil.jpg",
        coverImage: "/images/mobil.jpg",
        tags: ["React Native", "Bluetooth Mesh", "NLP", "AI"],
        technologies: ["React Native", "Bluetooth Mesh", "NLP"],
        featured: false,
        githubLink: "https://github.com/yunuse0/AfetIletisimApp",
    },
    {
        id: "4", // <-- DÜZELTME: Tırnak içine aldık
        title: "Re-build the Legacy Web Site for T.Y.A.Y.S.D",
        slug: "legacy-website",
        description: "Modernized the official digital presence of TYAYSD",
        summary: "Modernized the official digital presence of TYAYSD",
        longDescription: " Modernized the official digital presence of TYAYSD (Türkiye Yarış Atı Yetiştiricileri ve Sahipleri Derneği) by re-building their legacy website into a high-performance Next.js and TypeScript application, utilizing a modular and component-based architecture. Implemented Server-Side Rendering (SSR) to ensure indexability, achieving a perfect 100/100 SEO score and complying with web best practices. ",
        fullContent: " Modernized the official digital presence of TYAYSD (Türkiye Yarış Atı Yetiştiricileri ve Sahipleri Derneği) by re-building their legacy website into a high-performance Next.js and TypeScript application, utilizing a modular and component-based architecture. Implemented Server-Side Rendering (SSR) to ensure indexability, achieving a perfect 100/100 SEO score and complying with web best practices. ",
        image: "/images/web.jpg",
        coverImage: "/images/web.jpg",
        tags: ["Next.js", "Material UI", "TypeScript",],
        technologies: ["Next.js", "Material UI", "TypeScript",],
        featured: false,
    },
    {
        id: "6", // <-- DÜZELTME: Tırnak içine aldık
        title: "Comprehensive Admin Dashboard",
        slug: "admin-dashboard",
        description: "Developed an Admin Dashboard for the new web site of T.Y.A.Y.S.D",
        summary: "Developed an Admin Dashboard for the new web site of T.Y.A.Y.S.D",
        longDescription: " Developed a comprehensive Admin Dashboard (CMS) using Next.js, Material UI and TypeScript, enabling dynamic management of all website content. Implemented Role-Based Access Control (RBAC) and engineered secure data operations using PostgreSQL and Prisma ORM.",
        fullContent: " Developed a comprehensive Admin Dashboard (CMS) using Next.js, Material UI and TypeScript, enabling dynamic management of all website content. Implemented Role-Based Access Control (RBAC) and engineered secure data operations using PostgreSQL and Prisma ORM.",
        image: "/images/admin.jpg",
        coverImage: "/images/admin.jpg",
        tags: ["Next.js", "Node.js", "Material UI", "TypeScript", "PostgreSql", "Prisma ORM"],
        technologies: ["Next.js", "Node.js", "Material UI", "TypeScript", "PostgreSql", "Prisma ORM"],
        featured: false,
        githubLink: "https://github.com/taylnAydin/admin_panel_backend",
    },
];