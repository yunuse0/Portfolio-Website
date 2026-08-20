// src/app/projects/[slug]/page.tsx
'use client';

import React from 'react';
import { Box, Typography, Button, Chip, Stack, Divider, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useParams } from 'next/navigation';
import { projects } from '@/data/projects';

const MotionBox = motion(Box) as any;

export default function ProjectDetailPage() {
    const params = useParams();
    const { slug } = params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5">Proje bulunamadı 😔</Typography>
                <Button component={Link} href="/projects" variant="outlined" sx={{ color: '#a78bfa', borderColor: '#a78bfa' }}>Tüm Projelere Dön</Button>
            </Box>
        );
    }

    const imageSrc = project.coverImage || project.image;
    const hasImage = Boolean(imageSrc && imageSrc.trim() !== '');

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 }, pt: { xs: 8, md: 6 }, pb: 10 }}>
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                sx={{
                    width: '100%', maxWidth: '1200px',
                    backgroundColor: '#050505',
                    borderRadius: { xs: '30px', md: '50px' },
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    overflow: 'hidden'
                }}
            >
                {/* Kapak Resmi (Yalnızca görsel varsa render edilir) */}
                {hasImage && (
                    <Box sx={{ height: { xs: '220px', sm: '320px', md: '420px' }, position: 'relative', bgcolor: 'rgba(255,255,255,0.02)' }}>
                        <CardMedia component="img" image={imageSrc} alt={project.title} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 0%, #050505 100%)' }} />
                    </Box>
                )}

                <Box sx={{ p: { xs: 3, md: 6 } }}>
                    <Button component={Link} href="/projects" startIcon={<ArrowBackIcon />} sx={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none', mb: 3, '&:hover': { color: '#fff' } }}>
                        All Projects
                    </Button>

                    {/* Şirket ve Tarih Bilgisi */}
                    {(project.company || project.period) && (
                        <Stack direction="row" spacing={3} sx={{ mb: 2, color: '#a78bfa', fontSize: '0.95rem' }} flexWrap="wrap">
                            {project.company && (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <BusinessIcon sx={{ fontSize: 18 }} />
                                    <span>{project.company}</span>
                                    {project.role && <span style={{ color: 'rgba(255,255,255,0.5)' }}>({project.role})</span>}
                                </Box>
                            )}
                            {project.period && (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'rgba(255,255,255,0.5)' }}>
                                    <CalendarMonthIcon sx={{ fontSize: 18 }} />
                                    <span>{project.period}</span>
                                </Box>
                            )}
                        </Stack>
                    )}

                    <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={3} mb={4}>
                        <Box>
                            <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', mb: 2, fontSize: { xs: '1.8rem', md: '2.8rem' } }}>
                                {project.title}
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                                {(project.tags || []).map(tag => (
                                    <Chip key={tag} label={tag} sx={{ bgcolor: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa', border: '1px solid rgba(167, 139, 250, 0.2)' }} />
                                ))}
                            </Stack>
                        </Box>
                        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                            {project.githubLink && (
                                <Button variant="outlined" startIcon={<GitHubIcon />} href={project.githubLink} target="_blank" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', borderRadius: 3, textTransform: 'none', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.05)' } }}>
                                    Source Code
                                </Button>
                            )}
                            {project.demoLink && (
                                <Button variant="contained" startIcon={<LaunchIcon />} href={project.demoLink} target="_blank" sx={{ bgcolor: '#fff', color: '#000', borderRadius: 3, fontWeight: 'bold', textTransform: 'none', '&:hover': { bgcolor: '#e0e0e0' } }}>
                                    Live Demo
                                </Button>
                            )}
                        </Stack>
                    </Stack>

                    <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4 }} />

                    <Box sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                        <Typography paragraph sx={{ fontWeight: 600, color: '#e9d5ff', fontSize: '1.15rem', mb: 3 }}>
                            {project.summary}
                        </Typography>
                        <Typography paragraph sx={{ color: 'rgba(255,255,255,0.75)', mb: 4, whiteSpace: 'pre-line' }}>
                            {project.fullContent || project.longDescription || project.description}
                        </Typography>

                        <Typography variant="h6" fontWeight="bold" sx={{ color: '#fff', mt: 4, mb: 2 }}>
                            Technologies & Tools
                        </Typography>
                        <Stack direction="row" flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                            {(project.technologies || []).map((tech) => (
                                <Chip key={tech} label={tech} variant="outlined" sx={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.2)', bgcolor: 'rgba(255,255,255,0.02)' }} />
                            ))}
                        </Stack>
                    </Box>
                </Box>
            </MotionBox>
        </Box>
    );
}