
document.addEventListener("DOMContentLoaded", function () {
    cargarProductos();
});

async function cargarProductos() {
    try {
        const response = await fetch("http://localhost:8080/productos");
        const productos = await response.json();
        mostrarProductos(productos);
    } catch (error) {
        console.error("Error al cargar productos:", error);
    }
}

function mostrarProductos(productos) {
    let productosHTML = "";
    productos.forEach(producto => {
        productosHTML += `
            <div class="producto">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio}</p>
                <button onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio})">Añadir al carrito</button>
            </div>
        `;
    });
    document.getElementById("productos").innerHTML = productosHTML;
}
