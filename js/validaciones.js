// VALIDAR: devuelve un mensaje de error, o "" si el texto es correcto
function validarTexto(texto) {
  if (texto === "") return "La tarea no puede estar vacía.";
  if (texto.length > 100) return "La tarea no puede pasar de 100 caracteres.";
  return "";
}
