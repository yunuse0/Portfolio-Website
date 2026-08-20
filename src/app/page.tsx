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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import SkillsSection from '@/components/SkillsSection';
import { projects } from '@/data/projects';

const MotionBox = motion(Box) as any;

const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 2, md: 4 },
        pt: { xs: 4, md: 4 },
      }}
    >
      {/* --- ANA KAPSÜL (SİYAH ALAN) --- */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          width: '100%',
          maxWidth: '1500px',
          backgroundColor: '#050505',
          borderRadius: { xs: '30px', md: '60px' },
          border: '1px solid rgba(255, 255, 255, 0.05)',
          p: { xs: 3, md: 8 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Dekoratif Işıklar */}
        <Box sx={{ position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(0,0,0,0) 60%)', zIndex: 0 }} />
        <Box sx={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 60%)', zIndex: 0 }} />

        {/* --- İÇERİK --- */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>

          {/* 1. HERO BÖLÜMÜ */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h6" sx={{ color: '#a78bfa', mb: 2, fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase', fontSize: { xs: '0.85rem', sm: '1rem' } }}>
              Full-Stack Software Engineer • AI Applications & Automation
            </Typography>

            <Typography
              variant="h1"
              fontWeight="800"
              sx={{
                fontSize: { xs: '1.85rem', sm: '2.8rem', md: '4rem' },
                lineHeight: 1.15,
                mb: 3,
                p: { xs: 1.5, md: 2 },
                background: 'linear-gradient(to right, #29292919, #826d969b)',
                borderRadius: 12,
                width: { xs: '100%', sm: '90%', md: '80%' },
                mx: 'auto',
                textAlign: 'center',
                wordBreak: 'break-word',
              }}
            >
              BUILDING MODERN WEB &<br />
              <Box component="span" sx={{ color: '#c4b5fd' }}>
                AI-POWERED SYSTEMS
              </Box> 
            </Typography>

            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: '780px', mx: 'auto', mb: 5, fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.7 }}>
              Information Systems Engineer with hands-on experience building modern web products, AI-integrated applications, automation systems, and real-time platforms. Specializing in TypeScript/Next.js, backend architecture, AI agents, databases, and business automation.
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href="/projects"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#fff', color: '#000', borderRadius: '30px', px: 4, py: 1.5, fontWeight: 'bold', textTransform: 'none',
                  '&:hover': { bgcolor: '#e2e8f0' }
                }}
              >
                Explore Projects
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
          <Box sx={{ maxWidth: '1300px', mx: 'auto', px: { xs: 0, md: 2 }, mb: 8 }}>
            <SkillsSection />
          </Box>

          {/* 3. ANA DÜZEN (Hakkımda + Seçili Projeler) */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              gap: 5,
              alignItems: 'flex-start'
            }}
          >

            {/* SOL: HAKKIMDA ÖZET */}
            <Box
              sx={{
                flex: { xs: '1 1 auto', lg: '0 0 40%' },
                width: '100%',
                bgcolor: 'rgba(255,255,255,0.02)',
                borderRadius: 5,
                p: { xs: 3, md: 4 },
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff', mb: 2 }}>
                  About Me
                </Typography>
                
                <Typography variant="body2" sx={{ color: '#a78bfa', fontWeight: 600, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                  <SchoolIcon sx={{ fontSize: 18 }} /> B.Sc. Information Systems Engineering — Kocaeli University
                </Typography>

                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.7, fontSize: '0.95rem' }}>
                  Software developer and engineer with strong focus on TypeScript/Next.js, backend integration, AI agents, databases, UI/UX, and practical business automation. Experienced across full software lifecycle, testing, technical documentation, customer-facing troubleshooting, and product delivery.
                </Typography>

                <Stack spacing={1.5} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                    <LocationOnIcon sx={{ fontSize: 18, color: '#a78bfa' }} />
                    <span>İstanbul, Türkiye</span>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                    <EmailIcon sx={{ fontSize: 18, color: '#a78bfa' }} />
                    <span>yunus13e0@gmail.com</span>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1.5} sx={{ mb: 3 }}>
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
                  <IconButton
                    href="mailto:yunus13e0@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"  
                    sx={{ 
                      color: '#ea4335', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } 
                    }}
                  >
                    <EmailIcon />
                  </IconButton>
                </Stack>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
                <Button
                  component={Link}
                  href="/about"
                  variant="outlined"
                  fullWidth
                  sx={{ borderRadius: 3, color: '#fff', borderColor: 'rgba(255,255,255,0.2)', py: 1.2, '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.05)' }, textTransform: 'none' }}
                >
                  Full Bio & Career
                </Button>
                <Button
                  component="a"
                  href="/cv.pdf"
                  download="Yunus_Emre_Kilic_CV.pdf"
                  startIcon={<DownloadIcon />}
                  fullWidth
                  variant="contained"
                  sx={{ borderRadius: 3, bgcolor: '#fff', color: '#000', py: 1.2, fontWeight: 'bold', '&:hover': { bgcolor: '#e2e8f0' }, textTransform: 'none' }}
                >
                  CV PDF
                </Button>
              </Box>
            </Box>

            {/* SAĞ: SEÇİLİ PROJELER */}
            <Box sx={{ flex: 1, width: '100%' }}>
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff' }}>
                  Featured Works
                </Typography>
                <Link href="/projects" style={{ textDecoration: 'none', color: '#a78bfa', fontSize: '0.9rem', fontWeight: 500 }}>
                  See All Projects ({projects.length}) →
                </Link>
              </Box>

              <Stack spacing={3}>
                {featuredProjects.map((project) => {
                  const hasImage = Boolean(project.image && project.image.trim() !== '');

                  return (
                    <Box
                      key={project.id}
                      component={Link}
                      href={`/projects/${project.slug}`}
                      sx={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        bgcolor: 'rgba(255,255,255,0.02)',
                        borderRadius: 4,
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.05)',
                        transition: 'transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.04)',
                          transform: 'translateX(5px)',
                          borderColor: 'rgba(167, 139, 250, 0.3)'
                        }
                      }}
                    >
                      {/* Resim Alanı (Yalnızca görsel varsa render edilir) */}
                      {hasImage && (
                        <Box sx={{ width: { xs: '100%', sm: '220px' }, height: { xs: '180px', sm: 'auto' }, position: 'relative', flexShrink: 0 }}>
                          <CardMedia component="img" image={project.image} alt={project.title} sx={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        </Box>
                      )}
                      <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {(project.company || project.period) && (
                          <Box sx={{ mb: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {project.company && (
                              <Typography variant="caption" sx={{ color: '#a78bfa', fontWeight: 600 }}>
                                {project.company}
                              </Typography>
                            )}
                            {project.period && (
                              <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                                {project.period}
                              </Typography>
                            )}
                          </Box>
                        )}
                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff', mb: 1, fontSize: '1.15rem' }}>
                          {project.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', mb: 2, lineHeight: 1.6 }}>
                          {project.description || project.summary}
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 0.8, mt: 'auto' }}>
                          {(project.tags || []).slice(0, 4).map(tag => (
                            <Chip key={tag} label={tag} size="small" sx={{ bgcolor: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa', border: '1px solid rgba(167, 139, 250, 0.15)', fontSize: '0.72rem' }} />
                          ))}
                        </Stack>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>
            </Box>

          </Box>

        </Box>
      </MotionBox>
    </Box>
  );
}