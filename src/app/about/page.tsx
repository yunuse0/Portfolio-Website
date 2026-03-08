// src/app/about/page.tsx
'use client';

import React from 'react';
import { Box, Typography, Button, Stack, Divider, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const MotionBox = motion(Box) as any;

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
        pb: 10, // Alttan ekstra pay
      }}
    >
      {/* --- ANA SİYAH KAPSÜL --- */}
      {/* Sadece sayfa açılışı için tek bir animasyon */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          width: '100%',
          maxWidth: '1300px',
          backgroundColor: '#050505', // GPU yoran blur yerine solid koyu arka plan
          borderRadius: { xs: '30px', md: '60px' },
          border: '1px solid rgba(255, 255, 255, 0.05)',
          p: { xs: 3, md: 8 },
          position: 'relative',
          overflow: 'visible' // Işıkların taşması için
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
                gap: { xs: 6, md: 8 },
                mb: 10,
                position: 'relative',
                zIndex: 2
            }}
        >
            {/* SOL: METİN */}
            <Box sx={{ flex: 1.2 }}>
                <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', mb: 2, fontSize: { xs: '2.2rem', md: '3.5rem' } }}>
                    Yunus Emre Kılıç
                </Typography>
                
                <Typography variant="h5" sx={{ color: '#a78bfa', mb: 4, fontWeight: '300', lineHeight: 1.4 }}>
                    I am building the digital world with scalable and AI-powered architectures.
                </Typography>

                <Box sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                    <p style={{ marginBottom: '20px' }}>
                        I am an Information Systems Engineer specializing in Backend, Artificial Intelligence, and DevOps
                        practices. I use Node.js and Express.js for server-side development and build sustainable and scalable
                        systems with TypeScript-based architectures in my projects. I have practical experience in database
                        management and API development with PostgreSQL, MySQL, and Firebase. While my main focus is
                        backend systems, I am also proficient in the Next.js and React ecosystems to develop end-to-end
                        projects. I am a highly motivated learner, quick to adapt to new technologies, and a team player who
                        aims to add value with my technical skills in a team environment.
                    </p>
                </Box>
            </Box>

            {/* SAĞ: FOTOĞRAF (Mor Aura Efektli) */}
            <Box sx={{ flex: 0.8, position: 'relative', display: 'flex', justifyContent: 'center' }}>
                {/* CSS Blur yerine yumuşak geçişli Radial Gradient (Performans Dostu) */}
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
                        position: 'relative', zIndex: 2, width: { xs: '240px', md: '300px' }, height: { xs: '300px', md: '400px' },
                        borderRadius: '30px', overflow: 'hidden', border: '1px solid rgba(167, 139, 250, 0.3)',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.02)' } // Framer motion yerine CSS animasyonu
                    }}
                >
                    <CardMedia component="img" image="/images/ppolcak.jpg" alt="Yunus Emre Kılıç" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
            </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 8 }} />

        {/* --- ALT BÖLÜM: CANLI CV --- */}
        <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" mb={4} spacing={2}>
                <Typography variant="h4" fontWeight="bold" sx={{ color: '#fff' }}>
                    Live Resume
                </Typography>
                <Button 
                    component="a" href="/cv.pdf" download variant="contained"
                    startIcon={<DownloadIcon />}
                    sx={{ bgcolor: '#fff', color: '#000', px: 4, py: 1.5, borderRadius: 3, fontWeight: 'bold', textTransform: 'none', '&:hover': { bgcolor: '#e2e8f0' } }}
                >
                   Download as PDF
                </Button>
            </Stack>

            {/* Masaüstü: Iframe | Mobil: İndirme Kartı */}
            <Box 
              sx={{ 
                width: '100%', 
                maxWidth: '850px', 
                mx: 'auto',
                borderRadius: 4, 
                overflow: 'hidden', 
                border: '1px solid rgba(248, 248, 248, 0.15)', // Kenarlık rengi hafifçe yumuşatıldı
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
                </Box>
            </Box>
        </Box>

      </MotionBox>
    </Box>
  );
}