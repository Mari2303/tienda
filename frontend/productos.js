
  // ✅ Cargar productos desde el backend
  async function cargarProductos() {
    try {
        const respuesta = await fetch('http://localhost:8080/productos');
        const productos = await respuesta.json();
        let tabla = document.getElementById("productosTable");
        tabla.innerHTML = ""; // Limpiar la tabla

        productos.forEach(producto => {
            let fila = `<tr>
                <td>${producto.id}</td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>
                    <button onclick="editarProducto(${producto.id}, '${producto.nombre}', ${producto.precio})">Editar</button>
                    <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
                </td>
            </tr>`;
            tabla.innerHTML += fila;
        });
    } catch (error) {
        console.error("Error cargando productos:", error);
    }
}

// ✅ Agregar o actualizar producto
document.getElementById("productoForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    let id = document.getElementById("productoId").value;
    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;
    let url = 'http://localhost:8080/productos';
    let metodo = 'POST';

    if (id) {  // Si hay un ID, es una actualización
        url += `/${id}`;
        metodo = 'PUT';
    }

    try {
        await fetch(url, {
            method: metodo,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, precio })
        });

        document.getElementById("productoForm").reset(); // Limpiar el formulario
        document.getElementById("productoId").value = "";
        document.getElementById("formTitle").textContent = "Agregar Producto";
        document.getElementById("cancelarEdicion").style.display = "none";
        
        cargarProductos(); // Recargar la tabla
    } catch (error) {
        console.error("Error guardando producto:", error);
    }
});

// ✅ Editar un producto
function editarProducto(id, nombre, precio) {
    document.getElementById("productoId").value = id;
    document.getElementById("nombre").value = nombre;
    document.getElementById("precio").value = precio;
    document.getElementById("formTitle").textContent = "Editar Producto";
    document.getElementById("cancelarEdicion").style.display = "inline-block";
}

// ✅ Cancelar edición
document.getElementById("cancelarEdicion").addEventListener("click", function() {
    document.getElementById("productoForm").reset();
    document.getElementById("productoId").value = "";
    document.getElementById("formTitle").textContent = "Agregar Producto";
    this.style.display = "none";
});

// ✅ Eliminar un producto
async function eliminarProducto(id) {
    if (confirm("¿Seguro que quieres eliminar este producto?")) {
        try {
            await fetch(`http://localhost:8080/productos/${id}`, { method: 'DELETE' });
            cargarProductos(); // Recargar la tabla
        } catch (error) {
            console.error("Error eliminando producto:", error);
        }
    }
}

// Cargar productos al iniciar la página
window.onload = cargarProductos;