---
name: The Sunscorched Ledger
description: Desert-line timetable design system for vxyzview's Prospecting! field guide — sun-bleached paper, warm press ink, hairline rules, flat color only.
colors:
  bleached-paper: "#fbf7ee"
  hot-sand: "#f2ebdc"
  departure-tint: "#e9dfc8"
  press-ink: "#211a10"
  dust: "#6e6353"
  desert-line-gold: "#8a5a00"
  gold-deep: "#6f4900"
  signal-gold: "#e3a72c"
  oasis-teal: "#1f6e60"
  solarium-gold: "#a87500"
  fire-opal: "#a63e14"
  adamantine-steel: "#44608a"
  rule-hairline: "rgba(33, 26, 16, 0.22)"
  rule-whisper: "rgba(33, 26, 16, 0.12)"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.7rem, 8vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.005em"
  stop-head:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 4.6vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "0.015em"
  route-name:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 3.6vw, 1.85rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "0.02em"
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "0.09em"
  folio:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, system-ui, sans-serif"
    fontSize: "0.86rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  press: "3px"
  mark: "1px"
spacing:
  section: "clamp(2.8rem, 6.5vw, 4.5rem)"
  column-pad: "clamp(1rem, 4vw, 2rem)"
components:
  route-plate:
    backgroundColor: "{colors.bleached-paper}"
    textColor: "{colors.press-ink}"
    rounded: "{rounded.press}"
    padding: "0.5rem 0.85rem"
  departure-row:
    backgroundColor: "{colors.departure-tint}"
    textColor: "{colors.dust}"
    padding: "0.78rem 0.8rem"
  reserved-row:
    backgroundColor: "{colors.press-ink}"
    textColor: "{colors.bleached-paper}"
    padding: "0.78rem 0.8rem"
---

# Design System: The Sunscorched Ledger

## Overview

**Creative North Star: "The Sunscorched Desert Line — a printed timetable"**

The page is a transit wayfinding sheet for a game the reader actually works: every question is a departure, every table a fares-and-times sheet, and the author the line's operator. It refuses both flanking category defaults — the dark neon gamer dashboard it replaced, and the dry wiki table it differentiates from — by owning the reader's column from a warm paper-and-ink print frame while the reading column itself stays calm and standard.

Flatness is law: sun-bleached paper ground, warm press ink, hairline rules, one ochre-gold line accent. Depth comes from rule weight, never from gradients, blurs, or halos. Markdown sections carry the reading, type leads wayfinding, and the reader's success is instant: which mineral, where, at what odds, with the work shown.

**Key Characteristics:**
- Timetable frame, standard reading column — the world owns masthead, rules, tables, and openers only.
- Flat press color only; one accent plus four functional mineral keys.
- Heavy-thin double rules above every stop; hairline ruled fares sheet.
- Value-by-mark: stop-tabs, room flags, glyph marks, and exactly two reserved ink inversions.
- No JavaScript, no build step; Atkinson Hyperlegible body and strong contrast are binding.

## Colors

The palette is sun-bleached print: a warm paper ground (never sterile white), warm umber ink, dust mute tones, and a single desert-line gold — with four deepened mineral keys used strictly as marks for the guide's four setups.

