// src/app/projects/page.tsx
'use client';

import React, { useState } from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

const MotionBox = motion(Box) as any;

const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'Next.js', label: 'Next.js' },
    { id: 'Node.js', label: 'Node.js'},
    { id: 'React Native', label: 'React Native' },
    { id: 'TypeScript', label: 'TypeScript' },
    { id: 'Python', label: 'Python'},
    { id: 'AI', label:'AI-NLP'}
];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.tags.includes(activeFilter));

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 }, pt: { xs: 2, md: 2 }, }}>
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                sx={{
                    width: '100%',
                    maxWidth: '1500px',
                    backgroundColor: '#050505', // Solid koyu arka plan (GPU dostu)
                    borderRadius: { xs: '30px', md: '60px' },
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    p: { xs: 3, md: 8 },
                    position: 'relative',
                }}
            >
                {/* Başlık */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 6, flexWrap: 'wrap', gap: 2 }}>
                    <Box>
                        <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', fontSize: { xs: '2rem', md: '3rem' } }}>Projelerim</Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', mt: 1 }}>Seçilmiş çalışmalarım ve deneyimlerim.</Typography>
                    </Box>
                    <Button component={Link} href="/" startIcon={<ArrowBackIcon />} sx={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none', '&:hover': { color: '#fff' } }}>
                        Ana Sayfa
                    </Button>
                </Box>

                {/* Filtre Butonları */}
                <Stack direction="row" spacing={1} sx={{ mb: 6, flexWrap: 'wrap', gap: 1.5 }}>
                    {filters.map((filter) => (
                        <Button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            variant={activeFilter === filter.id ? "contained" : "outlined"}
                            sx={{
                                borderRadius: '30px', textTransform: 'none', px: 3,
                                bgcolor: activeFilter === filter.id ? '#fff' : 'transparent',
                                color: activeFilter === filter.id ? '#000' : 'rgba(255,255,255,0.7)',
                                borderColor: activeFilter === filter.id ? '#fff' : 'rgba(255,255,255,0.2)',
                                '&:hover': { bgcolor: '#fff', color: '#000' }
                            }}
                        >
                            {filter.label}
                        </Button>
                    ))}
                </Stack>

                {/* Proje Kartları (Ağır JS Animasyonları Temizlendi) */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '62px' }}>
                    {filteredProjects.map((project) => (
                        <Box key={project.id} sx={{ flex: '1 1 400px', maxWidth: '400px', minWidth: '280px', minHeight: '650px', }}>
                            <ProjectCard project={{ ...project, link: `/projects/${project.slug}` }} />
                        </Box>
                    ))}
                </Box>

            </MotionBox>
        </Box>
    );
}