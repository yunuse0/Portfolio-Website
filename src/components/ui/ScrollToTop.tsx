'use client';

import React, { useState, useEffect } from 'react';
import { Fab, Zoom, Box } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  // Scroll durumunu dinle
  useEffect(() => {
    const handleScroll = () => {
      // 300px aşağı inilince butonu göster
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // En yukarı kaydır
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={show}>
      <Box
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 70,
          right: 50, // Chatbot'un (right: 30) solunda dursun diye
          zIndex: 9990,
        }}
      >
        <Fab
          onClick={handleClick}
          size="medium" // Biraz daha küçük ve kibar olsun
          aria-label="yukarı çık"
          sx={{
            bgcolor: 'rgba(255,255,255,0.1)', // Hafif transparan
            color: '#a78bfa',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
            '&:hover': {
              bgcolor: '#a78bfa',
              color: '#fff',
              transform: 'translateY(-3px)'
            },
            transition: 'all 0.3s'
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}