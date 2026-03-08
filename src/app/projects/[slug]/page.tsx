// src/app/projects/[slug]/page.tsx
'use client';

import React from 'react';
import { Box, Typography, Button, Chip, Stack, Divider, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { useParams } from 'next/navigation';
import { projects } from '@/data/projects';

const MotionBox = motion(Box) as any;

export default function ProjectDetailPage() {
    const params = useParams();
    const { slug } = params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexDirection: 'column' }}>
                <Typography variant="h5" sx={{ mb: 2 }}>Proje bulunamadı 😔</Typography>
                <Button component={Link} href="/projects" variant="outlined" sx={{ color: '#a78bfa', borderColor: '#a78bfa' }}>Listeye Dön</Button>
            </Box>
        );
    }

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 }, pt: { xs: 12, md: 8 },  }}>
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                sx={{
                    width: '100%', maxWidth: '1200px',
                    backgroundColor: '#050505', // Solid renk
                    borderRadius: { xs: '30px', md: '50px' },
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    overflow: 'hidden'
                }}
            >
                <Box sx={{ height: { xs: '250px', md: '450px' }, position: 'relative' }}>
                    <CardMedia component="img" image={project.coverImage} alt={project.title} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, #050505 100%)' }} />
                </Box>

                <Box sx={{ p: { xs: 3, md: 6 } }}>
                    <Button component={Link} href="/projects" startIcon={<ArrowBackIcon />} sx={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none', mb: 4, '&:hover': { color: '#fff' } }}>
                        Tüm Projeler
                    </Button>

                    <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="start" spacing={3} mb={4}>
                        <Box>
                            <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>{project.title}</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                                {project.tags.map(tag => (
                                    <Chip key={tag} label={tag} sx={{ bgcolor: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa', border: '1px solid rgba(167, 139, 250, 0.2)' }} />
                                ))}
                            </Stack>
                        </Box>
                        <Stack direction="row" spacing={2}>
                            {project.githubLink && (
                                <Button variant="outlined" startIcon={<GitHubIcon />} href={project.githubLink} target="_blank" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', borderRadius: 3, '&:hover': { borderColor: '#fff' } }}>
                                    Kaynak Kod
                                </Button>
                            )}
                            {project.demoLink && (
                                <Button variant="contained" startIcon={<LaunchIcon />} href={project.demoLink} target="_blank" sx={{ bgcolor: '#fff', color: '#000', borderRadius: 3, fontWeight: 'bold', '&:hover': { bgcolor: '#e0e0e0' } }}>
                                    Canlı Demo
                                </Button>
                            )}
                        </Stack>
                    </Stack>

                    <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4 }} />

                    <Box sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        <Typography paragraph sx={{ fontWeight: 'bold', color: '#fff' }}>{project.summary}</Typography>
                        <Typography paragraph>{project.fullContent}</Typography>
                        <Typography variant="h6" sx={{ color: '#fff', mt: 4, mb: 2 }}>Technologies</Typography>
                        <Stack direction="row" flexWrap="wrap" gap={1}>
                            {project.technologies.map((tech) => (
                                <Chip key={tech} label={tech} variant="outlined" sx={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.2)' }} />
                            ))}
                        </Stack>
                    </Box>
                </Box>
            </MotionBox>
        </Box>
    );
}