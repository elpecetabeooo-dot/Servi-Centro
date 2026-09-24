document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  // Registrar y entrar directamente
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const nuevoUsuario = document.getElementById("nuevoUsuario").value;
    const nuevaContraseña = document.getElementById("nuevaContraseña").value;

    if (nuevoUsuario && nuevaContraseña) {
      // Guardar usuario en localStorage
      localStorage.setItem(nuevoUsuario, nuevaContraseña);
      alert("Cuenta creada ✅ Bienvenido, " + nuevoUsuario);

      // Redirigir a la página 2
      window.location.href = "pagina2.html";
    }
  });
});