### Primary
- **Desert-Line Gold** (#8a5a00): the line's text accent — links, route-name text for the SUNSTRUCK plate, stop-code numerals. Chosen dark enough to pass AA in body sizes on paper.
- **Signal Gold** (#e3a72c): the accent as a mark — stop-tabs, the stamp seal, focus elements; a fill, never body text.

### Secondary
- **Oasis Teal** (#1f6e60), **Solarium Gold** (#a87500), **Fire Opal** (#a63e14), **Adamantine Steel** (#44608a): the four route keys for GUARDIAN / SUNSTRUCK / COLOSSUS / FOREMAN, each tied to the setup's signature mineral. They appear as route dots, plate tabs, and large route-name text — never as tinted fields.

### Neutral
- **Bleached Paper** (#fbf7ee): the page ground — warm on purpose, drifting from sterile white.
- **Hot Sand** (#f2ebdc): alternating panel bands (primer, mutation lab), self-explanatory side note fields.
- **Departure Tint** (#e9dfc8): highlighted "endcap" rows and stop-code chips.
- **Press Ink** (#211a10): all primary text and every heavy rule; the reserved-row inversion ground.
- **Dust** (#6e6353): running narration, prices, footlines; ink-2 (#4a4133) as the darker secondary where dust would sit on sand.
- **Rule Hairline** (rgba(33,26,16,.22)) and **Rule Whisper** (rgba(33,26,16,.12)): the ruled-sheet texture.

### Named Rules
**The One Reserve Rule.** A full ink inversion (paper text on Press Ink) is reserved for the row the reader came for — used at most twice on the whole page ("Best mutation" in the answers, "Prismatic" in the lab). Rarity is the point; anything more makes it wallpaper.

**The Mark-Before-Hue Rule.** Importance and state are drawn as marks first — gold stop-tabs, square note flags, geometric event glyphs — and the mineral color-coding rides on those marks. Never replace a mark with a hue field (and the side-stripe-on-content pattern is refused).

**The Flat-Press Rule.** Every fill is flat. No gradients of any kind, no blur or glass, no offset block shadows. Depth is rule weight: whisper hairlines for texture, 1px for row rules, 2–3px Press Ink for structure.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow fallback) — a sourced transport-register condensed grotesque; always uppercase for wayfinding roles
**Body Font:** Atkinson Hyperlegible (with Segoe UI fallback) — binding accessibility commitment for the whole reading column
**Watch a fallback pitfall:** both faces load from Google Fonts; keep the local stacks as printed above.

**Character:** A station-signage condensed voice stamps the frame (masthead, stops, table heads, labels — always with positive letter-spacing), while the hyperlegible humanist body keeps the column quiet, wide-open, and legible on any phone.

### Hierarchy
- **Display** (700, clamp(2.7rem, 8vw, 5rem), lh 1.04): the h1 thesis line, one per page, ≤21ch so authored lines stay whole.
- **Stop Head** (700, clamp(1.7rem–2.4rem), lh 1.04): numbered section openers (01–06), set under a 3px+1px double rule.
- **Route Name** (700, clamp(1.45rem–1.85rem), lh 1.04): GUARDIAN / SUNSTRUCK / COLOSSUS / FOREMAN, colored by their route key.
- **Body** (400, 1.0625rem, lh 1.65): the reading column; running text maxes at 40–46rem depending on role — measure discipline, not container width.
- **Label** (700, .78rem, letter-spacing .09em, uppercase): table heads, catalog chips, tags; running head uses .12em at .78rem.
- **Folio** (400, .86rem): footlines, prices inside tables, minor notes — always Dust or ink-2.

### Named Rules
**The Two-Family Rule.** Two faces, two jobs, never swapped: condensed caps own the frame; Atkinson owns every sentence. Numbers in data columns set `font-variant-numeric: tabular-nums`.

## Layout

One centered 62rem column with fluid side pads (clamp(1rem, 4vw, 2rem)); reading text self-limits to 40–46rem. Sections run as numbered stops (01–06) between which the mineral ladders and the runes primer sit as unnumbered interludes. Vertical rhythm: section padding clamp(2.8rem, 6.5vw, 4.5rem), more space above a heading than below, and every h2 opens under its double rule. Full-bleed sand bands (primer, lab) alternate the rhythm; data tables overflow horizontally (`overflow-x: auto`, thin dust scrollbar). Text columns stack under 760px; table cells tighten under 700px; the colophon stacks and centers under 560px.

## Elevation & Depth

No shadows. The design is flat press work: depth is expressed entirely through rule weight (whisper hairline → hairline → 2px ink → 3px ink), sand band alternation, and the reserved ink inversion. The only non-border "marks" are zero-offset inset stop-tabs on highlighted row cells, which read as timetable ticks, not shadows. Text selection is Signal Gold on ink; focus is a 2px Gold-Deep solid outline, 3px offset.

## Shapes

Squared print geometry: small radii only (3px on plates and fields, 1px on marks) — pills are refused; chips are rectangles. Recurring geometry: the 3px+1px double rule, square route dots (8px), square route tabs, triangle/parallelogram event glyphs drawn in CSS, and two concentric circles with a gold seal — the colophon stamp, rotated from inside its own SVG viewBox so it never escapes its box.

## Components

### Masthead (top bar)
- **Shape:** full-width sticky bar, 2px Press Ink bottom rule, no blur.
- **Brand:** display 700 caps at 1.06rem; author chip as a 1px hairline rectangle (3px radius), Gold-Deep small caps.
- **Wayfinding:** display 600 caps at .9rem, letter-spacing .09em, Dust; each link carries its gold stop code; hover returns Ink; horizontal scroll on narrow screens.

### Route Plates (chips)
- **Shape:** 1px ink-2 border, 3px radius, paper ground, padding .5rem/.85rem.
- **Content:** 8px square mineral dot + display 700 caps route name + hairline-separated body tag.
- **Hover / Focus:** sand fill, ink border; focus ring as above.

### Fares Sheet (ledger tables)
- **Shape:** full-width, collapse-ruled; head row framed by 2px ink top and bottom rules; row rules are whisper hairlines closing in a 2px ink end rule.
- **Status vocabulary:** highlighted rows (Departure Tint + gold stop-tab + ink-2 text on sand); reserved row (full Press Ink inversion, Signal Gold link); the four setups' pieces sheets lose any row stripe and keep route identity in headers alone.
- **Numerals:** tabular-nums everywhere; prices are Folio-style beneath the mineral name.

### Row Flags (warn / build-note)
- **Shape:** sand field, 1px whisper border, 3px radius; an 8px square flag in the route color (Open Ember for the hard warning) precedes strong text.
- **State:** plain paper ground with a lone square flag replaces any colored left edge; text follows in ink-2 with ink strongs.

### Workings (details/summary)
- **Style:** display 600 (.95–1.12rem) caps summaries with Gold-Deep markers; bill lists at 0.93rem in ink-2 on open.
- **Plate numbering:** workings carry W1–W5 chips (1px hairline rectangle, Gold-Deep display 700).

### Stamp (signature)
- **Shape:** 116px letterpress seal — 2.5px ink ring, thin inner ring, Signal Gold center disc, ring text "DESIGNED & SIGNED · VXYZVIEW ·" in display caps.
- **Motion:** 30s linear rotation of the inner group (`transform-box: view-box`), disabled under prefers-reduced-motion.

## Do's and Don'ts

### Do:
- **Do** keep every fill flat and every rule in the four weights (whisper / hairline / 2px / 3px ink); depth is rules, not effects.
- **Do** set the four setups apart with the mineral keys — at AA contrast (≥4.5:1 as text) as dots, tabs, and route-name text, never as fields behind text.
- **Do** reserve the full ink inversion for a single arrival row per table family, and set all data numerals tabular.
- **Do** theme the browser chrome from the palette: selection (Signal Gold on ink), focus (2px solid Gold-Deep, 3px offset), thin dust scrollbars, gold summary markers.
- **Do** open every numbered stop with the 3px+1px double rule and a gold stop-code chip; unnumbered interludes never carry codes.

### Don't:
- **Don't** use any gradient, glass/blur, glow, or hard offset shadow — zero-gradient is a standing brief commitment, and the flat-press world is the enforcement.
- **Don't** put colored side-stripes on content (cards, notes, list items): marks precede stripes; if a mark earns its place, draw the flag square instead.
- **Don't** touch the author's first-person copy, the 🏜 desert-marker convention, or any wiki-traced number without re-checking pinned revisions (see PRODUCT.md bindings).
- **Don't** introduce JavaScript, a build step, or new dependencies — plain HTML + one CSS file is the confirmed constraint; every disclosure works via `details` and CSS only.
- **Don't** add eyebrows/kickers over headings; the masthead running head (the bordered schedule bar under the sticky bar) is the one sanctioned two-part opener, because it carries real departure information.
