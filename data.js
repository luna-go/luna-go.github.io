/* ============================================================
   LUNA GO — DATOS DEL SITIO   (edita SOLO este archivo)
   ------------------------------------------------------------
   Aquí vive todo el contenido: el menú, las obras y los textos
   del blog. Las páginas se construyen solas a partir de esto.
   ============================================================ */

/* Ajustes generales --------------------------------------------------------- */
const SITE = {
  // Correo para consultas de compra en la Tienda. Déjalo "" para ocultarlo.
  email: "hola@lunago.art",
  // Enlace opcional a tu portafolio completo (se puede mostrar en About). "" = ocultar.
  portafolioUrl: "https://sites.google.com/view/luna-go/portafolio",
  // Redes sociales (salen en el pie de TODAS las páginas). Añade o quita las que quieras.
  redes: [
    { nombre: "Instagram", url: "https://instagram.com/tu_usuario" },
    { nombre: "TikTok",    url: "https://tiktok.com/@tu_usuario" },
    { nombre: "Behance",   url: "https://behance.net/tu_usuario" },
  ],
};

/* SOBRE LUNA (página About) ------------------------------------------------- */
/* retrato → foto tuya (p. ej. "obras/retrato.jpg"); null si no quieres foto.
   cuerpo  → tu texto en HTML sencillo: <p>…</p>, <h2>…</h2>, etc.            */
const ABOUT = {
  titulo:  "Sobre Luna Go",
  retrato: null,
  cuerpo: `
    <p>Luna Go (México, 1998) es pintora, muralista e ilustradora. Su obra explora el cuerpo, el descanso y el paisaje a través de una paleta nocturna donde el verde se contamina de violeta.</p>
    <p>Trabaja entre el lienzo íntimo y la pared de gran formato, buscando ese momento en que la figura y su entorno se funden en una misma penumbra.</p>
    <p>Ha expuesto en espacios independientes y realizado murales por encargo. Actualmente desarrolla una serie sobre el reposo a plena luz del día.</p>
  `,
};

/* Categorías y años que aparecen en el menú --------------------------------- */
/* El "slug" es el nombre corto que va en la dirección (sin acentos ni espacios). */
const CATEGORIAS = [
  { nombre: "Pintura",     slug: "pintura",     anios: [2026, 2025, 2024, 2023] },
  { nombre: "Mural",       slug: "mural",       anios: [2025, 2024, 2022] },
  { nombre: "Ilustración", slug: "ilustracion", anios: [2026, 2024, 2023] },
];

/* OBRAS --------------------------------------------------------------------- */
/* Cada obra:
     titulo    → nombre de la obra
     anio      → año (número)
     cat       → slug de la categoría ("pintura" | "mural" | "ilustracion")
     medida    → técnica/medidas (texto libre; puede quedar vacío "")
     descripcion → texto sobre la obra; se ve SOLO en la galería, no en la
                   portada. Déjalo "" si no quieres descripción.
     img       → ruta de la imagen (p. ej. "obras/marea.jpg"); null = ejemplo
     destacada → true si quieres que salga en el slider de la portada
     venta     → true si está EN VENTA (aparece en la Tienda). false si no.
     precio    → precio a mostrar en la Tienda, p. ej. "1.200 €". "" si no aplica. */
