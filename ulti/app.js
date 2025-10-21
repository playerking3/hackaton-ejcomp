// Arquivo: ulti/app.ts
// --- 2. FUNÇÕES DE UTILIDADE (localStorage) ---
function getCartItems() {
    var cartString = localStorage.getItem('cart');
    if (!cartString) {
        return [];
    }
    try {
        return JSON.parse(cartString);
    }
    catch (error) {
        console.error("Erro ao decodificar o JSON do carrinho:", error);
        return [];
    }
}
function saveCart(cart) {
    var cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString);
}
// --- 3. LÓGICA DA PÁGINA DO CARRINHO (compras.html) ---
function renderCartPage() {
    var cartContainer = document.getElementById('cart-container');
    var cartSummary = document.getElementById('cart-summary');
    var cartTotalEl = document.getElementById('cart-total');
    var checkoutButton = document.getElementById('checkout-button');
    var items = getCartItems();
    cartContainer.innerHTML = '';
    if (items.length === 0) {
        var p = document.createElement('p');
        p.textContent = 'O carrinho esta vazio';
        cartContainer.appendChild(p);
        cartSummary.style.display = 'none';
    }
    else {
        var total_1 = 0;
        items.forEach(function (item) {
            total_1 += item.price * item.quantity;
            var itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = "\n        <h3>".concat(item.name, "</h3>\n        <p>Pre\u00E7o unit\u00E1rio: R$ ").concat(item.price.toFixed(2), "</p>\n        <p>Quantidade: ").concat(item.quantity, "</p>\n        <p><strong>Subtotal: R$ ").concat((item.price * item.quantity).toFixed(2), "</strong></p>\n        <hr>\n      ");
            cartContainer.appendChild(itemElement);
        });
        cartSummary.style.display = 'block';
        cartTotalEl.textContent = total_1.toFixed(2);
        checkoutButton.disabled = false;
    }
}
// --- 4. LÓGICA DA PÁGINA DE PRODUTOS (produtos.html) ---
function handleAddToCart(event) {
    var button = event.currentTarget;
    var id = button.dataset.id;
    var name = button.dataset.name;
    var price = parseFloat(button.dataset.price);
    var cart = getCartItems();
    var existingItem = cart.find(function (item) { return item.id === id; });
    if (existingItem) {
        existingItem.quantity += 1;
    }
    else {
        var newItem = {
            id: id,
            name: name,
            price: price,
            quantity: 1
        };
        cart.push(newItem);
    }
    saveCart(cart);
    alert("".concat(name, " foi adicionado ao carrinho!"));
}
// --- 5. PONTO DE PARTIDA (Roda quando o HTML carrega) ---
document.addEventListener('DOMContentLoaded', function () {
    // Se ele achar o 'cart-container', ele sabe que está na página do carrinho.
    if (document.getElementById('cart-container')) {
        renderCartPage();
    }
    // Adicione <HTMLButtonElement> para dizer ao TS que esta é uma lista de botões
    var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(function (button) {
            button.addEventListener('click', handleAddToCart);
        });
    }
});
