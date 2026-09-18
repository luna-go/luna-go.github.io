/* ============================================================
   LUNA GO — entrada individual del blog
   Lee la dirección: entrada.html?id=...
   ============================================================ */
(function () {
  const host = document.getElementById('post');
  if (!host) return;

  const id = new URLSearchParams(location.search).get('id');
  const post = POSTS.find(p => p.id === id) || POSTS[0];

  if (!post) {
    host.innerHTML = `<p class="empty-note">Entrada no encontrada.</p>`;
    return;
  }

  const fmt = f => new Date(f + 'T00:00:00').toLocaleDateString('es-ES',
    { day: 'numeric', month: 'long', year: 'numeric' });

  document.title = `Luna Go — ${post.titulo}`;

  host.innerHTML =
    `<span class="post-date">${fmt(post.fecha)}</span>` +
    `<h1 class="post-title">${post.titulo}</h1>` +
    (post.img ? `<img class="post-cover" src="${post.img}" alt="${post.titulo}">` : '') +
    `<div class="post-body">${post.cuerpo}</div>`;
})();
