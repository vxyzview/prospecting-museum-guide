# The Sunscorched Ledger

A museum-setup field guide for **Prospecting!** (Roblox), by **vxyzview**.

Four endgame setups built around the Sunscorched Desert — GUARDIAN (luck + capacity),
SUNSTRUCK (pure luck), COLOSSUS (pure size) and FOREMAN (Dredge Master quest) — plus
the mutation-forge math, event luck grades and the mineral ladders behind every pick.

**Live site:** https://vxyzview.github.io/prospecting-museum-guide/

## What's in the guide

- **One-line answers** — the four questions asked mid-session, answered with a mineral
- **Four build recipes** — pieces with their 6★ stat ranges, the catalyst the forge
  accepts per piece, where that catalyst spawns, and the mutation target
- **Mutation lab** — fish-odds table, expected-stones math (my derivation), the
  flat-stat vs %-stat dilution rule, event windows
- **Luck event grades** — multiplicative (×2 / ×1.5) vs additive (+1×) classes and
  why multiplicative events grade 4×++
- **Show my work** — tier grades, expected-catalyst arithmetic, dilution formula

## Where the numbers come from

- [Mutations, rev 7033](https://prospecting.miraheze.org/wiki/Mutations?oldid=7033) —
  effects, chance tables, the catalyst-to-equipment bindings
- [Events, rev 7172](https://prospecting.miraheze.org/wiki/Events?oldid=7172) —
  effect classes, timers, relic spawning
- [Minerals](https://prospecting.miraheze.org/wiki/Minerals) and
  [Equipment](https://prospecting.miraheze.org/wiki/Equipment) — base values, spawn
  sites, 6★ stat ranges

Setup design, costings, mutation queue, event grades and expected-value math are mine
(vxyzview). Wiki text and imagery are CC BY-NC-SA — scene images and item icons come
from the Official Prospecting! Wiki, are downloaded into `public/img/`, and are
credited file-by-file in the Sources section. Not affiliated with the game.

## How it's built

Static React + Vite, deployed by GitHub Actions on every push to `main`. Prebuilt
files only ship — no CDN-React, no runtime fetching, no trackers.

Update the numbers by editing sources directly; commit, push, and Actions republishes:

```
index.html                 Vite entry shell
src/styles.css             night-room specimen catalog — warm near-black ground,
                           off-white column, hairline rules, one desert-gold accent
src/App.jsx                section order + anchors
src/sections/*.jsx         the guide content (Answers, Ladders, Primer, Builds,
                           Lab, Events, Workings, Sources)
src/components/*.jsx       shared frames, drawn icons, hero, masthead/seal
src/data/images.js         wiki image map + per-file credits
public/img/                wiki images and cropped specimen icons
.github/workflows/deploy.yml  build on main → deploy to GitHub Pages
```

First-time run: `npm install`, then `npm run dev`. The site is served under
`/prospecting-museum-guide/` (see `vite.config.js`) to match its GitHub Pages path.
