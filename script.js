// Grab elements
const poemGrid = document.getElementById("poemGrid");
const modal = document.getElementById("poemModal");
const modalTitle = document.getElementById("modalTitle");
const modalExcerpt = document.getElementById("modalExcerpt");
const buyBtn = document.getElementById("buyBtn");
const closeBtn = document.querySelector(".close");

let currentPoem = null;

// Render teaser cards
function renderPoems() {
  poems.forEach((poem, index) => {
    const card = document.createElement("div");
    card.className = "poem-card";

    card.innerHTML = `
      <h3>${poem.title}</h3>
      <pre>${poem.teaser}</pre>
      <button onclick="openPoem(${index})">Preview & Buy</button>
    `;

    poemGrid.appendChild(card);
  });
}

// Open modal
function openPoem(index) {
  currentPoem = poems[index];
  modal.style.display = "flex";
  modalTitle.textContent = currentPoem.title;
  modalExcerpt.textContent = currentPoem.teaser;
}

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
  currentPoem = null;
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    currentPoem = null;
  }
};

// Buy button
buyBtn.onclick = () => {
  if (currentPoem) {
    // Redirect to PayPal (change link if needed)
    window.location.href = `https://www.paypal.me/RobGrosse1/5`;
  }
};

// --- Basic Protections ---
document.addEventListener("contextmenu", (e) => e.preventDefault());
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && (e.key === "c" || e.key === "u" || e.key === "s")) {
    e.preventDefault();
  }
});
modalExcerpt.style.userSelect = "none";
