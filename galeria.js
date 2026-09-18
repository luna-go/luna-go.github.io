/* ============================================================
   LUNA GO — galería por año y tipo
   Lee la dirección: galeria.html?cat=pintura&anio=2026
   Filtra OBRAS y monta un visor con la obra entera + miniaturas.
   ============================================================ */
(function () {
  const params = new URLSearchParams(location.search);
  const cat  = params.get('cat')  || CATEGORIAS[0].slug;
  const anio = parseInt(params.get('anio'), 10) || CATEGORIAS[0].anios[0];

  const titleEl   = document.getElementById('gTitle');
  const counterEl = document.getElementById('gCounter');
  const viewer    = document.getElementById('viewer');
  const metaEl    = document.getElementById('vMeta');
  const descEl    = document.getElementById('vDesc');
  const film      = document.getElementById('film');

  document.title = `Luna Go — ${nombreCategoria(cat)} ${anio}`;
  titleEl.innerHTML = `${nombreCategoria(cat)} <span class="sep">·</span> <span class="yr">${anio}</span>`;

  const obras = OBRAS.filter(o => o.cat === cat && o.anio === anio);

  /* sin obras todavía */
  if (!obras.length) {
    counterEl.textContent = '';
    viewer.innerHTML = `<div class="empty">Aún no hay obra publicada en esta sección.<br><span>Vuelve pronto.</span></div>`;
    return;
  }

  /* construir diapositivas + miniaturas */
  obras.forEach((o, i) => {
    const slide = document.createElement('figure');
    slide.className = 'v-slide' + (i === 0 ? ' is-active' : '');
    if (o.img) {
      const im = document.createElement('img');
      im.src = o.img;
      im.alt = `${o.titulo} — ${nombreCategoria(o.cat)}, ${o.anio}`;
      im.loading = i === 0 ? 'eager' : 'lazy';
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
    t.setAttribute('aria-label', `${o.titulo}, ${o.anio}`);
    if (o.img) {
      t.style.backgroundImage = `url("${o.img}")`;
    } else {
      t.style.backgroundImage = PLACEHOLDERS[i % PLACEHOLDERS.length];
    }
    t.addEventListener('click', () => go(i));
    film.appendChild(t);
  });

  const slides = [...viewer.querySelectorAll('.v-slide')];
  const thumbs = [...film.querySelectorAll('.thumb')];
  let idx = 0;

  function render(){
    slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    thumbs.forEach((t, i) => t.classList.toggle('is-active', i === idx));
    const o = obras[idx];
    metaEl.innerHTML =
      `<span class="t">${o.titulo}</span>` +
      `<span class="y">${o.anio}</span>` +
      (o.medida ? `<span class="m">${o.medida}</span>` : '');
    descEl.textContent = o.descripcion || '';
    descEl.style.display = o.descripcion ? 'block' : 'none';
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
