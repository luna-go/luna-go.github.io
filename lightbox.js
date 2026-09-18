/* ============================================================
   LUNA GO — lightbox (foto a pantalla completa)
   Uso desde otros scripts:  Lightbox.open(lista, indice)
     lista = [{ src, alt }, ...]
   Además, cualquier imagen con clase .post-cover o .about-portrait
   se amplía sola al hacer clic.
   ============================================================ */
window.Lightbox = (function () {
  let list = [], idx = 0, el = null, imgEl, capEl, prevBtn, nextBtn;

  function build(){
    el = document.createElement('div');
    el.className = 'lightbox';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.innerHTML =
      `<button class="lb-close" aria-label="Cerrar">×</button>` +
      `<button class="lb-nav prev" aria-label="Anterior">‹</button>` +
      `<button class="lb-nav next" aria-label="Siguiente">›</button>` +
      `<figure class="lb-fig"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>`;
    document.body.appendChild(el);
    imgEl   = el.querySelector('.lb-img');
    capEl   = el.querySelector('.lb-cap');
    prevBtn = el.querySelector('.lb-nav.prev');
    nextBtn = el.querySelector('.lb-nav.next');

    el.querySelector('.lb-close').addEventListener('click', close);
    prevBtn.addEventListener('click', e => { e.stopPropagation(); go(idx - 1); });
    nextBtn.addEventListener('click', e => { e.stopPropagation(); go(idx + 1); });
    el.addEventListener('click', e => {
      if (e.target === el || e.target.classList.contains('lb-fig')) close();
    });
    document.addEventListener('keydown', e => {
      if (!el.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(idx + 1);
      if (e.key === 'ArrowLeft')  go(idx - 1);
    });
  }

  function render(){
    const it = list[idx];
    imgEl.src = it.src;
    imgEl.alt = it.alt || '';
    capEl.textContent = it.alt || '';
    capEl.style.display = it.alt ? 'block' : 'none';
    const many = list.length > 1;
    prevBtn.style.display = many ? 'grid' : 'none';
    nextBtn.style.display = many ? 'grid' : 'none';
  }

  function go(n){ idx = (n + list.length) % list.length; render(); }

  function open(items, start){
    if (!el) build();
    list = (items || []).filter(x => x && x.src);
    if (!list.length) return;
    idx = Math.max(0, Math.min(start || 0, list.length - 1));
    render();
    el.classList.add('open');
    document.documentElement.style.overflow = 'hidden';
  }

  function close(){
    if (!el) return;
    el.classList.remove('open');
    document.documentElement.style.overflow = '';
  }

  /* imágenes sueltas que se amplían solas */
  function wireStandalone(){
    document.querySelectorAll('.post-cover, .about-portrait').forEach(im => {
      im.style.cursor = 'zoom-in';
      im.addEventListener('click', () => open([{ src: im.src, alt: im.alt }], 0));
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wireStandalone);
  } else {
    wireStandalone();
  }

  return { open, close };
})();
