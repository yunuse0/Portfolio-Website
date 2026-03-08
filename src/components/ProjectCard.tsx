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

const MotionBox = motion(Box) as any;

export default function ProjectCard({ project }: { project: any }) {
    const [showAi, setShowAi] = useState(false);
    
    // --- AI AYAR STATELERİ ---
    const [mode, setMode] = useState<'recruiter' | 'developer'>('recruiter');
    const [lang, setLang] = useState<'tr' | 'en'>('tr'); // YENİ: Dil State'i
    
    const [analysis, setAnalysis] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // Analiz İsteği Atan Fonksiyon (Mod ve Dil parametreleri alır)
    const handleAnalyze = async (selectedMode: 'recruiter' | 'developer', selectedLang: 'tr' | 'en') => {
        setLoading(true);
        setAnalysis(null); 

        try {
            const res = await fetch('/api/ai', { // Sende contact ise /api/contact yapmayı unutma
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    type: 'project_analysis',
                    context: selectedMode,
                    lang: selectedLang, // API'ye dili gönderiyoruz
                    content: {
                        title: project.title,
                        tags: project.tags,
                        description: project.description
                    }
                }),
            });
            const data = await res.json();
            setAnalysis(data.reply);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const toggleAiPanel = () => {
        if (!showAi) {
            setShowAi(true);
            handleAnalyze(mode, lang); // Mevcut seçili mod ve dille başla
        } else {
            setShowAi(false);
        }
    };

    const handleModeChange = (event: React.MouseEvent<HTMLElement>, newMode: 'recruiter' | 'developer') => {
        if (newMode !== null) {
            setMode(newMode);
            handleAnalyze(newMode, lang); // Dili sabit tutup modu değiştir
        }
    };

    const handleLangChange = (event: React.MouseEvent<HTMLElement>, newLang: 'tr' | 'en') => {
        if (newLang !== null) {
            setLang(newLang);
            handleAnalyze(mode, newLang); // Modu sabit tutup dili değiştir
        }
    };

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
                    borderColor: 'rgba(255, 255, 255, 0.2)'
                }
            }}
        >
            {/* Resim Alanı */}
            <Box sx={{ p: 1 }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ borderRadius: 4, objectFit: 'cover' }}
                />
            </Box>

            <CardContent sx={{ flexGrow: 1, px: 3, pb: 3, pt: 1 }}>
                {/* Etiketler */}
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    {project.tags.slice(0, 3).map((tag: string) => (
                        <Chip key={tag} label={tag} size="small" sx={{ height: 24, fontSize: '0.7rem', color: '#aaa', bgcolor: 'rgba(255,255,255,0.05)' }} />
                    ))}
                </Stack>

                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#fff' }}>
                    {project.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 3 }}>
                    {project.description}
                </Typography>

                {/* --- AKSİYON BUTONLARI --- */}
                <Stack spacing={2}>
                    <Button
                        component={Link}
                        href={project.link}
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
                        {showAi ? 'Close Analyze' : 'AI Analyze'}
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
                                    <ToggleButton value="recruiter" sx={{ color: '#fff', textTransform: 'none', '&.Mui-selected': { color: '#a78bfa' } }}>
                                        <BusinessCenterIcon sx={{ fontSize: 16, mr: 1 }} /> IK / Business
                                    </ToggleButton>
                                    <ToggleButton value="developer" sx={{ color: '#fff', textTransform: 'none', '&.Mui-selected': { color: '#a78bfa' } }}>
                                        <CodeIcon sx={{ fontSize: 16, mr: 1 }} /> CTO / Tech
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
                                    <ToggleButton value="tr" sx={{ color: '#fff', textTransform: 'none', '&.Mui-selected': { color: '#a78bfa' } }}>
                                        🇹🇷 TR
                                    </ToggleButton>
                                    <ToggleButton value="en" sx={{ color: '#fff', textTransform: 'none', '&.Mui-selected': { color: '#a78bfa' } }}>
                                        🇬🇧 EN
                                    </ToggleButton>
                                </ToggleButtonGroup>

                                {/* İçerik Yükleme/Gösterim */}
                                {loading ? (
                                    <Stack direction="row" justifyContent="center" py={2}>
                                        <CircularProgress size={20} sx={{ color: '#a78bfa' }} />
                                    </Stack>
                                ) : (
                                    <Typography variant="body2" sx={{ color: '#e9d5ff', fontSize: '0.85rem', whiteSpace: 'pre-line' }}>
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