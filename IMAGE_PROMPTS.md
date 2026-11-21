# Image Prompts (Flux)

All lesson illustrations are generated with **Flux** and live in
`public/images/lessons/<lesson-id>/`. Every image has an educational job, and none is decorative filler.

## Workflow

Current images were generated with **Cloudflare Workers AI · `@cf/black-forest-labs/flux-1-schnell`** (8 steps, 1024×1024 JPEG output) and converted to **PNG**:

```bash
python3 ~/.claude/skills/cf-image/generate.py "<prompt>" -o /tmp/<name>.jpg --steps 8
python3 -c "from PIL import Image; Image.open('/tmp/<name>.jpg').convert('RGB').save('public/images/lessons/prophet-birth-youth/<name>.png', optimize=True)"
```

Credentials (`CF_ACCOUNT_ID`, `CF_API_TOKEN`) are read from the environment or a local `.env`. Never commit them (`.env` is git-ignored).

**Every image must be reviewed by eye before it is committed.** Reject and regenerate if you see any of these:

- any figure that could be read as the Prophet ﷺ, another prophet or a Companion — including any person, rider or crowd in a scene where they were present
- rendered text, letters, captions or watermarks (schnell adds these often)
- modern buildings, minarets, clock towers or electric lights
- anything that could be read as a depiction of the Prophet ﷺ

Lessons learned with flux-schnell:

- **Negative phrases don't work and can backfire.** "no riders" *added* riders. Describe the scene positively instead: say "camels kneeling and resting beside an oasis" rather than "camels without riders".
- Naming "ancient Kaaba" sometimes renders the words as a caption. The fix was to crop the bottom strip. A cube draped with cloth described generically gave odd results.
- Output is always square. Components crop with `object-cover`. The **hotspot map (`makkah.png`) must stay square and uncropped**, because hotspot coordinates are percentages of the full image.

If an image is missing, `SmartImage` shows an illustrated desert placeholder (with the filename in dev), so the app never breaks.

## Shared style (append to every prompt)

```
painterly digital illustration, premium educational storybook style, soft cinematic light,
restrained palette of warm sand, cream, deep emerald green and subtle gold, clean composition,
highly detailed
```

Visual system: warm, calm, premium, no cartoon faces, and no heavy ornament. Night scenes use deep blue and teal. Day scenes use sand and gold.

**Global must-NOT (every image):** a depiction of the Prophet ﷺ, other prophets or the Companions in any form (no people at all in scenes where they were present) · text · watermarks · modern buildings or objects · minarets or the modern Masjid al-Ḥarām · the clock tower.

---

## hero.png

- **Purpose:** the lesson hook (step 01) and the lesson cover card. It sets wonder: "imagine Makkah 1400 years ago".
- **Composition:** wide landscape. The valley sits in the lower third, with a small distant Kaaba among low houses and a huge starry sky above. The lower area stays dark for overlaid text.
- **Lighting / color:** night with the Milky Way in teal and deep blue, and faint warm lamp glows.
- **Aspect used:** full-bleed (cropped); cover 16:9.
- **Prompt:** `Wide panoramic view of the ancient desert valley of Mecca at night in the 6th century, a small simple cube-shaped stone Kaaba far in the distance among low mud-brick houses, dark rocky mountains around, a vast deep-blue sky full of bright stars and the Milky Way, faint warm lamp glows, calm and awe-inspiring, <shared style>`

## makkah.png

- **Purpose:** the hotspot map (step 02). Learners locate the Kaaba, Zamzam, Quraysh houses, caravan routes and mountains.
- **Composition:** elevated bird's-eye view. The Kaaba is near the center, a well structure just below it, house clusters around, mountains on the edges, and a caravan trail at the upper right.
- **Lighting / color:** clear daylight, map-like readability.
- **Aspect:** **1:1, uncropped** (hotspots depend on it).
- **Prompt:** `Elevated bird's-eye illustrated view of ancient Mecca in the 6th century, a small simple cube-shaped Kaaba of stacked dark stone draped in plain cloth at the center of an open sandy courtyard, a small stone well nearby, clusters of low flat-roofed mud-brick houses around, rocky brown mountains encircling the valley, a faint caravan trail leaving toward the upper right horizon, daylight, map-like clarity, <shared style>`
- **After generating:** update the hotspot `x`/`y` percentages in the lesson file to match the new artwork.

## birth.png

- **Purpose:** the "birth" step (03). A symbolic, hopeful dawn with no people and no miracles depicted.
- **Composition:** rooftops of the town, one bright star, and soft light spreading.
- **Lighting / color:** dawn in pale gold and rose.
- **Aspect used:** 4:3 / 1:1.
- **Prompt:** `Peaceful dawn over the flat rooftops of ancient mud-brick houses in a desert valley, a single bright star shining in a pale gold and rose sky, soft light spilling across the valley, serene and hopeful atmosphere, <shared style>`

## childhood-01.png

