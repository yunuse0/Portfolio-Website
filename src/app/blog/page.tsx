// src/app/blog/page.tsx
'use client';

import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Chip, Stack, Button, TextField, InputAdornment } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { blogPosts } from '@/data/blog';

const MotionBox = motion(Box) as any;

export default function BlogPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 2 }, pt: { xs: 8, md: 8 }, }}>
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                sx={{
                    width: '100%', maxWidth: '1300px', backgroundColor: '#050505',
                    borderRadius: { xs: '30px', md: '60px' },
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    p: { xs: 3, md: 8 },
                }}
            >
                {/* Başlık ve Arama */}
                <Box sx={{ mb: 8 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4, flexWrap: 'wrap', gap: 2 }}>
                        <Box>
                            <Button component={Link} href="/" startIcon={<ArrowBackIcon />} sx={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none', mb: 2, '&:hover': { color: '#fff' } }}>
                                Ana Sayfa
                            </Button>
                            <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', fontSize: { xs: '2rem', md: '3rem' } }}>
                                Blog & Yazılar
                            </Typography>
                        </Box>
                        <TextField
                            placeholder="Yazılarda ara..."
                            variant="outlined" size="small" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                            InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon sx={{ color: 'rgba(255,255,255,0.4)' }} /></InputAdornment>) }}
                            sx={{
                                width: { xs: '100%', sm: '300px' },
                                '& .MuiOutlinedInput-root': {
                                    color: '#fff', borderRadius: '30px', backgroundColor: 'rgba(255,255,255,0.05)',
                                    '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                                    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                                    '&.Mui-focused fieldset': { borderColor: '#a78bfa' },
                                }
                            }}
                        />
                    </Box>
                </Box>

                {/* Blog Listesi */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {filteredPosts.map((post) => (
                        <Box
                            key={post.id}
                            component={Link}
                            href={`/blog/${post.slug}`}
                            sx={{ textDecoration: 'none', display: 'block' }}
                        >
                            <Card
                                sx={{
                                    display: 'flex', flexDirection: { xs: 'column', md: 'row' },
                                    bgcolor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 4, overflow: 'hidden',
                                    transition: 'transform 0.2s ease, background-color 0.2s ease', // CSS Animasyonu
                                    '&:hover': { bgcolor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(167, 139, 250, 0.3)', transform: 'translateX(5px)' }
                                }}
                            >
                                <CardContent sx={{ flex: 1, p: 4 }}>
                                    <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                                        <Chip label={post.category} size="small" sx={{ bgcolor: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa', fontWeight: 'bold', fontSize: '0.75rem', height: 24 }} />
                                        <Stack direction="row" spacing={0.5} alignItems="center"><CalendarTodayIcon sx={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }} /><Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>{post.date}</Typography></Stack>
                                        <Stack direction="row" spacing={0.5} alignItems="center"><AccessTimeIcon sx={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }} /><Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>{post.readTime} okuma</Typography></Stack>
                                    </Box>
                                    <Typography variant="h5" fontWeight="bold" sx={{ color: '#fff', mb: 2 }}>{post.title}</Typography>
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mb: 3, lineHeight: 1.7 }}>{post.excerpt}</Typography>
                                    <Typography variant="button" sx={{ color: '#a78bfa', textTransform: 'none', display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold' }}>Devamını Oku <ArrowForwardIcon fontSize="small" /></Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                    {filteredPosts.length === 0 && (
                        <Box sx={{ textAlign: 'center', py: 8 }}><Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.5)' }}>Aradığınız kriterlere uygun yazı bulunamadı.</Typography></Box>
                    )}
                </Box>
            </MotionBox>
        </Box>
    );
}