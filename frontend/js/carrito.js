const carritoLista = document.getElementById("carritoLista");
const totalElemento = document.getElementById("total");
const finalizarCompra = document.getElementById("finalizarCompra");
const modal = document.getElementById("modalCompra");
const cancelarModal = document.getElementById("cancelarModal");
const formCompra = document.getElementById("formCompra");

// Productos en carrito (mock)
let productos = [
  { nombre: "Teclado", cantidad: 2, precio: 20 },
  { nombre: "Mouse", cantidad: 1, precio: 15 }
];

function actualizarCarrito() {
  carritoLista.innerHTML = "";
  let total = 0;

  productos.forEach((prod, index) => {
    total += prod.precio * prod.cantidad;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="text-center">${prod.nombre}</td>
      <td class="text-center">${prod.cantidad}</td>
      <td class="text-center">$${prod.precio}</td>
      <td class="text-center">
        <button onclick="eliminarProducto(${index})" class="text-red-600">Eliminar</button>
      </td>
    `;
    carritoLista.appendChild(row);
  });

  totalElemento.textContent = `$${total.toFixed(2)}`;
}

function eliminarProducto(index) {
  productos.splice(index, 1);
  actualizarCarrito();
}

finalizarCompra.addEventListener("click", () => {
  if (productos.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  modal.classList.remove("hidden");
});

cancelarModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

formCompra.addEventListener("submit", async (e) => {
  e.preventDefault();

  const [nombreInput, direccionInput, metodoPagoInput] = formCompra.elements;

  const datosCompra = {
    nombreCliente: nombreInput.value,
    direccion: direccionInput.value,
    metodoPago: metodoPagoInput.value,
    detalles: productos.map(prod => ({
      nombreProducto: prod.nombre,
      cantidad: prod.cantidad,
      precio: prod.precio
    }))
  };

  try {
    const response = await fetch("http://localhost:8080/api/ordenes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datosCompra)
    });

    if (!response.ok) throw new Error("Error en la compra");

    alert("Compra realizada con éxito ✅");
    productos = [];
    actualizarCarrito();
    modal.classList.add("hidden");
  } catch (error) {
    console.error(error);
    alert("Hubo un problema al realizar la compra.");
  }
});

actualizarCarrito();
