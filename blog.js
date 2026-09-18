/* ============================================================
   LUNA GO — listado del blog
   ============================================================ */
(function () {
  const list = document.getElementById('postList');
  if (!list) return;

  const fmt = f => new Date(f + 'T00:00:00').toLocaleDateString('es-ES',
    { day: 'numeric', month: 'long', year: 'numeric' });

  const posts = [...POSTS].sort((a, b) => b.fecha.localeCompare(a.fecha));

  if (!posts.length) {
    list.innerHTML = `<p class="empty-note">Todavía no hay entradas.</p>`;
    return;
  }

  list.innerHTML = posts.map(p => `
    <a class="post-card" href="entrada.html?id=${p.id}">
      <div class="pc-thumb" style="background-image:${p.img ? `url('${p.img}')` : PLACEHOLDERS[0]}"></div>
      <div class="pc-body">
        <span class="pc-date">${fmt(p.fecha)}</span>
        <h2 class="pc-title">${p.titulo}</h2>
        <p class="pc-sum">${p.resumen}</p>
        <span class="pc-more">Leer</span>
      </div>
    </a>
  `).join('');
})();
