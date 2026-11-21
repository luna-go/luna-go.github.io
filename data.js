/* ============================================================
   LUNA GO — DATOS DEL SITIO   (edita SOLO este archivo)
   ------------------------------------------------------------
   Aquí vive todo el contenido: el menú, las obras y los textos
   del blog. Las páginas se construyen solas a partir de esto.
   ============================================================ */

/* Ajustes generales --------------------------------------------------------- */
const SITE = {
  // Correo para consultas de compra en la Tienda. Déjalo "" para ocultarlo.
  email: "adiosalinvierno@gmail.com",
  // Enlace opcional a tu portafolio completo (se puede mostrar en About). "" = ocultar.
  portafolioUrl: "", //"https://sites.google.com/view/luna-go/portafolio",
  // Redes sociales (salen en el pie de TODAS las páginas). Añade o quita las que quieras.
  redes: [
    { nombre: "Instagram", url: "https://www.instagram.com/_luna_go_" },
    //{ nombre: "TikTok",    url: "https://tiktok.com/@luna_go_" },
  ],
};

/* SOBRE LUNA (página About) ------------------------------------------------- */
/* retrato → foto tuya (p. ej. "obras/retrato.jpg"); null si no quieres foto.
   cuerpo  → tu texto en HTML sencillo: <p>…</p>, <h2>…</h2>, etc.            */
const ABOUT = {
  titulo:  "Marisol Diaz - Luna Go",
  retrato: null,
  cuerpo: `
    <p>Nació en 1994 en la ciudad de Oaxaca, México, territorio ligado a las prácticas artísticas y comunitarias. Desde joven participó en movimientos sociales y en marchas contra políticas educativas, donde el arte se convirtió en un lenguaje de protesta. Estudió Gestión Cultural y Desarrollo Sustentable en la Universidad Autónoma Benito Juárez de Oaxaca y tomó cursos en el Centro de las Artes de San Agustín.</p>

    <p>En 2016 comenzó a pintar murales desde un enfoque poético y narrativo, buscando que el espacio público sea un lugar de encuentro y diálogo. Ha participado en festivales y proyectos artísticos en varios estados de México.</p>

    <p>Actualmente vive en Madrid, España, donde estudia pintura al óleo en la [Fundación Museo Sorolla](https://www.cultura.gob.es/msorolla/inicio.html) y el [Estudio de Alejandro Decinti](https://www.decintivillalon.com). Su práctica artística se ha desplazado del mural al lienzo, explorando nuevas formas íntimas de contar historias marcadas por la experiencia migratoria y la memoria del territorio.</p>

    <p>Ha realizado murales como <em>“Sin Mirar Atrás”</em> en el Reclusorio Femenil de Tanivet, Oaxaca, y <em>“Vivas y Libres”</em> en el Instituto de la Mujer Oaxaqueña, así como proyectos de ilustración para Ora World Mandala. Participó en exposiciones colectivas como <em>“Apuntes de Luz”</em> en Madrid (2025) y en festivales internacionales de muralismo en México.</p>
  
  `,
};

/* Categorías y años que aparecen en el menú --------------------------------- */
/* El "slug" es el nombre corto que va en la dirección (sin acentos ni espacios). */
const CATEGORIAS = [
  { nombre: "Pintura",     slug: "pintura",     anios: [2026, 2025, 2024, 2023] },
  { nombre: "Mural",       slug: "mural",       anios: [2024, 2023] },
  { nombre: "Ilustración", slug: "ilustracion", anios: [2026, 2024, 2023] },
];

/* OBRAS --------------------------------------------------------------------- */
const OBRAS = [].concat(
  typeof PINTURAS     !== 'undefined' ? PINTURAS     : [],
  typeof MURALES       !== 'undefined' ? MURALES       : [],
  typeof ILUSTRACIONES !== 'undefined' ? ILUSTRACIONES : []
);

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
