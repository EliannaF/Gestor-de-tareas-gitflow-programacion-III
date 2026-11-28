//borra una tarea de la lista
//confirm(...) pregunta "¿Eliminar esta tarea?". Si cancelas, no pasa nada.
document.getElementById("lista").addEventListener("click", function (evento) {
  if (!evento.target.classList.contains("btn-eliminar")) return;

  const id = Number(evento.target.dataset.id);
  if (!confirm("¿Eliminar esta tarea?")) return;

  tareas = tareas.filter(function (t) { return t.id !== id; });
  guardar();
  mostrarTareas();
});
