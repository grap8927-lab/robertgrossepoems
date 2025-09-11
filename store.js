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
];poems.push(
  {
    title: "The Last Lighthouse",
    teaser: `Upon the cliff where oceans roar,
A lonely light still guards the shore,
Its flame resists the tempests wild,
A beacon for the lost exiled,
Though waves may strike with endless might,
The keeper still defends the light...`,
    full: `Upon the cliff where oceans roar,
A lonely light still guards the shore,
Its flame resists the tempests wild,
A beacon for the lost exiled.

Though waves may strike with endless might,
The keeper still defends the light,
And every soul that drifts astray,
May find their hope to see the day.

Though time will pass, and keepers fade,
The lighthouse stands, its promise made,
A steadfast tower, proud and tall,
A light that shines to guide us all.`
  },
  {
    title: "Letters Unsent",
    teaser: `A thousand words I never spoke,
Lie folded tight, my voice they choke,
Ink pressed deep but never read,
Love that lingers, words unsaid,
They rest in silence, never known,
A shadow love that stands alone...`,
    full: `A thousand words I never spoke,
Lie folded tight, my voice they choke,
Ink pressed deep but never read,
Love that lingers, words unsaid.

Each page a dream I couldn’t send,
Each line a start that had no end,
They gather dust, but whisper still,
A heart that longed, against its will.

For silence is its own reply,
A truth no paper can deny,
The words remain, though left apart,
A thousand letters, one still heart.`
  },
  {
    title: "Threads of Silver",
    teaser: `A single thread of silver gleams,
Within the tapestry of dreams,
It weaves through joy, through grief, through strife,
The subtle seam that binds a life,
Though time may pull and edges fray,
The silver thread will find its way...`,
    full: `A single thread of silver gleams,
Within the tapestry of dreams,
It weaves through joy, through grief, through strife,
The subtle seam that binds a life.

Though time may pull and edges fray,
The silver thread will find its way,
For every life, through night or day,
Holds one bright line that will not sway.

And when the cloth is worn and torn,
The silver shines, its purpose sworn,
A glimmer through the dark we see,
A thread that holds eternity.`
  },
  {
    title: "Forgotten Roads",
    teaser: `The path grew wild, the stones grew cold,
The signposts rust, the tales are old,
Yet still it winds through silent lands,
Once carved by weary, searching hands,
A road forgotten, left behind,
But not erased from human mind...`,
    full: `The path grew wild, the stones grew cold,
The signposts rust, the tales are old,
Yet still it winds through silent lands,
Once carved by weary, searching hands.

A road forgotten, left behind,
But not erased from human mind,
For every step once marked the way,
For dreamers bold who dared to stray.

Though overgrown, its spirit stays,
A quiet hymn to older days,
A path that whispers, “come and see,
The roads we walked still carry me.”`
  },
  {
    title: "The Painter’s Sky",
    teaser: `He dips his brush in molten flame,
The sunset calls him by its name,
Each stroke a prayer across the blue,
A fleeting world, both false and true,
The canvas fades, the colors die,
But still he paints the endless sky...`,
    full: `He dips his brush in molten flame,
The sunset calls him by its name,
Each stroke a prayer across the blue,
A fleeting world, both false and true.

The canvas fades, the colors die,
But still he paints the endless sky,
For art is not what time can claim,
It burns beyond both ash and name.

And though his hand may one day still,
The sky will answer to his will,
Each dawn and dusk, each shifting hue,
A painting born forever new.`
  },
  {
    title: "The Keeper of Keys",
    teaser: `A thousand doors he’s sworn to guard,
Some open easy, some are hard,
Each key a story, locked away,
Each secret waiting night or day,
He holds them close, their silence deep,
The promises he’s sworn to keep...`,
    full: `A thousand doors he’s sworn to guard,
Some open easy, some are hard,
Each key a story, locked away,
Each secret waiting night or day.

He holds them close, their silence deep,
The promises he’s sworn to keep,
For some are joy, and some are pain,
Yet all are part of love’s domain.

And though the weight may bow his hand,
The keeper knows, and understands,
That every key, both lost and found,
Unlocks the soul where truths abound.`
  },
  {
    title: "The Midnight Train",
    teaser: `The whistle cries, the shadows bend,
The midnight train will never end,
It carries dreams through fields of night,
Past broken towns without a light,
Each window holds a fleeting face,
Each soul in search of time and place...`,
    full: `The whistle cries, the shadows bend,
The midnight train will never end,
It carries dreams through fields of night,
Past broken towns without a light.

Each window holds a fleeting face,
Each soul in search of time and place,
The wheels sing low, a steady song,
A hymn for those who don’t belong.

And though the tracks may fade to rust,
The train will run, because it must,
For every dream that dares remain,
Still rides upon the midnight train.`
  },
  {
    title: "When We Were Fire",
    teaser: `We burned so bright, the night grew thin,
A wild flame where dreams begin,
The stars looked down with jealous eyes,
At sparks that leapt into the skies,
Though ashes mark where we have been,
The fire lives beneath the skin...`,
    full: `We burned so bright, the night grew thin,
A wild flame where dreams begin,
The stars looked down with jealous eyes,
At sparks that leapt into the skies.

Though ashes mark where we have been,
The fire lives beneath the skin,
For even when the blaze has died,
The embers glow, still warm inside.

And if the wind should call again,
Our fire would rise, as it did then,
A love once wild may fade from view,
But something of its flame is true.`
  },
  {
    title: "Beneath the Clocktower",
    teaser: `The hands turn slow, the chimes still ring,
They measure every fragile thing,
Beneath the tower’s iron face,
We carved our names, we claimed a place,
Though years have passed, the bells still sound,
A trace of us is always found...`,
    full: `The hands turn slow, the chimes still ring,
They measure every fragile thing,
Beneath the tower’s iron face,
We carved our names, we claimed a place.

Though years have passed, the bells still sound,
A trace of us is always found,
For time records what hearts conceal,
A truth the turning hands reveal.

And though the tower ages too,
Its echo holds the sound of you,
Each chime a note that carries still,
A song that bends but will not kill.`
  },
  {
    title: "The Silent Violin",
    teaser: `It rests in dust, the strings unplayed,
Its wooden heart in silence laid,
Yet still it hums when night is near,
A phantom song only I hear,
A melody the past recalls,
That softly stirs these empty halls...`,
    full: `It rests in dust, the strings unplayed,
Its wooden heart in silence laid,
Yet still it hums when night is near,
A phantom song only I hear.

A melody the past recalls,
That softly stirs these empty halls,
Though bow lies still, and hands are gone,
The song itself plays on and on.

For music lives beyond the hand,
It needs no stage, no strict command,
The violin may silent be,
But still its ghost will sing to me.`
  }
);poems.push(
  {
    title: "Shadows on the Hill",
    teaser: `The hill remembers every stride,
The footsteps carved, the tears we hide,
Each shadow cast at setting sun,
Reminds me where the years have run,
Though time may steal, it cannot kill,
The ghosts that walk upon the hill...`,
    full: `The hill remembers every stride,
The footsteps carved, the tears we hide,
Each shadow cast at setting sun,
Reminds me where the years have run.

Though grass has grown where stone once lay,
The echoes have not gone away,
They whisper soft, they linger still,
The shadows dancing on the hill.

And when I climb that slope again,
I feel the weight of where we’ve been,
The past is etched, it waits for me,
In shadows walking silently.`
  },
  {
    title: "The Ocean’s Lullaby",
    teaser: `It hums against the broken pier,
A song of time both far and near,
Its rhythm calms, its rhythm sways,
It carries night, it carries days,
The ocean sings though none reply,
Its endless, tender lullaby...`,
    full: `It hums against the broken pier,
A song of time both far and near,
Its rhythm calms, its rhythm sways,
It carries night, it carries days.

The ocean sings though none reply,
Its endless, tender lullaby,
Each wave a verse, each tide a rhyme,
A hymn that outlasts mortal time.

And though I leave its voice behind,
It lingers deep within my mind,
A song that whispers where I roam,
The ocean calling, “this is home.”`
  },
  {
    title: "Windows of Rain",
    teaser: `The glass is blurred with silver streams,
It fractures light into my dreams,
Each drop a tale, each drop a sign,
A fleeting verse, a fleeting line,
I watch the world through veils of gray,
And wait for clouds to drift away...`,
    full: `The glass is blurred with silver streams,
It fractures light into my dreams,
Each drop a tale, each drop a sign,
A fleeting verse, a fleeting line.

I watch the world through veils of gray,
And wait for clouds to drift away,
Yet in the rain, I find release,
A quiet storm that brings me peace.

For even tears can wash the ground,
And soften hearts where grief is found,
The rain becomes a gentle friend,
A promise storms will always end.`
  },
  {
    title: "The Forgotten Bell",
    teaser: `Its rusted tongue no longer rings,
Yet still it dreams of brighter things,
Once calling crowds to come and pray,
Now silence marks the passing day,
But in its frame a truth is kept,
A memory that has not slept...`,
    full: `Its rusted tongue no longer rings,
Yet still it dreams of brighter things,
Once calling crowds to come and pray,
Now silence marks the passing day.

But in its frame a truth is kept,
A memory that has not slept,
For though its chime has gone away,
Its spirit sounds in hearts today.

No silence truly kills the call,
It lingers faint, it touches all,
The bell may hang with voice undone,
But still it echoes, one by one.`
  },
  {
    title: "The Secret Garden",
    teaser: `Behind the gate of ivy grown,
A hidden world is all my own,
Where roses climb and lilies sing,
And time forgets its heavy wing,
A place where silence wears a crown,
And weary hearts may lay them down...`,
    full: `Behind the gate of ivy grown,
A hidden world is all my own,
Where roses climb and lilies sing,
And time forgets its heavy wing.

A place where silence wears a crown,
And weary hearts may lay them down,
No storm intrudes, no voices call,
The garden guards and shields it all.

And when I wake from endless strife,
I seek that gate, I seek that life,
A secret place the world won’t see,
Where beauty waits eternally.`
  },
  {
    title: "Lanterns in the Fog",
    teaser: `Through shifting mist the lanterns glow,
A line of lights that gently show,
The path across the harbor’s edge,
A golden line, a quiet pledge,
Though fog consumes the world from view,
The lanterns guide the journey through...`,
    full: `Through shifting mist the lanterns glow,
A line of lights that gently show,
The path across the harbor’s edge,
A golden line, a quiet pledge.

Though fog consumes the world from view,
The lanterns guide the journey through,
For every soul who dares the sea,
They burn with soft tenacity.

And though the night obscures the sight,
The lanterns keep their patient light,
A sign that even in the gray,
The heart will always find its way.`
  },
  {
    title: "Paper Boats",
    teaser: `We folded dreams in fragile hands,
And set them sailing foreign lands,
The water caught their weightless form,
A fleeting fleet in fleeting storm,
Though some would sink and some would stray,
Our paper hopes still drift away...`,
    full: `We folded dreams in fragile hands,
And set them sailing foreign lands,
The water caught their weightless form,
A fleeting fleet in fleeting storm.

Though some would sink and some would stray,
Our paper hopes still drift away,
And though the waves consumed the rest,
We cherished each with beating chest.

For hope is fragile, hope is small,
Yet still it dares to brave it all,
Each paper boat, though bound to part,
Will always leave a mark on heart.`
  },
  {
    title: "The Poet’s Candle",
    teaser: `A single flame, a fragile spark,
It lights the corners of the dark,
Each line it writes consumes its form,
A fleeting glow, a fleeting warm,
Yet while it burns, the night is kind,
The poet leaves his flame behind...`,
    full: `A single flame, a fragile spark,
It lights the corners of the dark,
Each line it writes consumes its form,
A fleeting glow, a fleeting warm.

Yet while it burns, the night is kind,
The poet leaves his flame behind,
And though the wax may fade away,
His words will live another day.

For every poem the candle fed,
Still burns within the hearts it led,
A light that flickers, never still,
A truth that flames beyond his will.`
  },
  {
    title: "Through the Pines",
    teaser: `The forest hums a sacred tone,
Its voice is old, its voice is stone,
The pines bow low, the wind replies,
A hymn beneath the endless skies,
I walk the path, my spirit stirred,
By ancient songs without a word...`,
    full: `The forest hums a sacred tone,
Its voice is old, its voice is stone,
The pines bow low, the wind replies,
A hymn beneath the endless skies.

I walk the path, my spirit stirred,
By ancient songs without a word,
Each branch, each leaf, a voice that sings,
Of timeless earth and rooted things.

And when I leave, the sound will stay,
A quiet guide along my way,
The pines remind, in whispered rhyme,
That I am only passing time.`
  },
  {
    title: "Anchor of Stars",
    teaser: `I cast my anchor into night,
It caught on constellations bright,
The cosmos held my restless ship,
Through endless dark, through endless slip,
And though the tides would pull me far,
I held my ground by one bright star...`,
    full: `I cast my anchor into night,
It caught on constellations bright,
The cosmos held my restless ship,
Through endless dark, through endless slip.

And though the tides would pull me far,
I held my ground by one bright star,
It tethered me when storms grew wild,
A mother’s hand, the touch so mild.

For even drifting souls can stay,
When stars above still light the way,
An anchor cast, though out of sight,
Can hold us fast through endless night.`
  }
);poems.push(
  {
    title: "The Last Ember",
    teaser: `It glows beneath the ashen bed,
A stubborn flame not fully dead,
It waits for breath, it waits for spark,
A tiny sun against the dark,
Though cold may press and night may grow,
The ember whispers, “still, I glow.”`,
    full: `It glows beneath the ashen bed,
A stubborn flame not fully dead,
It waits for breath, it waits for spark,
A tiny sun against the dark.

Though cold may press and night may grow,
The ember whispers, “still, I glow.”
For even when the fire seems gone,
Its heart still beats, its soul burns on.

And with one touch, one breath, one call,
The flame can rise and warm us all,
A truth that time will never smother,
One fire births a thousand others.`
  },
  {
    title: "Clockwork Sky",
    teaser: `The stars align with ticking grace,
A gear that turns in endless space,
Each planet spins, each orbit flows,
A secret mechanism knows,
That time is wound, that time is why,
We live beneath a clockwork sky...`,
    full: `The stars align with ticking grace,
A gear that turns in endless space,
Each planet spins, each orbit flows,
A secret mechanism knows.

That time is wound, that time is why,
We live beneath a clockwork sky,
Each moment strikes, each moment stays,
A hand that sweeps our fleeting days.

And when at last the cogs grow still,
The sky will bend to greater will,
But till that time, the hours sing,
A cosmic wheel still turning.`
  },
  {
    title: "The Bridge of Echoes",
    teaser: `Across the canyon wide and deep,
A bridge of stone holds secrets keep,
Each step resounds, each word returns,
Each silence speaks, each spirit yearns,
Though empty air divides the ground,
The bridge remembers every sound...`,
    full: `Across the canyon wide and deep,
A bridge of stone holds secrets keep,
Each step resounds, each word returns,
Each silence speaks, each spirit yearns.

Though empty air divides the ground,
The bridge remembers every sound,
It carries whispers, carries cries,
And holds them under endless skies.

No word is wasted, none are lost,
They linger here at any cost,
The bridge recalls, both kind and dire,
Each echo feeds its ancient choir.`
  },
  {
    title: "Candlelit Window",
    teaser: `A flicker glows against the glass,
A sign to those who wander past,
That someone waits, that someone stays,
Through endless nights, through endless days,
A beacon small, yet warm and true,
The candle burns for none but you...`,
    full: `A flicker glows against the glass,
A sign to those who wander past,
That someone waits, that someone stays,
Through endless nights, through endless days.

A beacon small, yet warm and true,
The candle burns for none but you,
And though the night is cold and long,
The flame is steady, sure, and strong.

For every heart that drifts astray,
It lights the path, it shows the way,
A simple glow, a silent plea,
Come home again, come back to me.`
  },
  {
    title: "The River’s Memory",
    teaser: `It carries stones from mountain’s crown,
It wears the jagged edges down,
It keeps the secrets of the land,
It traces time with patient hand,
Each ripple holds, each current weaves,
The story water never leaves...`,
    full: `It carries stones from mountain’s crown,
It wears the jagged edges down,
It keeps the secrets of the land,
It traces time with patient hand.

Each ripple holds, each current weaves,
The story water never leaves,
It carves the past, it shapes the new,
It tells the tale the earth once knew.

And when it meets the endless sea,
Its voice is joined in unity,
The river speaks, though never heard,
A history without a word.`
  },
  {
    title: "Ashes of Stars",
    teaser: `The universe is born of flame,
And yet to dust it all became,
The brightest light, the loudest song,
Still crumbles when the years grow long,
But from the dark, a truth survives,
That dying stars give birth to lives...`,
    full: `The universe is born of flame,
And yet to dust it all became,
The brightest light, the loudest song,
Still crumbles when the years grow long.

But from the dark, a truth survives,
That dying stars give birth to lives,
Their ashes spread through cosmic seas,
To plant the root of galaxies.

So even death becomes a spark,
A light that glows against the dark,
And in the void where endings are,
We find the birth of every star.`
  },
  {
    title: "Harvest Moon",
    teaser: `It rises gold above the fields,
A crown the autumn evening yields,
It watches farmers lay their rest,
It knows the labor, knows the test,
And in its glow the weary find,
A gentle peace for heart and mind...`,
    full: `It rises gold above the fields,
A crown the autumn evening yields,
It watches farmers lay their rest,
It knows the labor, knows the test.

And in its glow the weary find,
A gentle peace for heart and mind,
The barns are full, the soil sleeps,
The season’s promise safely keeps.

For every hour of toil and pain,
The harvest moon returns again,
A sign that effort, sweat, and song,
Will feed the earth the whole year long.`
  },
  {
    title: "Steps of Silence",
    teaser: `The hall is vast, the floor is bare,
Yet still I sense a presence there,
Each echo builds, each echo falls,
It writes its voice on shadowed walls,
Though no one walks, the sound is near,
A step of silence I still hear...`,
    full: `The hall is vast, the floor is bare,
Yet still I sense a presence there,
Each echo builds, each echo falls,
It writes its voice on shadowed walls.

Though no one walks, the sound is near,
A step of silence I still hear,
It follows close, it will not part,
It keeps its rhythm with my heart.

And though I search, there’s none in sight,
The steps still walk me through the night,
A haunting hymn, both soft and deep,
A ghost of sound I cannot keep.`
  },
  {
    title: "Roots of Stone",
    teaser: `The mountain holds, it does not bend,
Its roots of stone know not of end,
It weathers storm, it weathers fire,
It holds the earth, it won’t retire,
A monument of ancient bone,
A living force with roots of stone...`,
    full: `The mountain holds, it does not bend,
Its roots of stone know not of end,
It weathers storm, it weathers fire,
It holds the earth, it won’t retire.

A monument of ancient bone,
A living force with roots of stone,
It teaches us in silent ways,
That strength is born from patient days.

And though the years may carve and grind,
The mountain leaves its mark behind,
For all who climb and all who roam,
Will bow before its rooted home.`
  },
  {
    title: "The Keeper of Dawn",
    teaser: `She lifts the sun with gentle hand,
And scatters light across the land,
Her robes are spun from morning mist,
Her touch a spark the stars have kissed,
The day begins, the dark withdrawn,
She is the keeper of the dawn...`,
    full: `She lifts the sun with gentle hand,
And scatters light across the land,
Her robes are spun from morning mist,
Her touch a spark the stars have kissed.

The day begins, the dark withdrawn,
She is the keeper of the dawn,
Her voice awakens earth and sky,
Her light gives wings to those who try.

And when at last her work is done,
She bows before the setting sun,
But promises, with quiet breath,
To rise again and fight off death.`
  }
);
