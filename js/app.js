// --- Sidebar mobile toggle ---
function initSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebarOverlay');
  const toggle   = document.getElementById('sidebarToggle');

  if (toggle) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('show');
      overlay.classList.toggle('show');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');
    });
  }
}

// --- Toast notification ---
function showToast(msg, type = 'info', duration = 3000) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = 'position:fixed;top:20px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
    document.body.appendChild(container);
  }

  const icons  = { success: 'fa-check-circle', danger: 'fa-times-circle', info: 'fa-info-circle', warning: 'fa-exclamation-triangle' };
  const colors = { success: '#00A878', danger: '#E8394C', info: '#1A3FD8', warning: '#F5A623' };

  const toast = document.createElement('div');
  toast.style.cssText = `
    background: ${colors[type] || colors.info};
    color: #fff; padding: 12px 18px;
    border-radius: 10px; font-family: 'Nunito', sans-serif;
    font-weight: 600; font-size: 14px;
    display: flex; align-items: center; gap: 10px;
    box-shadow: 0 4px 20px rgba(0,0,0,.2);
    animation: toastIn .3s ease; min-width: 260px;
  `;
  toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i> ${msg}`;

  const style = document.createElement('style');
  style.textContent = `@keyframes toastIn { from { opacity:0; transform: translateX(60px); } to { opacity:1; transform: translateX(0); } }`;
  if (!document.getElementById('toastStyle')) { style.id = 'toastStyle'; document.head.appendChild(style); }

  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = '.3s'; setTimeout(() => toast.remove(), 300); }, duration);
}

// --- Máscara de CPF ---
function maskCPF(inputEl) {
  inputEl.addEventListener('input', () => {
    let v = inputEl.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 9)      v = v.slice(0,3)+'.'+v.slice(3,6)+'.'+v.slice(6,9)+'-'+v.slice(9);
    else if (v.length > 6) v = v.slice(0,3)+'.'+v.slice(3,6)+'.'+v.slice(6);
    else if (v.length > 3) v = v.slice(0,3)+'.'+v.slice(3);
    inputEl.value = v;
  });
}

// --- Calendário interativo ---
function renderCalendar(containerId, onSelect) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const today = new Date();
  let year  = today.getFullYear();
  let month = today.getMonth();
  let selectedDay = null;

  const monthNames = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho',
                      'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  const apptDays = [5, 12, 17, 22]; // dias com consulta (mock)

  function build() {
    const firstDay   = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let html = `
      <div class="d-flex align-items-center justify-content-between mb-2">
        <button class="btn btn-sm btn-outline-secondary" onclick="calNav(-1)">&#8249;</button>
        <span class="fw-bold">${monthNames[month]} ${year}</span>
        <button class="btn btn-sm btn-outline-secondary" onclick="calNav(1)">&#8250;</button>
      </div>
      <div class="cal-grid mb-1">
        ${['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].map(d => `<div class="cal-day-name">${d}</div>`).join('')}
        ${Array(firstDay).fill('<div></div>').join('')}
        ${Array.from({length: daysInMonth}, (_, i) => {
          const d = i + 1;
          const isPast = new Date(year, month, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
          const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
          const isSel   = d === selectedDay;
          const hasApt  = apptDays.includes(d) && !isSel;
          const cls = [
            'cal-day',
            isPast  ? 'disabled' : '',
            isToday && !isSel ? 'today' : '',
            isSel   ? 'selected' : '',
            hasApt  ? 'has-apt' : ''
          ].join(' ');
          return `<div class="${cls}" onclick="calSelect(${d})">${d}</div>`;
        }).join('')}
      </div>`;
    el.innerHTML = html;
  }

  window.calNav = (dir) => { month += dir; if (month < 0) { month = 11; year--; } if (month > 11) { month = 0; year++; } build(); };
  window.calSelect = (d) => {
    const isPast = new Date(year, month, d) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (isPast) return;
    selectedDay = d;
    build();
    if (onSelect) onSelect(new Date(year, month, d));
  };

  build();
}

// --- Animação da barra de progresso ---
function animateBar(el, target) {
  let val = 0;
  const step = target / 60;
  const iv = setInterval(() => {
    val = Math.min(val + step, target);
    el.style.width = val + '%';
    if (val >= target) clearInterval(iv);
  }, 16);
}

// Inicia tudo quando o DOM carregar
document.addEventListener('DOMContentLoaded', initSidebar);
