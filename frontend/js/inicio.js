function applyFilters() {
    const search = document.getElementById('search-box').value;
    const category = document.getElementById('category').value;
    const minPrice = document.getElementById('min-price').value;
    const maxPrice = document.getElementById('max-price').value;
    const stock = document.getElementById('stock').value;
    
    const filters = { search, category, minPrice, maxPrice, stock };
    
    fetch('/api/productos/filtrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filters)
    })
    .then(response => response.json())
    .then(data => {
        updateProductTable(data);
    })
    .catch(error => console.error('Error al filtrar productos:', error));
}

function fetchProducts() {
    fetch('/api/productos')
    .then(response => response.json())
    .then(data => updateProductTable(data));
}

function updateProductTable(products) {
    const tableBody = document.getElementById('product-list');
    tableBody.innerHTML = '';
    products.forEach(product => {
        tableBody.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.nombre}</td>
                <td>${product.categoria}</td>
                <td>${product.precio}</td>
                <td>${product.stock}</td>
                <td>
                    <button onclick="editProduct(${product.id})" class="btn btn-yellow">Editar</button>
                    <button onclick="deleteProduct(${product.id})" class="btn btn-red">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function showCreateForm() {
    document.getElementById('product-form').classList.remove('hidden');
    document.getElementById('form-title').textContent = 'Registrar Producto';
}

function hideForm() {
    document.getElementById('product-form').classList.add('hidden');
}