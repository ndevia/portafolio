let habilidades = [
  {nombre: "HTML", icono: "html5", alt: false}, {nombre: "CSS", icono: "css3", alt: true}, 
  {nombre: "Bootstrap", icono: "bootstrap", alt: false}, {nombre: "JavaScript", icono: "js", alt: false}, 
  {nombre: "React.js", icono: "react", alt: false}, {nombre: "Node.js", icono: "node", alt: false}, 
  {nombre: "Python", icono: "python", alt: false}, {nombre: "Java", icono: "java", alt: false}
]

let grillaHabilidades = document.querySelector(".grilla-habilidades");

habilidades.forEach((habilidad) => {
  const card = document.createElement("div");
  card.classList.add("card", "habilidad");
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
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
