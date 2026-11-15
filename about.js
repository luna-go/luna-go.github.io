/* ============================================================
   LUNA GO — página About
   Renderiza el objeto ABOUT definido en data.js.
   ============================================================ */
(function () {
  const host = document.getElementById('about');
  if (!host || typeof ABOUT === 'undefined') return;

  document.title = `Luna Go — ${ABOUT.titulo}`;

   
  // convierte [texto](dirección) en un enlace
  const cuerpo = (ABOUT.cuerpo || '').replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener">$1</a>'
  );

  const retrato = ABOUT.retrato
    ? `<img class="about-portrait" src="${ABOUT.retrato}" alt="${ABOUT.titulo}">`
    : '';

  const extra = (typeof SITE !== 'undefined' && SITE.portafolioUrl)
    ? `<a class="about-extra" href="${SITE.portafolioUrl}" target="_blank" rel="noopener">Ver portafolio completo →</a>`
    : '';

  host.innerHTML =
    `<h1 class="post-title">${ABOUT.titulo}</h1>` +
    `<div class="post-body">${retrato}${cuerpo}</div>` +
    extra;
})();
