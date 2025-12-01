// agregar proyectos de manera dinámica
let proyectos = [
  {nombre: "Ciberseguridad", descripcion: "Sitio web informativo que entrega tips sobre ciberseguridad.", tecnologias: ["HTML", "CSS", "Bootstrap", "JavaScript"]},
  {nombre: "Portafolio", descripcion: "Portafolio de productos para mostrar proyectos y dar a conocer un poco sobre mí.", tecnologias: ["HTML", "CSS", "Bootstrap", "JavaScript", "JQuery"]},
  {nombre: "Todo List", descripcion: "Lista de tareas que permite registrar tareas pendientes y eliminarlas una vez que han sido finalizadas.", tecnologias: ["HTML", "CSS", "Bootstrap", "JavaScript"]},
  {nombre: "E-commerce", descripcion: "Simulador de E-commerce que muestra los productos obtenidos desde una API externa.", tecnologias: ["HTML", "CSS", "Bootstrap", "JavaScript"]}
];

// helper para eliminar espacios y guiones que pueda tener el nombre del proyecto y normalizar el nombre para la imagen que se recibe en src 
const normalizarTexto = (nombreProyecto) => {
  return nombreProyecto.replace(" ", "").replace("-", "").toLowerCase();
};

const contenedorProyectos = document.querySelector(".proyectos-contenedor");

proyectos.forEach((proyecto) => {
  const div = document.createElement("div");
  div.classList.add("col-12", "col-lg-6", "mb-5");
  // card
  const card = document.createElement("div");
  card.classList.add("card", "card-proyecto", "my-3");
  // imagen
  const imagen = document.createElement("img");
  const textoImagen = normalizarTexto(proyecto.nombre);
  
  imagen.src = `./assets/img/portada_${textoImagen}.png`;
  imagen.alt = `imagen proyecto ${proyecto.nombre.toLowerCase()}`;
  imagen.classList.add("card-img-top", "portada-proyecto", "rounded-top");
  // card-body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "p-3", "p-md-5");
  // título
  const titulo = document.createElement("h5");
  titulo.classList.add("card-title", "fs-4", "fw-bold", "mb-4");
  titulo.textContent = proyecto.nombre;
  // descripción
  const descripcion = document.createElement("p");
  descripcion.classList.add("card-text");
  descripcion.textContent = proyecto.descripcion;
  // tecnologías
  const tecnologias = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = "Tecnologías utilizadas: ";
  tecnologias.append(strong, proyecto.tecnologias.join(", "), ".");
  // links 
  const contenedorBotones = document.createElement("div");
  contenedorBotones.classList.add("text-center", "mt-5");
  // link a GitHub Pages
  const botonProyecto = document.createElement("a");
  botonProyecto.classList.add("btn", "btn-secondary", "fondo-secundario", "border-0", "mx-2", "fw-bold");
  botonProyecto.href = `https://ndevia.github.io/${proyecto.nombre.toLowerCase()}/`;
  botonProyecto.target = "_blank";
  botonProyecto.rel = "noopener noreferrer";
  botonProyecto.textContent = "Ver Proyecto";
  // link a repositorio en GitHub
  const botonCodigo = document.createElement("a");
  botonCodigo.classList.add("btn", "btn-secondary", "fondo-primario", "border-0", "mx-2", "fw-bold");
  botonCodigo.href = `https://github.com/ndevia/${proyecto.nombre.toLowerCase()}/`;
  botonCodigo.target = "_blank";
  botonCodigo.rel = "noopener noreferrer";
  botonCodigo.textContent = "Ver Código";

  contenedorBotones.append(botonProyecto, botonCodigo);
  cardBody.append(titulo, descripcion, tecnologias, contenedorBotones);
  card.append(imagen, cardBody);
  div.appendChild(card);
  contenedorProyectos.appendChild(div);
});


// agregar habilidades de manera dinámica
let habilidades = [
  {nombre: "HTML", icono: "html5", alt: false}, {nombre: "CSS", icono: "css3", alt: true}, 
  {nombre: "Bootstrap", icono: "bootstrap", alt: false}, {nombre: "JavaScript", icono: "js", alt: false}, 
  {nombre: "React.js", icono: "react", alt: false}, {nombre: "Node.js", icono: "node", alt: false}, 
  {nombre: "Python", icono: "python", alt: false}, {nombre: "Java", icono: "java", alt: false}
];

let grillaHabilidades = document.querySelector(".grilla-habilidades");

habilidades.forEach((habilidad) => {
  const card = document.createElement("div");
  card.classList.add("card", "fondo-terciario", "texto-fuente", "habilidad");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "text-center", "p-0");
  const iconoHabilidad = document.createElement("i");
  if (habilidad.alt) {
    iconoHabilidad.classList.add("fa-brands", `fa-${habilidad.icono}-alt`, "icono", "fs-5");
  } else {
    iconoHabilidad.classList.add("fa-brands", `fa-${habilidad.icono}`, "icono", "fs-5");
  }
  cardBody.appendChild(iconoHabilidad);
  const textoHabilidad = document.createElement("p");
  textoHabilidad.textContent = habilidad.nombre;
  cardBody.appendChild(textoHabilidad);
  card.appendChild(cardBody);
  grillaHabilidades.appendChild(card);
})


// JQuery
$(document).ready(function() {
  $(".habilidad").mouseenter(function() {
    $(".icono", this).addClass("fa-beat");
  }).mouseleave(function() {
    $(".icono", this).removeClass("fa-beat");
  });
});
