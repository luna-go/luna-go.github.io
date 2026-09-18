/* ============================================================
   LUNA GO — cabecera compartida
   Genera el mismo menú en todas las páginas a partir de data.js.
   Coloca <div id="site-header"></div> donde quieras la cabecera.
   ============================================================ */
(function () {
  const mount = document.getElementById('site-header');
  if (!mount) return;

  /* --- construir los items de categoría con su desplegable de años --- */
  const cats = CATEGORIAS.map(c => `
    <div class="nav-item" data-menu>
      <button class="nav-trigger" aria-haspopup="true" aria-expanded="false">${c.nombre}</button>
      <div class="dropdown" role="menu">
        ${c.anios.map(y => `<a role="menuitem" href="galeria.html?cat=${c.slug}&anio=${y}">${y}</a>`).join('')}
      </div>
    </div>
  `).join('');

  /* --- cabecera completa --- */
  mount.outerHTML = `
    <header class="site-header">
      <a class="wordmark" href="index.html" aria-label="Luna Go — inicio">Luna Go</a>
      <nav class="nav" aria-label="Navegacion principal">
        ${cats}
        <a class="nav-link" href="${SITE.aboutUrl}" target="_blank" rel="noopener">About</a>
        <a class="nav-link" href="${SITE.tiendaUrl}">Tienda</a>
        <a class="nav-link" href="blog.html">Blog</a>
      </nav>
      <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M4 8h18M4 13h18M4 18h18" stroke="currentColor" stroke-width="1.2"/>
        </svg>
      </button>
    </header>
    <div class="mobile-panel" id="mobilePanel"></div>
  `;

  /* --- desplegables: hover (CSS) + clic (aquí) --- */
  const menuItems = [...document.querySelectorAll('[data-menu]')];
  function closeAll(){
    menuItems.forEach(m => {
      m.classList.remove('open');
      m.querySelector('.nav-trigger').setAttribute('aria-expanded', 'false');
    });
  }
  menuItems.forEach(item => {
    const btn = item.querySelector('.nav-trigger');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = item.classList.contains('open');
      closeAll();
      if (!isOpen){ item.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
    });
  });
  document.addEventListener('click', closeAll);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });

  /* --- menú móvil --- */
  const toggle = document.querySelector('.menu-toggle');
  const panel  = document.getElementById('mobilePanel');
  panel.innerHTML =
    CATEGORIAS.map(c =>
      `<div class="mobile-group"><span>${c.nombre}</span><div class="yrs">${
        c.anios.map(y => `<a href="galeria.html?cat=${c.slug}&anio=${y}">${y}</a>`).join('')
      }</div></div>`
    ).join('') +
    `<a class="mobile-link" href="${SITE.aboutUrl}" target="_blank" rel="noopener">About</a>` +
    `<a class="mobile-link" href="${SITE.tiendaUrl}">Tienda</a>` +
    `<a class="mobile-link" href="blog.html">Blog</a>`;

  toggle.addEventListener('click', () => {
    const open = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
})();
