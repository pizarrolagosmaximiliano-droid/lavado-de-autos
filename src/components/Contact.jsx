import React from 'react';
import './Contact.css';

const IconMapPin = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const IconPhone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const IconClock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section-container">
        <div className="section-header text-center">
          <h2 className="section-title">Contáctanos</h2>
          <p className="section-subtitle">Estamos a tu disposición para cualquier consulta</p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-info glass-panel">
            <div className="info-item">
              <span className="info-icon"><IconMapPin /></span>
              <div>
                <h4>Ubicación</h4>
                <p>Av. Principal 123, Santiago, Chile</p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon"><IconPhone /></span>
              <div>
                <h4>Contacto</h4>
                <p><a href="https://wa.me/56964044114">+56 9 6404 4114</a></p>
              </div>
            </div>
            
            <div className="info-item">
              <span className="info-icon"><IconClock /></span>
              <div>
                <h4>Horarios de Atención</h4>
                <p>Lunes a Sábado: 08:00 - 17:00 Hrs</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>
          
          <div className="contact-map glass-panel">
            <iframe 
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106466.864703908!2d-70.7410041838615!3d-33.43777598822606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5410425af2f%3A0x8475d53c400f0931!2sSantiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1700000000000!5m2!1ses-419!2scl" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
