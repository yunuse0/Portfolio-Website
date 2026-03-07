// src/theme.ts
'use client';

import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

// Fontu burada tanımlıyoruz
const montserrat = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark', // Senin siten karanlık tema
    primary: {
      main: '#a78bfa', // O sevdiğin mor renk
    },
    background: {
      default: '#000000',
      paper: '#111111',
    },
  },
  typography: {
    // İŞTE SİHİRLİ KOD BURASI
    fontFamily: montserrat.style.fontFamily, 
    allVariants: {
        fontFamily: montserrat.style.fontFamily, // Garanti olsun
    }
  },
});

export default theme;