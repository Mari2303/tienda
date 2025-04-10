document.getElementById("formularioProducto").addEventListener("submit", function (e) {
    e.preventDefault();
    const producto = {
      nombre: document.getElementById("nombre").value.trim(),
      precio: parseFloat(document.getElementById("precio").value)
    };
    fetch("http://localhost:8080/productos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    })
    .then(response => {
      if (!response.ok) throw new Error("Error al registrar");
      return response.json();
    })
    .then(() => {
      alert("✅ Producto registrado correctamente");
      document.getElementById("formularioProducto").reset();
      bootstrap.Modal.getInstance(document.getElementById("modalRegistroProducto")).hide();
    })
    .catch(() => {
      alert("❌ Error al registrar el producto.");
    });
  });



  const productos = [
    { id: 1, nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { id: 2, nombre: "Smartphone", precio: 500, categoria: "Electrónica" },
    { id: 3, nombre: "Zapatos", precio: 50, categoria: "Moda" }
  ];

  const container = document.getElementById("productos-container");

  function mostrarProductos(lista) {
    container.innerHTML = "";
    lista.forEach(prod => {
      container.innerHTML += `
        <div class='product'>
          <h3>${prod.nombre}</h3>
          <p>Precio: $${prod.precio}</p>
          <p>Categoría: ${prod.categoria}</p>
          <button class="btn btn-sm btn-primary" onclick="editarProducto(${prod.id})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="eliminarProducto(${prod.id})">Eliminar</button>
        </div>`;
    });
  }

  function editarProducto(id) {
    const prod = productos.find(p => p.id === id);
    if (!prod) return;
    document.getElementById('editarId').value = prod.id;
    document.getElementById('editarNombre').value = prod.nombre;
    document.getElementById('editarPrecio').value = prod.precio;
    document.getElementById('editarCategoria').value = prod.categoria;
    new bootstrap.Modal(document.getElementById('editarModal')).show();
  }

  document.getElementById("formEditarProducto").addEventListener("submit", function(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById("editarId").value);
    const nombre = document.getElementById("editarNombre").value;
    const precio = parseFloat(document.getElementById("editarPrecio").value);
    const categoria = document.getElementById("editarCategoria").value;
    const index = productos.findIndex(p => p.id === id);
    if (index !== -1) {
      productos[index] = { id, nombre, precio, categoria };
      mostrarProductos(productos);
      bootstrap.Modal.getInstance(document.getElementById('editarModal')).hide();
    }
  });

  function eliminarProducto(id) {
    if (confirm("¿Estás segura de eliminar este producto?")) {
      const index = productos.findIndex(p => p.id === id);
      if (index !== -1) {
        productos.splice(index, 1);
        mostrarProductos(productos);
      }
    }
  }

  document.getElementById("searchBox").addEventListener("input", function() {
    const query = this.value.toLowerCase();
    const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(query));
    mostrarProductos(filtrados);
  });

  document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos(productos);
  });
