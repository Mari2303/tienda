document.getElementById("form-producto").addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let precio = document.getElementById("precio").value;

    let producto = {
        nombre: nombre,
        precio: parseFloat(precio)
    };

    fetch("http://localhost:8080/api/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(producto)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("mensaje").textContent = "Producto registrado con éxito!";
        document.getElementById("form-producto").reset();
    })
    .catch(error => console.error("Error registrando producto:", error));
});
