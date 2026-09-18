/* ============================================================
   LUNA GO — slider de la portada (obras destacadas)
   Marca una obra con destacada:true en data.js para que aparezca.
   ============================================================ */
(function () {
  const stage    = document.getElementById('stage');
  const dotsWrap = document.getElementById('dots');
  const caption  = document.getElementById('caption');
  if (!stage) return;

  let lista = OBRAS.filter(o => o.destacada);
  if (!lista.length) lista = OBRAS.slice(0, 5);

  const lbList = [];
  lista.forEach((o, i) => {
    const slide = document.createElement('article');
    slide.className = 'slide' + (i === 0 ? ' is-active' : '');
    slide.setAttribute('aria-roledescription', 'diapositiva');
    slide.setAttribute('aria-label', `${i + 1} de ${lista.length}: ${o.titulo}, ${o.anio}`);

    if (o.img) {
      const im = document.createElement('img');
      im.className = 'art'; im.src = o.img;
      im.alt = `${o.titulo} — ${nombreCategoria(o.cat)}, ${o.anio}`;
      im.loading = i === 0 ? 'eager' : 'lazy';
      const myIdx = lbList.length;
      lbList.push({ src: o.img, alt: im.alt });
      im.addEventListener('click', () => Lightbox.open(lbList, myIdx));
      slide.appendChild(im);
    } else {
      const div = document.createElement('div');
      div.className = 'art';
      div.style.backgroundImage = PLACEHOLDERS[i % PLACEHOLDERS.length];
      slide.appendChild(div);
    }
    stage.appendChild(slide);

    const dot = document.createElement('button');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `${o.titulo}, ${o.anio}`);
    dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
    dot.style.setProperty('--dot', DOT_COLORS[i % DOT_COLORS.length]);
    dot.addEventListener('click', () => go(i));
    dotsWrap.appendChild(dot);
  });

  const slides = [...stage.querySelectorAll('.slide')];
  const dots   = [...dotsWrap.querySelectorAll('button')];
  const setCap = o => caption.innerHTML = `<span class="title">${o.titulo}</span><span class="year">${o.anio}</span>`;
  setCap(lista[0]);

  let idx = 0, timer = null;
  const DUR = 6000;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function go(n){
    idx = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
    dots.forEach((d, i) => d.setAttribute('aria-current', i === idx ? 'true' : 'false'));
    setCap(lista[idx]);
    schedule();
  }
  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);
  function schedule(){ clearTimeout(timer); if (!reduce) timer = setTimeout(next, DUR); }

  document.querySelector('.arrow.next').addEventListener('click', next);
  document.querySelector('.arrow.prev').addEventListener('click', prev);
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft')  prev();
  });
  const hero = document.querySelector('.hero');
  hero.addEventListener('mouseenter', () => clearTimeout(timer));
  hero.addEventListener('mouseleave', schedule);
  schedule();
})();
