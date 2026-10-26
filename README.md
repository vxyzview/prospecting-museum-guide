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
(vxyzview). Wiki text is CC BY-NC-SA; no Roblox assets are used on the site.

## How it's built

Deliberately boring in the best way: plain HTML + one CSS file, no build step,
no JavaScript, no dependencies. Edit `index.html` to update numbers, commit, push —
GitHub Pages republishes on its own.

```
index.html   the whole guide
style.css    desert-line timetable theme — sun-bleached paper, warm ink, hairline
             rules, flat color only (no gradients); setups keyed to signature
             mineral colors
```
