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
    mes: "",
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
    mes: "",
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
    mes: "",
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
    mes: "",
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/26/felipa_pintura_26.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Corazón de nopal",
    anio: 2026,
    mes: "",
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
    mes: "",
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
    mes: "",
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
    mes: "",
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
    mes: "",
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
    mes: "",
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/25/entre_bugambilias_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Donde no se toca fondo",
    anio: 2025,
    mes: "",
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
    mes: "",
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/25/donde_habita_lo_otro_pintura_25.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Dicen que no hay guerra",
    anio: 2025,
    mes: "",
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
    mes: "",
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
    mes: "",
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/24/yo_te_cuido_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Mas allá del cuerpo",
    anio: 2024,
    mes: "",
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/24/mas_alla_del_cuerpo_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Incendios",
    anio: 2024,
    mes: "",
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
    mes: "",
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
    mes: "",
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/24/el_viaje_pintura_24.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },

  // 2023
  {
    titulo: "Momo",
    anio: 2023,
    mes: "",
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
    mes: "",
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
    mes: "",
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/23/la_espera_pintura_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
  {
    titulo: "Estudio de color y luz",
    anio: 2023,
    mes: "",
    cat: "pintura",
    medida: "",
    descripcion: "",
    img: "obras/23/estudio_de_color_y_luz_pintura_23.jpg",
    destacada: false,
    venta: false,
    precio: ""
  },
];
