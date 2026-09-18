/* ============================================================
   LUNA GO — tienda
   Muestra en un visor SOLO las obras con venta:true, con su precio.
   Marca las obras en venta desde data.js (campos venta y precio).
   ============================================================ */
(function () {
  const counterEl = document.getElementById('gCounter');
  const viewer    = document.getElementById('viewer');
  const metaEl    = document.getElementById('vMeta');
  const subEl     = document.getElementById('vSub');
  const film      = document.getElementById('film');
  if (!viewer) return;

  const obras = OBRAS.filter(o => o.venta);

  /* sin obras en venta */
  if (!obras.length) {
    counterEl.textContent = '';
    viewer.innerHTML = `<div class="empty">No hay obra en venta ahora mismo.<br><span>Vuelve pronto.</span></div>`;
    return;
  }

  const lbList = [];
  obras.forEach((o, i) => {
    const slide = document.createElement('figure');
    slide.className = 'v-slide' + (i === 0 ? ' is-active' : '');
    if (o.img) {
      const im = document.createElement('img');
      im.src = o.img;
      im.alt = `${o.titulo} — ${nombreCategoria(o.cat)}, ${o.anio}`;
      im.loading = i === 0 ? 'eager' : 'lazy';
      const myIdx = lbList.length;
      lbList.push({ src: o.img, alt: im.alt });
      im.addEventListener('click', () => Lightbox.open(lbList, myIdx));
      slide.appendChild(im);
    } else {
      const d = document.createElement('div');
      d.className = 'v-ph';
      d.style.backgroundImage = PLACEHOLDERS[i % PLACEHOLDERS.length];
      slide.appendChild(d);
    }
    viewer.appendChild(slide);

    const t = document.createElement('button');
    t.className = 'thumb' + (i === 0 ? ' is-active' : '');
    t.setAttribute('aria-label', `${o.titulo}, ${o.precio}`);
    t.style.backgroundImage = o.img ? `url("${o.img}")` : PLACEHOLDERS[i % PLACEHOLDERS.length];
    t.addEventListener('click', () => go(i));
    film.appendChild(t);
  });

  const slides = [...viewer.querySelectorAll('.v-slide')];
  const thumbs = [...film.querySelectorAll('.thumb')];
  const email  = (typeof SITE !== 'undefined' && SITE.email) ? SITE.email : '';
  let idx = 0;

  function render(){
    slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    thumbs.forEach((t, i) => t.classList.toggle('is-active', i === idx));
    const o = obras[idx];
    metaEl.innerHTML =
      `<div class="v-line"><span class="t">${o.titulo}</span>` +
      `<span class="y">${o.anio}</span>` +
      (o.precio ? `<span class="price">${o.precio}</span>` : '') +
      `</div>`;
    subEl.innerHTML =
      (o.medida ? `<span class="med">${o.medida}</span>` : '') +
      (email ? `<a class="buy" href="mailto:${email}?subject=${encodeURIComponent('Consulta: ' + o.titulo)}">Escríbeme para adquirirla</a>` : '');
    counterEl.textContent =
      String(idx + 1).padStart(2, '0') + ' / ' + String(obras.length).padStart(2, '0');
    thumbs[idx].scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }
  function go(n){ idx = (n + slides.length) % slides.length; render(); }
  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);

  document.getElementById('vNext').addEventListener('click', next);
  document.getElementById('vPrev').addEventListener('click', prev);
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft')  prev();
  });

  render();
})();
