// src/app/blog/[slug]/page.tsx
'use client';

import React, { useState } from 'react';
import { Box, Typography, Button, Chip, Divider, Stack, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useParams } from 'next/navigation';
import { blogPosts } from '@/data/blog';

const MotionBox = motion(Box) as any;

export default function BlogPostPage() {
    const params = useParams();
    const { slug } = params;

    const [summary, setSummary] = useState('');
    const [loading, setLoading] = useState(false);

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h5">Yazı bulunamadı 😔</Typography>
                <Button component={Link} href="/blog" variant="outlined" sx={{ color: '#a78bfa', borderColor: '#a78bfa' }}>Listeye Dön</Button>
            </Box>
        );
    }

    const handleSummarize = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type: 'summarize', content: post.content }),
            });
            const data = await res.json();
            if (data.reply) setSummary(data.reply);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', p: { xs: 2, md: 4 }, pt: { xs: 8, md: 8 },  }}>
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                sx={{
                    width: '100%', maxWidth: '1300px', backgroundColor: '#050505',
                    borderRadius: { xs: '30px', md: '60px' },
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    p: { xs: 4, md: 8 },
                }}
            >
                <Button component={Link} href="/blog" startIcon={<ArrowBackIcon />} sx={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none', mb: 4, '&:hover': { color: '#fff' } }}>
                    Tüm Yazılar
                </Button>

                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Chip label={post.category} sx={{ bgcolor: 'rgba(167, 139, 250, 0.1)', color: '#a78bfa', mb: 3 }} />
                    <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', mb: 3, fontSize: { xs: '2rem', md: '3rem' } }}>
                        {post.title}
                    </Typography>
                    <Stack direction="row" spacing={3} justifyContent="center" sx={{ color: 'rgba(255,255,255,0.5)' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><CalendarTodayIcon fontSize="small" /> {post.date}</Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><AccessTimeIcon fontSize="small" /> {post.readTime}</Box>
                    </Stack>
                </Box>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 6 }} />

                <Box sx={{ mb: 6 }}>
                    {!summary && !loading && (
                        <Button
                            onClick={handleSummarize} variant="outlined" startIcon={<AutoAwesomeIcon />}
                            sx={{ color: '#a78bfa', borderColor: 'rgba(167, 139, 250, 0.5)', borderRadius: '20px', textTransform: 'none', width: '100%', py: 1.5, '&:hover': { borderColor: '#a78bfa', bgcolor: 'rgba(167, 139, 250, 0.1)' } }}
                        >
                            Bu Yazıyı Yapay Zeka ile Özetle
                        </Button>
                    )}

                    {loading && (
                        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ color: '#a78bfa', py: 2 }}>
                            <CircularProgress size={20} color="inherit" />
                            <Typography variant="body2">İçerik analiz ediliyor...</Typography>
                        </Stack>
                    )}

                    {summary && (
                        <Box sx={{ bgcolor: 'rgba(167, 139, 250, 0.1)', p: 3, borderRadius: 4, border: '1px solid rgba(167, 139, 250, 0.2)' }}>
                            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                                <AutoAwesomeIcon sx={{ color: '#a78bfa', fontSize: 20 }} />
                                <Typography variant="h6" sx={{ color: '#fff', fontSize: '1rem', fontWeight: 'bold' }}>AI Özeti</Typography>
                            </Stack>
                            <Typography 
                                variant="body2" 
                                sx={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}
                                dangerouslySetInnerHTML={{ __html: summary }} 
                            />
                        </Box>
                    )}
                </Box>

                <Box
                    sx={{
                        color: 'rgba(255,255,255,0.8)', typography: 'body1', fontSize: '1.125rem', lineHeight: 1.8,
                        '& p': { mb: 3 }, '& h2': { color: '#fff', fontSize: '1.8rem', fontWeight: 'bold', mt: 6, mb: 3 },
                        '& h3': { color: '#fff', fontSize: '1.4rem', fontWeight: 'bold', mt: 4, mb: 2 },
                        '& ul': { mb: 3, pl: 4 }, '& li': { mb: 1 },
                        '& code': { bgcolor: 'rgba(255,255,255,0.1)', p: 0.5, borderRadius: 1, fontFamily: 'monospace' }
                    }}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </MotionBox>
        </Box>
    );
}