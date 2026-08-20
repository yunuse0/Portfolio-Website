// src/components/ProjectCard.tsx
'use client';

import React, { useState } from 'react';
import {
    Box, Card, CardContent, CardMedia, Typography, Chip, Stack, Button,
    ToggleButton, ToggleButtonGroup, CircularProgress
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'; 
import CodeIcon from '@mui/icons-material/Code'; 
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const MotionBox = motion(Box) as any;

export default function ProjectCard({ project }: { project: any }) {
    const [showAi, setShowAi] = useState(false);
    
    // --- AI AYAR STATELERİ ---
    const [mode, setMode] = useState<'recruiter' | 'developer'>('recruiter');
    const [lang, setLang] = useState<'tr' | 'en'>('tr');
    
    const [analysis, setAnalysis] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async (selectedMode: 'recruiter' | 'developer', selectedLang: 'tr' | 'en') => {
        setLoading(true);
        setAnalysis(null); 

        try {
            const res = await fetch('/api/ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'project_analysis',
                    context: selectedMode,
                    lang: selectedLang,
                    content: {
                        title: project.title,
                        tags: project.tags || [],
                        description: project.description || project.summary
                    }
                }),
            });
            const data = await res.json();
            setAnalysis(data.reply || 'Analiz oluşturulamadı.');
        } catch (error) {
            console.error(error);
            setAnalysis('Analiz servisine şu anda ulaşılamıyor.');
        } finally {
            setLoading(false);
        }
    };

    const toggleAiPanel = () => {
        if (!showAi) {
            setShowAi(true);
            handleAnalyze(mode, lang);
        } else {
            setShowAi(false);
        }
    };

    const handleModeChange = (event: React.MouseEvent<HTMLElement>, newMode: 'recruiter' | 'developer') => {
        if (newMode !== null) {
            setMode(newMode);
            handleAnalyze(newMode, lang);
        }
    };

    const handleLangChange = (event: React.MouseEvent<HTMLElement>, newLang: 'tr' | 'en') => {
        if (newLang !== null) {
            setLang(newLang);
            handleAnalyze(mode, newLang);
        }
    };

    const hasImage = Boolean(project.image && project.image.trim() !== '');

    return (
        <Card
            elevation={0}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: 5,
                border: '1px solid rgba(255, 255, 255, 0.05)',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-5px)',
                    bgcolor: 'rgba(255, 255, 255, 0.06)',
                    borderColor: 'rgba(167, 139, 250, 0.3)'
                }
            }}
        >
            {/* Resim Alanı (Yalnızca görsel varsa render edilir) */}
            {hasImage && (
                <Box sx={{ p: 1 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                        sx={{ borderRadius: 4, objectFit: 'cover' }}
                    />
                </Box>
            )}

            <CardContent sx={{ flexGrow: 1, px: 3, pb: 3, pt: hasImage ? 1 : 3, display: 'flex', flexDirection: 'column' }}>
                {/* Şirket / Dönem Bilgisi (Varsa) */}
                {(project.company || project.period) && (
                    <Box sx={{ mb: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                        {project.company && (
                            <Typography variant="caption" sx={{ color: '#a78bfa', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                                {project.company}
                            </Typography>
                        )}
                        {project.period && (
                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
                                {project.period}
                            </Typography>
                        )}
                    </Box>
                )}

                {/* Etiketler */}
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 0.8, mb: 2 }}>
                    {(project.tags || []).slice(0, 4).map((tag: string) => (
                        <Chip key={tag} label={tag} size="small" sx={{ height: 24, fontSize: '0.7rem', color: '#e9d5ff', bgcolor: 'rgba(167, 139, 250, 0.1)', border: '1px solid rgba(167, 139, 250, 0.15)' }} />
                    ))}
                </Stack>

                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#fff', fontSize: '1.25rem', lineHeight: 1.3 }}>
                    {project.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', mb: 3, lineHeight: 1.6, flexGrow: 1 }}>
                    {project.description || project.summary}
                </Typography>

                {/* --- AKSİYON BUTONLARI --- */}
                <Stack spacing={1.5} sx={{ mt: 'auto' }}>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button
                            component={Link}
                            href={project.link || `/projects/${project.slug}`}
                            variant="contained"
                            fullWidth
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                bgcolor: '#fff', color: '#000', borderRadius: 3, fontWeight: 'bold', textTransform: 'none',
                                '&:hover': { bgcolor: '#e0e0e0' }
                            }}
                        >
                            See Details
                        </Button>
                        {project.demoLink && (
                            <Button
                                component="a"
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outlined"
                                sx={{
                                    minWidth: 44,
                                    p: 1,
                                    borderRadius: 3,
                                    color: '#fff',
                                    borderColor: 'rgba(255,255,255,0.2)',
                                    '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.05)' }
                                }}
                                title="Live Demo"
                            >
                                <LaunchIcon fontSize="small" />
                            </Button>
                        )}
                        {project.githubLink && (
                            <Button
                                component="a"
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outlined"
                                sx={{
                                    minWidth: 44,
                                    p: 1,
                                    borderRadius: 3,
                                    color: '#fff',
                                    borderColor: 'rgba(255,255,255,0.2)',
                                    '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.05)' }
                                }}
                                title="Source Code"
                            >
                                <GitHubIcon fontSize="small" />
                            </Button>
                        )}
                    </Box>

                    <Button
                        onClick={toggleAiPanel}
                        variant="outlined"
                        fullWidth
                        startIcon={<AutoAwesomeIcon />}
                        sx={{
                            color: showAi ? '#a78bfa' : 'rgba(255,255,255,0.7)',
                            borderColor: showAi ? '#a78bfa' : 'rgba(255,255,255,0.2)',
                            borderRadius: 3, textTransform: 'none',
                            '&:hover': { borderColor: '#a78bfa', color: '#a78bfa' }
                        }}
                    >
                        {showAi ? 'Close AI Analysis' : 'AI Analysis'}
                    </Button>
                </Stack>

                {/* --- AI PANELİ (Expand) --- */}
                <AnimatePresence>
                    {showAi && (
                        <MotionBox
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            sx={{ overflow: 'hidden' }}
                        >
                            <Box sx={{ p: 2, bgcolor: 'rgba(167, 139, 250, 0.05)', borderRadius: 3, border: '1px dashed rgba(167, 139, 250, 0.3)' }}>

                                {/* MOD SEÇİCİ */}
                                <ToggleButtonGroup
                                    value={mode}
                                    exclusive
                                    onChange={handleModeChange}
                                    fullWidth
                                    size="small"
                                    sx={{ mb: 1, bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2 }}
                                >
                                    <ToggleButton value="recruiter" sx={{ color: '#fff', textTransform: 'none', fontSize: '0.75rem', '&.Mui-selected': { color: '#a78bfa' } }}>
                                        <BusinessCenterIcon sx={{ fontSize: 14, mr: 0.5 }} /> HR / Recruiter
                                    </ToggleButton>
                                    <ToggleButton value="developer" sx={{ color: '#fff', textTransform: 'none', fontSize: '0.75rem', '&.Mui-selected': { color: '#a78bfa' } }}>
                                        <CodeIcon sx={{ fontSize: 14, mr: 0.5 }} /> Tech / CTO
                                    </ToggleButton>
                                </ToggleButtonGroup>

                                {/* DİL SEÇİCİ */}
                                <ToggleButtonGroup
                                    value={lang}
                                    exclusive
                                    onChange={handleLangChange}
                                    fullWidth
                                    size="small"
                                    sx={{ mb: 2, bgcolor: 'rgba(0,0,0,0.2)', borderRadius: 2 }}
                                >
                                    <ToggleButton value="tr" sx={{ color: '#fff', textTransform: 'none', fontSize: '0.75rem', '&.Mui-selected': { color: '#a78bfa' } }}>
                                        🇹🇷 TR
                                    </ToggleButton>
                                    <ToggleButton value="en" sx={{ color: '#fff', textTransform: 'none', fontSize: '0.75rem', '&.Mui-selected': { color: '#a78bfa' } }}>
                                        🇬🇧 EN
                                    </ToggleButton>
                                </ToggleButtonGroup>

                                {/* İçerik Yükleme/Gösterim */}
                                {loading ? (
                                    <Stack direction="row" justifyContent="center" py={2}>
                                        <CircularProgress size={20} sx={{ color: '#a78bfa' }} />
                                    </Stack>
                                ) : (
                                    <Typography variant="body2" sx={{ color: '#e9d5ff', fontSize: '0.85rem', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                                        {analysis}
                                    </Typography>
                                )}

                            </Box>
                        </MotionBox>
                    )}
                </AnimatePresence>

            </CardContent>
        </Card>
    );
}