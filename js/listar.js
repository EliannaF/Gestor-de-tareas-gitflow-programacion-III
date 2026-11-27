// LEER: muestra todas las tareas en pantalla
function mostrarTareas() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  if (tareas.length === 0) {
    lista.innerHTML = '<li class="vacio">No hay tareas todavía.</li>';
    return;
  }

  tareas.forEach(function (tarea) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tarea.texto;

    const botones = document.createElement("div");
    botones.innerHTML =
      '<button class="btn-editar" data-id="' + tarea.id + '">Editar</button> ' +
      '<button class="btn-eliminar" data-id="' + tarea.id + '">Eliminar</button>';

    li.append(span, botones);
    lista.appendChild(li);
  });
}

mostrarTareas();
