function buildSidebar(activePage) {

  const navItems = [
    {
      section: 'MENU',
      links: [
        { id: 'home',        href: 'home.html',       icon: 'fas fa-house',             label: 'Início'           },
        { id: 'agendar',     href: 'agendar.html',    icon: 'fas fa-calendar-plus',     label: 'Agendar Consulta' },
        { id: 'carteirinha', href: 'carteirinha.html', icon: 'fas fa-id-card',           label: 'Carteirinha'      },
        { id: 'nivel',       href: 'nivel.html',      icon: 'fas fa-trophy',            label: 'Meu Nível'        },
      ]
    },
    {
      section: 'CONTA',
      links: [
        { id: 'sair',   href: 'index.html', icon: 'fas fa-right-from-bracket', label: 'Sair'   },
      ]
    }
  ];

  const navHTML = navItems.map(group => `
    <div class="nav-section">${group.section}</div>
    ${group.links.map(link => `
      <a href="${link.href}" class="nav-link ${activePage === link.id ? 'active' : ''}">
        <i class="${link.icon}"></i>
        ${link.label}
      </a>
    `).join('')}
  `).join('');

  const html = `
    <aside class="sidebar" id="sidebar">

      <div class="sidebar-brand">
        <div class="brand-name">Care<span>(Us)</span></div>
        <small>Portal do Beneficiário</small>
      </div>

      <div class="sidebar-user">
        <div style="
          width:40px; height:40px; border-radius:50%;
          background: linear-gradient(135deg, var(--cp-blue), var(--cp-cyan));
          border: 2px solid var(--cp-cyan);
          display:flex; align-items:center; justify-content:center;
          font-weight:900; color:#fff; font-size:15px; flex-shrink:0;
        ">A</div>
        <div>
          <div class="user-name">Ana Silva</div>
          <div class="user-level">⭐ Nível Prata</div>
        </div>
      </div>

      <nav style="flex:1; padding-top:8px;">
        ${navHTML}
      </nav>

      <div class="sidebar-points">
        <div class="pts-label">CARE POINTS</div>
        <div class="pts-val" id="sidebarPts">625</div>
        <div class="pts-sub">⭐ Prata · 875 pts para Ouro</div>
      </div>

    </aside>
  `;

  const mount = document.getElementById('sidebarMount');
  if (!mount) {
    console.warn('buildSidebar: #sidebarMount não encontrado.');
    return;
  }

  mount.innerHTML = html;
}