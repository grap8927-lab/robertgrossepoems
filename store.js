// Poems Store Data
const poems = [
  // --- $5 Poems ---
  {
    title: "Whispers at Dawn",
    price: 5,
    snippet: "The morning sings in silver threads...",
    paypal: "https://www.paypal.me/RobGrosse1/5"
  },
  {
    title: "Silent Harbor",
    price: 5,
    snippet: "Waves hush the edges of tired hearts...",
    paypal: "https://www.paypal.me/RobGrosse1/5"
  },
  {
    title: "Ashes and Petals",
    price: 5,
    snippet: "From endings rise the softened bloom...",
    paypal: "https://www.paypal.me/RobGrosse1/5"
  },
  {
    title: "Lanterns in Rain",
    price: 5,
    snippet: "Raindrops dance with golden fire...",
    paypal: "https://www.paypal.me/RobGrosse1/5"
  },
  {
    title: "Meadow Song",
    price: 5,
    snippet: "Green whispers play beneath the sun...",
    paypal: "https://www.paypal.me/RobGrosse1/5"
  },

  // --- $7 Poems ---
  {
    title: "Gilded Horizon",
    price: 7,
    snippet: "Beyond the edge, a promise glows...",
    paypal: "https://www.paypal.me/RobGrosse1/7"
  },
  {
    title: "Eternal Embers",
    price: 7,
    snippet: "In fading light, warmth carries on...",
    paypal: "https://www.paypal.me/RobGrosse1/7"
  },
  {
    title: "Shadows of Summer",
    price: 7,
    snippet: "Heat lingers where laughter once lived...",
    paypal: "https://www.paypal.me/RobGrosse1/7"
  },
  {
    title: "Roots of Memory",
    price: 7,
    snippet: "Deep in soil, forgotten stories breathe...",
    paypal: "https://www.paypal.me/RobGrosse1/7"
  },
  {
    title: "Crimson Veil",
    price: 7,
    snippet: "Evening drapes the sky in fire...",
    paypal: "https://www.paypal.me/RobGrosse1/7"
  },

  // --- $10 Poems ---
  {
    title: "Glass Wings",
    price: 10,
    snippet: "Fragile, yet carrying all the skies...",
    paypal: "https://www.paypal.me/RobGrosse1/10"
  },
  {
    title: "The Last Orchard",
    price: 10,
    snippet: "Sweetness lingers as roots grow still...",
    paypal: "https://www.paypal.me/RobGrosse1/10"
  },
  {
    title: "Frozen River",
    price: 10,
    snippet: "Beneath the ice, a pulse waits...",
    paypal: "https://www.paypal.me/RobGrosse1/10"
  },
  {
    title: "Burnished Stone",
    price: 10,
    snippet: "Time polishes all wounds into shine...",
    paypal: "https://www.paypal.me/RobGrosse1/10"
  },
  {
    title: "Stormlit Path",
    price: 10,
    snippet: "Through thunder’s roar, footsteps persist...",
    paypal: "https://www.paypal.me/RobGrosse1/10"
  },

  // --- $12–$20 Premium Poems ---
  {
    title: "Crown of Winter",
    price: 12,
    snippet: "Frost paints the kingdom in silver...",
    paypal: "https://www.paypal.me/RobGrosse1/12"
  },
  {
    title: "Midnight Vessel",
    price: 12,
    snippet: "Sailing dreams across a blackened tide...",
    paypal: "https://www.paypal.me/RobGrosse1/12"
  },
  {
    title: "Golden Silence",
    price: 12,
    snippet: "Quiet hums louder than thunder...",
    paypal: "https://www.paypal.me/RobGrosse1/12"
  },
  {
    title: "Veins of Earth",
    price: 12,
    snippet: "Rivers trace the body of time...",
    paypal: "https://www.paypal.me/RobGrosse1/12"
  },
  {
    title: "Iron Lullaby",
    price: 12,
    snippet: "Even steel remembers rest...",
    paypal: "https://www.paypal.me/RobGrosse1/12"
  },
  {
    title: "Opal Dreams",
    price: 15,
    snippet: "Colors collide in restless sleep...",
    paypal: "https://www.paypal.me/RobGrosse1/15"
  },
  {
    title: "Ashen Crown",
    price: 15,
    snippet: "Ruins gleam where power fell...",
    paypal: "https://www.paypal.me/RobGrosse1/15"
  },
  {
    title: "Emerald Reign",
    price: 15,
    snippet: "Forests rule with quiet grace...",
    paypal: "https://www.paypal.me/RobGrosse1/15"
  },
  {
    title: "The Silent Bell",
    price: 15,
    snippet: "It rings loudest in its stillness...",
    paypal: "https://www.paypal.me/RobGrosse1/15"
  },
  {
    title: "Ivory Fortress",
    price: 15,
    snippet: "Walls rise, but hearts remain hidden...",
    paypal: "https://www.paypal.me/RobGrosse1/15"
  },
  {
    title: "Celestial Loom",
    price: 18,
    snippet: "Stars weave the fabric of eternity...",
    paypal: "https://www.paypal.me/RobGrosse1/18"
  },
  {
    title: "Obsidian Sky",
    price: 18,
    snippet: "Darkness glitters with hidden fire...",
    paypal: "https://www.paypal.me/RobGrosse1/18"
  },
  {
    title: "Hallowed Tide",
    price: 18,
    snippet: "Waves baptize the shore in silver...",
    paypal: "https://www.paypal.me/RobGrosse1/18"
  },
  {
    title: "Cinder Echo",
    price: 18,
    snippet: "Flames whisper after they fade...",
    paypal: "https://www.paypal.me/RobGrosse1/18"
  },
  {
    title: "Labyrinth Heart",
    price: 18,
    snippet: "Love wanders its endless halls...",
    paypal: "https://www.paypal.me/RobGrosse1/18"
  },
  {
    title: "Candle Against Night",
    price: 20,
    snippet: "A single flame defies the void...",
    paypal: "https://www.paypal.me/RobGrosse1/20"
  },
  {
    title: "Crown of Ash",
    price: 20,
    snippet: "Victory fades, but ashes endure...",
    paypal: "https://www.paypal.me/RobGrosse1/20"
  },
  {
    title: "Serpent’s Whisper",
    price: 20,
    snippet: "Temptation coils in silver words...",
    paypal: "https://www.paypal.me/RobGrosse1/20"
  },
  {
    title: "Kingdom of Glass",
    price: 20,
    snippet: "Fragile empires gleam, then shatter...",
    paypal: "https://www.paypal.me/RobGrosse1/20"
  },
  {
    title: "The Eternal Forge",
    price: 20,
    snippet: "Creation burns without end...",
    paypal: "https://www.paypal.me/RobGrosse1/20"
  }
];

// Render Poems to Poems Page
const poemsList = document.getElementById("poems-list");

if (poemsList) {
  poems.forEach(poem => {
    const card = document.createElement("div");
    card.classList.add("poem-card");

    card.innerHTML = `
      <h3>${poem.title}</h3>
      <p>${poem.snippet}</p>
      <a class="buy-button" href="${poem.paypal}" target="_blank">
        Buy Now – $${poem.price}
      </a>
    `;

    poemsList.appendChild(card);
  });
}
