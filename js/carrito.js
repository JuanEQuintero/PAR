const products = [
    { id: 1, name: 'Comida para Perros', price: 11500.00, img: "../img/carrito/cuido.jpeg" },
    { id: 2, name: 'Juguete para Perros', price: 15000.00, img: '../img/carrito/juguete.jpeg' },
    { id: 3, name: 'Collar para Perros', price: 20000.00, img: '../img/carrito/collar.jpeg' },
    { id: 4, name: 'Cama para Perros', price: 35000.00, img: '../img/carrito/WhatsApp Image 2024-09-18 at 8.19.41 PM.jpeg' },
    { id: 5, name: 'Ropa para Perros', price: 45000.00, img: '../img/carrito/ropa.jpeg' },
    { id: 6, name: 'Correa para Perros', price: 22900.00, img: '../img/carrito/correa.jpeg' },
    { id: 7, name: 'Cepillo para Perros', price: 25200.00, img: '../img/carrito/cepillo.jpeg' },
    { id: 8, name: 'Shampoo para Perros', price: 19000.00, img: '../img/carrito/shampoo.jpeg' },
    { id: 9, name: 'Caseta para Perros', price: 693700.00, img: '../img/carrito/casa.jpeg' },
    { id: 10, name: 'Plato para Perros', price: 8200.00, img: '../img/carrito/plato.jpeg' },
    { id: 11, name: 'Juguete para Masticar', price: 26000.00, img: '../img/carrito/juguete_para_masticar.jpeg' },
    { id: 12, name: 'Transportadora para Perros', price: 210000.00, img: '../img/carrito/jaula.jpeg' },
];


let cart = [];

function formatCurrency(amount) {
    return amount.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
}

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4 mb-4'; 
        productCard.innerHTML = `
            <div class="card">
                <img src="${product.img}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${formatCurrency(product.price)}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Añadir al Carrito</button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        cartItem.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">
                ${item.name}
            </div>
            <div>
                ${formatCurrency(item.price)}
                <button class="btn btn-danger btn-sm ms-2" onclick="removeFromCart(${index})">Eliminar</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').textContent = formatCurrency(totalPrice);
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

document.getElementById('checkout-button').addEventListener('click', () => {
    alert('Compra realizada con éxito!');
    cart = [];
    renderCart();
});

renderProducts();
renderCart();
