/* Cada obra:
     titulo      → nombre de la obra
     anio        → año (número)
     mes         → mes (texto; "" si no se sabe)
     cat         → slug de la categoría ("pintura" | "mural" | "ilustracion")
     medida      → técnica/medidas (texto libre; puede quedar vacío "")
     descripcion → texto sobre la obra; se ve SOLO en la galería, no en la
                   portada. Déjalo "" si no quieres descripción.
     img         → ruta de la imagen (p. ej. "obras/24/ejemplo.jpg")
     destacada   → true si quieres que salga en el slider de la portada
     venta       → true si está EN VENTA (aparece en la Tienda). false si no.
     precio      → precio a mostrar en la Tienda, p. ej. "1.200 €". "" si no aplica. */

// ==================== PINTURA ====================
const PINTURAS = [

  // 2026
  {
    titulo: "La sociedad del cansancio",
    anio: 2026,
    mes: "Abril",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre madera",
    descripcion: "",
    img: "obras/26/la_sociedad_del_cansancio_pintura_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "La invitada",
    anio: 2026,
    mes: "Enero",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre madera · 50cm x 50cm",
    descripcion: `Terminé de leer La invitada de Emma Cline después de muchas pausas, no por falta de tiempo sino por la incomodidad que me provocaba Alex: una joven frágil que deambula por un pueblo costero esperando que alguien la acoja y le dé un lugar. Mientras avanzaba en la novela, empecé a verme reflejada en ella; en Madrid, lejos de mi comunidad, a veces siento que camino por un mundo que aún no comprendo del todo, intentando acercarme desde afuera. Hubo un episodio que me golpeó especialmente: un perro aparece y desaparece sin que nadie lo note demasiado, y esa indiferencia —ser vista como algo pasajero, bonito pero prescindible— se siente como una herida silenciosa. Al cerrar el libro me invadió una tristeza inesperada: aunque no estoy sola, a veces pesa la falta de una red más amplia, de esa comunidad hecha de risas, conversaciones y presencia cotidiana. Me quedé entre la melancolía y la irritación, preguntándome qué busco aquí y si tendría sentido volver y empezar de nuevo, pero entendí que el problema no es el lugar sino la incertidumbre que me acompaña. Quizá lo que más duele no es no pertenecer, sino sentirme menos en espacios que todavía no aprendo a habitar; aun así, tal vez ese desajuste sea parte del proceso, porque construir un lugar propio siempre es más difícil que ocupar uno ajeno.`,
    img: "obras/26/la_invitada_pintura_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  
  {
    titulo: "Felipa",
    anio: 2026,
    mes: "Marzo",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre lienzo de tela · 92cm x 73cm",
    descripcion: "",
    img: "obras/26/felipa_pintura_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Habitar",
    anio: 2026,
    mes: "Julio",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre lienzo de tela · 15cm x 15cm",
    descripcion: "",
    img: "obras/26/corazon_de_nopal_pintura_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
     {
    titulo: "Hilanderas",
    anio: 2026,
    mes: "Julio",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre madera · 50cm x 50cm",
    descripcion: `Hace un par de meses, junto a Lucia planeamos esta colaboración en honor a la creación y a la importancia de la práctica textil, y sobre todo a la comunidad que se forma en torno a ella. La lana se convierte en un pretexto para dialogar y compartir, una práctica que ha atravesado el tiempo, los mitos y los territorios.

Pintura para el taller de [@istakypuma](https://www.instagram.com/istakypuma/)`,
    img: "obras/26/hilanderas_pintura_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },

  // 2025
    {
    titulo: "El invierno más largo",
    anio: 2025,
    mes: "Enero",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "60cm x 40cm",
    descripcion: "",
    img: "obras/25/murphy_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
{
    titulo: "Desde niñxs festejamos (teotitlan del valle)",
    anio: 2025,
    mes: "Enero",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre madera · 60cm x 30cm",
    descripcion: `Desde que era niña, recuerdo que la fiesta y las calendas han sido fundamentales en mi formación como ser humano que habita este planeta.

La fiesta funciona como un punto de encuentro, un espacio donde se teje comunidad y donde el trabajo cotidiano cobra sentido. En ella, los esfuerzos individuales se transforman en celebración colectiva; el tiempo y el trabajo se resignifican cuando se comparten.`,
    img: "obras/25/desde_niñxs_festejamos(teotitlan_del_valle)_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
 {
    titulo: "Las flores de mi vida (flores de mayo)",
    anio: 2025,
    mes: "Febrero",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre madera · 60cm x 30cm",
    descripcion: "",
    img: "obras/25/las_flores_de_mi_vida(flores_de_mayo)_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Entre bugambilias",
    anio: 2025,
    mes: "Abril",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre madera · 30cm x 40cm",
    descripcion: `La pregunta “¿Y ahora qué pinto?” me ha llevado por muchos caminos: momentos de alegría, otros de tristeza, melancolía, regresos al pasado… incluso a cuestionarme la vida misma. Pero, al final, agradezco todo ese proceso, porque gracias a él soy la persona que soy hoy.

Está vez he pintado un autorretrato de cuando era niña bailando el vals en el kínder de mi colonia, y al verlo me doy cuenta de todo lo que he atravesado para llegar hasta aquí. Aún sigo siendo ella, pero ahora sé cómo cuidarme y he construido un criterio propio. Aunque a veces me equivoque, cada vez doy pasos más firmes.

::Pinto mi niñez,
::camino entre memorias,
::soy raíz y flor.`,
    img: "obras/25/entre_bugambilias_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Donde no se toca fondo",
    anio: 2025,
    mes: "Junio",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre lienzo · 58cm x 48cm",
    descripcion: `No sabía que no tocaba fondopero el flotadorle daba seguridad. Nunca dejó de sentir miedo y alegría al mismo tiempo.`,
    img: "obras/25/donde_no_se_toca_fondo_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
{
    titulo: "Respirar despacio",
    anio: 2025,
    mes: "Junio",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre madera · 60cm x 60cm",
    descripcion: `Crecí entre nopales.
Aprendí a respirar lento, a guardar lo esencial.
Las espinas me enseñaron a protegerme sin cerrar el corazón.
Nutro la tierra porque ella me sostuvo primero.
No corro, no compito. Solo crezco, y dejo crecer.`,
    img: "obras/25/respirar_despacio_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Donde habita lo otro",
    anio: 2025,
    mes: "Julio",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre madera",
    descripcion: `Donde habita lo otro eso que nos nutre en silencio, nos sostiene sin pedir nada, y nos ofrece lo esencial para existir, allí pulsa lo verdaderamente vital, lo que ha sido importante desde siempre.`,
    img: "obras/25/donde_habita_lo_otro_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
 {
    titulo: "Oaxaca",
    anio: 2025,
    mes: "Octubre",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre madera · 30cm x 40cm",
    descripcion: "",
    img: "obras/25/oaxaca_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
{
    titulo: "Suelos áridos",
    anio: 2025,
    mes: "Noviembre",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre madera · 60cm x 40cm",
    descripcion: `Vivimos en suelos áridos, donde la vida parece abrirse paso con esfuerzo, y aún así aprendemos a ser como los cactus: resilientes, guardando en silencio una fuerza que no se quiebra. Entre espinas que no hieren, sino resguardan, mantenemos la capacidad de ofrecer sombra y cobijo a quienes nos rodean. Y al recordarlo, la mirada vuelve a la humanidad que, incluso en el desierto, sigue mereciendo ser cuidada.
    
    Homenaje a Joaquín Sorolla`,
    img: "obras/25/dicen_que_no_hay_guerra_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  // 2024
  /*{
    titulo: "Mas allá del cuerpo",
    anio: 2024,
    mes: "Mayo",
    lugar: "Oaxaca de Juárez, México",
    cat: "pintura",
    medida: "Acrílico sobre comal de barro · 48cmx 48cm",
    descripcion: `Obra para la exposición de comales "Tzompantli historias de barro" en la Galería "Agrograbado" 12 de julio del 24.`,
    img: "obras/24/mas_alla_del_cuerpo_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },*/
     
  {
    titulo: "Incendios",
    anio: 2024,
    mes: "Abril",
    lugar: "Ciudad de México, México",
    cat: "pintura",
    medida: "Acrílico sobre lienzo de tela · 50cm x 30cm",
    descripcion: `Los incendios han consumido gran parte de los cerros de México, causando daño a los ecostistemas, han dejado a su paso un ambiente apocalíptico, la tierra se incendia, esto causa en muchas y muchos emociones complejas, a veces nos lleva a la preguntarnos ¿qué sigue? ¿es nuestra culpa? ¿que tanto nos sirve culparnos? La tierra se incendia y nosotros también. Notas de una primavera con temperaturas altas.`,
    img: "obras/24/incendios_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
{
    titulo: "Yo te cuido",
    anio: 2024,
    mes: "Octubre",
    lugar: "Madrid, España", 
    cat: "pintura",
    medida: "Óleo sobre madera · 30cm x 20cm",
    descripcion: "",
    img: "obras/24/yo_te_cuido_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Estudio",
    anio: 2024,
    mes: "Octubre",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre tabla",
    descripcion: "",
    img: "obras/24/estudio_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Adelita",
    anio: 2024,
    mes: "Octubre",
    lugar: "Madrid, España",
    cat: "pintura",
    medida: "Óleo sobre lienzo · 30cm x 20cm",
    descripcion: "",
    img: "obras/24/el_viaje_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },

  // 2023
  {
    titulo: "La espera",
    anio: 2023,
    mes: "Agosto",
    lugar: "Ciudad de México, México",
    cat: "pintura",
    medida: "Acrílico sobre papel · 17.8cm x 25.4cm",
    descripcion: "",
    img: "obras/23/la_espera_pintura_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Estudio de color y luz",
    anio: 2023,
    mes: "Agosto",
    lugar: "Ciudad de México, México",
    cat: "pintura",
    medida: "Acrílico sobre papel · 17.8cm x 25.4cm",
    descripcion: `“Así que nunca más pasearemos tan tarde en la noche, aunque el corazón siga amando y la luna conserve el mismo brillo”. Ray Bradbury en  Crónicas Marcianas`,
    img: "obras/23/estudio_de_color_y_luz_pintura_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
{
    titulo: "La luna",
    anio: 2023,
    mes: "Octubre",
    lugar: "Ciudad de México, México",
    cat: "pintura",
    medida: "Acrílico sobre tela · 40cm x 50cm",
    descripcion: `"...ese astro solitario al que la Tierra impidió ser planeta". Fatoumata Kébé`,
    img: "obras/23/la_luna_pintura_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
{
    titulo: "Momo",
    anio: 2023,
    mes: "Octubre",
    lugar: "Ciudad de México, México",
    cat: "pintura",
    medida: "Acrílico sobre tela · 60cm x 80cm",
    descripcion: `“La fantasía no es una forma de evadirse de la realidad, sino un modo más agradable de acercarse a ella”. Michael Ende`,
    img: "obras/23/momo_pintura_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
];
