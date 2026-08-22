// src/app/about/page.tsx
'use client';

import React from 'react';
import { Box, Typography, Button, Stack, Divider, CardMedia, Chip, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MotionBox = motion(Box) as any;

const experiences = [
  {
    title: "Software Developer",
    company: "Supsis AI",
    period: "04/2026 – Present",
    domain: "Web, AI, automation, customer communication & product development",
    links: [
      { label: "supsis.com", url: "https://supsis.com" },
      { label: "doc.supsis.ai", url: "https://doc.supsis.ai" }
    ],
    highlights: [
      {
        head: "Modern Web & UI/UX",
        desc: "Developed responsive interfaces across the Supsis AI ecosystem using Next.js, React, TypeScript, Tailwind CSS and Framer Motion/Motion; improved large-scale product and marketing pages."
      },
      {
        head: "Performance & SEO",
        desc: "Lighthouse-driven optimization raised measured Performance from 49 to 90 and SEO from 80 to 100, with other quality metrics reaching 92-100."
      },
      {
        head: "Documentation & Workflow",
        desc: "Maintained the MkDocs/Markdown-based documentation platform, managed production builds to HTML and Javascript, and used Bitbucket, structured commits and pull requests."
      },
      {
        head: "Growth & Automation",
        desc: "Produced SEO-oriented website/forum content and HTML email templates, supported bulk communication workflows, and used Google Analytics, Search Console, Opttab and Kaf Ai SEO."
      },
      {
        head: "QA & Integrations",
        desc: "Participated in internal testing and case validation; created knowledge resources and documented WhatsApp Business Cloud API, Coexistence and Meta integration processes."
      }
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "MkDocs", "WhatsApp Cloud API", "SEO (100/100)", "Bitbucket"]
  },
  {
    title: "Software Developer",
    company: "Staff Dog - Supsis Ai",
    period: "Live Platform",
    domain: "Live employee monitoring & productivity platform",
    links: [
      { label: "staff-dog.com", url: "https://staff-dog.com" }
    ],
    highlights: [
      {
        head: "Product Architecture",
        desc: "Contributed to a live employee monitoring system spanning a web platform, management/analytics dashboard and optimized desktop application."
      },
      {
        head: "Monitoring & Analytics",
        desc: "Worked on real-time monitoring, automatic time tracking, application/URL activity, screen capture, keyboard/mouse activity and detailed reporting."
      },
      {
        head: "Privacy & Operations",
        desc: "Refined analytics flows and supported secure, KVKK-oriented handling of employee monitoring data."
      }
    ],
    tags: ["Real-Time Monitoring", "Node.js", "TypeScript", "Dashboard UI", "KVKK Compliance", "Analytics"]
  },
  {
    title: "Partner & Co-Founder | Product & Full-Stack Developer",
    company: "Kanzigames",
    period: "Present",
    domain: "Browser-based multiplayer GameHub | 4-person founding team",
    links: [
      { label: "kanzigames.com", url: "https://kanzigames.com" }
    ],
    highlights: [
      {
        head: "Real-Time GameHub",
        desc: "Co-founded and developed a multiplayer platform with lobbies, games, voice/text interaction and competition using Node.js, JavaScript and Socket.IO."
      },
      {
        head: "Product & QA",
        desc: "Worked across game development, testing, scope definition, product direction and mobile-responsive implementation."
      },
      {
        head: "Internal Platform",
        desc: "Built team chat, task management, media storage and an AI-assisted scope-generation workflow; integrated Telegram Bot and PWA notifications."
      }
    ],
    tags: ["Node.js", "Socket.IO", "JavaScript", "PWA", "Telegram Bot", "WebSockets"]
  },
  {
    title: "Partner & Co-Founder | Full-Stack Developer",
    company: "Independent Startup Project",
    period: "01/2026 – Present",
    domain: "Custom Business Automation & Enterprise Software Solutions",
    links: [],
    highlights: [
      {
        head: "End-to-End Delivery",
        desc: "Architecting and deploying bespoke commercial web applications using Next.js, TypeScript, modern UI libraries, robust backend systems, and n8n automations."
      },
      {
        head: "AI Agents & Custom CRM",
        desc: "Developing company-knowledge and appointment agents alongside custom-built CRM architectures designed from scratch for clients, providing centralized operational monitoring and management."
      },
      {
        head: "Business Delivery",
        desc: "Translating client business requirements into high-performance, production-ready software solutions across the entire development lifecycle."
      }
    ],
    tags: ["Next.js", "TypeScript", "n8n", "AI Agents", "Custom CRM", "PostgreSQL", "REST APIs"]
  },
  {
    title: "Software Developer Intern (Web & AI)",
    company: "Conforcus Bilişim Danışmanlık",
    period: "09/2025 – 01/2026",
    domain: "Web & AI product development",
    links: [],
    highlights: [
      {
        head: "AI Support SaaS",
        desc: "Developed a Python/Ollama/vector-embedding customer-support platform with Next.js, reducing response-drafting time by approximately 80%."
      },
      {
        head: "Multi-Agent AI",
        desc: "Built a financial analysis platform using LangGraph, Python and OpenAI, orchestrating five AI agents."
      },
      {
        head: "Full-Stack Systems",
        desc: "Developed Next.js + Material UI dashboards, AI chatbot functionality and a TypeScript CMS with RBAC, PostgreSQL and Prisma."
      },
      {
        head: "Web Modernization",
        desc: "Rebuilt a legacy website with Next.js, TypeScript, SSR and modular architecture, achieving 100/100 SEO."
      }
    ],
    tags: ["Next.js", "Python", "LangGraph", "Ollama", "OpenAI", "Prisma ORM", "PostgreSQL", "Material UI", "SSR"]
  }
];

const academicProjects = [
  {
    title: "Disaster Relief Communication System (TÜBİTAK 2209-A)",
    stack: "React Native, Bluetooth Mesh, NLP",
    items: [
      "Decentralized Network: Developed an offline-first mobile application utilizing Bluetooth Mesh technology to establish a decentralized communication network, enabling data transmission without Internet or GSM.",
      "AI-Driven Coordination: Implemented an AI-driven NLP module to analyze and prioritize help requests, generated real-time density maps to coordinate rescue teams effectively, and created a web platform that enables support teams to visually monitor and manage the system through interactive heat maps."
    ],
    tags: ["React Native", "Bluetooth Mesh", "NLP", "AI", "Interactive Heat Maps", "TÜBİTAK 2209-A"]
  }
];

export default function AboutPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 2, md: 4 },
        pt: { xs: 4, md: 4 },
        pb: 10,
      }}
    >
      {/* --- ANA SİYAH KAPSÜL --- */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          width: '100%',
          maxWidth: '1350px',
          backgroundColor: '#050505',
          borderRadius: { xs: '30px', md: '60px' },
          border: '1px solid rgba(255, 255, 255, 0.05)',
          p: { xs: 3, md: 8 },
          position: 'relative',
          overflow: 'visible'
        }}
      >
        {/* Geri Dön Butonu */}
        <Box sx={{ position: 'relative', zIndex: 5, mb: 4 }}>
          <Button
            component={Link}
            href="/"
            startIcon={<ArrowBackIcon />}
            sx={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none', '&:hover': { color: '#fff' } }}
          >
            Back to Home Page
          </Button>
        </Box>

        {/* --- ÜST BÖLÜM: BİO + FOTOĞRAF --- */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: 'center',
            gap: { xs: 5, md: 8 },
            mb: 8,
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* SOL: METİN */}
          <Box sx={{ flex: 1.3 }}>
            <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', mb: 1, fontSize: { xs: '2.2rem', md: '3.3rem' } }}>
              Yunus Emre Kılıç
            </Typography>

            <Typography variant="h6" sx={{ color: '#a78bfa', mb: 3, fontWeight: 500, lineHeight: 1.4, fontSize: { xs: '1.05rem', md: '1.25rem' } }}>
              Full-Stack Software Engineer | AI Applications & Automation | Web Technologies
            </Typography>

            {/* İletişim & Lokasyon Quick Info */}
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ gap: 1.5, mb: 3, color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <LocationOnIcon sx={{ fontSize: 18, color: '#a78bfa' }} />
                <span>İstanbul, Türkiye</span>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <EmailIcon sx={{ fontSize: 18, color: '#a78bfa' }} />
                <span>yunus13e0@gmail.com</span>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <PhoneIcon sx={{ fontSize: 18, color: '#a78bfa' }} />
                <span>+90 535 465 1747</span>
              </Box>
            </Stack>

            <Box sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.05rem', lineHeight: 1.8 }}>
              <Typography paragraph sx={{ mb: 2 }}>
                Information Systems Engineer and software developer with hands-on experience building modern web products, AI-integrated applications, automation systems, and real-time platforms.
              </Typography>
              <Typography paragraph sx={{ mb: 2 }}>
                Strong focus on TypeScript/Next.js, backend integration, AI agents, databases, UI/UX, and practical business automation. Experienced across development, testing, technical documentation, customer-facing troubleshooting, and product delivery.
              </Typography>
            </Box>

            {/* Sosyal Medya & CV Butonları */}
            <Stack direction="row" spacing={1.5} sx={{ mt: 3 }} flexWrap="wrap" useFlexGap>
              <IconButton
                component="a"
                href="https://github.com/yunuse0"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/yunus-emre-k%C4%B1l%C4%B1%C3%A7-a6570a291/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#0077b5',
                  border: '1px solid rgba(255,255,255,0.1)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <Button
                component="a"
                href="/cv.pdf"
                download="Yunus_Emre_Kilic_CV.pdf"
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{
                  bgcolor: '#fff',
                  color: '#000',
                  borderRadius: 3,
                  px: 3,
                  py: 1,
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#e2e8f0' }
                }}
              >
                Download CV
              </Button>
            </Stack>
          </Box>

          {/* SAĞ: FOTOĞRAF */}
          <Box sx={{ flex: 0.7, position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                width: '130%', height: '130%',
                background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, rgba(0,0,0,0) 60%)',
                zIndex: 0
              }}
            />
            <Box
              sx={{
                position: 'relative', zIndex: 2, width: { xs: '240px', md: '280px' }, height: { xs: '300px', md: '360px' },
                borderRadius: '30px', overflow: 'hidden', border: '1px solid rgba(167, 139, 250, 0.3)',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.02)' }
              }}
            >
              <CardMedia component="img" image="/images/ppolcak.jpg" alt="Yunus Emre Kılıç" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          </Box>
        </Box>

        {/* --- EĞİTİM & DİLLER KUTULARI --- */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 8 }}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              bgcolor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2
            }}
          >
            <SchoolIcon sx={{ color: '#a78bfa', fontSize: 32, mt: 0.5 }} />
            <Box>
              <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff' }}>
                Education
              </Typography>
              <Typography variant="body1" sx={{ color: '#e9d5ff', fontWeight: 600, mt: 0.5 }}>
                B.Sc. Information Systems Engineering
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                Kocaeli University | Graduated
              </Typography>
            </Box>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: 4,
              bgcolor: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: 2
            }}
          >
            <TranslateIcon sx={{ color: '#a78bfa', fontSize: 32, mt: 0.5 }} />
            <Box>
              <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff' }}>
                Languages
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                <Chip label="Turkish - Native" size="small" sx={{ bgcolor: 'rgba(167, 139, 250, 0.15)', color: '#e9d5ff', border: '1px solid rgba(167, 139, 250, 0.3)' }} />
                <Chip label="English - B1" size="small" sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', color: '#fff', border: '1px solid rgba(255, 255, 255, 0.1)' }} />
              </Stack>
            </Box>
          </Paper>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 8 }} />

        {/* --- PROFESYONEL DENEYİM BÖLÜMÜ --- */}
        <Box sx={{ mb: 10 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4 }}>
            <WorkIcon sx={{ color: '#a78bfa', fontSize: 28 }} />
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff', fontSize: { xs: '1.75rem', md: '2.4rem' } }}>
              Professional Experience
            </Typography>
          </Box>

          <Stack spacing={4}>
            {experiences.map((exp, idx) => (
              <Box
                key={idx}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  bgcolor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.04)',
                    borderColor: 'rgba(167, 139, 250, 0.25)'
                  }
                }}
              >
                {/* Başlık ve Şirket */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, gap: 1, mb: 1.5 }}>
                  <Box>
                    <Typography variant="h5" fontWeight="bold" sx={{ color: '#fff', fontSize: { xs: '1.25rem', md: '1.45rem' } }}>
                      {exp.title} <span style={{ color: '#a78bfa' }}>@ {exp.company}</span>
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block', mt: 0.5, fontStyle: 'italic' }}>
                      {exp.domain}
                    </Typography>
                  </Box>
                  <Chip label={exp.period} sx={{ bgcolor: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa', border: '1px solid rgba(167, 139, 250, 0.2)', fontWeight: 600 }} />
                </Box>

                {/* Linkler */}
                {exp.links.length > 0 && (
                  <Stack direction="row" spacing={2} sx={{ mb: 2.5 }}>
                    {exp.links.map((link, lIdx) => (
                      <Button
                        key={lIdx}
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
                        sx={{ color: '#c4b5fd', p: 0, textTransform: 'none', fontSize: '0.85rem', '&:hover': { color: '#fff' } }}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </Stack>
                )}

                {/* Maddeler */}
                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  {exp.highlights.map((item, hIdx) => (
                    <Box key={hIdx} sx={{ display: 'flex', gap: 1.5 }}>
                      <Box sx={{ color: '#a78bfa', mt: 0.5 }}>•</Box>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                        <strong style={{ color: '#fff' }}>{item.head}:</strong> {item.desc}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                {/* Etiketler */}
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 0.8 }}>
                  {exp.tags.map(tag => (
                    <Chip key={tag} label={tag} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.08)', fontSize: '0.72rem' }} />
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* --- AKADEMİK PROJELER --- */}
        <Box sx={{ mb: 10 }}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff', mb: 4, fontSize: { xs: '1.75rem', md: '2.4rem' } }}>
            Academic Projects
          </Typography>

          <Stack spacing={3}>
            {academicProjects.map((proj, pIdx) => (
              <Box
                key={pIdx}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 4,
                  bgcolor: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <Typography variant="h5" fontWeight="bold" sx={{ color: '#fff', mb: 1, fontSize: { xs: '1.2rem', md: '1.35rem' } }}>
                  {proj.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#a78bfa', mb: 2, fontWeight: 500 }}>
                  {proj.stack}
                </Typography>
                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  {proj.items.map((it, iIdx) => (
                    <Box key={iIdx} sx={{ display: 'flex', gap: 1.5 }}>
                      <Box sx={{ color: '#a78bfa', mt: 0.5 }}>•</Box>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                        {it}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 0.8 }}>
                  {proj.tags.map(tag => (
                    <Chip key={tag} label={tag} size="small" sx={{ bgcolor: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa', border: '1px solid rgba(167, 139, 250, 0.15)', fontSize: '0.72rem' }} />
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 8 }} />

        {/* --- ALT BÖLÜM: CANLI CV --- */}
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" mb={4} spacing={2}>
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff' }}>
              Live Resume
            </Typography>
            <Button
              component="a"
              href="/cv.pdf"
              download="Yunus_Emre_Kilic_CV.pdf"
              variant="contained"
              startIcon={<DownloadIcon />}
              sx={{ bgcolor: '#fff', color: '#000', px: 4, py: 1.5, borderRadius: 3, fontWeight: 'bold', textTransform: 'none', '&:hover': { bgcolor: '#e2e8f0' } }}
            >
              Download CV (PDF)
            </Button>
          </Stack>

          {/* Masaüstü: Iframe | Mobil: İndirme Kartı */}
          <Box
            sx={{
              width: '100%',
              maxWidth: '900px',
              mx: 'auto',
              borderRadius: 4,
              overflow: 'hidden',
              border: '1px solid rgba(248, 248, 248, 0.15)',
              bgcolor: 'rgba(255,255,255,0.02)',
              position: 'relative',
              padding: 2
            }}
          >
            {/* Masaüstü Önizleme */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, height: '900px' }}>
              <iframe
                src="/cv.pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="CV Preview"
              />
            </Box>

            {/* Mobil Bilgilendirme */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', alignItems: 'center', py: 8, px: 4, textAlign: 'center', gap: 2 }}>
              <PictureAsPdfIcon sx={{ fontSize: 60, color: '#a78bfa' }} />
              <Typography variant="h6" color="white">Özgeçmiş Hazır</Typography>
              <Typography variant="body2" color="rgba(255,255,255,0.5)">
                Mobil cihazlarda en iyi deneyim için lütfen PDF dosyasını indirerek inceleyin.
              </Typography>
              <Button
                component="a"
                href="/cv.pdf"
                download="Yunus_Emre_Kilic_CV.pdf"
                variant="outlined"
                startIcon={<DownloadIcon />}
                sx={{ mt: 2, color: '#fff', borderColor: 'rgba(255,255,255,0.3)', borderRadius: 3 }}
              >
                PDF İndir
              </Button>
            </Box>
          </Box>
        </Box>

      </MotionBox>
    </Box>
  );
}