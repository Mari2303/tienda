document.getElementById("formRegistro").addEventListener("submit", async function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
   

    const cliente = { nombre, email, password };

    const response = await fetch("http://localhost:8080/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente)
    });

    if (response.ok) {
        alert("Cliente registrado!");
        window.location.href = "index.html";
    }
});