- **Purpose:** story card 1, life among Banū Sa‘d in the desert.
- **Composition:** goat-hair tents, sheep and a camel in open dunes.
- **Lighting / color:** warm sunset.
- **Aspect used:** 4:3. Also used as an option in the image quiz.
- **Prompt:** `Bedouin encampment of dark goat-hair tents in open desert at sunset, grazing sheep and a resting camel nearby, rolling golden dunes, glowing warm sky, peaceful and spacious, <shared style>`

## childhood-02.png

- **Purpose:** story card 2, loss and loving care (orphanhood, grandfather, uncle). Tender, not gloomy.
- **Composition:** a home courtyard with a lit oil lamp, a rug and a water jar.
- **Lighting / color:** dusk with warm protective lamplight.
- **Aspect used:** 4:3.
- **Prompt:** `Quiet courtyard of an ancient Arabian mud-brick house at dusk, a small clay oil lamp glowing on a low wall, a woven rug and clay water jar, warm protective light, intimate and tender mood, <shared style>`

## childhood-03.png

- **Purpose:** story card 3, shepherding (patience and responsibility).
- **Composition:** a flock on rocky hills with a shepherd's staff leaning on a rock. The staff implies the person without showing one.
- **Lighting / color:** soft morning light.
- **Aspect used:** 4:3.
- **Prompt:** `A flock of sheep grazing on rocky hills near an ancient desert valley in soft morning light, a wooden shepherd's staff leaning against a rock, sparse desert shrubs, calm and patient mood, <shared style>`

## youth.png

- **Purpose:** banner for the youth timeline (05), representing trade and caravans.
- **Composition:** loaded camels resting at an oasis with dunes to the horizon. Wide-crop friendly, with the subject in the middle band.
- **Lighting / color:** golden sunrise.
- **Aspect used:** 16:9 on phones, 3:1 to 7:2 on desktop.
- **Prompt:** `Several camels loaded with woven bags, rolled carpets and clay jars kneeling and resting beside a small palm oasis at golden sunrise, wide desert dunes stretching to the horizon, empty tranquil landscape, <shared style>`
- **Note:** the "walking caravan" version kept adding riders, which is why it is a resting scene.

## caravan.png

- **Purpose:** the correct answer in the image quiz ("the work he did for Khadīja").
- **Composition:** close view of three loaded camels, trade goods clearly visible, a palm oasis behind.
- **Lighting / color:** warm afternoon.
- **Aspect used:** 1:1.
- **Prompt:** `Close view of three camels loaded with woven bags, rolled textiles and clay jars resting beside a desert trade route, palm trees at a small oasis behind, warm afternoon light, <shared style>`

## kaaba.png

- **Purpose:** a distractor option in the image quiz, and a general Kaaba reference.
- **Composition:** the Kaaba alone at eye level in an open sandy courtyard, with mountains behind.
- **Lighting / color:** clear pale sky.
- **Aspect used:** 1:1 (cover-cropped).
- **Prompt:** `The ancient Kaaba as a simple cube-shaped building of stacked dark stone draped in plain dark cloth, standing in an open sandy courtyard in a desert valley, rocky mountains behind, clear sky, simple and reverent composition, <shared style>`
- **Note:** the generated image carried a caption, and the bottom 14% was cropped off. Its gold band is anachronistic. Regenerate with a stronger model when one is available.

## memory-game.png

- **Purpose:** a visual anchor beside the memory challenge (09), gathering objects from the story.
- **Composition:** a still life on a wooden table against a plain wall: oil lamp, water jar, shepherd's staff, dates, and a small balance scale for trade.
- **Lighting / color:** warm side light.
- **Aspect used:** 1:1 (desktop only).
- **Prompt:** `Still life of simple ancient objects on a rough wooden table against a plain sand-colored wall: a clay oil lamp, a clay water jar, a wooden shepherd staff, a small bowl of dates and a small brass balance scale, warm side light, plain blank background, <shared style>`
- **Note:** the top-down "flat-lay" variant produced stray text and a watermark.

---

## Adding images for a new lesson

1. List each step's visual need in the lesson file (`image` + `imageAlt` in ar, fr and en).
2. Write a prompt here: purpose, composition, lighting, aspect and must-nots, and append the shared style.
3. Generate, review against the rejection list, and convert to PNG in `public/images/lessons/<lesson-id>/`.

---

## Lessons g1-s1-l3, g2-s1-l3, g3-s1-l3 (Flux schnell via Cloudflare Workers AI)

Generated with the same Flux workflow as above (8 steps, 1024×1024 → PNG). Every image was reviewed by eye. Rejected and regenerated: `madina-arrival` (rendered the word "SALLCOME"), `oman-exile` and `fatimid-cairo` (minaret-like towers), `mahdia-siege` (a figure-like shape by a tent). Two attempted map images (`route-map`, `maghreb-map`) were dropped because Flux rendered wrong, text-bearing maps; the lessons use the `journey` activity instead. A faint signature strip was cropped from `oman-exile` and `abu-yazid`.

