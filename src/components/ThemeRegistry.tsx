// src/components/ThemeRegistry.tsx
'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme'; // Az önce oluşturduğumuz tema dosyası

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline: Tarayıcı varsayılanlarını sıfırlar ve fontu uygular */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}