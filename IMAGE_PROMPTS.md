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

- any human figure, including tiny riders, distant people or silhouettes
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

**Global must-NOT (every image):** a depiction of the Prophet ﷺ in any form · any human figure · faces · silhouettes · text · watermarks · modern buildings or objects · minarets or the modern Masjid al-Ḥarām · the clock tower.

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