Shared suffix appended to every prompt below: `painterly digital illustration, premium educational storybook style, soft cinematic light, restrained palette of warm sand, cream, deep emerald green and subtle gold, clean composition, highly detailed, an empty uninhabited scene`


### public/images/lessons/hijra-habasha-madina/

- **hero.png** — `Wide panoramic view of a lone caravan trail of kneeling camels resting under a vast starry night sky beside a distant palm oasis city glowing with warm lamps, calm and awe-inspiring`
- **habasha-shore.png** — `Wooden sailing boats moored on a calm turquoise Red Sea shore at dawn, green highlands of Abyssinia on the horizon, gentle waves, golden sunrise`
- **najashi-court.png** — `A grand ancient palace hall with a carved empty wooden throne under tall arches, hanging oil lamps, rich red and gold carpets, warm candlelight, dignified and quiet`
- **shib-siege.png** — `A narrow dry rocky mountain valley with a few goat-hair tents and bare sandy ground, scorched thorny shrubs, harsh midday sun, a feeling of hunger and hardship`
- **sahifa.png** — `An old torn parchment scroll with holes eaten away by insects hanging on a rough stone wall beside a dark cube-shaped stone building draped in black cloth, warm lamp light, only unreadable faint brown ink marks`
- **taif.png** — `Rocky brown hills of Taif with green orchard terraces behind low stone walls and a lone dusty path winding between them, late afternoon light, quiet and lonely`
- **isra-night.png** — `A shining path of golden light stretching across a deep blue starry night sky between a dark desert city and a distant glowing stone domed sanctuary on a hilltop, serene and sacred`
- **aqaba-night.png** — `A moonlit narrow rocky mountain pass at night with a few flickering torches stuck in the sand between large boulders and kneeling camels, secret meeting atmosphere, deep blue and warm amber`
- **thawr-cave.png** — `The dark entrance of a mountain cave at sunrise with a delicate spider web across the opening and a nesting dove on a rock, rugged desert mountain, golden dawn light`
- **hijra-road.png** — `An aerial view of many camel hoof prints and a long winding desert trail crossing golden dunes toward distant dark mountains under a huge sky`
- **madina-arrival.png** — `A lush green palm oasis town of low mud-brick houses with warm glowing lamps in the windows at dusk, a plain wooden gate with a garland of green palm leaves hanging across it, joyful warm light`

### public/images/lessons/ahl-dawa-jabir/

- **hero.png** — `A vast quiet courtyard mosque of early Basra with rows of stone pillars, empty woven mats arranged in a circle and open books on wooden stands, soft golden dawn light through the arches`
- **basra-halaqa.png** — `A circle of empty cushions and mats around a single wooden book stand under pillars in a courtyard, warm light, scattered quill pens and inkwells, a sense of a study circle waiting for learners`
- **ocean-of-knowledge.png** — `A vast deep blue ocean at sunrise whose waves turn into floating glowing open books and scrolls, a distant shore with a library arch, magical yet respectful`
- **diwan-manuscripts.png** — `A wooden desk covered with stacks of handwritten manuscripts, rolled scrolls, an inkwell and quill, a brass oil lamp, warm candlelight, close-up scholarly still life`
- **hidden-lantern.png** — `A small dim hidden room with a single lantern on a table among books and a heavy curtained doorway, deep shadows and a feeling of secrecy and caution`
- **oman-exile.png** — `A date palm village of Oman with a low square mud-brick fort with thick walls, a stone irrigation channel flowing through green gardens at the foot of rocky mountains, peaceful sunset`
- **knowledge-tree.png** — `A great ancient tree with golden glowing branches each ending in an open book, roots in dark soil and a river of light flowing from its trunk, symbolic and elegant`

### public/images/lessons/ahl-istiqama-4-5/

- **hero.png** — `A fortified mountain village of mud-brick dwellings built into rocky cliffs of the Maghreb at sunset with a long caravan route below, dramatic sky, resilient and calm`
- **famine.png** — `Dry cracked farmland under a pale hot sky with an empty wooden granary and a single bowl holding a handful of grain on the ground, wilting wheat stalks, hardship`
- **abu-yazid.png** — `A lone grey donkey standing on a vast plain facing a distant fortified coastal city with a huge defensive wall, wind and dust, dramatic stormy sky`
- **mahdia-siege.png** — `A heavily fortified coastal city on a narrow rocky peninsula surrounded by the sea with thick stone walls and a great gate, rows of glowing campfires and lanterns scattered on the empty plain in the evening`
- **hamma-oasis.png** — `A hidden palm oasis of the Tunisian Jarid with hot springs and green gardens at the foot of rugged desert mountains, golden hour, peaceful`
- **scholars-tent.png** — `A large tent interior lit by hanging lamps with woven carpets, low wooden book stands and a scatter of manuscripts for a council of scholars, warm and serious mood`
- **fatimid-cairo.png** — `A massive plain sandstone city gate with a great round arch and thick crenellated walls beside a calm river at golden hour, palm trees, strong and imposing`
- **warjlan-halaqa.png** — `A desert oasis city of mud-brick houses with narrow shaded alleys and a courtyard where open books rest on mats in a circle, palm trees, warm gold light`

