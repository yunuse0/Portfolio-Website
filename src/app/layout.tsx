// src/app/layout.tsx
import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Inter'i sildim, gerek yoksa
import "./globals.css";
import CardNav from "@/components/ui/CardNav";
import Footer from "@/components/ui/Footer";
import ThemeRegistry from "@/components/ThemeRegistry"; // <-- YENİ EKLEDİĞİMİZ DOSYA
import ScrollToTop from "@/components/ui/ScrollToTop";


// Bu font ayarı Tailwind ve düz HTML elementleri için kalabilir
const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', 
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Modern Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={montserrat.className}>
        
        {/* MUI TEMA SARMALAYICISI BAŞLIYOR */}
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
                label: 'About - Contact',
                bgColor: '#581c87',
                textColor: '#ffffff',
                links: [
                  { label: 'About Me - CV', href: '/about', ariaLabel: 'Genel Bilgilerim ve CV' },
                  { label: 'Contact', href: '/contact', ariaLabel: 'İletişim Bilgilerim' }
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
        {/* MUI TEMA SARMALAYICISI BİTTİ */}

      </body>
    </html>
  );
}