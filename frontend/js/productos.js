
function cargarProductos() {
    fetch("http://localhost:8080/productos")
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById("productosLista");
            lista.innerHTML = "";
            data.forEach(producto => {
                const li = document.createElement("li");
                li.textContent = `${producto.nombre} - $${producto.precio}`;
                lista.appendChild(li);
            });
        })
        .catch(error => console.error("Error al obtener productos:", error));
}

document.addEventListener("DOMContentLoaded", cargarProductos);