---

## Lessons g1-s1-l4, g2-s1-l4, g3-s1-l4 (Flux schnell via Cloudflare Workers AI)

Same workflow and shared suffix as the previous section (8 steps, 1024×1024 → PNG). Every image was reviewed by eye. Rejected and regenerated: `welcome-house` (modern door handle), `brotherhood` (teapot-like lamps, radiator), `sahifa` (fountain pen), `night-watch` (signature), `hero` of ibn-ibad (minaret-like tower, then pitched roofs with chimneys), `tamim-tents` (standing figures, then riders), `letter-scroll` (text on the lamp, then a modern-looking pen), `umayyad-hall` (text panels), `oasis-map` (figures), `caravan-station` (glyphs, signpost text, "PLATEE"), `scholars-books` (statue figure, pseudo-script on open pages), `sudan-caravan` (distant walkers), `market-goods` (calligraphy banner), `sedrata-ruins` (tiny figures). `open-book` was dropped after two text-bearing attempts. A signature strip was cropped from `welcome-house`, `dialogue`, warjlan-sadrata `hero`, `irrigation` and `market-goods`.

### public/images/lessons/nashat-dawla/

- **hero.png** — `Wide panoramic view of a green palm oasis town of low flat-roofed mud-brick houses at sunrise, dense date palm groves and black volcanic hills around, a simple walled courtyard with a shaded palm-frond roof at the heart of the town, golden morning light, hopeful and peaceful`
- **masjid.png** (explorer, square, uncropped) — `Elevated view of a simple early open-air courtyard enclosure with low mud-brick walls, one side shaded by a flat roof of dried palm fronds resting on rows of palm-trunk pillars, woven mats on the shaded sandy floor, an open wooden gateway, a small plain mud-brick house attached beside the enclosure, date palms around, bright daylight`
- **welcome-house.png** — `Inside an ancient desert mud-brick dwelling with rough plastered walls and a palm-wood ceiling, a doorway hung with a woven curtain drawn aside letting in warm sunlight, floor cushions and woven rugs, a low wooden tray with dates, flat bread and a clay water jug, folded wool blankets for guests, generous and welcoming`
- **brotherhood.png** — `Two small ancient clay oil lamps of the shallow open saucer kind with a pinched spout, set side by side on a rough wooden plank, one flame leaning to light the wick of the other so both glow together, plain dark mud-brick wall behind, symbolic of brotherhood and sharing`
- **sahifa.png** — `A rolled ancient parchment scroll tied with a red cord lying on a low wooden table beside a clay inkwell and a feather quill, a small clay oil lamp glowing, rough mud-brick wall behind, calm and solemn`
- **qibla.png** — `A simple open-air prayer courtyard of mud-brick walls and palm-trunk pillars with rows of woven prayer mats, golden afternoon light streaming in from one side and long shadows turning across the mats, a sense of a change of direction`
- **adhan-dawn.png** — `Flat mud-brick rooftops of a palm oasis town at dawn, the first light rising over dark hills, a wide sky in rose and gold, birds flying, calm and calling atmosphere`
- **night-watch.png** — `A mud-brick town wall with a heavy wooden gate at night under a bright full moon, two burning torches on the wall, wooden spears leaning against the wall, date palm trees around, watchful and calm, deep blue and warm amber`

### public/images/lessons/ibn-ibad/

- **hero.png** — `Rolled parchment letters tied with cord and a clay inkwell with a reed pen on a wooden windowsill under a pointed arch window, outside a wide calm river and dense date palm groves with low flat-roofed cube-shaped mud-brick houses at dusk, warm lamp glow`
- **tamim-tents.png** — `Ground-level view of a large encampment of dark goat-hair tents pitched among date palms on a wide plain beside a river at sunset, camels kneeling and resting in the sand in front of the tents, long shadows, strong and secure`
- **letter-scroll.png** — `Close-up of a plain rolled parchment scroll tied with a red cord resting on a worn brown leather satchel on a rough wooden desk, beside it a small shallow clay saucer oil lamp with a small flame and a simple cut reed stick, warm firelight, dark background`
- **umayyad-hall.png** — `A grand palace hall with walls covered in golden and green mosaic of trees and rivers, polished marble columns and a raised empty gilded throne under a great arch, hanging lamps, opulent and quiet`
- **mecca-valley.png** — `A desert valley town of low flat-roofed houses encircled by rugged dark mountains at dusk, rows of small campfires glowing along the mountain ridges all around the valley, tense and heavy atmosphere, deep blue and amber` (the Kaaba is deliberately not shown)
- **dialogue.png** — `Two embroidered floor cushions facing each other across a low wooden table holding two open books and a single lit oil lamp, in a quiet room with a carved wooden screen, warm evening light, a sense of calm conversation`
- **straight-path.png** — `A long straight stone path crossing golden desert dunes toward a glowing sunrise on the horizon, the path clear and steady, vast calm sky`

