// src/data/menu.ts
import { CardNavItem } from "@/components/ui/CardNav";

export const navItems: CardNavItem[] = [
    {
        label: "Projeler",
        bgColor: "#3b82f6", // Mavi
        textColor: "#ffffff",
        links: [
            { label: "Tüm Projeler", href: "/projects", ariaLabel: "Projeler Sayfası" },
            { label: "React / Next.js", href: "/projects?tag=react", ariaLabel: "React Projeleri" },
            { label: "Mobil Uygulamalar", href: "/projects?tag=mobile", ariaLabel: "Mobil Projeler" },
        ],
    },
    {
        label: "Hakkımda & Blog",
        bgColor: "#10b981", // Yeşil
        textColor: "#ffffff",
        links: [
            { label: "Biyografi", href: "/about", ariaLabel: "Hakkımda" },
            { label: "Blog Yazıları", href: "/blog", ariaLabel: "Blog" },
            { label: "CV İndir", href: "/cv.pdf", ariaLabel: "CV" },
        ],
    },
    {
        label: "İletişim",
        bgColor: "#f59e0b", // Turuncu
        textColor: "#000000",
        links: [
            { label: "E-Posta Gönder", href: "mailto:email@example.com", ariaLabel: "Email" },
            { label: "LinkedIn", href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { label: "GitHub", href: "https://github.com", ariaLabel: "GitHub" },
        ],
    },
];