// src/types/index.ts

export interface Project {
    id: string;
    title: string;
    slug: string;
    summary: string;
    description?: string;
    longDescription?: string;
    fullContent: string;
    technologies: string[];
    tags: string[];
    image?: string;
    coverImage?: string;
    githubLink?: string;
    demoLink?: string;
    featured: boolean;
    role?: string;
    company?: string;
    period?: string;
}