### public/images/lessons/warjlan-sadrata/

- **hero.png** — `Two neighboring desert oasis cities of low mud-brick houses surrounded by vast palm groves in the Sahara at golden sunset, a long line of kneeling resting camels with loaded saddlebags beside a stone well outside the walls, wide panoramic view, calm and prosperous`
- **oasis-map.png** (explorer, square, uncropped) — `Top-down illustrated map view of a small medieval Saharan oasis town: a compact cluster of flat-roofed mud-brick houses in the center, three round stone wells beside the houses, two straight blue irrigation canals running from the town out to dense green date palm orchards at the left and bottom edges, a sandy caravan trail with resting camels at the upper right corner, plain golden sand everywhere else`
- **caravan-station.png** — `A caravan rest stop in the Sahara at dawn: camels kneeling in a circle beside a stone well with a wooden pulley frame, leather water skins and saddlebags lying on the sand, date palms and a low mud-brick town wall in the background`
- **irrigation.png** — `A long straight stone irrigation canal of clear flowing water running through a lush date palm grove and green gardens in the Sahara desert toward distant mud-brick houses, warm morning light`
- **scholars-books.png** — `Still life of a stack of closed leather-bound books and tied rolled scrolls on a woven palm mat beside a clay inkwell with reed pens and a lit brass oil lamp, plain smooth sand-colored mud wall behind, warm gold light`
- **sudan-caravan.png** — `A single long line of camels laden with colorful bundles of dyed cloth walking across golden sand dunes toward a wide empty green savanna with baobab trees at sunrise`
- **market-goods.png** — `Close-up still life of rolls of plain brightly dyed cloth in indigo, saffron and red, baskets of spices and dates, copper pots and leather bags on a woven mat, plain palm-leaf awning above, warm light`
- **sedrata-ruins.png** — `Close view of the top of a finely carved stucco arch and broken mud-brick walls emerging from smooth golden Sahara sand dunes, hazy pale sky, quiet and melancholic`
- **ouargla-simple.png** — `A modest quiet Saharan oasis town of simple low mud-brick houses among tall date palms beside a stone well at dusk, peaceful and sheltered, warm lamp glow in small windows`

---

## Content audit fixes (Flux schnell via Cloudflare Workers AI)

Images that showed the Prophet ﷺ or Companions, or a crowd in a scene where they were present, were replaced (see CONTENT_GUIDELINES.md §1). Same workflow and shared suffix.

### Regenerated

- **prophet-birth-youth/cave-hira.png** — `View from inside an empty small rocky mountain cave looking out through its narrow opening at a wide ancient desert valley far below at dusk, a small plain cube-shaped Kaaba standing among a few low flat-roofed mud-brick houses, bare rocky mountains all around, a woven reed mat and a clay water jug resting on the bare stone floor of the cave, quiet and contemplative`
- **prophet-birth-youth/black-stone.png** — `A dark polished Black Stone resting in the middle of a large woven striped cloak spread on the sandy ground in front of the half-rebuilt stone wall of the ancient Kaaba, wooden scaffolding and stacked building stones around, four corners of the cloak lying open, calm late afternoon light`
- **prophet-birth-youth/hilf-al-fudul.png** — `An empty ancient Arabian mud-brick hall at night with plain plastered walls and palm-wood ceiling beams, floor cushions arranged in a circle on woven carpets around a low wooden table, a single rolled parchment scroll tied with a red cord on the table, clay oil lamps glowing, solemn and dignified`
- **prophet-birth-youth/youth-trade.png** — `Four saddled camels resting on open golden sand dunes at sunrise, plain undecorated bundles of woven cloth and leather saddlebags of trade goods on the sand beside them, two plain clay jars, a long empty desert trail winding north toward distant rocky hills, warm sunrise`
- **hijra-habasha-madina/miraj-sky.png** (new) — `A luminous staircase of soft golden light rising from a distant glowing stone domed sanctuary up through layers of deep blue starry sky and swirling clouds toward a radiant celestial light, serene and sacred`
- **jamal-siffin/hero.png** — `Wide view of an empty dusty plain beside palm groves and a calm river delta at dusk, a single empty wooden camel litter draped in plain dark red cloth standing alone on the sand, dropped spears and round shields scattered around it, settling dust, solemn and quiet`
- **jamal-siffin/siffin-hero.png** — `Wide view of a vast empty plain on the bank of the Euphrates river at dawn, two long rows of abandoned tents facing each other across the plain, tall plain red and green cloth banners on wooden poles fluttering in the wind, dramatic clouds, tense calm`

