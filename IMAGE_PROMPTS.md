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
