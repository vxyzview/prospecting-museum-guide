---
name: The Sunscorched Ledger
description: Night-room specimen catalog design system for vxyzview's Prospecting! field guide — warm near-black exhibit hall, hairline-ruled ledgers, one desert-gold accent, real wiki specimens. Replaced the warm-paper timetable world on 2026-10-26.
colors:
  night-room-umber: "#14110d"
  lifted-panel: "#1b1712"
  lifted-panel-2: "#201b15"
  warm-off-white: "#f0e9dc"
  column-secondary: "#bdb3a1"
  stone-mute: "#8d8372"
  hairline: "rgba(240, 233, 220, 0.12)"
  hairline-strong: "rgba(240, 233, 220, 0.26)"
  desert-gold: "#e3a72c"
  gold-text: "#e6b45a"
  route-teal: "#56c9ab"
  route-gold: "#dda53e"
  route-ember: "#e07a4a"
  route-steel: "#89a8d8"
  specimen-tile: "#26201a"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.55rem, 7.2vw, 4.7rem)"
    fontWeight: 640
    lineHeight: 1.04
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Archivo Variable, Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.55rem, 4.2vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "0.012em"
  title:
    fontFamily: "Archivo Variable, Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 3.1vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "0.02em"
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo Variable, Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 560
    lineHeight: 1.3
    letterSpacing: "0.09em"
rounded:
  plate: "4px"
  tile: "3px"
  focus: "2px"
spacing:
  column: "66rem"
  column-pad: "clamp(1.1rem, 4vw, 2.2rem)"
  section: "clamp(3.2rem, 8vw, 5.5rem)"
components:
  ledger-table:
    backgroundColor: "{colors.night-room-umber}"
    textColor: "{colors.warm-off-white}"
    padding: "0.8rem 0.85rem"
  reserved-row:
    backgroundColor: "rgba(227, 167, 44, 0.1)"
    textColor: "{colors.gold-text}"
    padding: "0.8rem 0.85rem"
  build-chip:
    backgroundColor: "rgba(27, 23, 18, 0.82)"
    textColor: "{colors.warm-off-white}"
    rounded: "{rounded.plate}"
    padding: "0.6rem 0.75rem"
---

# Design System: The Sunscorched Ledger

## Overview

**Creative North Star: "The Night-Room Specimen Catalog"**

The page is a museum exhibit hall visited after hours: warm near-black walls, a single gold accent lamp, and one lit exhibit row per case. Every answer the reader came for is a numbered exhibit with real specimens — mineral tiles behind glass-like tiles, digsite scenes in dimmed frames, tables ruled like catalog drawers. It replaces the warm-paper transit-timetable world (2026-10-26 directive) and refuses both flanking category defaults: the retired light timetable and the generic dark neon gamer dashboard — no glow anywhere, no neon on dark, no gradient ornaments; the accent is a desert gold, not a signal color.

Depth is physical, not simulated: hairline rule weight, panel lift from the ground, and photographic scrims where the subject's own light demands it. The reading column stays a plain, fast field guide — Atkinson Hyperlegible, wide measure, tabular numbers — while the catalog frame (numbers, caps, rules, seals) does the expressing.

**Key Characteristics:**
- Warm near-black ground that never goes pure black or blue-dark; warmth is the room's light.
- One gold accent plus four route marks (teal / gold / ember / steel) used as marks only.
- Numbered stops (01–06) on hairline rules; tabular figures in every data column.
- Real specimens from the Official Prospecting! Wiki, credited file-by-file; dimmed scenes, one exhibit row per table family.
- Nothing glows. Depth is rules, panel lift, and photographic necessity — never glow or glass.

## Colors

The palette is lit by one warm lamp: umber walls, off-white text, stone-gray narration, and desert gold reserved for the thing a visitor walks toward.