### Pending (the daily Cloudflare quota ran out)

These sections currently point to an existing figure-free image. After generating, point each section back to its own file and update its `imageAlt`.

- **jamal-siffin/envoy.png** — `A single saddled brown horse tied to a stone marker beside a dusty road winding north through rocky hills, a rolled parchment letter tied with red cord resting on the stone, soft morning light`
- **jamal-siffin/march.png** — `A long trail of hoofprints and camel tracks crossing a wide golden desert plain toward the horizon, plain cloth banners on wooden poles planted along the route, a cloud of dust far in the distance, golden afternoon light`
- **jamal-siffin/siffin.png** — `Round wooden shields, curved swords and long spears lying on the sand of an empty battlefield beside a slow river, haze of dust in the air, late afternoon light, quiet after the fighting`
- **jamal-siffin/demand.png** — `A quiet open courtyard of an early mud-brick building with palm-trunk pillars and a flat roof of dried palm fronds, woven mats and plain floor cushions arranged in a circle on the sandy floor, warm daylight streaming in`
- **jamal-siffin/jamal.png** — `A single tall camel standing calmly on a dusty plain, carrying an empty wooden litter covered in plain undecorated red cloth, broken spears and dropped round shields scattered on the sand around it, palm trees in the hazy distance, evening light`
- **jamal-siffin/answer.png** (has pseudo-text and modern objects) — a new still life of a closed book, reed pen and inkwell
- **nahrawan-muhakkima/hero.png** — `Abandoned dark goat-hair tents on the bank of a wide river under a dark stormy sky, palm groves on the far bank, wind blowing sand across the ground, ominous and heavy`
- **nahrawan-muhakkima/abdallah-ibn-wahb.png** — `An austere desert camp of simple dark goat-hair tents among low dunes, a single plain dark cloth banner on a tall wooden pole planted between the tents, woven mats and a small wooden book stand in front of the main tent, calm evening light`
- **nahrawan-muhakkima/nahrawan-ambush.png** — `Overturned tents, broken spears and scattered round shields on a river bank at dawn, thin smoke drifting over the calm water, palm trees on the far bank, pale mournful light`
- **nahrawan-muhakkima/mosque-door-dawn.png** — `A heavy carved wooden double door set in a thick plain mud-brick wall at dawn, a small clay oil lamp glowing in a niche beside the door, an empty courtyard with long blue shadows, a thin crescent moon in the pale sky`
- **nahrawan-muhakkima/pursuit.png** — `A narrow dark alley of an old mud-brick city at night, a single burning torch fixed on the wall, a closed heavy wooden door, long shadows on the worn stone paving, tense and silent`
- **nahrawan-muhakkima/damascus-capital.png** — `An ancient walled city at sunset with thick crenellated stone ramparts, a great palace with one broad low lead-covered dome, green gardens and orchards around the walls, plain green banners on the ramparts, majestic`
- **nahrawan-muhakkima/varied-reactions.png** (new) — `Still life on a woven mat in a quiet room: on the left a sheathed sword lying flat, in the middle a small closed wooden box, on the right a closed leather-bound book beside a lit clay oil lamp, warm gold light, symbolic and calm`
- **hijra-habasha-madina/year-of-sorrow.png** (new; the Year of Sorrow card temporarily uses sahifa.png) — a quiet mourning scene: an empty house doorway at dusk with an unlit lamp

---

## Lesson 5 of each grade (Flux schnell via Cloudflare Workers AI)

Same workflow and shared suffix. Square images used by `lantern` sections must stay uncropped, like hotspot maps.

### public/images/lessons/ghazawat/


11 generation calls for 10 images. Every image reviewed by eye: no human figure, no text.

