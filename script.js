// script.js

// Select modal elements
const modal = document.getElementById("poemModal");
const modalTitle = document.getElementById("modalTitle");
const modalExcerpt = document.getElementById("modalExcerpt");
const buyBtn = document.getElementById("buyBtn");
const closeBtn = document.querySelector(".close");

let currentPoem = null;

// Render poems from store.js
function renderPoems() {
  const grid = document.getElementById("poemGrid");
  poems.forEach((poem, index) => {
    const card = document.createElement("div");
    card.className = "poem-card";
    card.innerHTML = `
      <h3>${poem.title}</h3>
      <pre>${poem.teaser}</pre>
      <button onclick="openPoem(${index})">Read More</button>
    `;
    grid.appendChild(card);
  });
}

// Open modal
function openPoem(index) {
  currentPoem = poems[index];
  modalTitle.textContent = currentPoem.title;
  modalExcerpt.textContent =
    currentPoem.teaser +
    "\n\n(Full poem available after purchase)\n\n💡 After purchase, your full poem will be delivered to the email address linked to your PayPal account.";
  modal.style.display = "block";
}

// Close modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Buy button → PayPal link
buyBtn.onclick = function () {
  if (currentPoem) {
    // Direct to PayPal.me page
    window.open("https://paypal.me/RobGrosse1", "_blank");
  }
};

// Close modal if clicking outside content
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Initialize poems
renderPoems();
