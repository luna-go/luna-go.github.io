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
    { nombre: "TikTok",    url: "https://tiktok.com/@luna_go_" },
    //{ nombre: "Behance",   url: "https://behance.net/tu_usuario" },
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

    <p>Actualmente vive en Madrid, España, donde estudia pintura al óleo en la Fundación Museo Sorolla y el Estudio de Alejandro Decinti. Su práctica artística se ha desplazado del mural al lienzo, explorando nuevas formas íntimas de contar historias marcadas por la experiencia migratoria y la memoria del territorio.</p>

    <p>Ha realizado murales como <em>“Sin Mirar Atrás”</em> en el Reclusorio Femenil de Tanivet, Oaxaca, y <em>“Vivas y Libres”</em> en el Instituto de la Mujer Oaxaqueña, así como proyectos de ilustración para Ora World Mandala. Participó en exposiciones colectivas como <em>“Apuntes de Luz”</em> en Madrid (2025) y en festivales internacionales de muralismo en México.</p>
  
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
  // 2026
  {
    titulo: "Sin nombre",
    anio: 2026,
    cat: "ilustracion",
    medida: "",
    descripcion: "",
    img: "obras/26/sin_nombre_ilustracion_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "La sociedad del cansancio",
    anio: 2026,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/26/la_sociedad_del_cansancio_pintura_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "La invitada",
    anio: 2026,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/26/la_invitada_pintura_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Hilanderas",
    anio: 2026,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/26/hilanderas_pintura_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Felipa",
    anio: 2026,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/26/felipa_pintura_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Corazon de nopal",
    anio: 2026,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/26/corazon_de_nopal_pintura_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },

  // 2025
  {
    titulo: "Respirar despacio",
    anio: 2025,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/25/respirar_despacio_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Oaxaca",
    anio: 2025,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/25/oaxaca_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Murphy",
    anio: 2025,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/25/murphy_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Las flores de mi vida (flores de mayo)",
    anio: 2025,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/25/las_flores_de_mi_vida(flores_de_mayo)_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Entre bugambilias",
    anio: 2025,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/25/entre bugambilias_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Donde no se toca fondo",
    anio: 2025,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/25/donde_no_se_toca_fondo_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Donde habita lo otro",
    anio: 2025,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/25/donde_habita_lo otro_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Dicen que no hay guerra",
    anio: 2025,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/25/dicen_que_no_hay_guerra_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Desde niñxs festejamos (teotitlan del valle)",
    anio: 2025,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/25/desde_niñxs_festejamos(teotitlan_del_valle)_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },

  // 2024
  {
    titulo: "Yo te cuido",
    anio: 2024,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/24/yo_te_cuido_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Volver por flores",
    anio: 2024,
    cat: "ilustracion",
    medida: "",
    descripcion: "",
    img: "obras/24/volver_por_flores_ilustracion_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Sin mirar atras",
    anio: 2024,
    cat: "mural",
    medida: "",
    descripcion: "",
    img: "obras/24/sin_mirar_atras_mural_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Sin mirar atras g",
    anio: 2024,
    cat: "mural",
    medida: "",
    descripcion: "",
    img: "obras/24/sin_mirar_atras_g_mural_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Pra crecer se leva tempo",
    anio: 2024,
    cat: "ilustracion",
    medida: "",
    descripcion: "",
    img: "obras/24/pra_crecer_se_leva_tempo_ilustracion_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Orejas",
    anio: 2024,
    cat: "mural",
    medida: "",
    descripcion: "",
    img: "obras/24/orejas_mural_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Nuestra madre (la mixteca)",
    anio: 2024,
    cat: "mural",
    medida: "",
    descripcion: "",
    img: "obras/24/nuestra_madre(la_mixteca)_mural_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Nuestra madre (la mixteca)",
    anio: 2024,
    cat: "ilustracion",
    medida: "",
    descripcion: "",
    img: "obras/24/nuestra_madre(la_mixteca)_ilustracion_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Mas alla del cuerpo",
    anio: 2024,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/24/mas_alla_del_cuerpo_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Insomnio de luna llena",
    anio: 2024,
    cat: "ilustracion",
    medida: "",
    descripcion: "",
    img: "obras/24/insomnio_de_luna_llena_ilustracion_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Incendios",
    anio: 2024,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/24/incendios_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Estudio",
    anio: 2024,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/24/estudio_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "El viaje",
    anio: 2024,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/24/el_viaje_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "El viaje",
    anio: 2024,
    cat: "ilustracion",
    medida: "",
    descripcion: "",
    img: "obras/24/el_viaje_ilustracion_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },

  // 2023
  {
    titulo: "Te de poleo",
    anio: 2023,
    cat: "mural",
    medida: "",
    descripcion: "",
    img: "obras/23/te_de_poleo_mural_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Moras y cafe",
    anio: 2023,
    cat: "mural",
    medida: "",
    descripcion: "",
    img: "obras/23/moras_y_cafe_mural_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Momo",
    anio: 2023,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/23/momo_pintura_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "La luna",
    anio: 2023,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/23/la_luna_pintura_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "La espera",
    anio: 2023,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/23/la_espera_pintura_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Fiesta oaxaqueña",
    anio: 2023,
    cat: "ilustracion",
    medida: "",
    descripcion: "",
    img: "obras/23/fiesta_oaxaqueña_ilustracion_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Estudio de color y luz",
    anio: 2023,
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/23/estudio_de_color_y_luz_pintura_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Cafe en taza",
    anio: 2023,
    cat: "mural",
    medida: "",
    descripcion: "",
    img: "obras/23/cafe_en_taza_mural_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Caer",
    anio: 2023,
    cat: "ilustracion",
    medida: "",
    descripcion: "",
    img: "obras/23/caer_ilustracion_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Bordados",
    anio: 2023,
    cat: "mural",
    medida: "",
    descripcion: "",
    img: "obras/23/bordados_mural_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
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