- **hero.png** — `Wide desert valley at golden dawn, a plain green cloth banner on a wooden pole planted in the sand, round leather shields and wooden spears lying on the sand in the foreground, distant rocky mountains and a palm oasis on the horizon, empty uninhabited landscape, calm and solemn` (post-edit: a tiny figure-like speck on the far dune at ~11%/53% was painted over with neighbouring sand and blurred)
- **caravan.png** — `Several camels loaded with woven bags and bundles kneeling and resting on a sandy road beside the calm Red Sea shore at late afternoon, rocky desert hills on one side and turquoise sea on the other, empty uninhabited landscape`
- **badr-night.png** — `A wide moonlit desert plain at night seen from slightly above, in the left foreground a round stone well beside a small stone basin full of water reflecting the moon, in the right foreground an old well filled up with a heap of rocks and sand, in the middle a few dark goat-hair tents with one glowing clay oil lamp, far away on the horizon behind a dune a row of tiny campfires, vast deep-blue starry sky, empty uninhabited scene` (lantern scene: must stay square and uncropped; secrets at well 23/72, rock heap 73/73, tent 79/58, horizon fires 63/41, moon 54/21)
- **uhud.png** — `A long massive reddish rocky mountain rising above a wide sandy plain in clear morning light, a few simple cloth tents pitched at the far edge of a dry valley at its foot, scattered acacia shrubs, empty uninhabited landscape`
- **archers-hill.png** — `The rocky top of a small hill overlooking a wide sandy plain with a large reddish mountain behind, several simple curved wooden longbows and leather quivers full of feathered arrows resting against the rocks on the hilltop, afternoon light, empty uninhabited landscape` (second attempt; the first prompt, "wooden bows and leather quivers full of arrows lying abandoned on the rocks at the top of the hillock", drew a crossbow-like bow and was rejected)
- **ahzab-camp.png** — `A vast encampment of hundreds of small dark goat-hair tents with plain cloth banners spread across a wide sandy plain at dusk, seen from far above, a walled palm oasis town of low mud-brick houses in the distance, rocky black lava hills on both sides, empty uninhabited scene, tense quiet atmosphere` (post-edit: two tiny specks by the town gate painted over; bottom 5% cropped to remove a faint signature mark)
- **trench.png** — `Elevated view of a long wide deep trench freshly dug across a sandy plain between two dark rocky hills in daylight, heaps of excavated earth along its edge, wooden pickaxes and woven palm baskets lying beside it in the left foreground, one large cracked grey boulder inside the trench in the centre, a wooden bowl of food on a mat in the right foreground, a palm oasis with low mud-brick houses behind the trench, empty uninhabited scene` (explorer map: must stay square and uncropped; hotspots at houses 44/24, trench 50/42, left hill 13/30, trench wall 37/70, pickaxe 17/64, boulder 49/57, bowl 84/87, sky 52/8)
- **storm.png** — `A fierce cold night wind and swirling dust storm tearing through a desert camp, dark goat-hair tents collapsing and flying loose with snapped ropes, overturned cooking pots and extinguished campfires, torn cloth banners blown away, dramatic dark teal sky, empty uninhabited scene` (post-edit: top 17% cropped to remove an odd winged-animal shape in the sky; image is now 1024×854)
- **forts.png** — `Several tall ancient fortified tower houses of dark stone and mud brick with heavy closed wooden gates standing among dense date palm groves at dusk, long shadows, a tense silent atmosphere, empty uninhabited scene`
- **calm.png** — `A peaceful palm oasis town of low mud-brick houses at clear sunrise after a storm, calm golden light, still palm trees, a wide empty sandy plain in front with a long earthen trench in the distance, fresh clear sky, empty uninhabited scene, serene and relieved mood`

#### Pending / could be improved (none blocking)

- **forts.png** — wall lamps look like later-period sconces; regenerate with a stronger model if wanted (same prompt + `plain bare walls`).
- **calm.png** — a few bench-like shapes by the houses and the trench runs through the street; regenerate if wanted with `the trench crossing open sand far outside the town`.
- **hero.png** — small domed roofs in the distant oasis are slightly anachronistic.

### public/images/lessons/abu-ubayda/

- **hero.png** — `Front of a humble ancient basket-weaver's workshop of mud-brick with a low arched wooden door, stacks of woven palm-leaf baskets and bundles of palm fronds beside the door, a clay lantern glowing in a wall niche, behind it a wide calm river with dense date palm groves and low flat-roofed mud-brick houses at dusk, wide view, calm and mysterious` (cropped to remove a tiled roof at the top-right edge)
- **cellar.png** (lantern, square, uncropped) — `Interior of an ancient underground vaulted brick cellar lit by small clay oil lamps, on the left a stone staircase rising to an arched wooden door with heavy iron chains hanging across the doorway, in the center a low wooden book stand holding an open book on a circle of woven straw mats, on the right a tall pile of woven palm-leaf baskets and bundles of dried palm fronds, a shelf of old leather-bound books on the back wall, deep shadows and warm amber glow, secret and quiet` (pseudo-script on the open pages blurred out; secrets placed at door 50/47, chains 50/13, book 52/72, baskets 83/69, lamp 13/73)
- **chains.png** — `Close-up of heavy old iron chains hanging across a narrow arched doorway at the top of worn stone steps leading down into a dim brick cellar, a faint warm lamp glow rising from below, dust in a ray of light, quiet and watchful`
- **baskets.png** — `Close-up still life of a half-woven palm-leaf basket with loose strands beside three finished round woven baskets on a woven straw mat, long strips of dried green palm leaves, a simple clay water jug, plain bare mud-brick wall behind, warm sunlight from the side, humble and diligent`
- **caravan.png** — `Empty silent desert campsite at dawn, three camels kneeling asleep in the sand, leather saddlebags and bundles of closed leather-bound books stacked on a woven palm mat beside them, a sandy trail forking into two paths toward two far horizons, distant date palm groves, vast golden sky, wide landscape of animals and objects only`
- **letters.png** — `Rolled parchment letters tied with cord packed in an open worn leather saddlebag on a woven palm mat, beside a neat stack of closed plain leather-bound books and a clay inkwell with a cut reed stick, a small shallow clay saucer oil lamp with a small flame, dark mud-brick wall behind, warm firelight, close-up still life` (signature strip cropped)
- **prison-door.png** — `A heavy ancient wooden door with iron studs standing wide open in a thick dark stone wall, bright golden morning sunlight pouring through the doorway onto a worn stone floor, an iron ring with a broken chain lying on the floor, view from inside a bare dim stone room, a sense of freedom`
- **chest.png** — `An old closed wooden chest with iron bands and a round brass lock standing on a stone floor in a dim vaulted brick room, a warm golden glow leaking from under its lid, a small clay oil lamp beside it, mysterious and precious` (signature strip cropped)

