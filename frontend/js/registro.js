// JS para abrir modal y registrar productos mediante una API REST

document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("abrirModalRegistro");
  const modal = document.getElementById("modalRegistroProducto");
  const closeModalBtn = document.getElementById("cerrarModal");
  const formulario = document.getElementById("formularioProducto");

  // Abrir modal
  openModalBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
  });

  // Cerrar modal
  closeModalBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
  });

  // Registro de producto
  if (formulario) {
      formulario.addEventListener("submit", function (event) {
          event.preventDefault();

          const nombre = document.getElementById("nombre").value;
          const precio = parseFloat(document.getElementById("precio").value);
          const descripcion = document.getElementById("descripcion").value;

          const producto = {
              nombre,
              precio,
              descripcion,
          };

          fetch("http://localhost:8080/api/productos", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(producto),
          })
              .then((response) => {
                  if (!response.ok) throw new Error("Error al registrar producto");
                  return response.json();
              })
              .then(() => {
                  alert("✅ Producto registrado correctamente");
                  formulario.reset();
                  modal.classList.add("hidden");
              })
              .catch((error) => {
                  console.error(error);
                  alert("❌ Hubo un error al registrar el producto");
              });
      });
  }
});

  