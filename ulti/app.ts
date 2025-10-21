// Arquivo: ulti/app.ts

// --- 1. DEFINIÇÃO DE TIPO ---
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
};

// --- 2. FUNÇÕES DE UTILIDADE (localStorage) ---
function getCartItems(): CartItem[] {
  const cartString = localStorage.getItem('cart');
  if (!cartString) {
    return [];
  }
  try {
    return JSON.parse(cartString) as CartItem[];
  } catch (error) {
    console.error("Erro ao decodificar o JSON do carrinho:", error);
    return [];
  }
}

function saveCart(cart: CartItem[]) {
  const cartString = JSON.stringify(cart);
  localStorage.setItem('cart', cartString);
}


// --- 3. LÓGICA DA PÁGINA DO CARRINHO (compras.html) ---
function renderCartPage() {
  const cartContainer = document.getElementById('cart-container')!;
  const cartSummary = document.getElementById('cart-summary')!;
  const cartTotalEl = document.getElementById('cart-total')!;
  const checkoutButton = document.getElementById('checkout-button')! as HTMLButtonElement;

  const items = getCartItems();
  cartContainer.innerHTML = ''; 

  if (items.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'O carrinho esta vazio';
    cartContainer.appendChild(p);
    cartSummary.style.display = 'none'; 
  } else {
    let total = 0;
    items.forEach(item => {
      total += item.price * item.quantity;
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');
      itemElement.innerHTML = `
        <h3>${item.name}</h3>
        <p>Preço unitário: R$ ${item.price.toFixed(2)}</p>
        <p>Quantidade: ${item.quantity}</p>
        <p><strong>Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}</strong></p>
        <hr>
      `;
      cartContainer.appendChild(itemElement);
    });
    
    cartSummary.style.display = 'block';
    cartTotalEl.textContent = total.toFixed(2);
    checkoutButton.disabled = false;
  }
}


// --- 4. LÓGICA DA PÁGINA DE PRODUTOS (produtos.html) ---
function handleAddToCart(event: MouseEvent) {
  const button = event.currentTarget as HTMLButtonElement;
  
  const id = button.dataset.id!;
  const name = button.dataset.name!;
  const price = parseFloat(button.dataset.price!);
  
  const cart = getCartItems();
  
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const newItem: CartItem = {
      id: id,
      name: name,
      price: price,
      quantity: 1
    };
    cart.push(newItem);
  }

  saveCart(cart);
  alert(`${name} foi adicionado ao carrinho!`);
}


// --- 5. PONTO DE PARTIDA (Roda quando o HTML carrega) ---
document.addEventListener('DOMContentLoaded', () => {
  
  // Se ele achar o 'cart-container', ele sabe que está na página do carrinho.
  if (document.getElementById('cart-container')) {
    renderCartPage();
  }

 // Adicione <HTMLButtonElement> para dizer ao TS que esta é uma lista de botões
const addToCartButtons = document.querySelectorAll<HTMLButtonElement>('.add-to-cart-btn');
  if (addToCartButtons.length > 0) {
    addToCartButtons.forEach(button => {
      button.addEventListener('click', handleAddToCart);
    });
  }
});