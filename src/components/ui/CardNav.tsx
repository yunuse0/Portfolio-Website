// src/components/ui/CardNav.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go';
import { FiGithub, FiLinkedin, FiSearch, FiStar } from 'react-icons/fi'; // Yeni ikonlar
import Link from 'next/link';
import { Button, IconButton } from '@mui/material'; // MUI bileşenleri

// ... (Tip tanımlamaları aynı kalıyor) ...
type CardNavLink = {
    label: string;
    href: string;
    ariaLabel: string;
};

export type CardNavItem = {
    label: string;
    bgColor: string;
    textColor: string;
    links: CardNavLink[];
};

export interface CardNavProps {
    items: CardNavItem[];
    className?: string;
    baseColor?: string;
    menuColor?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
    items,
    className = '',
    baseColor = 'rgba(10, 10, 10, 0.4)',
    menuColor = '#ffffff',
    buttonBgColor = '#ffffff',
    buttonTextColor = '#000000'
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Linke tıklama handle'ı (Logo için)
    const handleLinkClick = () => {
        if (isOpen) closeMenu();
    };

    return (
        <div className={`absolute left-1/2 -translate-x-1/2 w-[95%] max-w-[800px] z-[999] top-5 ${className}`}>

            <motion.nav
                initial={false}
                animate={{ height: isOpen ? 'auto' : 60 }}
                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="block p-0 rounded-xl shadow-2xl relative overflow-hidden backdrop-blur-xl border border-white/10"
                style={{ backgroundColor: baseColor }}
            >
                {/* --- ÜST BAR (NAVBAR HEAD) --- */}
                <div className="absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-4 z-[20]">

                    {/* --- 1. SOL GRUP (Buton + Divider + İkon) --- */}
                    <div className="flex items-center gap-3 z-[2]">
                        <Button
                            component={Link}
                            href="/"
                            variant="outlined"
                            size="small" // Biraz küçülttük ki sığsın
                            sx={{
                                color: '#fff',
                                borderColor: 'rgba(163, 163, 163, 0.2)',
                                borderRadius: '30px',
                                px: 2,
                                py: 0.8,
                                textTransform: 'none',
                                fontSize: '0.85rem',
                                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.05)' }
                            }}
                        >
                            Home
                        </Button>

                        {/* Dikey Çizgi (Divider) */}
                        <div className="h-5 w-[1px] bg-white/10 hidden sm:block"></div>

                        {/* Ekstra İkon (Örn: Github) */}
                        <IconButton
                            component="a"
                            href="https://github.com/yunuse0"
                            target="_blank"
                            sx={{ color: 'rgba(255,255,255,0.5)', '&:hover': { color: '#fff' }, display: { xs: 'none', sm: 'inline-flex' } }}
                        >
                            <FiGithub size={18} />
                        </IconButton>
                    </div>


                    {/* --- 2. ORTA GRUP (LOGO) --- */}
                    <div className="logo-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none md:pointer-events-auto">
                        {/* Mobilde butonlar üstüne binmesin diye pointer-events ayarı yapılabilir veya z-index */}
                        <Link
                            href="/about"
                            onClick={handleLinkClick}
                            className="no-underline hover:opacity-80 transition-opacity pointer-events-auto"
                        >
                            <h1
                                className="font-bold text-lg md:text-xl tracking-tight uppercase font-sans whitespace-nowrap"
                                style={{ color: menuColor }}
                            >
                                Yunus Emre Kılıç
                            </h1>
                        </Link>
                    </div>


                    {/* --- 3. SAĞ GRUP (İkon + Divider + Hamburger) --- */}
                    <div className="flex items-center gap-3 z-[2]">

                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/yunus-emre-k%C4%B1l%C4%B1%C3%A7-a6570a291/"
                            target="_blank"
                            sx={{ color: 'rgba(255,255,255,0.5)', '&:hover': { color: '#fff' }, display: { xs: 'none', sm: 'inline-flex' } }}
                        >
                            <FiLinkedin size={18} />
                        </IconButton>

                        {/* Dikey Çizgi */}
                        <div className="h-5 w-[1px] bg-white/10 hidden sm:block"></div>

                        {/* Hamburger Menü */}
                        <div
                            className={`group h-10 w-10 flex flex-col items-center justify-center cursor-pointer gap-[5px] rounded-full hover:bg-white/5 transition-colors`}
                            onClick={toggleMenu}
                            role="button"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            style={{ color: menuColor }}
                        >
                            <motion.div
                                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 7 : 0 }}
                                className="w-[24px] h-[2px] bg-current opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            <motion.div
                                animate={{ opacity: isOpen ? 0 : 1 }}
                                className="w-[24px] h-[2px] bg-current opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            <motion.div
                                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -7 : 0 }}
                                className="w-[24px] h-[2px] bg-current opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>

                </div>

                {/* --- AÇILAN MENÜ İÇERİĞİ --- */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pt-[70px] pb-2 px-2 flex flex-col md:flex-row items-stretch gap-2"
                        >
                            {items.slice(0, 3).map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex flex-col gap-2 p-4 rounded-xl flex-1 min-h-[120px]"
                                    style={{ backgroundColor: item.bgColor, color: item.textColor }}
                                >
                                    <div className="font-bold text-xl">{item.label}</div>
                                    <div className="mt-auto flex flex-col gap-1">
                                        {item.links.map((link, i) => (
                                            <Link
                                                key={i}
                                                href={link.href}
                                                onClick={closeMenu}
                                                className="flex items-center gap-2 hover:opacity-70 transition-opacity"
                                            >
                                                <GoArrowUpRight /> {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default CardNav;