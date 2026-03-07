'use client';

import React from 'react';
import { Box, Typography, Stack, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                mt: 10, // İçerikten biraz uzaklaşsın
                pb: 4,  // Alttan boşluk
                position: 'relative',
                zIndex: 10
            }}
        >
            {/* İnce bir çizgi */}
            <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4, maxWidth: '1500px', mx: 'auto', width: '90%' }} />

            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                sx={{ maxWidth: '1500px', mx: 'auto', px: { xs: 3, md: 8 } }}
            >
                {/* SOL: Telif ve İsim */}
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
                        © {new Date().getFullYear()} Yunus Emre Kılıç
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
                       Build with Next.js & MUI.
                    </Typography>
                </Box>

                {/* SAĞ: Sosyal Medya İkonları */}
                <Stack direction="row" spacing={1}>
                    <IconButton
                        component="a"
                        href="https://github.com/yunuse0"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{ color: 'rgba(255,255,255,0.5)', transition: '0.3s', '&:hover': { color: '#fff', transform: 'translateY(-2px)' } }}
                    >
                        <GitHubIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        component="a"
                        href="https://www.linkedin.com/in/yunus-emre-k%C4%B1l%C4%B1%C3%A7-a6570a291/"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        sx={{ color: 'rgba(255,255,255,0.5)', transition: '0.3s', '&:hover': { color: '#0077b5', transform: 'translateY(-2px)' } }}
                    >
                        <LinkedInIcon fontSize="small" />
                    </IconButton>

                    <IconButton
                        component="a"
                        href="mailto:yunus13e0@gmail.com"
                        size="small"
                        rel="noopener noreferrer"
                        sx={{ color: 'rgba(255,255,255,0.5)', transition: '0.3s', '&:hover': { color: '#ea4335', transform: 'translateY(-2px)' } }}
                    >
                        <EmailIcon fontSize="small" />
                    </IconButton>
                </Stack>
            </Stack>
        </Box>
    );
}