// Datos de la aplicación y guardado en el navegador (localStorage)
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function guardar() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function mostrarMensaje(texto) {
  document.getElementById("mensaje").textContent = texto;
}
