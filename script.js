// Función que se utiliza cuando el usuario hace clic en el botón "Haz clic aquí"
function mostrarMensaje() {
  // Busca el elemento con id="modal" y cambia su estilo para mostrarlo como flex
  document.getElementById("modal").style.display = "flex";
}

// Función que se ejecuta al hacer clic en el botón "Cerrar" dentro del modal
function cerrarModal() {
  // Oculta el modal cambiando su display a "none"
  document.getElementById("modal").style.display = "none";
}