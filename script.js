// ====== CONFIGURACIÓN ======
// Cambia aquí el número de contacto del restaurante:
const TELEFONO = "[PON AQUÍ EL NÚMERO]";

// ====== MENÚ ======
// Para cambiar un precio o un plato, edita solo este bloque.
const menu = {
  desayunos: {
    titulo: "Desayunos",
    nota: "Todos los caldos incluyen jugo.",
    items: [
      { nombre: "Caldo de pollo o costilla", precio: "$8.000" },
      { nombre: "Changua (con leche)", precio: "$8.000" },
      { nombre: "Caldo de huevos", precio: "$7.000" },
      { nombre: "Huevos con arroz (incluye jugo)", precio: "$5.500" },
      { nombre: "Caldo a elección más huevos con arroz (incluye jugo)", precio: "$13.000" },
      { nombre: "Moñona", precio: "$12.000" },
      { nombre: "Bandeja con carne", precio: "$9.000" },
    ],
    subtitulo: "Bebidas calientes",
    bebidas: [
      { nombre: "Chocolate y café", precio: "$2.500 (para llevar: $3.000)" },
      { nombre: "Tinto", precio: "$1.200" },
    ],
  },
  lunes: {
    titulo: "Lunes",
    nota: "Todos los almuerzos incluyen arroz, plátano, ensalada, papa y jugo.",
    items: [
      { nombre: "Sopa: Cuchuco de trigo", precio: "$4.000 sola" },
      { nombre: "Principio: Lentejas, acelga" },
      { nombre: "Proteínas: Carne en bistec, pollo frito, lomo de cerdo, hígado encebollado", precio: "$13.000" },
    ],
  },
  martes: {
    titulo: "Martes",
    nota: "Todos los almuerzos incluyen arroz, plátano, ensalada, papa y jugo.",
    items: [
      { nombre: "Sopa: Plátano", precio: "$4.000 sola" },
      { nombre: "Principio: Espaguetis, mazorcada" },
      { nombre: "Proteínas: Carne asada, carne en bistec, albóndigas, pollo", precio: "$13.000" },
    ],
  },
  miercoles: {
    titulo: "Miércoles",
    nota: "Todos los almuerzos incluyen arroz, plátano, ensalada, papa y jugo.",
    items: [
      { nombre: "Sopa: Cuchuco de maíz", precio: "$4.000 sola" },
      { nombre: "Principio: Garbanzo, acelga" },
      { nombre: "Proteínas: Callo en salsa, carne en bistec, pollo frito, carne asada", precio: "$13.000" },
    ],
  },
  jueves: {
    titulo: "Jueves",
    nota: "Todos los almuerzos incluyen arroz, plátano, ensalada, papa y jugo.",
    items: [
      { nombre: "Sopa: Pasta", precio: "$4.000 sola" },
      { nombre: "Principio: Frijoles, ahuyama" },
      { nombre: "Proteínas: Chicharrón, carne en bistec, pollo frito, carne asada", precio: "$13.000" },
    ],
  },
  viernes: {
    titulo: "Viernes",
    items: [
      { nombre: "Sopa: Arroz (sin principio)", precio: "$4.000 sola" },
      { nombre: "Corrientes: Sobrebarriga, pollo, carne en bistec, carne asada con papa francesa y yuca", precio: "$13.000" },
      { nombre: "Especial Mojarra frita: con sopa, arroz, papa francesa, yuca, plátano, ensalada", precio: "$20.000" },
      { nombre: "Especial Churrasco: con arroz, francesa, guacamole, plátano, patacón, ensalada", precio: "$25.000" },
    ],
  },
  sabado: {
    titulo: "Sábado",
    items: [
      { nombre: "Sopa: Sancocho de gallina (sin principio)", precio: "$4.000 sola" },
      { nombre: "Corrientes: Sobrebarriga, pollo, carne en bistec con arroz, papa, plátano, yuca", precio: "$13.000" },
      { nombre: "Especial Gallina: con papa, yuca, plátano sudado y arroz", precio: "$15.000" },
      { nombre: "Especial Churrasco: con acompañamientos", precio: "$25.000" },
    ],
  },
  domingo: {
    titulo: "Domingos y festivos",
    items: [
      { nombre: "Sopa: Pasta (única que puede variar)", precio: "$4.000 sola" },
      { nombre: "Principio: Frijoles" },
      { nombre: "Proteínas: Sobrebarriga, pollo, carne en bistec", precio: "$13.000" },
    ],
  },
};

// Botones: [clave del menú, texto del botón]
const botones = [
  ["lunes", "Lunes"],
  ["martes", "Martes"],
  ["miercoles", "Miércoles"],
  ["jueves", "Jueves"],
  ["viernes", "Viernes"],
  ["sabado", "Sábado"],
  ["domingo", "Domingo y festivos"],
  ["desayunos", "Desayunos"],
];

// ====== FUNCIONES ======
function crearLista(items) {
  const ul = document.createElement("ul");
  items.forEach((item) => {
    const li = document.createElement("li");
    const nombre = document.createElement("span");
    nombre.textContent = item.nombre;
    li.appendChild(nombre);
    if (item.precio) {
      const precio = document.createElement("span");
      precio.className = "precio";
      precio.textContent = item.precio;
      li.appendChild(precio);
    }
    ul.appendChild(li);
  });
  return ul;
}

function mostrarMenu(clave) {
  const dia = menu[clave];
  const seccion = document.getElementById("menu");
  seccion.innerHTML = "";

  const h2 = document.createElement("h2");
  h2.textContent = dia.titulo;
  seccion.appendChild(h2);

  if (dia.nota) {
    const p = document.createElement("p");
    p.className = "nota";
    p.textContent = dia.nota;
    seccion.appendChild(p);
  }

  seccion.appendChild(crearLista(dia.items));

  if (dia.bebidas) {
    const h3 = document.createElement("h3");
    h3.textContent = dia.subtitulo;
    seccion.appendChild(h3);
    seccion.appendChild(crearLista(dia.bebidas));
  }

  document.querySelectorAll(".botones button").forEach((btn) => {
    btn.classList.toggle("activo", btn.dataset.clave === clave);
  });
}

// ====== INICIO ======
document.getElementById("telefono").textContent = TELEFONO;
document.getElementById("telefono").href = "tel:" + TELEFONO.replace(/\s+/g, "");

const contenedor = document.getElementById("botones");
botones.forEach(([clave, texto]) => {
  const btn = document.createElement("button");
  btn.textContent = texto;
  btn.dataset.clave = clave;
  btn.addEventListener("click", () => mostrarMenu(clave));
  contenedor.appendChild(btn);
});

// Al abrir, muestra el menú del día de hoy (domingo = 0, lunes = 1, ...)
const hoy = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"][new Date().getDay()];
mostrarMenu(hoy);
