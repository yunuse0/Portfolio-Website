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
    { id: 'all', label: 'All Projects' },
    { id: 'Next.js', label: 'Next.js' },
    { id: 'TypeScript', label: 'TypeScript' },
    { id: 'AI', label: 'AI & ML' },
    { id: 'Node.js', label: 'Node.js' },
    { id: 'Python', label: 'Python' },
    { id: 'React Native', label: 'Mobile / React Native' },
    { id: 'Real-Time', label: 'Real-Time' },
    { id: 'Automation', label: 'Automation & n8n' }
];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => (project.tags || []).includes(activeFilter) || (project.technologies || []).includes(activeFilter));

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
                    borderRadius: { xs: '20px', md: '60px' },
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    p: { xs: 2, sm: 4, md: 8 },
                    position: 'relative',
                }}
            >
                {/* Başlık */}
                <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mb: 6, gap: 2 }}>
                    <Box>
                        <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', fontSize: { xs: '2rem', md: '3rem' } }}>Projects & Products</Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mt: 1 }}>
                            Commercial platforms, AI agents, enterprise solutions, and open source projects ({projects.length})
                        </Typography>
                    </Box>
                    <Button component={Link} href="/" startIcon={<ArrowBackIcon />} sx={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none', '&:hover': { color: '#fff' }, alignSelf: { xs: 'flex-start', sm: 'auto' } }}>
                        Back to Home
                    </Button>
                </Box>

                {/* Filtre Butonları (Tag'ler) */}
                <Stack 
                    direction="row" 
                    useFlexGap
                    spacing={1.5} 
                    sx={{ 
                        mb: 6, 
                        flexWrap: 'wrap', 
                        justifyContent: { xs: 'center', sm: 'flex-start' }
                    }}
                >
                    {filters.map((filter) => (
                        <Button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            variant={activeFilter === filter.id ? "contained" : "outlined"}
                            sx={{
                                borderRadius: '30px', textTransform: 'none', px: { xs: 2, md: 3 }, py: { xs: 0.5, md: 1 },
                                fontSize: { xs: '0.8rem', md: '0.875rem' },
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

                {/* Proje Kartları Grid */}
                <Box 
                    sx={{ 
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(auto-fill, minmax(340px, 1fr))',
                            lg: 'repeat(3, 1fr)'
                        },
                        gap: { xs: 3, md: 4 }
                    }}
                >
                    {filteredProjects.map((project) => (
                        <Box key={project.id} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <ProjectCard project={{ ...project, link: `/projects/${project.slug}` }} />
                        </Box>
                    ))}
                </Box>

            </MotionBox>
        </Box>
    );
}