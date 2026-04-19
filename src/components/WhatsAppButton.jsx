import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/56964044114" 
      className="whatsapp-float bg-whatsapp"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="wa-icon">
        <path d="M16 2a13 13 0 0 0-11 20l-2 6 6-2a13 13 0 1 0 7-24Zm0 24a11 11 0 0 1-5-1l-3 1 1-3a11 11 0 1 1 7 3Zm6-8c0 1-1 3-3 3s-3-1-5-4-3-4-3-5 1-2 2-3c0 0 1 0 1 1l1 2c0 1 0 1 0 1s0 1-1 2l2 3c1 1 2 2 3 1s1-1 1-1 0-1 1-1 1 0 2 1c0 1 0 1 0 2Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
