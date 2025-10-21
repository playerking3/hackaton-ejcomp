type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
};

function getCartItems(): CartItem[] {
    const cartString = localStorage.getItem('cart');
 
  if (!cartString) {
    
    return [];
  }
  try {
   
    const cartArray = JSON.parse(cartString) as CartItem[];
    return cartArray;

  } catch (error) {
    
    console.error("Erro ao decodificar o JSON do carrinho:", error);
    return [];
  }
}

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
    
    // ============ CASO O CARRINHO TENHA ITENS ============

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

document.addEventListener('DOMContentLoaded', () => {
  renderCartPage();
});