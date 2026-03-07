'use client';

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';

const MotionBox = motion(Box) as any;
const MotionPaper = motion(Paper) as any;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function SkillsSection() {
    return (
        <Box id="skills" sx={{ py: 10, px: { xs: 2, md: 4 } }}>

            {/* Başlık Alanı */}
            <MotionBox
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                sx={{ textAlign: 'center', mb: 8 }}
            >
                <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        background: 'linear-gradient(to right, #fff, #a78bfa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2
                    }}
                >
                    Technical Competencies
                </Typography>
                <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: '600px', mx: 'auto' }}>
                    I use a wide range of tools, from modern web technologies to artificial intelligence infrastructure. 
                </Typography>
            </MotionBox>

            {/* KARTLARIN DİZİLDİĞİ ALAN (Flexbox) */}
            <MotionBox
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap', // Sığmazsa aşağı geç
                    justifyContent: 'center', // Ortala
                    gap: 4 // Kartlar arası boşluk (32px)
                }}
            >
                {skillCategories.map((category, index) => (
                    <MotionPaper
                        key={index}
                        variants={itemVariants}
                        elevation={0}
                        sx={{
                            // ESNEK GENİŞLİK AYARLARI:
                            // flex-grow: 1 (Boşluk kalırsa genişle)
                            // flex-shrink: 1 (Sığmazsa küçül)
                            // flex-basis: 500px (İdeal genişlik 500px olsun)
                            flex: '1 1 500px',
                            maxWidth: '100%', // Mobilde taşmayı önle

                            p: 4,
                            bgcolor: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: 4,
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            '&:hover': {
                                bgcolor: 'rgba(255, 255, 255, 0.05)',
                                borderColor: 'rgba(167, 139, 250, 0.3)',
                                transform: 'translateY(-5px)',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
                            }
                        }}
                    >
                        {/* Kategori Başlığı */}
                        <Typography variant="h5" fontWeight="bold" sx={{ color: '#fff', mb: 1 }}>
                            {category.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 3 }}>
                            {category.description}
                        </Typography>

                        {/* Yetenek Chip'leri */}
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                            {category.skills.map((skill, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        px: 2,
                                        py: 1,
                                        borderRadius: '20px',
                                        bgcolor: 'rgba(167, 139, 250, 0.1)',
                                        border: '1px solid rgba(167, 139, 250, 0.1)',
                                        color: '#e9d5ff',
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        cursor: 'default',
                                        transition: '0.2s',
                                        '&:hover': {
                                            bgcolor: '#a78bfa',
                                            color: '#000',
                                            borderColor: '#a78bfa'
                                        }
                                    }}
                                >
                                    {/* İkon */}
                                    <skill.icon size={18} />
                                    {skill.name}
                                </Box>
                            ))}
                        </Box>

                    </MotionPaper>
                ))}
            </MotionBox>
        </Box>
    );
}