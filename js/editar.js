// ACTUALIZAR: cambia el texto de una tarea existente
document.getElementById("lista").addEventListener("click", function (evento) {
  if (!evento.target.classList.contains("btn-editar")) return;

  const id = Number(evento.target.dataset.id);
  const tarea = tareas.find(function (t) { return t.id === id; });

  const nuevoTexto = prompt("Edita la tarea:", tarea.texto);
  if (nuevoTexto === null) return;

  const error = validarTexto(nuevoTexto.trim());
  if (error) {
    alert(error);
    return;
  }

  tarea.texto = nuevoTexto.trim();
  guardar();
  mostrarTareas();
});