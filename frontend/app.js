
async function cargarClientes() {
    const response = await fetch('http://localhost:8080/clientes');
    const clientes = await response.json();
    const tabla = document.getElementById('clientes-table');
    clientes.forEach(cliente => {
        const fila = `<tr>
            <td>${cliente.idCliente}</td>
            <td>${cliente.nombre}</td>
            <td>${cliente.email}</td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}
cargarClientes();