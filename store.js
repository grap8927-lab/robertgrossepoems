// store.js

// ----- CONFIG -----
const PAYPAL_ME_USERNAME = "RobGrosse1"; // change if your PayPal.Me username differs
const CURRENCY = "USD";
const DECIMALS = 2;
// ----- END CONFIG -----

function formatMoney(amount) {
  return amount.toFixed(DECIMALS);
}

function getCart() {
  try { return JSON.parse(localStorage.getItem('rg_cart') || '[]'); }
  catch(e) { return []; }
}
function saveCart(cart) {
  localStorage.setItem('rg_cart', JSON.stringify(cart));
  updateCartCountUI();
}

function renderPoems() {
  const list = document.getElementById('poems-list');
  list.innerHTML = '';
  for (const p of poems) {
    const card = document.createElement('article');
    card.className = 'poem-card';
    card.innerHTML = `
      <h3>${escapeHtml(p.title)}</h3>
      <p class="price">$${formatMoney(p.price)}</p>
      <p class="excerpt">${escapeHtml(p.excerpt || '')}</p>
      <div class="poem-actions">
        <button class="btn read-btn" data-id="${p.id}">Read</button>
        <button class="btn add-btn" data-id="${p.id}">Add to cart</button>
      </div>
      <pre class="full-poem" id="poem-${p.id}" style="display:none;">${escapeHtml(p.text)}</pre>
    `;
    list.appendChild(card);
  }

  document.querySelectorAll('.read-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = e.currentTarget.dataset.id;
      const pre = document.getElementById(`poem-${id}`);
      pre.style.display = (pre.style.display === 'none') ? 'block' : 'none';
      pre.scrollIntoView({behavior:'smooth', block:'center'});
    });
  });

  document.querySelectorAll('.add-btn').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = e.currentTarget.dataset.id;
      addToCart(id, 1);
    });
  });
}

function escapeHtml(s) {
  if (!s && s !== 0) return '';
  return String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');
}

function addToCart(id, qty=1) {
  const item = poems.find(p=>String(p.id) === String(id));
  if (!item) { alert('Item not found'); return; }
  const cart = getCart();
  const existing = cart.find(c=>String(c.id) === String(id));
  if (existing) existing.qty = Math.max(1, existing.qty + qty);
  else cart.push({ id: item.id, title: item.title, price: item.price, qty: qty });
  saveCart(cart);
  renderCart();
  alert(`Added "${item.title}" to cart`);
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cart-contents');
  const cartActions = document.getElementById('cart-actions');
  const emptyMsg = document.getElementById('empty-cart-msg');
  container.innerHTML = '';

  if (!cart.length) {
    cartActions.style.display = 'none';
    emptyMsg.style.display = 'block';
    updateCartCountUI();
    return;
  }

  emptyMsg.style.display = 'none';
  cartActions.style.display = 'block';

  const table = document.createElement('table');
  table.className = 'cart-table';
  table.innerHTML = `
    <thead><tr><th>Item</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr></thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector('tbody');

  let total = 0;
  cart.forEach(ci=>{
    const subtotal = ci.price * ci.qty;
    total += subtotal;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHtml(ci.title)}</td>
      <td>$${formatMoney(ci.price)}</td>
      <td><input type="number" min="1" value="${ci.qty}" class="qty-input" data-id="${ci.id}" /></td>
      <td>$${formatMoney(subtotal)}</td>
      <td><button class="btn btn-sm remove-btn" data-id="${ci.id}">Remove</button></td>
    `;
    tbody.appendChild(tr);
  });

  container.appendChild(table);
  document.getElementById('cart-total').textContent = formatMoney(total);

  document.querySelectorAll('.qty-input').forEach(inp=>{
    inp.addEventListener('change', (e)=>{
      const id = e.target.dataset.id;
      let q = parseInt(e.target.value || '1', 10);
      if (isNaN(q) || q < 1) q = 1;
      updateQty(id, q);
    });
  });
  document.querySelectorAll('.remove-btn').forEach(b=>{
    b.addEventListener('click', (e)=>{
      const id = e.currentTarget.dataset.id;
      removeFromCart(id);
    });
  });
  updateCartCountUI();
}

function updateQty(id, qty) {
  const cart = getCart();
  const it = cart.find(c=>String(c.id)===String(id));
  if (it) {
    it.qty = Math.max(1, qty);
    saveCart(cart);
    renderCart();
  }
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(c=>String(c.id)!==String(id));
  saveCart(cart);
  renderCart();
}

function clearCart() {
  localStorage.removeItem('rg_cart');
  renderCart();
}

function updateCartCountUI() {
  const cart = getCart();
  const count = cart.reduce((s,i)=>s + i.qty, 0);
  const el = document.getElementById('cart-count');
  if (el) el.textContent = count;
}

function checkoutWithPayPal() {
  const cart = getCart();
  if (!cart.length) { alert('Your cart is empty.'); return; }
  const total = cart.reduce((s,i)=>s + (i.qty * i.price), 0);
  const totalStr = formatMoney(total);
  const amountForUrl = encodeURIComponent(totalStr);
  const paypalLink = `https://www.paypal.me/${encodeURIComponent(PAYPAL_ME_USERNAME)}/${amountForUrl}`;
  const win = window.open(paypalLink, '_blank');
  if (!win) { alert('Please allow popups to open PayPal checkout.'); }
  else {
    alert('PayPal has opened in a new tab. Complete payment there. After you complete the payment, email Robert with the PayPal transaction ID and the poem titles you purchased so delivery can be completed.');
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderPoems();
  renderCart();

  document.getElementById('checkout-btn').addEventListener('click', checkoutWithPayPal);
  document.getElementById('clear-cart-btn').addEventListener('click', ()=>{
    if (confirm('Clear your cart?')) clearCart();
  });

  document.getElementById('view-cart-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    location.hash = '#cart';
    document.getElementById('cart').scrollIntoView({behavior:'smooth'});
  });

  window.addEventListener('storage', ()=> updateCartCountUI());
});
