// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import CardNav from "@/components/ui/CardNav";
import Footer from "@/components/ui/Footer";
import ThemeRegistry from "@/components/ThemeRegistry";
import ScrollToTop from "@/components/ui/ScrollToTop";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', 
});

export const metadata: Metadata = {
  title: "Yunus Emre Kılıç | Full-Stack Software Engineer & AI Applications",
  description: "Portfolio of Yunus Emre Kılıç - Full-Stack Software Engineer specializing in TypeScript, Next.js, AI Agents, Automations, and Real-Time Systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={montserrat.className}>
        
        {/* MUI TEMA SARMALAYICISI */}
        <ThemeRegistry> 
          
          <CardNav
            items={[
              {
                label: 'Portfolio',
                bgColor: '#2e1065',
                textColor: '#e9d5ff',
                links: [
                  { label: 'Projects', href: '/projects', ariaLabel: 'Tüm projeleri listele' },
                ]
              },
              {
                label: 'About & Contact',
                bgColor: '#581c87',
                textColor: '#ffffff',
                links: [
                  { label: 'About Me & Experience', href: '/about', ariaLabel: 'Genel Bilgilerim ve CV' },
                  { label: 'Contact', href: '/contact', ariaLabel: 'İletişim Bilgileri' }
                ]
              }
            ]}
          />

          {/* İçerik */}
          <div className="relative z-10 pt-24">
            {children}
          </div>
          <ScrollToTop />
          <Footer />

        </ThemeRegistry>

      </body>
    </html>
  );
}