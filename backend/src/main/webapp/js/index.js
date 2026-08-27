// Estado global y datos constantes
const GOLD = '#c9a040';

const SERVICES = [
    { id: 'fade', name: 'Fade Clásico', description: 'Degradé progresivo con navaja, perfección en cada línea.', price: 25000, duration: 45, imageUrl: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=400&fit=crop&auto=format', beardAddon: 12000},
    { id: 'tradicional', name: 'Corte Tradicional', description: 'El clásico de siempre: tijera, peine y mucho estilo', price: 20000, duration: 30, imageUrl: 'https://images.unsplash.com/photo-1568339434343-2a640a1a9946?w=600&h=400&fit=crop&auto=format', beardAddon: 12000},
    { id: 'mullet', name: 'Mullet Moderno', description: 'Retro reinventado, largo atrás con estructura frontal definida.', price: 30000, duration: 60, imageUrl: 'https://images.unsplash.com/photo-1647140655214-e4a2d914971f?w=600&h=400&fit=crop&auto=format', beardAddon: 12000},
    { id: 'degradee', name: 'Degradé + Diseño', description: 'Taper fade con diseño personalizado a navaja en los laterales.', price: 35000, duration: 75, imageUrl: 'https://images.unsplash.com/photo-1630827020718-3433092696e7?w=600&h=400&fit=crop&auto=format', beardAddon: 15000 },
    { id: 'navaja', name: 'Afeitado con Navaja', description: 'Afeitado húmedo tradicional, toalla caliente y crema de lujo.', price: 18000, duration: 35, imageUrl: 'https://images.unsplash.com/photo-1621645582931-d1d3e6564943?w=600&h=400&fit=crop&auto=format', beardAddon: 0 },
    { id: 'perfilado', name: 'Corte + Perfilado', description: 'Corte completo más perfilado profesional de contorno y nuca.', price: 28000, duration: 50, imageUrl: 'https://images.unsplash.com/photo-1629189784191-9afdcbcb0398?w=600&h=400&fit=crop&auto=format', beardAddon: 12000 }
];

const BARBERS = [
    { id: 'carlos', name: 'Carlos Mendoza', specialty: 'Fade & Degradé', available: true, availableText: 'Disponible hoy', img: 'https://images.unsplash.com/photo-1568339434343-2a640a1a9946?w=200&h=200&fit=crop&auto=format' },
    { id: 'diego', name: 'Diego Ríos', specialty: 'Corte Clásico & Navaja', available: true, availableText: 'Disponible hoy', img: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?w=200&h=200&fit=crop&auto=format' },
    { id: 'andres', name: 'Andrés Vargas', specialty: 'Diseño & Mullet', available: false, availableText: 'Disponible desde las 14:00', img: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=200&h=200&fit=crop&auto=format' }
];

const REVIEWS = [
    { name: 'Mateo García', rating: 5, comment: 'El mejor fade que me han hecho. Carlos tiene una precisión increíble con la navaja, el resultado quedó perfecto. Ya volví tres veces.', service: 'Corte Fade + Barba', initials: 'MG', color: '#4F46E5' },
    { name: 'Santiago López', rating: 5, comment: 'Ambiente premium de verdad. La atención es de primera, el espacio es muy cómodo y los productos que usan se notan en el resultado final.', service: 'Corte Tradicional', initials: 'SL', color: '#0F766E' },
    { name: 'Alejandro Ruiz', rating: 5, comment: 'Diego me hizo el mullet moderno que tenía en mente hace meses. Llevé referencia y la ejecutó exacto. Muy detallista y profesional.', service: 'Mullet Moderno', initials: 'AR', color: '#B45309' },
    { name: 'Felipe Morales', rating: 5, comment: 'Reservé por WhatsApp y en minutos me confirmaron. El afeitado con navaja fue una experiencia increíble, la toalla caliente y la crema son top.', service: 'Afeitado con Navaja', initials: 'FM', color: '#7C3AED' },
    { name: 'Camilo Herrera', rating: 4, comment: 'Muy buen corte y excelente trato. Solo le doy 4 porque tuve que esperar 15 minutos extra, pero el resultado valió la pena totalmente.', service: 'Degradé + Diseño', initials: 'CH', color: '#BE185D' },
    { name: 'Juan Pablo Soto', rating: 5, comment: 'Andrés me salvó con un diseño de último momento para una reunión. En 45 minutos salí impecable. Sin duda el mejor sitio de Bogotá.', service: 'Degradé + Diseño + Barba', initials: 'JS', color: '#047857' }
];

const ALL_TIMES = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'];

const OCCUPIED = {
  carlos: ['09:00', '09:30', '10:30', '14:00'],
  diego: ['11:00', '12:00', '15:00', '16:00'],
  andres: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30']
};

const PAYMENT_METHODS = [
  { id: 'nequi', label: 'Nequi', sub: 'Transferencia o código QR', icon: '🟣', color: '#7C3AED' },
  { id: 'daviplata', label: 'Daviplata', sub: 'Transferencia o código QR', icon: '🔴', color: '#E02020' },
  { id: 'efectivo', label: 'Efectivo', sub: 'Pago directo en el local al finalizar', icon: '💵', color: '#22C55E' }
];

let TODAY_APPOINTMENTS = [
  { id: '1', client: 'Sebastián Torres', service: 'Fade Clásico', withBeard: true, time: '09:00', paymentMethod: 'Nequi', status: 'Finalizado', duration: 65 },
  { id: '2', client: 'Mateo García', service: 'Degradé + Diseño', withBeard: false, time: '10:15', paymentMethod: 'Daviplata', status: 'Finalizado', duration: 75 },
  { id: '3', client: 'Luis Ramírez', service: 'Corte Tradicional', withBeard: true, time: '11:45', paymentMethod: 'Efectivo', status: 'Confirmado', duration: 50 },
  { id: '4', client: 'Andrés Pérez', service: 'Mullet Moderno', withBeard: false, time: '13:00', paymentMethod: 'Nequi', status: 'Pagado — Nequi', duration: 60 },
  { id: '5', client: 'Felipe Castro', service: 'Fade Clásico', withBeard: true, time: '14:30', paymentMethod: 'Efectivo', status: 'Pago pendiente (Efectivo)', duration: 65 },
  { id: '6', client: 'Carlos Medina', service: 'Afeitado con Navaja', withBeard: false, time: '15:45', paymentMethod: 'Daviplata', status: 'Confirmado', duration: 35 },
  { id: '7', client: 'Juan Ospina', service: 'Degradé + Diseño', withBeard: true, time: '17:00', paymentMethod: 'Nequi', status: 'Confirmado', duration: 90 }
];

let NOTIFICATIONS = [
  { id: 'n1', type: 'new', time: 'Hace 3 min', client: 'Valeria Moreno', service: 'Fade Clásico', beard: false, appointmentTime: 'Hoy 16:00', payment: 'Nequi', read: false },
  { id: 'n2', type: 'new', time: 'Hace 11 min', client: 'Ricardo Leal', service: 'Corte Tradicional', beard: true, appointmentTime: 'Mañana 10:30', payment: 'Efectivo', read: false },
  { id: 'n3', type: 'reminder', time: 'Hace 22 min', client: 'Andrés Pérez', service: 'Mullet Moderno', beard: false, appointmentTime: 'Hoy 13:00', payment: 'Nequi', read: true },
  { id: 'n4', type: 'new', time: 'Hace 1 hora', client: 'Tomás Herrera', service: 'Afeitado con Navaja', beard: false, appointmentTime: 'Mañana 09:00', payment: 'Daviplata', read: true },
  { id: 'n5', type: 'cancelled', time: 'Hace 2 horas', client: 'Sergio Gómez', service: 'Degradé + Diseño', beard: true, appointmentTime: 'Hoy 15:00', payment: 'Efectivo', read: true }
];

const STATUS_COLORS = {
  'Confirmado': { bg: 'rgba(59,130,246,0.12)', color: '#60A5FA' },
  'Pagado — Nequi': { bg: 'rgba(124,58,237,0.12)', color: '#A78BFA' },
  'Pagado — Daviplata': { bg: 'rgba(224,32,32,0.12)', color: '#F87171' },
  'Pago pendiente (Efectivo)': { bg: 'rgba(234,179,8,0.12)', color: '#FCD34D' },
  'Finalizado': { bg: 'rgba(34,197,94,0.1)', color: '#6EE7B7' }
};

// ESTADO DE LA APLICACIÓN
let appState = {
  currentView: 'home', // 'home' | 'dashboard'
  beardToggles: {},
  reviewIndex: 0,
  booking: {
    step: 1,
    barberId: null,
    selectedDay: null,
    selectedTime: null,
    serviceId: 'fade',
    includeBeard: false,
    paymentMethod: null,
    form: { name: '', phone: '', email: '' },
    confirmed: false
  },
  dashboardTab: 'agenda'
};

const fmt = (n) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n);

// --- INICIALIZACIÓN UNIFICADA ---
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderReviews();
  setupNavigation();
  setupDashboard();
  setupBookingModal();
});

