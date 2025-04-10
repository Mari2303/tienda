document.getElementById("registroForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje");

    const clienteData = { nombre, email };

    try {
      const response = await fetch("http://localhost:8080/clientes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(clienteData)
      });

      if (response.ok) {
        mensaje.textContent = "✅ Registro exitoso";
        mensaje.style.color = "#28a745";
        setTimeout(() => {
          window.location.href = "index.html";
        }, 1500);
      } else {
        mensaje.textContent = "❌ Error en el registro";
        mensaje.style.color = "#dc3545";
      }
    } catch (error) {
      mensaje.textContent = "❌ Error de conexión";
      mensaje.style.color = "#dc3545";
      console.error("Error:", error);
    }
  });