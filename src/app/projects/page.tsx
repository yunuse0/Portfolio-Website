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
    { id: 'all', label: 'All' },
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
        <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 }, pt: { xs: 4, md: 4 } }}>
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                sx={{
                    width: '100%',
                    maxWidth: '1500px',
                    backgroundColor: '#050505', 
                    borderRadius: { xs: '20px', md: '60px' }, // Mobilde radius biraz daha kibar olsun
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    p: { xs: 2, sm: 4, md: 8 }, // Mobilde padding'i kıstık ki içerik sığsın
                    position: 'relative',
                }}
            >
                {/* Başlık */}
                <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mb: 6, gap: 2 }}>
                    <Box>
                        <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', fontSize: { xs: '2rem', md: '3rem' } }}>My Projects</Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.5)', mt: 1 }}>Chosen Works and Experiences</Typography>
                    </Box>
                    <Button component={Link} href="/" startIcon={<ArrowBackIcon />} sx={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none', '&:hover': { color: '#fff' }, alignSelf: { xs: 'flex-start', sm: 'auto' } }}>
                        Back to Home
                    </Button>
                </Box>

                {/* Filtre Butonları (Tag'ler) - MOBİL UYUMLU HALİ */}
                <Stack 
                    direction="row" 
                    useFlexGap // Wrap ile spacing'in doğru çalışmasını sağlar
                    spacing={1.5} 
                    sx={{ 
                        mb: 6, 
                        flexWrap: 'wrap', 
                        justifyContent: { xs: 'center', sm: 'flex-start' } // Mobilde filtreleri ortala
                    }}
                >
                    {filters.map((filter) => (
                        <Button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            variant={activeFilter === filter.id ? "contained" : "outlined"}
                            sx={{
                                borderRadius: '30px', textTransform: 'none', px: { xs: 2, md: 3 }, py: { xs: 0.5, md: 1 },
                                fontSize: { xs: '0.8rem', md: '0.875rem' }, // Mobilde yazıları ufalt
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

                {/* Proje Kartları */}
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        justifyContent: 'center', 
                        gap: { xs: 4, md: '62px' } // Mobilde kartlar arası boşluğu kıstık
                    }}
                >
                    {filteredProjects.map((project) => (
                        <Box key={project.id} sx={{ flex: '1 1 100%', maxWidth: '400px', minWidth: { xs: '100%', sm: '280px' }, minHeight: { xs: 'auto', md: '650px' } }}>
                            <ProjectCard project={{ ...project, link: `/projects/${project.slug}` }} />
                        </Box>
                    ))}
                </Box>

            </MotionBox>
        </Box>
    );
}