Rejected and regenerated: `caravan` (first attempt "camels kneeling and resting beside a stone well at a desert crossroads" rendered two seated figures), `baskets` (first attempt had a wall hanging and a book with rendered text, and a teapot-like lamp). 10 generation calls in total.

Pending: none.

### public/images/lessons/nafusa-jerba/

12 Flux calls (cap reached).

Shared suffix as in IMAGE_PROMPTS.md. Reviewed by eye. Rejected: `kitman` v1 (electric-looking wall lamps, cables), `kitman` v2 (barbed wire, bulb lantern), `djerba-mosque` v1 (cross finial), `books-chest` v1 (pseudo-script on open pages).
Post-processing: `djerba-mosque` v2 — a small cross-like finial on the dome was painted out with sky colour; `kitman` v3 — cropped to the lower 1024×555 band to remove three wrought-iron wall lanterns and a signature; `harbor-boats` — cropped to a 1024×585 band to remove tiny distant figures, a tower and a signature.

- **hero.png** — `Wide panoramic view from a rocky sandstone mountain ridge with an ancient stone and mud Amazigh village and terraced olive groves in the foreground, the land sloping down to a calm turquoise sea in the distance where a low flat island with small white low-domed buildings and date palms lies on the horizon, golden sunrise light, quiet empty landscape`
- **qasr.png** — `An ancient Amazigh fortified communal granary built of honey-colored mud and stone, many small arched vaulted storage cells stacked in four irregular tiers around a courtyard, rough wooden beams sticking out of the walls, small dark arched openings, clear blue sky, warm morning light, quiet empty courtyard`
- **kitman.png** (cropped band) — `A heavy closed ancient wooden plank door set in a thick rough stone wall of a mountain village house at dusk, warm firelight glowing through the narrow gap under the door, a gnarled olive tree beside the wall, worn stone steps, deep blue evening sky with first stars above the flat roof, calm and secret mood, quiet empty scene`
- **halqa-lantern.png** (lantern, square, uncropped) — `Interior of a simple ancient stone-vaulted study room in a mountain village at night, a circle of woven palm mats on the floor around a low wooden book stand holding a closed leather-bound book, two small clay oil lamps glowing side by side at the center, a stack of old bound books in a wall niche on the left, a long plain woven curtain hanging across the right side of the room, a plain arched niche in the back wall, deep blue shadows and warm lamp glow, quiet empty room`
- **djerba-mosque.png** (finial retouched) — `A small ancient whitewashed North African island mosque of Djerba, low and wide single-storey building with thick white walls and heavy sloping buttresses, one low plain rounded white dome with a smooth bare top, a shaded porch with three round arches, date palms and old olive trees around, sandy ground, turquoise sea behind, bright soft daylight, quiet empty scene`
- **island-map.png** (explorer, square, uncropped) — `Top-down illustrated map view of a small flat sandy island surrounded by plain calm turquoise sea, a larger white courtyard building with low domes near the center, small white low-domed buildings and white flat-roofed village houses scattered across the island among date palm groves and olive trees, sandy paths linking them, three small wooden sailing boats anchored by a stone jetty at the lower left shore, daylight, map-like clarity`
- **harbor-boats.png** (cropped band) — `Small wooden sailing fishing boats with furled sails anchored in calm shallow turquoise water beside an old stone jetty on a flat island, a wooden chest, cloth bundles and a rolled palm mat waiting on the jetty, a white low-domed building and date palms on the shore behind, soft morning light, quiet empty scene`
- **books-chest.png** — `An open old wooden chest filled with closed thick leather-bound books with plain brown covers stacked spine to spine, a glowing clay oil lamp beside it, a reed pen resting in a small clay inkwell, on a woven palm mat inside a whitewashed room with an arched niche, warm light, quiet still life`

Pending (optional, when quota allows):
- **kitman.png** full-square regeneration without wall lanterns (current file is a cropped band).
- **harbor-boats.png** full-square regeneration without distant figures (current file is a cropped band).
- **qasr.png** could be regenerated closer to a real Nafusa ghorfa granary (current one reads as a generic arched earthen courtyard).
