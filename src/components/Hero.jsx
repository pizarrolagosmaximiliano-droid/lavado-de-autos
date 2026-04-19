import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title animate-fade-in">
          Deja tu auto como <span className="text-accent">nuevo</span><br />
          sin perder tiempo
        </h1>
        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Servicio profesional de lavado y detallado automotriz. Agenda tu visita o cotiza en línea en menos de 2 minutos.
        </p>
        <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <a href="#booking" className="btn-primary btn-large">Reservar Ahora</a>
          <a href="#services" className="btn-secondary btn-large">Ver Servicios</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
