// store.js
// Holds all poems with teaser + full text

const poems = [
  {
    title: "Whispers of Dawn",
    teaser: `The sky unveils its gentle hue,
Soft gold awakens fields of dew,
Shadows stretch and fade away,
Promising the birth of day,
In silence, hope begins to sing,
A quiet gift the morning brings...`,
    full: `The sky unveils its gentle hue,
Soft gold awakens fields of dew,
Shadows stretch and fade away,
Promising the birth of day.

The trees sway slow, in whispered prayer,
A hush of peace hangs in the air,
Birdsong lifts the fragile light,
A hymn to end the weary night.

And in this tender, fleeting hour,
The heart rediscovers quiet power,
No crown, no jewel, no fleeting fame,
Just dawn repeating its holy claim.`
  },
  {
    title: "Beneath the Willow",
    teaser: `Beneath the willow’s tender shade,
The memories we carved still fade,
Your laughter tangled in the breeze,
Soft echoes drift through swaying leaves,
A love once fierce now gently lies,
Like summer’s warmth in autumn skies...`,
    full: `Beneath the willow’s tender shade,
The memories we carved still fade,
Your laughter tangled in the breeze,
Soft echoes drift through swaying leaves.

We wrote our names upon its skin,
A secret world where hearts begin,
Yet time, relentless, drew its line,
And left your shadow tangled with mine.

The willow bows but does not break,
It holds the silence for our sake,
Though love has flown on borrowed wings,
Its roots remain in endless springs.`
  },
  {
    title: "Ashes and Embers",
    teaser: `The fire burned, then dimmed to gray,
Yet something in the coals would stay,
A spark beneath the weight of stone,
A whisper saying “not alone,”
Though ashes settle, soft and deep,
The ember’s heart is not asleep...`,
    full: `The fire burned, then dimmed to gray,
Yet something in the coals would stay,
A spark beneath the weight of stone,
A whisper saying “not alone.”

Though nights grew long and cold winds came,
The ember whispered still my name,
And in the darkest, hollow hour,
I felt its quiet, steady power.

For love may fade, and bodies tire,
But still remains the smallest fire,
A proof that even through despair,
A flame of hope is always there.`
  },
  {
    title: "The Wanderer",
    teaser: `He walks where roads dissolve to sand,
No compass guides his searching hand,
The stars alone will chart his way,
Through night’s embrace and break of day,
Each step a prayer, a silent plea,
To find the place where he is free...`,
    full: `He walks where roads dissolve to sand,
No compass guides his searching hand,
The stars alone will chart his way,
Through night’s embrace and break of day.

Each stone he treads has known his weight,
Each crossroad whispers of his fate,
And though the world may call him lost,
He carries on despite the cost.

For freedom is a fleeting flame,
A journey more than one true name,
The wanderer is never still,
His home resides in endless will.`
  },
  {
    title: "Echoes in Stone",
    teaser: `These walls have heard a thousand cries,
And kept their secrets, veiled in lies,
The echoes linger, sharp and clear,
Of love once lost, of hope, of fear,
The stones remember, cold, austere,
The weight of every passing year...`,
    full: `These walls have heard a thousand cries,
And kept their secrets, veiled in lies,
The echoes linger, sharp and clear,
Of love once lost, of hope, of fear.

The chisels carved both joy and pain,
A silent record still remains,
No mortal tongue can quite erase,
The memory of this sacred place.

And though the hands that built are gone,
The stones endure, they carry on,
In every crack and faded line,
Resides the truth of human time.`
  },
  {
    title: "Lanterns Afloat",
    teaser: `We set the lanterns on the stream,
Each one a wish, each one a dream,
The water caught their trembling glow,
And pulled them gently as they’d go,
A thousand lights, like stars below,
A river where our hopes still flow...`,
    full: `We set the lanterns on the stream,
Each one a wish, each one a dream,
The water caught their trembling glow,
And pulled them gently as they’d go.

A thousand lights, like stars below,
A river where our hopes still flow,
And though the night consumed them all,
Their memory still heeds our call.

For wishes drift, and time moves on,
Yet something of their fire is drawn,
Into the heart that dares to keep,
The fragile glow beneath the deep.`
  },
  {
    title: "Seasons of Us",
    teaser: `Spring held us close in blooming air,
Summer burned bright with reckless flare,
Autumn whispered of quiet goodbyes,
Winter concealed the tears in our eyes,
Four seasons turned, as seasons must,
Yet still I feel the weight of us...`,
    full: `Spring held us close in blooming air,
Summer burned bright with reckless flare,
Autumn whispered of quiet goodbyes,
Winter concealed the tears in our eyes.

Four seasons turned, as seasons must,
Yet still I feel the weight of us,
A circle drawn, a turning wheel,
A story only time can seal.

For love is written in the year,
A fleeting joy, a fleeting tear,
Yet in its dance we come to see,
The endless gift of memory.`
  },
  {
    title: "Silent Harbor",
    teaser: `The ships are gone, the docks are bare,
But still the ocean lingers there,
Its lullaby against the stone,
A call that pulls me, not alone,
The harbor waits though sails are few,
Its silence sings of something true...`,
    full: `The ships are gone, the docks are bare,
But still the ocean lingers there,
Its lullaby against the stone,
A call that pulls me, not alone.

The harbor waits though sails are few,
Its silence sings of something true,
That though the tides may come and go,
The sea remembers all it knows.

And in its depth, a promise keeps,
For every soul the water weeps,
No ship is ever fully lost,
It drifts in memory, tempest-tossed.`
  },
  {
    title: "Glass Wings",
    teaser: `Her wings were spun of fragile glass,
A beauty time could never pass,
Yet every step the world would shake,
A risk she dared each move she’d make,
She flew though danger laced the skies,
With fragile strength that never dies...`,
    full: `Her wings were spun of fragile glass,
A beauty time could never pass,
Yet every step the world would shake,
A risk she dared each move she’d make.

She flew though danger laced the skies,
With fragile strength that never dies,
And though the shards would sometimes break,
Her courage grew with each mistake.

For in the cracks, the light would glow,
A truth the timid never know,
That beauty born from fragile things,
Can soar beyond with glass-cut wings.`
  },
  {
    title: "Roots and Rivers",
    teaser: `Beneath the soil, the roots entwine,
A secret strength, a grand design,
The rivers carve, the mountains bend,
Yet still the roots their truth defend,
Through storm and drought they hold their place,
A silent oath time can’t erase...`,
    full: `Beneath the soil, the roots entwine,
A secret strength, a grand design,
The rivers carve, the mountains bend,
Yet still the roots their truth defend.

Through storm and drought they hold their place,
A silent oath time can’t erase,
For though the world may shift and move,
The roots endure, their silence proves.

And so it is with love we bear,
A grounded force beyond despair,
Though rivers change and branches sway,
The roots remain to light our way.`
  }
];