### Primary
- **Desert Gold** (#e3a72c): the accent as a mark — stop numerals, route dots, the seal's disc, selection fill, focus ring, the reserved-row seam. A fill, never running text.
- **Gold Text** (#e6b45a): gold when it must be read — links, reserved-row strongs; tuned to pass AA on the umber ground.

### Secondary
- **Route Teal / Route Gold / Route Ember / Route Steel** (#56c9ab / #dda53e / #e07a4a / #89a8d8): the four setups keyed to their signature minerals (Key of Life, Eye of the Sands, Solarium, Adamantine). Marks only — dots, plate tabs; never fields behind text.

### Neutral
- **Night-Room Umber** (#14110d): the page ground. Warm brown-black on purpose; never pure #000, never blue-dark.
- **Lifted Panel / Lifted Panel 2** (#1b1712 / #201b15): plates, exhibit mats, chips — surfaces one step off the wall.
- **Warm Off-White** (#f0e9dc): the column's light — headings and strong text.
- **Column Secondary** (#bdb3a1): running narration, ledes (≈9:1 on ground).
- **Stone Mute** (#8d8372): captions, footlines, wayfinding at rest (≥4.5:1 on ground).
- **Hairline / Hairline Strong** (rgba(240,233,220,.12) / .26): the ruled-drawer texture — row rules, box borders, structure lines.

### Named Rules
**The One Book-End Rule.** Each table family carries exactly one reserved exhibit row — the arrival answer — drawn as a 10% gold wash with 1px gold hairlines and a 3px inset gold seam on its first cell. Anything more makes the gold wallpaper.

**The Mark-First Rule.** Importance rides on marks — gold numerals, route dots, the seal — never on hue fields behind text. No colored side-stripes on cards, notes, or list items; content has no left ribbons.

**The Nothing-Glows Rule.** No text-shadow, no glow, no glass, no light effects on dark. The world is lit like a room, not like a terminal.

## Typography

**Display Font:** Archivo Variable (with Archivo / system fallback) — self-hosted via @fontsource; the wght axis is used directly (560–650)
**Body Font:** Atkinson Hyperlegible (with Segoe UI fallback) — binding accessibility commitment inherited from the incumbent system, carried through the React build

**Character:** A tracked-grotesque museum-plaque voice numbers the exhibit hall and names its cases; the hyperlegible humanist body keeps every sentence legible on any phone in a dark room.

### Hierarchy
- **Display** (640, clamp(2.55rem, 7.2vw, 4.7rem), lh 1.04, −0.012em): the h1 thesis, ≤15ch so its three short sentences stay whole.
- **Headline** (600, clamp(1.55rem–2.1rem), lh 1.12): numbered stop titles (01–06) set above a hairline rule.
- **Title** (600, clamp(1.25rem–1.6rem), lh 1.15): build names (GUARDIAN…), exhibit names.
- **Body** (400, 1.0625rem, lh 1.65): the reading column; running text self-limits 40–52rem by role, never by container.
- **Label** (560, .72rem, +.09em, uppercase): wayfinding, table heads, plate tags, captions at plaque distance.
- **Caption/footline steps** (deliberate graduated micro-scale under Caption roles, rem): 0.62 (stop numerals) · 0.66 (plate tags at 560px) · 0.72–0.78 (plate tags, captions, table caps) · 0.8–0.84 (prices, notes, credits) · 0.85–0.89 (captions, footlines) · 0.92–0.98 (exhibit captions, summaries on small screens) — each step is mobile-adapted from its base size; not stray values.

### Named Rules
**The Two-Family Rule.** Two faces, two jobs, never swapped: the variable grotesque caps own the frame (numbers, labels, names); Atkinson owns every sentence. Data columns set `font-variant-numeric: tabular-nums`.

## Layout

One centered 66rem column with fluid side pads (clamp(1.1rem, 4vw, 2.2rem)); a slim sticky masthead carries brand left and numbered wayfinding right over a hairline rule. Sections are numbered stops; their closers step down (`section + section` at 0.55× the section gap). Reading measures are role-set (40rem hero sub, 44rem primer, 46rem ledes/derivation, 50rem chips, 52rem builds/sources). Data tables exceed their measure and scroll horizontally (`overflow-x: auto`, hidden scrollbar) on narrow viewports. Breakpoints: panels and exhibits collapse at 980px, splits at 860px, tables/chips re-grid at 760px, masthead/plates/colophon stack at 560px.

## Elevation & Depth

No shadows as depth. Surfaces lift one step (#1b1712 on #14110d) and rules carry hierarchy — whisper hairlines for texture, 1px for rows, strong hairlines (0.26 alpha) for frame lines. The only box-shadow in the system is a 3px inset gold seam on a reserved row's first cell, drawn as a book-end tick, not a shadow. Photographic material keeps its own depth through scrims (radial/linear darkening gradients are photographic necessity over real screenshots, sanctioned by the contract; they never decorate flat surfaces). Text selection is gold on ink; focus is a 2px gold outline, 3px offset.

## Shapes

Quiet squared geometry: 4px radius on plates, chips, exhibits; 3px on specimen tiles and small mats; focus rings 2px with a 2px corner radius. Pills are refused. Recurring geometry: the numbered stop's hairline under-rule, square route dots (10px), the triptych's 21/9 dimmed frames (16/6 on phones), and the 104px signature seal — a two-ring circle with a gold disc and ring text ("DESIGNED & SIGNED · VXYZVIEW ·"), rotating slowly inside its own SVG viewBox.

## Components

### Masthead (top bar)
- **Shape:** full-width sticky bar, hairline-strong bottom rule, ground-transparent over the scene.
- **Brand:** display 650 caps at 0.95rem; author token in stone mute, lower-contrast.
- **Wayfinding:** display 560 caps at 0.72rem (+.09em), gold stop numerals, muted labels; hover raises to ink; horizontal scroll with cut text as the overflow cue.

### Ledger (tables)
- **Shape:** full-width; head row in tracked caps 0.72rem stone-mute over a strong hairline; body rows ruled by hairlines, last row open; numerals tabular.
- **Reserved row:** 10% gold wash, 1px gold hairlines, 3px inset gold seam on the first cell, gold-text strongs/links.
- **Mineral cell:** inline 30px specimen tile before the name; rarity as a muted sub-line.

### Build Chip (plates)
- **Shape:** 1px hairline border, 4px radius, lifted-panel ground (82% alpha over scene), icon tile 38px on #26201a, name in display 640 caps 0.82rem (+.055em), tick after the setup name.
- **Hover / Focus:** border and ground lift; focus ring as above.

### Exhibit (scenes)
- **Shape:** photographic figure with a 4px mat and, beside it, a typed caption — name in body, note in stone mute. Scenes dim to ~0.82 brightness with a hover return toward full.

### Workings (details/summary)
- **Style:** display 580 caps summaries at 0.9–1.1rem with gold markers; open bills read in column-secondary at 0.93rem; native `<details>` behavior, no JS needed.

### Signature Seal (colophon)
- **Shape:** 104px two-ring seal; gold disc center; ring text in tracked display caps.
- **Motion:** the one authored moment — a 36s linear ring rotation, disabled under prefers-reduced-motion.

## Do's and Don'ts

### Do:
- **Do** keep the ground warm always — #14110d umber, never #000, never blue-shifted; every panel one warm step above the wall.
- **Do** reserve the gold exhibit row for a single arrival answer per table family, and set every data numeral tabular.
- **Do** theme the browser chrome from the palette: gold selection, 2px gold focus ring, dark scrollbars, gold summary markers.
- **Do** credit every wiki image file-by-file in Sources; all specimens are CC BY-NC-SA and their provenance ships inside the PNGs.
- **Do** open numbered stops (01–06) with a strong hairline rule and a gold stop numeral; the number is the walking order ("read top to bottom"), not decoration.

### Don't:
- **Don't** glow, glass, or neon on dark: no text-shadow, no blur, no gradient decoration on flat surfaces — gradients exist only as scrims over real photography.
- **Don't** put colored fields behind text or side-stripes on content: route color rides as dots and tabs only.
- **Don't** add eyebrows or kickers above headings; the masthead's event-clock wayfinding and the hero's event-clock fact are data lines, not labels — if a line stops carrying data, delete it.
- **Don't** touch the author's first-person copy, the 🏜 desert-marker convention, or any wiki-traced number without re-checking pinned revisions (see PRODUCT.md bindings).
- **Don't** fork the visual world into per-section variations; the catalog frame — numbers, rules, mats, seal — is one system across the whole guide.
