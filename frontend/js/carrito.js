

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formRegistroProducto');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const producto = {
        nombre: document.getElementById('nombre').value,
        precio: parseFloat(document.getElementById('precio').value),
        cantidad: parseInt(document.getElementById('cantidad').value),
        categoria: document.getElementById('categoria').value
      };

      fetch('http://172.30.7.20:8080/api/productos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto)
      })
      .then(response => {
        if (!response.ok) throw new Error('Error al registrar producto');
        return response.json();
      })
      .then(data => {
        alert('Producto registrado con éxito');
        form.reset();
        const modal = bootstrap.Modal.getInstance(document.getElementById('modalRegistroProducto'));
        modal.hide();
      })
      .catch(error => {
        alert('Error al registrar producto');
        console.error(error);
      });
    });
  });