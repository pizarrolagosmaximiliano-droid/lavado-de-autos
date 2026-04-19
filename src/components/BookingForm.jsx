import React, { useState, useEffect, useMemo } from 'react';
import './BookingForm.css';

const PRICES = {
  services: {
    basico: { name: 'Lavado Básico', price: 10000 },
    premium: { name: 'Lavado Premium', price: 18000 },
    interior: { name: 'Lavado Interior', price: 25000 },
    pulido: { name: 'Pulido', price: 40000 },
    encerado: { name: 'Encerado', price: 15000 }
  },
  multipliers: {
    vehicle: { auto: 1, suv: 1.2, camioneta: 1.3, moto: 0.6 },
    dirt: { bajo: 1, medio: 1.1, alto: 1.3 }
  }
};

const HOURS = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '',
    type: 'auto', brand: '', model: '', year: '', dirt: 'medio',
    date: '', time: ''
  });
  
  const [selectedServices, setSelectedServices] = useState({
    basico: false, premium: false, interior: false, pulido: false, encerado: false
  });
  
  const [bookedSlots, setBookedSlots] = useState({});

  useEffect(() => {
    // Load booked times from localStorage
    const saved = localStorage.getItem('prowash_bookings');
    if (saved) setBookedSlots(JSON.parse(saved));
    
    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('booking-date').setAttribute('min', today);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'date') setFormData(prev => ({ ...prev, time: '' })); // Reset time if date changes
  };

  const toggleService = (key) => {
    setSelectedServices(prev => {
      // Basic and Premium are mutually exclusive
      let next = { ...prev, [key]: !prev[key] };
      if (key === 'basico' && !prev.basico) next.premium = false;
      if (key === 'premium' && !prev.premium) next.basico = false;
      return next;
    });
  };

  const estimatedTotal = useMemo(() => {
    let baseTotal = Object.keys(selectedServices)
      .filter(key => selectedServices[key])
      .reduce((sum, key) => sum + PRICES.services[key].price, 0);

    const vehicleMult = PRICES.multipliers.vehicle[formData.type] || 1;
    const dirtMult = PRICES.multipliers.dirt[formData.dirt] || 1;

    return Math.round(baseTotal * vehicleMult * dirtMult);
  }, [selectedServices, formData.type, formData.dirt]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date || !formData.time || estimatedTotal === 0) {
      alert("Por favor, completa todos los campos requeridos y selecciona al menos un servicio.");
      return;
    }

    // Save Booking to Localstorage to block hour
    const newBookings = { ...bookedSlots };
    if (!newBookings[formData.date]) newBookings[formData.date] = [];
    newBookings[formData.date].push(formData.time);
    localStorage.setItem('prowash_bookings', JSON.stringify(newBookings));
    setBookedSlots(newBookings);

    // Generate WhatsApp URL
    const num = '56964044114';
    const servs = Object.keys(selectedServices).filter(k => selectedServices[k]).map(k => PRICES.services[k].name).join(', ');
    
    const text = `NUEVA RESERVA DE LAVADO

Detalles de Contacto:
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Correo: ${formData.email}

Detalles del Vehículo:
Automóvil: ${formData.type.toUpperCase()} - ${formData.brand} ${formData.model} (${formData.year})
Nivel de Suciedad: ${formData.dirt.toUpperCase()}

Servicios Seleccionados:
${servs}

Reserva Confirmada:
Fecha: ${formData.date}
Hora: ${formData.time}

Monto Estimado: $${estimatedTotal.toLocaleString('es-CL')} (CLP)`;

    const url = `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    
    alert("¡Tu hora ha sido bloqueada temporalmente! Serás redirigido a WhatsApp para confirmar.");
  };

  // Get available hours for chosen date
  const availableHours = HOURS.filter(h => {
    if (!formData.date || !bookedSlots[formData.date]) return true;
    return !bookedSlots[formData.date].includes(h);
  });

  return (
    <section className="booking section" id="booking">
      <div className="section-container">
        <div className="section-header text-center">
          <h2 className="section-title">Cotiza y Reserva Online</h2>
          <p className="section-subtitle">Bloquea tu hora al instante. Calculamos el precio según tus necesidades.</p>
        </div>
        
        <form className="booking-form glass-panel" onSubmit={handleSubmit}>
          
          <div className="form-grid">
            {/* User Info */}
            <div className="form-group-section">
              <h3 className="form-section-title">Datos del Cliente</h3>
              <div className="form-group">
                <input type="text" name="name" placeholder="Nombre completo *" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Teléfono *" value={formData.phone} onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Correo electrónico *" value={formData.email} onChange={handleInputChange} required />
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="form-group-section">
              <h3 className="form-section-title">Detalles del Vehículo</h3>
              <div className="form-group-row">
                <select name="type" value={formData.type} onChange={handleInputChange}>
                  <option value="auto">Auto</option>
                  <option value="suv">SUV</option>
                  <option value="camioneta">Camioneta</option>
                  <option value="moto">Moto</option>
                </select>
                <select name="dirt" value={formData.dirt} onChange={handleInputChange}>
                  <option value="bajo">Suciedad Baja</option>
                  <option value="medio">Suciedad Media</option>
                  <option value="alto">Suciedad Alta</option>
                </select>
              </div>
              <div className="form-group-row">
                <input type="text" name="brand" placeholder="Marca *" value={formData.brand} onChange={handleInputChange} required />
                <input type="text" name="model" placeholder="Modelo *" value={formData.model} onChange={handleInputChange} required />
                <input type="number" name="year" placeholder="Año *" value={formData.year} onChange={handleInputChange} required />
              </div>
            </div>
          </div>

          <div className="form-grid">
            {/* Services */}
            <div className="form-group-section services-selection">
              <h3 className="form-section-title">Selecciona Servicios</h3>
              <div className="checkbox-grid">
                {Object.keys(PRICES.services).map(key => (
                  <label key={key} className={`service-checkbox ${selectedServices[key] ? 'active' : ''}`}>
                    <input type="checkbox" checked={selectedServices[key]} onChange={() => toggleService(key)} />
                    <span className="sc-name">{PRICES.services[key].name}</span>
                    <span className="sc-price">+${PRICES.services[key].price.toLocaleString()}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="form-group-section">
              <h3 className="form-section-title">Fecha y Hora</h3>
              <div className="form-group">
                <input type="date" id="booking-date" name="date" value={formData.date} onChange={handleInputChange} required />
              </div>
              
              <div className="hours-grid">
                {formData.date ? (
                  availableHours.length > 0 ? (
                    availableHours.map(hour => (
                      <button 
                        type="button" 
                        key={hour}
                        className={`hour-slot ${formData.time === hour ? 'selected' : ''}`}
                        onClick={() => setFormData(prev => ({...prev, time: hour}))}
                      >
                        {hour}
                      </button>
                    ))
                  ) : (
                    <p className="error-text">No hay horas disponibles para esta fecha.</p>
                  )
                ) : (
                  <p className="hint-text">Selecciona una fecha primero.</p>
                )}
              </div>
            </div>
          </div>

          {/* Total & Submit */}
          <div className="form-footer">
            <div className="estimated-total">
              <span className="total-label">Precio Estimado:</span>
              <span className="total-amount">${estimatedTotal.toLocaleString('es-CL')}</span>
            </div>
            <button type="submit" className="btn-primary btn-submit">Confirmar y Reservar en WhatsApp</button>
          </div>
          
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