// --- RENDERIZADO DE SERVICIOS ---
function renderServices() {
  const container = document.getElementById('services-container');
  if (!container) return;
  container.innerHTML = '';

  SERVICES.forEach((s) => {
    const hasBeard = !!appState.beardToggles[s.id];
    const totalPrice = s.price + (hasBeard && s.beardAddon > 0 ? s.beardAddon : 0);
    const totalDuration = s.duration + (hasBeard && s.beardAddon > 0 ? 20 : 0);

    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
      <div class="service-img-wrapper">
        <img src="${s.imageUrl}" alt="${s.name}" class="service-img" />
        <div class="service-img-overlay"></div>
        <div class="duration-badge">${totalDuration} min</div>
      </div>
      <div class="service-body">
        <h3 class="service-title">${s.name}</h3>
        <p class="service-desc">${s.description}</p>
        ${s.beardAddon > 0 ? `
          <div class="beard-toggle-box ${hasBeard ? 'active' : ''}" data-service="${s.id}">
            <span style="font-size: 12px; color: ${hasBeard ? GOLD : '#888'};">
              Incluir arreglo de barba <span style="color: ${hasBeard ? GOLD : '#555'};">(+${fmt(s.beardAddon)})</span>
            </span>
            <div class="toggle-switch"><div class="toggle-circle"></div></div>
          </div>
        ` : ''}
      </div>
      <div class="service-footer">
        <div>
          <div class="price-tag">${fmt(totalPrice)}</div>
          ${hasBeard && s.beardAddon > 0 ? `<div style="font-size: 11px; color: #555; text-decoration: line-through;">${fmt(s.price)}</div>` : ''}
        </div>
        <button class="btn-outline-sm select-service-btn" data-id="${s.id}">Seleccionar</button>
      </div>
    `;

    const beardBtn = card.querySelector('.beard-toggle-box');
    if (beardBtn) {
      beardBtn.addEventListener('click', () => {
        appState.beardToggles[s.id] = !appState.beardToggles[s.id];
        renderServices();
      });
    }

    const selectBtn = card.querySelector('.select-service-btn');
    selectBtn.addEventListener('click', () => {
      openBookingModal(s.id, !!appState.beardToggles[s.id]);
    });

    container.appendChild(card);
  });
}

// --- RENDERIZADO Y CARRUSEL DE RESEÑAS ---
function renderReviews() {
  const track = document.getElementById('reviews-track');
  const dotsContainer = document.getElementById('carousel-dots');
  if (!track || !dotsContainer) return;
  
  track.innerHTML = '';
  dotsContainer.innerHTML = '';

  const maxIndex = REVIEWS.length - 3;

  REVIEWS.forEach((r) => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
      <div class="quote-mark">"</div>
      <div class="stars-row">${createStars(r.rating)}</div>
      <p class="review-comment">"${r.comment}"</p>
      <div style="height: 1px; background: #1e1e1e; margin-bottom: 16px;"></div>
      <div class="author-box">
        <div class="avatar" style="background-color: ${r.color};">${r.initials}</div>
        <div>
          <div style="font-size: 14px; font-weight: 600;">${r.name}</div>
          <div style="font-size: 11px; color: #555; margin-top: 2px;">Cliente verificado · ${r.service}</div>
        </div>
      </div>
    `;
    track.appendChild(card);
  });

  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement('div');
    dot.className = `dot ${i === appState.reviewIndex ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      appState.reviewIndex = i;
      updateCarousel();
    });
    dotsContainer.appendChild(dot);
  }

  updateCarousel();
}

function createStars(rating) {
  return [1, 2, 3, 4, 5].map(i => `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="${i <= rating ? GOLD : '#2a2a2a'}">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  `).join('');
}

function updateCarousel() {
  const track = document.getElementById('reviews-track');
  if (!track) return;

  const maxIndex = REVIEWS.length - 3;
  const isMobile = window.innerWidth <= 900;
  
  const percentage = isMobile ? appState.reviewIndex * 100 : appState.reviewIndex * 33.333;
  track.style.transform = `translateX(-${percentage}%)`;

  const prevBtn = document.getElementById('prev-review-btn');
  const nextBtn = document.querySelector('.carousel-arrows .arrow-btn:last-child');

  if (prevBtn) prevBtn.classList.toggle('active', appState.reviewIndex > 0);
  if (nextBtn) nextBtn.classList.toggle('active', appState.reviewIndex < maxIndex);

  document.querySelectorAll('.carousel-dots .dot').forEach((dot, idx) => {
    dot.classList.toggle('active', idx === appState.reviewIndex);
  });
}

// --- NAVEGACIÓN Y EVENTOS ---
function setupNavigation() {
  const toggleBtn = document.getElementById('toggle-view-btn');
  const homeView = document.getElementById('home-view');

  if (toggleBtn && homeView) {
    toggleBtn.addEventListener('click', () => {
      let dashboardView = document.getElementById('barbero-panel-view');
      
      if (appState.currentView === 'home') {
        appState.currentView = 'dashboard';
        homeView.classList.add('hidden');

        if (!dashboardView) {
          dashboardView = document.createElement('div');
          dashboardView.id = 'barbero-panel-view';
          dashboardView.className = 'container section-padding';
          dashboardView.innerHTML = `
            <div style="padding: 20px 0;">
              <h2 class="section-title">Panel de Control - Barbero</h2>
              <div id="dashboard-stats" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:15px; margin: 20px 0;"></div>
              
              <div style="margin-bottom: 20px; display:flex; gap:10px;">
                <button class="btn-gold" id="tab-btn-agenda">Agenda Hoy</button>
                <button class="btn-outline-sm" id="tab-btn-notifs">Notificaciones (<span id="unread-count-badge">0</span>)</button>
              </div>

              <div id="tab-content-agenda">
                <p id="agenda-count-text" style="color:#aaa; margin-bottom:10px;"></p>
                <div id="agenda-list"></div>
              </div>

              <div id="tab-content-notifs" class="hidden">
                <button class="btn-outline-sm hidden" id="mark-all-read-btn" style="margin-bottom:10px;">Marcar todas como leídas</button>
                <div id="notifs-list"></div>
              </div>
            </div>
          `;
          document.body.insertBefore(dashboardView, document.getElementById('booking-modal'));
          setupDashboardEvents();
        } else {
          dashboardView.classList.remove('hidden');
        }

        toggleBtn.textContent = '← Vista Cliente';
        renderDashboard();
      } else {
        appState.currentView = 'home';
        if (dashboardView) dashboardView.classList.add('hidden');
        homeView.classList.remove('hidden');
        toggleBtn.textContent = 'Panel Barbero';
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll Suave en botones
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      let targetId = e.target.getAttribute('data-scroll');
      if (targetId === 'resenas') targetId = 'resena';

      if (targetId === 'booking-trigger') {
        openBookingModal();
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      document.getElementById('mobile-menu')?.classList.add('hidden');
    });
  });

  // Botón Logo
  document.getElementById('logo-btn')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Menú Móvil
  document.getElementById('hamburger-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-menu')?.classList.toggle('hidden');
  });

  // CTAs de Agendamiento
  ['nav-book-btn', 'mobile-book-btn', 'hero-book-btn', 'payment-book-btn'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', () => openBookingModal());
  });

  // Corrección del ID para Ver Servicios en el Hero
  document.getElementById('hero-service-btn')?.addEventListener('click', () => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Controles de Carrusel
  document.getElementById('prev-review-btn')?.addEventListener('click', () => {
    if (appState.reviewIndex > 0) {
      appState.reviewIndex--;
      updateCarousel();
    }
  });

  document.querySelector('.carousel-arrows .arrow-btn:last-child')?.addEventListener('click', () => {
    const maxIndex = REVIEWS.length - 3;
    if (appState.reviewIndex < maxIndex) {
      appState.reviewIndex++;
      updateCarousel();
    }
  });
}

// --- MODAL DE RESERVA ---
function setupBookingModal() {
  document.getElementById('close-modal-btn')?.addEventListener('click', closeBookingModal);
  document.getElementById('booking-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'booking-modal') closeBookingModal();
  });
}

function openBookingModal(serviceId = 'fade', includeBeard = false) {
  appState.booking = {
    step: 1,
    barberId: null,
    selectedDay: null,
    selectedTime: null,
    serviceId: serviceId,
    includeBeard: includeBeard,
    paymentMethod: null,
    form: { name: '', phone: '', email: '' },
    confirmed: false
  };
  document.getElementById('booking-modal')?.classList.remove('hidden');
  renderBookingStep();
}

function closeBookingModal() {
  document.getElementById('booking-modal')?.classList.add('hidden');
}

function renderBookingStep() {
  const { step, confirmed } = appState.booking;
  const STEPS = ['Barbero', 'Fecha & Hora', 'Resumen', 'Pago', 'Confirmar'];

  document.getElementById('modal-step-text').textContent = `Paso ${step} de 5 — ${STEPS[step - 1]}`;
  document.getElementById('booking-progress-fill').style.width = `${(step / 5) * 100}%`;

  const stepsContainer = document.getElementById('steps-indicator');
  stepsContainer.innerHTML = STEPS.map((lbl, i) => {
    const n = i + 1;
    const isActive = n === step;
    const isDone = n < step;
    return `
      <div class="step-node ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}">
        <div class="step-circle">${isDone ? '✓' : n}</div>
        <span class="step-label">${lbl}</span>
      </div>
    `;
  }).join('');

  const body = document.getElementById('booking-modal-body');
  if (confirmed) {
    renderConfirmationScreen(body);
    return;
  }

  let html = '';

  if (step === 1) {
    html = `
      <h3 style="font-family:'Playfair Display',serif; font-size:18px; margin-bottom:20px;">Elige tu barbero</h3>
      ${BARBERS.map(b => `
        <div class="barber-option ${appState.booking.barberId === b.id ? 'selected' : ''}" data-id="${b.id}">
          <img src="${b.img}" alt="${b.name}" class="barber-img" />
          <div style="flex:1;">
            <div style="font-size:15px; font-weight:600; color:#f0ede6;">${b.name}</div>
            <div style="font-size:12px; color:#666; margin-bottom:6px;">${b.specialty}</div>
            <div style="display:flex; align-items:center; gap:6px;">
              <span class="dot-green" style="background-color:${b.available ? '#22C55E' : '#EAB308'};"></span>
              <span style="font-size:11px; color:${b.available ? '#22C55E' : '#EAB308'};">${b.availableText}</span>
            </div>
          </div>
          ${appState.booking.barberId === b.id ? `<span style="color:${GOLD}; font-weight:700;">✓</span>` : ''}
        </div>
      `).join('')}
    `;
  } else if (step === 2) {
    const days = getDaysInMonth();
    const occupied = appState.booking.barberId ? (OCCUPIED[appState.booking.barberId] || []) : [];
    const selectedBarber = BARBERS.find(b => b.id === appState.booking.barberId);

    html = `
      <h3 style="font-family:'Playfair Display',serif; font-size:18px; margin-bottom:4px;">Fecha y Hora</h3>
      <p style="font-size:13px; color:#666; margin-bottom:24px;">Agosto 2026</p>
      
      <div class="calendar-grid">
        ${['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'].map(d => `<div class="calendar-day-head">${d}</div>`).join('')}
        ${days.map((d, i) => {
          if (!d) return `<div></div>`;
          const isPast = d <= 7;
          const isSunday = (i % 7 === 0);
          const disabled = isPast || isSunday;
          const isSelected = appState.booking.selectedDay === d;
          return `
            <button class="calendar-day-btn ${isSelected ? 'selected' : ''}" ${disabled ? 'disabled' : ''} data-day="${d}">
              ${d}
            </button>
          `;
        }).join('')}
      </div>

      ${appState.booking.selectedDay ? `
        <p style="font-size:13px; color:#888; margin-bottom:12px;">Horarios disponibles — ${selectedBarber?.name}</p>
        <div class="times-grid">
          ${ALL_TIMES.map(t => {
            const isOccupied = occupied.includes(t);
            const isSelected = appState.booking.selectedTime === t;
            return `
              <button class="time-btn ${isSelected ? 'selected' : ''}" ${isOccupied ? 'disabled' : ''} data-time="${t}">
                ${t}
              </button>
            `;
          }).join('')}
        </div>
      ` : ''}
    `;
  } else if (step === 3) {
    const s = SERVICES.find(serv => serv.id === appState.booking.serviceId) || SERVICES[0];
    const barber = BARBERS.find(b => b.id === appState.booking.barberId);
    const beardPrice = appState.booking.includeBeard && s.beardAddon > 0 ? s.beardAddon : 0;
    const total = s.price + beardPrice;

    html = `
      <h3 style="font-family:'Playfair Display',serif; font-size:18px; margin-bottom:20px;">Resumen del Servicio</h3>
      
      <div class="form-group">
        <label class="form-label">Servicio</label>
        <select class="form-select" id="modal-service-select">
          ${SERVICES.map(serv => `<option value="${serv.id}" ${serv.id === s.id ? 'selected' : ''}>${serv.name}</option>`).join('')}
        </select>
      </div>

      ${s.beardAddon > 0 ? `
        <div class="beard-toggle-box ${appState.booking.includeBeard ? 'active' : ''}" id="modal-beard-toggle" style="margin-bottom:20px;">
          <div>
            <div style="font-size:14px; color:${appState.booking.includeBeard ? GOLD : '#ccc'};">Incluir arreglo de barba</div>
            <div style="font-size:12px; color:#666;">Perfilado + recorte profesional (+20 min)</div>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <span style="font-size:14px; color:${GOLD}; font-weight:600;">+${fmt(s.beardAddon)}</span>
            <div class="toggle-switch"><div class="toggle-circle"></div></div>
          </div>
        </div>
      ` : ''}

      <div class="summary-box">
        <div class="summary-row"><span>Servicio</span><span>${s.name}</span></div>
        <div class="summary-row"><span>Barba</span><span>${appState.booking.includeBeard && s.beardAddon > 0 ? 'Incluida ✓' : 'No incluida'}</span></div>
        <div class="summary-row"><span>Barbero</span><span>${barber?.name || '—'}</span></div>
        <div class="summary-row"><span>Fecha</span><span>${appState.booking.selectedDay ? `${appState.booking.selectedDay} Agosto 2026` : '—'}</span></div>
        <div class="summary-row"><span>Hora</span><span>${appState.booking.selectedTime || '—'}</span></div>
        <div style="height:1px; background:#222; margin:14px 0;"></div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:600;">Total</span>
          <span style="font-family:'Playfair Display',serif; font-size:22px; color:${GOLD}; font-weight:700;">${fmt(total)}</span>
        </div>
      </div>
    `;
  } else if (step === 4) {
    const s = SERVICES.find(serv => serv.id === appState.booking.serviceId) || SERVICES[0];
    const total = s.price + (appState.booking.includeBeard && s.beardAddon > 0 ? s.beardAddon : 0);

    html = `
      <h3 style="font-family:'Playfair Display',serif; font-size:18px; margin-bottom:8px;">Método de Pago</h3>
      <p style="font-size:13px; color:#666; margin-bottom:24px;">Total a pagar: <span style="color:${GOLD}; font-weight:600;">${fmt(total)}</span></p>
      
      ${PAYMENT_METHODS.map(pm => `
        <div class="barber-option ${appState.booking.paymentMethod === pm.id ? 'selected' : ''}" data-pm="${pm.id}">
          <div style="font-size:28px;">${pm.icon}</div>
          <div style="flex:1;">
            <div style="font-size:15px; font-weight:600;">${pm.label}</div>
            <div style="font-size:12px; color:#666;">${pm.sub}</div>
          </div>
          <div style="width:20px; height:20px; border-radius:50%; border:2px solid ${appState.booking.paymentMethod === pm.id ? GOLD : '#333'}; display:flex; align-items:center; justify-content:center;">
            ${appState.booking.paymentMethod === pm.id ? `<div style="width:8px; height:8px; border-radius:50%; background:${GOLD};"></div>` : ''}
          </div>
        </div>
      `).join('')}
    `;
  } else if (step === 5) {
    html = `
      <h3 style="font-family:'Playfair Display',serif; font-size:18px; margin-bottom:8px;">Tus Datos</h3>
      <p style="font-size:13px; color:#666; margin-bottom:24px;">Completa tu información para confirmar la reserva.</p>
      
      <div class="form-group">
        <label class="form-label">Nombre Completo</label>
        <input type="text" class="form-input" id="input-name" placeholder="Ej. Sebastián Torres" value="${appState.booking.form.name}" />
      </div>
      <div class="form-group">
        <label class="form-label">Teléfono / WhatsApp</label>
        <input type="tel" class="form-input" id="input-phone" placeholder="Ej. 300 1234567" value="${appState.booking.form.phone}" />
      </div>
      <div class="form-group">
        <label class="form-label">Correo Electrónico</label>
        <input type="email" class="form-input" id="input-email" placeholder="correo@ejemplo.com" value="${appState.booking.form.email}" />
      </div>
    `;
  }

  const canNext = checkCanNext();
  html += `
    <div class="modal-nav-btns">
      ${step > 1 ? `<button class="btn-outline-sm" id="prev-step-btn">← Anterior</button>` : `<div></div>`}
      <button class="btn-gold" id="next-step-btn" ${canNext ? '' : 'disabled'}>
        ${step === 5 ? 'Confirmar y Reservar Cita' : 'Siguiente →'}
      </button>
    </div>
  `;

  body.innerHTML = html;
  bindBookingStepEvents();
}

function checkCanNext() {
  const { step, barberId, selectedDay, selectedTime, paymentMethod, form } = appState.booking;
  if (step === 1) return !!barberId;
  if (step === 2) return !!selectedDay && !!selectedTime;
  if (step === 3) return true;
  if (step === 4) return !!paymentMethod;
  if (step === 5) return form.name.trim() !== '' && form.phone.trim() !== '' && form.email.trim() !== '';
  return false;
}

function bindBookingStepEvents() {
  const { step } = appState.booking;

  if (step === 1) {
    document.querySelectorAll('[data-id]').forEach(el => {
      el.addEventListener('click', () => {
        appState.booking.barberId = el.getAttribute('data-id');
        renderBookingStep();
      });
    });
  } else if (step === 2) {
    document.querySelectorAll('[data-day]').forEach(btn => {
      btn.addEventListener('click', () => {
        appState.booking.selectedDay = parseInt(btn.getAttribute('data-day'));
        appState.booking.selectedTime = null;
        renderBookingStep();
      });
    });
    document.querySelectorAll('[data-time]').forEach(btn => {
      btn.addEventListener('click', () => {
        appState.booking.selectedTime = btn.getAttribute('data-time');
        renderBookingStep();
      });
    });
  } else if (step === 3) {
    const sel = document.getElementById('modal-service-select');
    sel?.addEventListener('change', (e) => {
      appState.booking.serviceId = e.target.value;
      renderBookingStep();
    });
    const beard = document.getElementById('modal-beard-toggle');
    beard?.addEventListener('click', () => {
      appState.booking.includeBeard = !appState.booking.includeBeard;
      renderBookingStep();
    });
  } else if (step === 4) {
    document.querySelectorAll('[data-pm]').forEach(el => {
      el.addEventListener('click', () => {
        appState.booking.paymentMethod = el.getAttribute('data-pm');
        renderBookingStep();
      });
    });
  } else if (step === 5) {
    ['name', 'phone', 'email'].forEach(field => {
      const input = document.getElementById(`input-${field}`);
      input?.addEventListener('input', (e) => {
        appState.booking.form[field] = e.target.value;
        const nextBtn = document.getElementById('next-step-btn');
        if (nextBtn) nextBtn.disabled = !checkCanNext();
      });
    });
  }

  document.getElementById('prev-step-btn')?.addEventListener('click', () => {
    appState.booking.step--;
    renderBookingStep();
  });

  document.getElementById('next-step-btn')?.addEventListener('click', () => {
    if (appState.booking.step < 5) {
      appState.booking.step++;
      renderBookingStep();
    } else {
      appState.booking.confirmed = true;
      renderBookingStep();
    }
  });
}

function renderConfirmationScreen(container) {
  const { serviceId, includeBeard, barberId, selectedDay, selectedTime, paymentMethod, form } = appState.booking;
  const s = SERVICES.find(serv => serv.id === serviceId) || SERVICES[0];
  const barber = BARBERS.find(b => b.id === barberId);
  const total = s.price + (includeBeard && s.beardAddon > 0 ? s.beardAddon : 0);
  const pm = PAYMENT_METHODS.find(p => p.id === paymentMethod);

  container.innerHTML = `
    <div style="text-align:center; padding:20px 0;">
      <div style="width:72px; height:72px; border-radius:50%; background:rgba(201,160,64,0.12); border:2px solid ${GOLD}; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; font-size:28px; color:${GOLD};">✓</div>
      <h3 style="font-family:'Playfair Display',serif; font-size:26px; margin-bottom:8px;">¡Cita Confirmada!</h3>
      <p style="color:#777; font-size:14px; line-height:1.7; margin-bottom:28px;">
        Tu reserva ha sido registrada. Recibirás una confirmación en ${form.email}.
      </p>
      
      <div class="summary-box" style="text-align:left; margin-bottom:24px;">
        <div class="summary-row"><span>Servicio</span><span>${s.name}${includeBeard && s.beardAddon > 0 ? ' + Barba' : ''}</span></div>
        <div class="summary-row"><span>Barbero</span><span>${barber?.name || ''}</span></div>
        <div class="summary-row"><span>Fecha</span><span>${selectedDay} Agosto 2026 — ${selectedTime}</span></div>
        <div class="summary-row"><span>Total</span><span>${fmt(total)}</span></div>
        <div class="summary-row"><span>Pago</span><span>${pm?.label || ''}</span></div>
      </div>

      <button class="btn-gold full-width" id="close-confirmation-btn">Cerrar</button>
    </div>
  `;

  document.getElementById('close-confirmation-btn')?.addEventListener('click', closeBookingModal);
}

function getDaysInMonth() {
  const year = 2026, month = 7;
  const days = [];
  const firstDay = new Date(year, month, 1).getDay();
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= 31; d++) days.push(d);
  return days;
}

// --- CONFIGURACIÓN Y PESTAÑAS DEL PANEL BARBERO ---
function setupDashboard() {
  // Las vistas dinámicas asignan los eventos en setupDashboardEvents()
}

function setupDashboardEvents() {
  document.getElementById('tab-btn-agenda')?.addEventListener('click', () => switchDashboardTab('agenda'));
  document.getElementById('tab-btn-notifs')?.addEventListener('click', () => switchDashboardTab('notifs'));
  document.getElementById('mark-all-read-btn')?.addEventListener('click', () => {
    NOTIFICATIONS.forEach(n => n.read = true);
    renderDashboard();
  });
}

function switchDashboardTab(tab) {
  appState.dashboardTab = tab;
  document.getElementById('tab-btn-agenda')?.classList.toggle('active', tab === 'agenda');
  document.getElementById('tab-btn-notifs')?.classList.toggle('active', tab === 'notifs');
  document.getElementById('tab-content-agenda')?.classList.toggle('hidden', tab !== 'agenda');
  document.getElementById('tab-content-notifs')?.classList.toggle('hidden', tab !== 'notifs');
  renderDashboard();
}

function renderDashboard() {
  const unread = NOTIFICATIONS.filter(n => !n.read).length;
  const markReadBtn = document.getElementById('mark-all-read-btn');
  if (markReadBtn) markReadBtn.classList.toggle('hidden', unread === 0);

  const badge = document.getElementById('unread-count-badge');
  if (badge) {
    badge.textContent = unread;
    badge.classList.toggle('hidden', unread === 0);
  }

  const finishedCount = TODAY_APPOINTMENTS.filter(a => a.status === 'Finalizado').length;
  const pendingCount = TODAY_APPOINTMENTS.filter(a => a.status === 'Pago pendiente (Efectivo)').length;

  const statsContainer = document.getElementById('dashboard-stats');
  if (statsContainer) {
    statsContainer.innerHTML = `
      <div class="stat-card" style="background:#141414; padding:15px; border-radius:8px; border:1px solid #222;">
        <div class="stat-card-icon">📅</div>
        <div class="stat-card-val" style="font-size:20px; font-weight:700; color:${GOLD};">${TODAY_APPOINTMENTS.length}</div>
        <div class="stat-card-lbl" style="font-size:12px; color:#777;">Citas hoy</div>
      </div>
      <div class="stat-card" style="background:#141414; padding:15px; border-radius:8px; border:1px solid #222;">
        <div class="stat-card-icon">✅</div>
        <div class="stat-card-val" style="font-size:20px; font-weight:700; color:#22C55E;">${finishedCount}</div>
        <div class="stat-card-lbl" style="font-size:12px; color:#777;">Finalizadas</div>
      </div>
      <div class="stat-card" style="background:#141414; padding:15px; border-radius:8px; border:1px solid #222;">
        <div class="stat-card-icon">💰</div>
        <div class="stat-card-val" style="font-size:20px; font-weight:700; color:#f0ede6;">$422.000</div>
        <div class="stat-card-lbl" style="font-size:12px; color:#777;">Ingresos estimados</div>
      </div>
      <div class="stat-card" style="background:#141414; padding:15px; border-radius:8px; border:1px solid #222;">
        <div class="stat-card-icon">⏳</div>
        <div class="stat-card-val" style="font-size:20px; font-weight:700; color:#EAB308;">${pendingCount}</div>
        <div class="stat-card-lbl" style="font-size:12px; color:#777;">Pendientes de pago</div>
      </div>
    `;
  }

  if (appState.dashboardTab === 'agenda') {
    renderAgendaTab();
  } else {
    renderNotifsTab();
  }
}

function renderAgendaTab() {
  const countText = document.getElementById('agenda-count-text');
  if (countText) countText.textContent = `${TODAY_APPOINTMENTS.length} citas programadas hoy`;
  
  const container = document.getElementById('agenda-list');
  if (!container) return;
  container.innerHTML = '';

  TODAY_APPOINTMENTS.forEach(appt => {
    const statusStyle = STATUS_COLORS[appt.status] || STATUS_COLORS['Confirmado'];
    const isFinished = appt.status === 'Finalizado';

    const item = document.createElement('div');
    item.className = `agenda-item ${isFinished ? 'finalizado' : ''}`;
    item.style.cssText = 'display:flex; align-items:center; justify-content:space-between; padding:12px; background:#111; margin-bottom:8px; border-radius:6px;';
    item.innerHTML = `
      <div class="agenda-time-col">
        <div class="agenda-time" style="color: ${isFinished ? '#444' : GOLD}; font-weight:700;">${appt.time}</div>
        <div style="font-size: 10px; color: #444; margin-top: 2px;">${appt.duration}min</div>
      </div>
      <div class="agenda-details" style="flex:1; margin: 0 15px;">
        <div class="agenda-client-row">
          <span style="font-size: 14px; font-weight: 600; color: ${isFinished ? '#777' : '#f0ede6'};">${appt.client}</span>
          <span class="status-pill" style="background-color: ${statusStyle.bg}; color: ${statusStyle.color}; font-size:11px; padding:2px 8px; border-radius:12px; margin-left:8px;">${appt.status}</span>
        </div>
        <p style="font-size: 13px; color: #666; margin-top:2px;">
          ${appt.service}${appt.withBeard ? ' + Barba' : ''} · <span style="color: #555;">${appt.paymentMethod}</span>
        </p>
      </div>
      <div class="agenda-action">
        ${!isFinished ? `<button class="btn-outline-sm finish-btn" data-id="${appt.id}">Marcar Finalizado</button>` : ''}
      </div>
    `;

    const finishBtn = item.querySelector('.finish-btn');
    finishBtn?.addEventListener('click', () => {
      appt.status = 'Finalizado';
      renderDashboard();
    });

    container.appendChild(item);
  });
}

function renderNotifsTab() {
  const container = document.getElementById('notifs-list');
  if (!container) return;
  container.innerHTML = '';

  const TYPE_MAP = {
    new: { color: '#22C55E', label: 'Nueva cita', icon: '🔔' },
    reminder: { color: '#60A5FA', label: 'Recordatorio', icon: '⏰' },
    cancelled: { color: '#F87171', label: 'Cancelada', icon: '❌' }
  };

  NOTIFICATIONS.forEach(n => {
    const typeConfig = TYPE_MAP[n.type] || TYPE_MAP.new;
    const item = document.createElement('div');
    item.className = `notif-item ${n.read ? 'read' : ''}`;
    item.style.cssText = `display:flex; align-items:center; gap:12px; padding:12px; background:#111; margin-bottom:8px; border-radius:6px; opacity: ${n.read ? '0.5' : '1'}; cursor:pointer;`;
    item.innerHTML = `
      <div class="notif-side-bar" style="width:4px; height:30px; background-color: ${n.read ? 'transparent' : typeConfig.color}; border-radius:2px;"></div>
      <div class="notif-content" style="flex:1;">
        <div class="notif-meta" style="color: ${typeConfig.color}; font-size:12px; font-weight:600;">
          <span>${typeConfig.icon} ${typeConfig.label}</span>
        </div>
        <p class="notif-desc" style="font-size:13px; color:#ccc; margin-top:2px;">
          <strong>${n.client}</strong> — ${n.service}${n.beard ? ' + Barba' : ''} · 
          <span style="color: ${GOLD};">${n.appointmentTime}</span> · Pago: 
          <span style="color: #aaa;">${n.payment}</span>
        </p>
      </div>
      <div class="notif-time" style="font-size:11px; color:#555;">${n.time}</div>
    `;

    item.addEventListener('click', () => {
      n.read = true;
      renderDashboard();
    });

    container.appendChild(item);
  });
}