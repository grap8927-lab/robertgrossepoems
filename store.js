// store.js
// Loads poems.json and displays poems + PayPal buy buttons

async function loadPoems() {
  try {
    const response = await fetch("poems.json");
    const poems = await response.json();

    const container = document.getElementById("poems-container");
    container.innerHTML = ""; // Clear out old content

    poems.forEach((poem) => {
      const poemDiv = document.createElement("div");
      poemDiv.classList.add("poem");

      // Encode the poem title for use in a URL
      const encodedTitle = encodeURIComponent(`Poem Purchase: ${poem.title}`);

      // Create poem HTML
      poemDiv.innerHTML = `
        <h2>${poem.title}</h2>
        <pre>${poem.text}</pre>
        <p><strong>Price:</strong> $${poem.price}</p>
        <p class="instructions">${poem.instructions}</p>
        <p class="note-reminder">⚠️ <strong>Please keep the poem title in the PayPal note so we know which poem you purchased.</strong></p>
        <a 
          href="https://www.paypal.com/paypalme/RobGrosse1/${poem.price}?note=${encodedTitle}" 
          target="_blank" 
          class="buy-button">
          Buy Now
        </a>
      `;

      container.appendChild(poemDiv);
    });
  } catch (error) {
    console.error("Error loading poems:", error);
    const container = document.getElementById("poems-container");
    container.innerHTML = "<p>Sorry, poems could not be loaded right now.</p>";
  }
}

// Run when the page loads
document.addEventListener("DOMContentLoaded", loadPoems);
