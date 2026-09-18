/* ============================================================
   LUNA GO — script de la portada
   ============================================================ */

/* ------------------------------------------------------------
   1) OBRAS DEL SLIDER  ← edita SOLO esta lista
   ------------------------------------------------------------
   Cada obra: { titulo, anio, categoria, img }
     img: ruta de la imagen (p.ej. "obras/marea.jpg").
          Si la dejas en null, se muestra un fondo de ejemplo.
   La primera es la pintura real de Luna recortada del boceto.
   ------------------------------------------------------------ */
const obras = [
  { titulo: "Sin título",     anio: 2026, categoria: "Pintura",     img: "deslizador/sin-titulo.jpg" },
  { titulo: "Marea de plata", anio: 2025, categoria: "Pintura",     img: null },
  { titulo: "Cráter",         anio: 2024, categoria: "Mural",       img: null },
  { titulo: "Eclipse íntimo", anio: 2024, categoria: "Ilustración", img: null },
  { titulo: "Fase menguante", anio: 2022, categoria: "Mural",       img: null },
];

/* colores de los puntos = los 4 tonos del brief, en ciclo */
const dotColors = ["#B192BA", "#9DA2B8", "#262448", "#6E84AC"];

/* fondos de ejemplo (solo si img === null) — lavados suaves sobre claro */
const placeholders = [
  "radial-gradient(60% 60% at 32% 30%, rgba(177,146,186,.55), transparent 60%), linear-gradient(150deg, #f4eff8, #e7ecf5)",
  "radial-gradient(55% 55% at 70% 34%, rgba(110,132,172,.5), transparent 60%), linear-gradient(200deg, #eef1f8, #f3eef7)",
  "radial-gradient(58% 54% at 48% 28%, rgba(157,162,184,.5), transparent 60%), linear-gradient(180deg, #eef0f7, #f5f0f8)",
  "radial-gradient(52% 52% at 28% 34%, rgba(177,146,186,.5), transparent 60%), linear-gradient(160deg, #f2eef8, #e9eef6)",
];

/* ------------------------------------------------------------
   2) CONSTRUIR DIAPOSITIVAS + PUNTOS
   ------------------------------------------------------------ */
const stage    = document.getElementById('stage');
const dotsWrap = document.getElementById('dots');
const caption  = document.getElementById('caption');

obras.forEach((o, i) => {
  const slide = document.createElement('article');
  slide.className = 'slide' + (i === 0 ? ' is-active' : '');
  slide.setAttribute('aria-roledescription', 'diapositiva');
  slide.setAttribute('aria-label', `${i + 1} de ${obras.length}: ${o.titulo}, ${o.anio}`);

  if (o.img) {
    const im = document.createElement('img');
    im.className = 'art';
    im.src = o.img;
    im.alt = `${o.titulo} — ${o.categoria}, ${o.anio}`;
    im.loading = i === 0 ? 'eager' : 'lazy';
    slide.appendChild(im);
  } else {
    const div = document.createElement('div');
    div.className = 'art';
    div.style.backgroundImage = placeholders[i % placeholders.length];
    slide.appendChild(div);
  }
  stage.appendChild(slide);

  const dot = document.createElement('button');
  dot.setAttribute('role', 'tab');
  dot.setAttribute('aria-label', `${o.titulo}, ${o.anio}`);
  dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
  dot.style.setProperty('--dot', dotColors[i % dotColors.length]);
  dot.addEventListener('click', () => go(i, true));
  dotsWrap.appendChild(dot);
});

const slides = [...stage.querySelectorAll('.slide')];
const dots   = [...dotsWrap.querySelectorAll('button')];

function renderCaption(o){
  caption.innerHTML = `<span class="title">${o.titulo}</span><span class="year">${o.anio}</span>`;
}
renderCaption(obras[0]);

/* ------------------------------------------------------------
   3) LÓGICA DEL CARRUSEL
   ------------------------------------------------------------ */
let idx = 0;
let timer = null;
const DUR = 6000; // ms por obra
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function go(n, manual){
  idx = (n + slides.length) % slides.length;
  slides.forEach((s, i) => s.classList.toggle('is-active', i === idx));
  dots.forEach((d, i) => d.setAttribute('aria-current', i === idx ? 'true' : 'false'));
  renderCaption(obras[idx]);
  schedule();
}
const next = m => go(idx + 1, m);
const prev = m => go(idx - 1, m);

function schedule(){
  clearTimeout(timer);
  if (reduce) return;
  timer = setTimeout(() => next(false), DUR);
}

document.querySelector('.arrow.next').addEventListener('click', () => next(true));
document.querySelector('.arrow.prev').addEventListener('click', () => prev(true));

/* teclado: flechas izquierda / derecha */
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') next(true);
  if (e.key === 'ArrowLeft')  prev(true);
});

/* pausa al pasar el cursor por la portada */
const hero = document.querySelector('.hero');
hero.addEventListener('mouseenter', () => clearTimeout(timer));
hero.addEventListener('mouseleave', () => schedule());

schedule();

/* ------------------------------------------------------------
   4) MENÚS DE CATEGORÍA — abren por hover (CSS) y por clic (aquí)
   ------------------------------------------------------------ */
const menuItems = [...document.querySelectorAll('[data-menu]')];

function closeAllMenus(){
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
    closeAllMenus();
    if (!isOpen){
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

document.addEventListener('click', closeAllMenus);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllMenus(); });

/* ------------------------------------------------------------
   5) MENÚ MÓVIL — se genera a partir del mismo nav
   ------------------------------------------------------------ */
const toggle = document.querySelector('.menu-toggle');
const panel  = document.getElementById('mobilePanel');

const cats = menuItems.map(item => ({
  nombre: item.querySelector('.nav-trigger').textContent,
  anios: [...item.querySelectorAll('.dropdown a')].map(a => a.textContent),
}));

panel.innerHTML =
  cats.map(c =>
    `<div class="mobile-group"><span>${c.nombre}</span><div class="yrs">${
      c.anios.map(y => `<a href="#">${y}</a>`).join('')
    }</div></div>`
  ).join('') +
  `<a class="mobile-link" href="https://sites.google.com/view/luna-go/portafolio" target="_blank" rel="noopener">About</a>` +
  `<a class="mobile-link" href="#">Tienda</a>`;

toggle.addEventListener('click', () => {
  const open = panel.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
