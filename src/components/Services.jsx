import React from 'react';
import './Services.css';

const IconCar = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a2 2 0 0 0-1.6-.8H9.3a2 2 0 0 0-1.6.8L5 11l-5.16.86a1 1 0 0 0-.84.99V16h3m10 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m-10 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0"/></svg>;
const IconSparkle = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></svg>;
const IconDroplet = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>;
const IconWind = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>;
const IconShield = () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Lavado Básico',
      price: 'Desde $10.000',
      description: 'Lavado exterior con shampoo de pH neutro, secado con microfibra, limpieza de rines y llantas.',
      icon: <IconCar />
    },
    {
      id: 2,
      title: 'Lavado Premium',
      price: 'Desde $18.000',
      description: 'Incluye Lavado Básico más aspirado profundo interior, limpieza de cristales y acondicionador de plásticos.',
      icon: <IconSparkle />
    },
    {
      id: 3,
      title: 'Lavado Interior',
      price: 'Desde $25.000',
      description: 'Limpieza profunda de tapicería, lavado de alfombras, sanitización y eliminación de olores.',
      icon: <IconDroplet />
    },
    {
      id: 4,
      title: 'Pulido',
      price: 'Desde $40.000',
      description: 'Eliminación de microrayones, recuperación de brillo original y corrección de pintura (1 etapa).',
      icon: <IconWind />
    },
    {
      id: 5,
      title: 'Encerado',
      price: 'Desde $15.000',
      description: 'Aplicación de cera premium de carnauba o sellador sintético para protección contra rayos UV.',
      icon: <IconShield />
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="section-container">
        <div className="section-header text-center">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Calidad y atención al detalle en cada proceso</p>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card glass-panel">
              <div className="service-icon text-accent">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-price">{service.price}</p>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
