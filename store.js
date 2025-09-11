// store.js
// Loads poems.json and displays poems + Buy buttons

async function loadPoems() {
  try {
    const response = await fetch("poems.json");
    const poems = await response.json();

    const container = document.getElementById("poems-container");
    container.innerHTML = ""; // Clear out old content

    poems.forEach((poem, index) => {
      const poemDiv = document.createElement("div");
      poemDiv.classList.add("poem");

      // Snippet (first 3 lines only)
      const snippet = poem.text.split("\n").slice(0, 3).join("\n");

      // Create poem HTML
      poemDiv.innerHTML = `
        <h2>${poem.title}</h2>
        <pre>${snippet}...</pre>
        <p><strong>Price:</strong> $${poem.price}</p>
        <button class="buy-button" onclick="buyPoem(${index})">Buy Now</button>
      `;

      container.appendChild(poemDiv);
    });
  } catch (error) {
    console.error("Error loading poems:", error);
    const container = document.getElementById("poems-container");
    container.innerHTML = "<p>Sorry, poems could not be loaded right now.</p>";
  }
}

// Simulated buy → redirect to full poem
function buyPoem(index) {
  // Generate simple purchase code
  const purchaseCode = btoa(`${index}-${Date.now()}`);
  // Redirect to full poem page
  window.location.href = `poem.html?id=${index}&code=${purchaseCode}`;
}

// Run when the page loads
document.addEventListener("DOMContentLoaded", loadPoems);
