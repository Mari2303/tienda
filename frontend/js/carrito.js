let carrito = [];

function agregarAlCarrito(id, nombre, precio) {
    const productoExistente = carrito.find(p => p.id === id);
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }
    mostrarCarrito();
}

function mostrarCarrito() {
    let carritoHTML = "";
    carrito.forEach(producto => {
        carritoHTML += `
            <div>
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio} x ${producto.cantidad}</p>
                <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
            </div>
        `;
    });
    document.getElementById("carrito").innerHTML = carritoHTML;
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }

    fetch("http://localhost:8080/ordenes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productos: carrito })
    })
    .then(response => {
        if (response.ok) {
            alert("Compra realizada con éxito");
            carrito = [];
            mostrarCarrito();
        }
    })
    .catch(error => console.error("Error en la compra:", error));
}
