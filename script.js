// script.js - small site interactions, modal, and PayPal redirection
(function(){
  const poemsContainer = document.getElementById('poems');
  const modal = document.getElementById('poemModal');
  const modalPoem = document.getElementById('modalPoem');
  const modalClose = document.getElementById('modalClose');
  const buyNowBtn = document.getElementById('buyNow');
  const giftNowBtn = document.getElementById('giftNow');
  const yearSpan = document.getElementById('year');

  yearSpan.textContent = new Date().getFullYear();

  function formatPrice(n){
    return "$" + Number(n).toFixed(2);
  }

  function renderList(){
    window.POEMS.forEach(p => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${p.title}</h3>
        <div class="meta">${formatPrice(p.price)}</div>
        <p class="excerpt">${p.excerpt}</p>
        <div class="actions">
          <button class="btn btn-primary open-poem" data-id="${p.id}">${p.buttonText}</button>
          <button class="btn btn-alt quick-buy" data-id="${p.id}">Quick Buy</button>
        </div>
      `;
      poemsContainer.appendChild(card);
    });
  }

  function openModal(poem){
    modal.setAttribute('aria-hidden','false');
    modalPoem.innerHTML = `
      <h2>${poem.title}</h2>
      <div class="meta">${formatPrice(poem.price)}</div>
      <div class="poem-body">${escapeHtml(poem.body)}</div>
    `;
    buyNowBtn.textContent = poem.buttonText.includes('commission') ? 'Purchase Commission' : 'Buy This Poem';
    buyNowBtn.dataset.id = poem.id;
    giftNowBtn.dataset.id = poem.id;
  }

  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    modalPoem.innerHTML = '';
  }

  function escapeHtml(text){
    const el = document.createElement('div');
    el.textContent = text;
    return el.innerHTML.replace(/\n/g,'<br>');
  }

  function findPoem(id){
    return window.POEMS.find(p => p.id === id);
  }

  function redirectToPayPal(poemId, purpose){
    const p = findPoem(poemId);
    if(!p) return alert('Poem not found.');
    const amount = Number(p.price).toFixed(2);
    const url = `${window.BASE_PAYPAL}/${amount}`;
    window.open(url, '_blank');
  }

  document.addEventListener('click', function(e){
    if(e.target.matches('.open-poem')){
      const id = e.target.dataset.id;
      const poem = findPoem(id);
      openModal(poem);
    } else if(e.target.matches('.quick-buy')){
      const id = e.target.dataset.id;
      redirectToPayPal(id, 'purchase');
    } else if(e.target === modalClose || e.target.matches('.btn-close')){
      closeModal();
    }
  });

  buyNowBtn.addEventListener('click', function(){
    redirectToPayPal(this.dataset.id, 'purchase');
  });
  giftNowBtn.addEventListener('click', function(){
    redirectToPayPal(this.dataset.id, 'gift');
  });

  document.addEventListener('keydown', function(ev){
    if(ev.key === 'Escape') closeModal();
  });

  renderList();
})();
