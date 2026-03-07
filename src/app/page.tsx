// src/app/page.tsx
'use client';

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Chip,
  Stack,
  IconButton,
  CardMedia
} from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import SkillsSection from '@/components/SkillsSection';

// Sadece en dıştaki kapsülü anime etmek için tek bir MotionBox bırakıyoruz.
// Diğer tüm MotionTypography ve stagger'ları sildik (Performans için).
const MotionBox = motion(Box) as any;

const featuredProjects = [
  {
    id: 1,
    title: "AI Powered Support Ticket System",
    desc: "AI-powered SaaS platform using Python, Ollama, and Vector Embeddings to automate customer support emails.",
    image: "/images/z-support.png",
    tags: ["Python", "Ollama", "Vector Embeddings"],
    link: "/projects/support-ticket"
  },
  {
    id: 2,
    title: "Disaster Relief Communication System (TÜBİTAK 2209-A)",
    desc: "Offline-first mobile application that utilizes Bluetooth Mesh technology to establish a decentralized communication network.",
    image: "/images/z-tübitak.png",
    tags: ["React Native", "Bluetooth Mesh", "NLP"],
    link: "/projects/disaster-communication"
  },
  {
    id: 3,
    title: "Multi-Agent Financial Analysis Platform",
    desc: "Orchestrating 5 autonomous AI agents for real-time parallel stock data analysis, trend prediction, and news retrieval via OpenAI.",
    image: "/images/z-chimera.png",
    tags: ["LangGraph", "Python", "Next.js"],
    link: "/projects/chimera-finans"
  }
];

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 2, md: 4 },
        pt: { xs: 2, md: 2 },
      }}
    >

      {/* --- ANA KAPSÜL (SİYAH ALAN) --- */}
      {/* Sadece sayfa ilk açıldığında hafifçe belirmesi için çok basit bir animasyon bıraktık */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          width: '100%',
          maxWidth: '1500px',
          backgroundColor: '#050505', // GPU yoran blur yerine solid, çok koyu gri/siyah arka plan
          borderRadius: { xs: '30px', md: '60px' },
          border: '1px solid rgba(255, 255, 255, 0.05)', // Daha hafif border
          p: { xs: 3, md: 8 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >

        {/* Dekoratif Işıklar (Blur efekti silindi, radial-gradient kendisi yumuşaklık sağlar) */}
        <Box sx={{ position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(0,0,0,0) 60%)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(0,0,0,0) 60%)', zIndex: 0 }} />

        {/* --- İÇERİK --- */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>

          {/* 1. HERO BÖLÜMÜ (JS Animasyonları Tamamen Temizlendi) */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h6" sx={{ color: '#a78bfa', mb: 2, fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase' }}>
              Hello, My Name Is Yunus Emre
            </Typography>

            <Typography
              variant="h1"
              fontWeight="800"
              sx={{
                fontSize: { xs: '2rem', md: '4rem' },
                lineHeight: 1.1,
                mb: 3,
                p: 2,
                background: 'linear-gradient(to right, #29292919, #826d969b)',
                borderRadius: 12,
                width: '70%',
                mx: 'auto', // Kutunun kendisini yatay eksende merkeze alır
                textAlign: 'center', // Kutunun içindeki yazıyı merkeze hizalar
              }}
            >
              I DESIGN AND CODE<br />
              <Typography sx={{ 
                fontSize: { xs: '2rem', md: '4rem' },
                lineHeight: 1.1,
                }}>DIGITAL EXPERIENCES
                </Typography> 
            </Typography>

            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: '700px', mx: 'auto', mb: 5, fontSize: '1.1rem', lineHeight: 1.6 }}>
            I use Node.js and Express.js for server-side development and build sustainable and scalable systems with TypeScript-based architectures in my projects. I have practical experience in database management and API development with PostgreSQL, MySQL, and Firebase.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href="/projects"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#fff', color: '#000', borderRadius: '30px', px: 4, py: 1.5, fontWeight: 'bold',
                  '&:hover': { bgcolor: '#e2e8f0' }
                }}
              >
                See My Projects
              </Button>
              <Button
                component="a" 
                href="/cv.pdf" 
                download="Yunus_Emre_Kilic_CV.pdf" 
                variant="outlined"
                size="large"
                startIcon={<DownloadIcon />} 
                sx={{
                  color: '#fff', 
                  borderColor: 'rgba(255,255,255,0.2)', 
                  borderRadius: '30px', 
                  px: 4, 
                  py: 1.5,
                  textTransform: 'none', 
                  fontWeight: 500,
                  '&:hover': { 
                    borderColor: '#fff', 
                    bgcolor: 'rgba(255,255,255,0.05)' 
                  }
                }}
              >
                Download CV
              </Button>
            </Box>
          </Box>

          {/* 2. YETENEKLER BÖLÜMÜ */}
          <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 0, md: 4 }, mb: 8 }}>
            <SkillsSection />
          </Box>

          {/* 3. ANA LAYOUT (Flexbox) */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' }, // Tabletlerde alt alta dursun, çok daralmasın
              gap: 5,
              alignItems: 'flex-start'
            }}
          >

            {/* SOL: HAKKIMDA */}
            <Box
              sx={{
                flex: { xs: '1 1 auto', lg: '0 0 38%' },
                width: '100%',
                bgcolor: 'rgba(255,255,255,0.02)',
                borderRadius: 5,
                p: 4,
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff', mb: 3 }}>
                  About Me
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.7 }}>
                  I am an Information Systems Engineer specializing in Backend, Artificial Intelligence, and DevOps
                  practices. I use Node.js and Express.js for server-side development and build sustainable and scalable
                  systems with TypeScript-based architectures in my projects. I have practical experience in database
                  management and API development with PostgreSQL, MySQL, and Firebase. While my main focus is
                  backend systems, I am also proficient in the Next.js and React ecosystems to develop end-to-end
                  projects. I am a highly motivated learner, quick to adapt to new technologies, and a team player who
                  aims to add value with my technical skills in a team environment.
                              
                  <br /><br />
                  I try to focus on writing clean codes, prioritizing user experience (UX) and exploring new technologies.
                </Typography>
                <Stack direction="row" spacing={2}>
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
                    sx={{ color: '#0077b5', border: '1px solid rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } 
                    }}
                    ><LinkedInIcon /></IconButton>
                  <IconButton
                    href="mailto:yunus13e0@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"  
                    sx={{ color: '#ea4335', border: '1px solid rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } 
                    }}
                    ><EmailIcon /></IconButton>
                </Stack>
              </Box>

              <Button
                component="a"
                href="/cv.pdf"
                download="Yunus_Emre_Kilic_CV.pdf"
                startIcon={<DownloadIcon />}
                fullWidth
                variant="outlined"
                sx={{ mt: 'auto', borderRadius: 3, color: '#fff', borderColor: 'rgba(255,255,255,0.2)', py: 1.5, '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.05)' }, textTransform: 'none' }}
              >
                Download CV
              </Button>
            </Box>

            {/* SAĞ: PROJELER */}
            <Box sx={{ flex: 1, width: '100%' }}>
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff' }}>
                  Selected Projects
                </Typography>
                <Link href="/projects" style={{ textDecoration: 'none', color: '#a78bfa', fontSize: '0.9rem', fontWeight: 500 }}>
                  See All →
                </Link>
              </Box>

              <Stack spacing={3}>
                {featuredProjects.map((project) => (
                  <Box
                    key={project.id}
                    component={Link}
                    href={project.link}
                    sx={{
                      textDecoration: 'none',
                      display: 'flex',
                      flexDirection: { xs: 'column', sm: 'row' },
                      bgcolor: 'rgba(255,255,255,0.02)',
                      borderRadius: 4,
                      overflow: 'hidden',
                      border: '1px solid rgba(255,255,255,0.05)',
                      transition: 'transform 0.2s ease, background-color 0.2s ease', // Sadece CSS bazlı donanım hızlandırmalı animasyon
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.04)',
                        transform: 'translateX(5px)',
                        borderColor: 'rgba(167, 139, 250, 0.3)'
                      }
                    }}
                  >
                    <Box sx={{ width: { xs: '100%', sm: '200px' }, height: { xs: '200px', sm: 'auto' }, position: 'relative' }}>
                      <CardMedia component="img" image={project.image} alt={project.title} sx={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </Box>
                    <Box sx={{ p: 3, flex: 1 }}>
                      <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff', mb: 1 }}>{project.title}</Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 2 }}>{project.desc}</Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                        {project.tags.map(tag => (
                          <Chip key={tag} label={tag} size="small" sx={{ bgcolor: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa', border: 'none', fontSize: '0.75rem' }} />
                        ))}
                      </Stack>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>

          </Box>

        </Box>
      </MotionBox>
    </Box>
  );
}