// CREAR: agrega una tarea nueva cuando se envía el formulario
document.getElementById("formulario").addEventListener("submit", function (evento) {
  evento.preventDefault();

  const campo = document.getElementById("texto");
  const texto = campo.value.trim();

  const tarea = { id: Date.now(), texto: texto };
  tareas.push(tarea);
  guardar();
  mostrarTareas();
  campo.value = "";
});