// src/types/index.ts

export interface Project {
    id: string;
    title: string;
    slug: string; // URL'de görünecek isim (orn: harika-proje)
    summary: string; // Karttaki kısa açıklama
    fullContent: string; // Detay sayfasındaki uzun yazı
    technologies: string[]; // ["React", "Node.js"]
    coverImage: string; // Resim yolu
    githubUrl?: string; // Opsiyonel
    liveUrl?: string; // Opsiyonel
    featured: boolean; // Ana sayfada çıksın mı?
}