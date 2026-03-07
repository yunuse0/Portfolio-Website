// src/app/contact/page.tsx
'use client';

import React, { useState } from 'react';
import {
    Box, Typography, Button, Stack, IconButton, TextField, 
    Snackbar, Alert, CircularProgress 
} from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const MotionBox = motion(Box) as any;

const textFieldSx = {
    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.5)' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#a78bfa' },
    '& .MuiOutlinedInput-root': {
        color: '#fff',
        backgroundColor: 'rgba(255,255,255,0.03)',
        '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
        '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
        '&.Mui-focused fieldset': { borderColor: '#a78bfa' },
    }
};

export default function ContactPage() {
    // --- FORM STATELERİ ---
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [loading, setLoading] = useState(false);
    
    // --- BİLDİRİM STATELERİ ---
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

    // Input değişimlerini yakalama
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form Gönderme İşlemi
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Sayfanın yenilenmesini engelle
        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                setSnackbar({ open: true, message: 'Mesajın başarıyla gönderildi! 🚀', severity: 'success' });
                setFormData({ name: '', email: '', subject: '', message: '' }); // Formu temizle
            } else {
                setSnackbar({ open: true, message: data.error || 'Bir hata oluştu.', severity: 'error' });
            }
        } catch (error) {
            setSnackbar({ open: true, message: 'Sunucuya bağlanılamadı.', severity: 'error' });
        } finally {
            setLoading(false);
        }
    };

    const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

    return (
        <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        p: { xs: 2, md: 4 },
        pt: { xs: 2, md: 2 },
        pb: 10, // Alttan ekstra pay
      }}
    >
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
                <Box sx={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(0,0,0,0) 60%)', zIndex: 0 }} />

                <Box sx={{ position: 'relative', zIndex: 2, mb: 4 }}>
                    <Button component={Link} href="/" startIcon={<ArrowBackIcon />} sx={{ color: 'rgba(255,255,255,0.6)', textTransform: 'none', '&:hover': { color: '#fff' } }}>
                        Back to Home Page
                    </Button>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: { xs: 6, lg: 10 }, position: 'relative', zIndex: 1 }}>
                    
                    {/* SOL TARAF: BİLGİLER (Aynı kaldı) */}
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h3" fontWeight="bold" sx={{ color: '#fff', mb: 2, fontSize: { xs: '2rem', md: '3.5rem' } }}>Contact Me</Typography>
                        <Typography variant="h6" sx={{ color: '#a78bfa', mb: 4, fontWeight: 'normal', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>You have a project idea? Let's talk.</Typography>
                        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, mb: 6, fontSize: '1.1rem' }}>
                            I'm always open to new projects and collaborations. Whether you want to talk about a project or just say hello, my inbox is always open!
                        </Typography>

                        <Stack spacing={4} sx={{ mb: 6 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ p: 1.5, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%', color: '#a78bfa' }}><EmailIcon /></Box>
                                <Box>
                                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block' }}>Email</Typography>
                                    <Typography variant="body1" sx={{ color: '#fff', fontWeight: 'bold' }}>yunus13e0@gmail.com</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ p: 1.5, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '50%', color: '#a78bfa' }}><LocationOnIcon /></Box>
                                <Box>
                                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', display: 'block' }}>Location</Typography>
                                    <Typography variant="body1" sx={{ color: '#fff', fontWeight: 'bold' }}>İstanbul, Türkiye</Typography>
                                </Box>
                            </Box>
                        </Stack>

                        <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>SOCIAL MEDIA</Typography>
                        <Stack direction="row" spacing={2}>
                            <IconButton component="a" href="https://github.com/yunuse0" target="_blank" sx={{ color: '#fff', border: '1px solid rgba(255,255,255,0.1)', width: 50, height: 50, '&:hover': { bgcolor: '#fff', color: '#000' } }}><GitHubIcon /></IconButton>
                            <IconButton component="a" href="https://www.linkedin.com/in/yunus-emre-k%C4%B1l%C4%B1%C3%A7-a6570a291/" target="_blank" sx={{ color: '#fff', border: '1px solid rgba(255,255,255,0.1)', width: 50, height: 50, '&:hover': { bgcolor: '#0077b5', borderColor: '#0077b5' } }}><LinkedInIcon /></IconButton>
                        </Stack>
                    </Box>

                    {/* SAĞ TARAF: FORM */}
                    <Box sx={{ flex: 1 }}>
                        <Box
                            component="form" // Form submit olayını tetiklemek için box'ı form yaptık
                            onSubmit={handleSubmit}
                            sx={{
                                bgcolor: 'rgba(255,255,255,0.02)', p: { xs: 3, md: 5 }, borderRadius: 4,
                                border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: 3
                            }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                                <Box sx={{ flex: 1 }}>
                                    <TextField required fullWidth label="Your Name" name="name" value={formData.name} onChange={handleChange} variant="outlined" sx={textFieldSx} />
                                </Box>
                                <Box sx={{ flex: 1 }}>
                                    <TextField required fullWidth label="E-Mail" name="email" type="email" value={formData.email} onChange={handleChange} variant="outlined" sx={textFieldSx} />
                                </Box>
                            </Box>

                            <TextField fullWidth label="Subject" name="subject" value={formData.subject} onChange={handleChange} variant="outlined" sx={textFieldSx} />

                            <TextField required fullWidth label="Your Message" name="message" value={formData.message} onChange={handleChange} variant="outlined" multiline rows={4} sx={textFieldSx} />

                            <Button
                                type="submit"
                                disabled={loading}
                                variant="contained"
                                size="large"
                                endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                                fullWidth
                                sx={{
                                    bgcolor: '#fff', color: '#000', py: 1.8, borderRadius: 2, fontWeight: 'bold', textTransform: 'none', fontSize: '1rem',
                                    '&:hover': { bgcolor: '#e2e8f0' },
                                    '&.Mui-disabled': { bgcolor: 'rgba(255,255,255,0.5)', color: '#000' }
                                }}
                            >
                                {loading ? 'Sending...' : 'Send Your Message'}
                            </Button>
                        </Box>
                    </Box>

                </Box>
            </MotionBox>

            {/* BAŞARI / HATA BİLDİRİMİ */}
            <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%', borderRadius: 2 }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>

        </Box>
    );
}