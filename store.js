// store.js
// Poem catalogue and PayPal routing.

const basePayPalMe = "https://www.paypal.me/RobGrosse1"; // change if necessary

const poems = [
  {
    id: "p-sparrow",
    title: "The Sparrow's Ledger",
    excerpt: `He tallied mornings in the palms of his hands,
counting debts of dawn and hush of small birds.
A ledger written in wings and silence,
balancing day against the weight of absence,
with margins filled by songs unspoken,
and ink that never dried beneath the sky.`,
    body: `The Sparrow's Ledger

He tallied mornings in the palms of his hands,
keeping debts of dawn and the hush of small birds.
There was a ledger of light and a fine for every hush.`,
    price: 12.00,
    buttonText: "Claim this poem"
  },
  {
    id: "p-night-lamp",
    title: "Night Lamp",
    excerpt: `We turned the lamp low and spoke of geometry,
drawing circles where light refused to go.
Our shadows multiplied across the walls,
a quiet map of two souls intersecting,
the current humming beneath thin wires,
a fragile orbit tethered by glow.`,
    body: `Night Lamp

We turned the lamp low and spoke of geometry,
traced circuits with our fingertips and the future breathed back.`,
    price: 18.00,
    buttonText: "Make it yours"
  },
  {
    id: "p-harbor",
    title: "Harbor Songs",
    excerpt: `Salt remembered the names of everyone who left,
etched in foam and in the hush of anchors.
Ships carried promises heavier than steel,
but the harbor held its tune against the tide,
a chorus written in ropes and gulls,
a song of departure stitched with return.`,
    body: `Harbor Songs

Salt remembered the names of everyone who left;
it hummed the intervals between anchors and home.`,
    price: 15.00,
    buttonText: "Purchase this piece"
  },
  {
    id: "p-winter-note",
    title: "Winter Note",
    excerpt: `Paper folded like the shape of a small promise,
creased with care against the weight of snow.
A letter waiting in a glove of silence,
ink slowed by the chill of frozen breath,
words drifting slower than the falling sky,
but warm enough to melt within the hand.`,
    body: `Winter Note

Paper folded like the shape of a small promise.
We mailed ourselves back through cold air.`,
    price: 10.00,
    buttonText: "Reserve it now"
  },
  {
    id: "p-commission",
    title: "Commission a Custom Poem",
    excerpt: `Want something personal, tailored, and true?
A poem written only for you or someone you love,
woven from details you choose to share,
shaped in tone, rhythm, and heart’s request,
a keepsake that carries your story forward,
ink becoming memory to last a lifetime.`,
    body: `Custom Commission

I write custom poems for occasions, gifts, and features.
Please contact me with details (tone, length, names, date).`,
    price: 45.00,
    buttonText: "Start a commission"
  }
];

// expose for other scripts
window.POEMS = poems;
window.BASE_PAYPAL = basePayPalMe;
