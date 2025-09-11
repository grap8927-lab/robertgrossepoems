const poemGrid = document.getElementById("poemGrid");
const modal = document.getElementById("poemModal");
const modalTitle = document.getElementById("modalTitle");
const modalTeaser = document.getElementById("modalTeaser");
const modalPrice = document.getElementById("modalPrice");
const buyButton = document.getElementById("buyButton");
const closeBtn = document.querySelector(".close");

let selectedPoem = null;

// Render poem cards on homepage
poems.forEach(poem => {
  const card = document.createElement("div");
  card.classList.add("poem-card");

  card.innerHTML = `
    <h3>${poem.title}</h3>
    <p>${poem.teaser}</p>
    <p class="price"><strong>Price: $${poem.price}</strong></p>
    <button>View Poem</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    selectedPoem = poem;
    modalTitle.textContent = poem.title;
    modalTeaser.textContent = poem.teaser;
    modalPrice.textContent = `Price: $${poem.price}`;
    buyButton.onclick = () => {
      window.open(
        `https://www.paypal.me/RobGrosse1/${poem.price}`,
        "_blank"
      );
    };
    modal.style.display = "block";
  });

  poemGrid.appendChild(card);
});

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};