const OBRAS = [
  {
    titulo: "Sin título", anio: 2026, cat: "pintura",
    medida: "Acrílico sobre tela · 100×80 cm",
    descripcion: "Una figura descansa entre nopales, mecida por una penumbra violeta. El verde del desierto se contamina de morado hasta volverse refugio: un retrato del reposo a plena luz del día.",
    img: "obras/sin-titulo.jpg", destacada: true,
    venta: true, precio: "1.800 €",
  },
  {
    titulo: "Luz de nopal", anio: 2026, cat: "pintura",
    medida: "Acrílico sobre tela",
    descripcion: "",
    img: null, destacada: false,
    venta: false, precio: "",
  },
  {
    titulo: "Marea de plata", anio: 2025, cat: "pintura",
    medida: "Óleo sobre tela",
    descripcion: "",
    img: null, destacada: true,
    venta: true, precio: "1.200 €",
  },
  {
    titulo: "Cráter", anio: 2024, cat: "mural",
    medida: "Acrílico · 4×3 m",
    descripcion: "",
    img: null, destacada: true,
    venta: false, precio: "",
  },
  {
    titulo: "Vía láctea", anio: 2024, cat: "mural",
    medida: "Acrílico",
    descripcion: "",
    img: null, destacada: false,
    venta: false, precio: "",
  },
  {
    titulo: "Eclipse íntimo", anio: 2026, cat: "ilustracion",
    medida: "Tinta y acuarela",
    descripcion: "",
    img: null, destacada: false,
    venta: true, precio: "180 €",
  },
  {
    titulo: "Fase menguante", anio: 2023, cat: "ilustracion",
    medida: "Grafito y gouache",
    descripcion: "",
    img: null, destacada: false,
    venta: false, precio: "",
  },
];

/* BLOG / DIARIO ------------------------------------------------------------- */
/* Cada entrada:
     id      → nombre corto para la dirección (entrada.html?id=...)
     titulo  → título de la entrada
     fecha   → "AAAA-MM-DD"
     resumen → frase que se ve en el listado
     img     → imagen de portada (opcional; null si no hay)
     cuerpo  → el texto, en HTML sencillo: <p>…</p>, <h2>…</h2>,
               <blockquote>…</blockquote>, <img src="obras/…">              */
const POSTS = [
  {
    id: "entre-nopales",
    titulo: "Entre nopales",
    fecha: "2026-06-12",
    resumen: "Notas sobre la serie que empezó con una siesta bajo el sol y terminó en morados imposibles.",
    img: "obras/sin-titulo.jpg",
    cuerpo: `
      <p>Empecé esta pieza pensando en el descanso: ese momento en que el cuerpo se rinde al suelo y el paisaje sigue latiendo alrededor. Los nopales, que en el desierto parecen guardianes, aquí se vuelven almohada.</p>
      <h2>El color como refugio</h2>
      <p>Quise que los verdes se contaminaran de violeta, como si la tarde estuviera cayendo dentro de la propia planta. El morado no es realista, pero es honesto: así se siente la penumbra cuando cierras los ojos a mediodía.</p>
      <blockquote>Pintar es decidir qué luz merece quedarse.</blockquote>
      <p>Seguiré esta línea durante el resto del año. Si te interesa el proceso, iré publicando bocetos y estados intermedios por aquí.</p>
    `,
  },
  {
    id: "sobre-los-murales",
    titulo: "Pintar en grande",
    fecha: "2026-03-02",
    resumen: "Lo que aprendí saltando del lienzo de mesa a una pared de cuatro metros.",
    img: null,
    cuerpo: `
      <p>El mural obliga a otra relación con el tiempo y con el cuerpo. Ya no pintas con la muñeca: pintas con los brazos, con la espalda, a veces con toda la persona subida a un andamio.</p>
      <p>La escala cambia también la mirada de quien pasa. Un cuadro se contempla; un mural se habita.</p>
    `,
  },
];

/* Utilidades compartidas (no hace falta tocar) ------------------------------ */
const DOT_COLORS = ["#B192BA", "#9DA2B8", "#262448", "#6E84AC"];

const PLACEHOLDERS = [
  "radial-gradient(60% 60% at 32% 30%, rgba(177,146,186,.55), transparent 60%), linear-gradient(150deg, #f4eff8, #e7ecf5)",
  "radial-gradient(55% 55% at 70% 34%, rgba(110,132,172,.5), transparent 60%), linear-gradient(200deg, #eef1f8, #f3eef7)",
  "radial-gradient(58% 54% at 48% 28%, rgba(157,162,184,.5), transparent 60%), linear-gradient(180deg, #eef0f7, #f5f0f8)",
  "radial-gradient(52% 52% at 28% 34%, rgba(177,146,186,.5), transparent 60%), linear-gradient(160deg, #f2eef8, #e9eef6)",
];

function nombreCategoria(slug){
  const c = CATEGORIAS.find(c => c.slug === slug);
  return c ? c.nombre : slug;
}
