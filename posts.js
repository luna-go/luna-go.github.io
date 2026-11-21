/* ============================================================
   LUNA GO — ENTRADAS DEL BLOG (posts)
   ------------------------------------------------------------
   Cada entrada:
     id      → nombre corto para la dirección (entrada.html?id=...)
     titulo  → título de la entrada
     fecha   → "AAAA-MM-DD"
     resumen → frase que se ve en el listado
     img     → imagen de portada (opcional; null si no hay)
     cuerpo  → el texto, en HTML sencillo: <p>…</p>, <h2>…</h2>,
               <blockquote>…</blockquote>, <img src="obras/…">
   Este archivo se carga ANTES que data.js en blog.html y entrada.html.
   ============================================================ */
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
