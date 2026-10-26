# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Readers are Prospecting! (Roblox) players, covering three confirmed audiences at once:

- **vxyzview's own community** — the mid-session askers. The guide answers the four questions the author actually gets asked ("more luck?", "more capacity?", "bigger minerals?", "heavier digs?", plus best mutation).
- **Endgame veterans** — every recipe assumes the endgame state (all equipment unlocked, all blueprints owned); they adopt or adapt the four setups.
- **Newcomers** — addressed as a first-class path, not a footnote: "New to setups? Read top to bottom — the answer line comes first, the recipes after, the math last."

Success: a reader closes the tab knowing exactly which mineral to take, where it spawns, under which event window, and why — with the numbers to back it.

## Product Purpose

"The Sunscorched Ledger" by vxyzview — a static field guide for the Roblox game Prospecting!, built around the Sunscorched Desert. It documents four endgame museum setups — GUARDIAN (luck + capacity), SUNSTRUCK (pure luck), COLOSSUS (pure size), FOREMAN (Dredge Master quest) — plus the mutation-forge math (fish-odds table, expected-catalyst arithmetic, flat-stat vs %-stat dilution rule), event luck grades (multiplicative vs additive classes), and the mineral ladders behind every pick.

Live site: https://vxyzview.github.io/prospecting-museum-guide/

## Positioning

"Wiki numbers, my math." What a neighboring product could not honestly copy: author-designed endgame setups costed to the last catalyst stone, derived from pinned official wiki revisions and shown with derivations ("Show my work"), plus personal testing results ("Runes I actually slot") — a field guide, not a re-render of wiki tables.

## Operating Context

- Read mid-session, often on a phone, around events that fire every 30 minutes on the dot (XX:00 / XX:30) and are identical across servers. Desert digsites are marked 🏜 throughout.
- Numbers trace to pinned wiki revisions — Mutations rev 7033 (16 Aug 2026), Events rev 7172 (5 Oct 2026), plus the live Mineral and Equipment pages — kept as dated links in the Sources section. When the wiki revises, the guide's numbers must be re-checked against the new revision.
- Update loop (since the 2026-10-26 React rebuild): edit the data/section sources, commit, push; GitHub Actions builds with Vite and republishes GitHub Pages on its own.
- Wiki text AND imagery are CC BY-NC-SA and must be attributed. Site imagery comes from the Official Prospecting! Wiki (screenshot-style scene images and item icons), downloaded into the repo and credited in the Sources section; no other Roblox assets are used, and the game is not affiliated.

## Capabilities and Constraints

**Confirmed hard constraint (re-confirmed in interview, 2026-10-26): the site is a static React + Vite build, deployed by GitHub Actions to GitHub Pages. React is compiled at build time — no CDN-React, no client-side framework runtime beyond the shipped bundle, no new dependencies without a product reason. Numbers are updated by editing the section/data sources directly.**

Content structure that future edits preserve: one-line answers table; three mineral-ladder tables (luck / capacity / size) with the author's recorded per-stone enchant values; four build-recipe blocks (pieces, 6★ stat ranges, the one forge catalyst each piece accepts, catalyst farm location, mutation target), each closing with a crafting-bill details block; mutation lab; event-grades table; math appendix; sources.

## Brand Commitments

- First-person field-guide voice is binding — "my math", "my notes", "Runes I actually slot": the author speaks about their own designs and testing in the first person, and stays binding even on future edits by someone else (confirmed 2026-10-26).
- Setup design, catalyst costings, mutation queue, event grades and expected-value math are vxyzview's original work and credited to vxyzview wherever they appear.
- Not affiliated with the game; collaboration with the wiki is attribution-CC BY-NC-SA only, never joint authorship.

## Evidence on Hand

- The full guide content is real and already on the page: four setups with crafting bills and costings, the fish-odds table with the author's expected-stones math, event grades, and derivations in the appendix.
- Pinned wiki revisions with dated links: Mutations rev 7033, Events rev 7172, Minerals list, Equipment page.
- Absences future work must not fabricate: no user testimonials, no player quotes, no analytics or usage data, no survey results. The only personal-claim material is the author's own hand-recorded enchant values and testing notes.

## Product Principles

1. **Numbers first, work shown.** Every recommendation traces to a pinned wiki table or the author's own arithmetic; claims carry their derivation instead of standing on assertion.
2. **Answer in one line.** The askers' questions are answered at the top; justification, recipes, and math follow in reading order for those who keep reading.
3. **Stay static to stay fast.** Everything ships as prebuilt files from CI: any phone gets the full page instantly, no runtime data fetching, no trackers; the update loop is editing sources and committing, not operating a pipeline.
4. **The desert feeds the grind.** Setups are designed so their own catalyst and material stocks restock inside the same farming loop — travel cost is a design input, not an afterthought.
5. **Honest provenance.** Wiki-derived facts attributed to the Official Prospecting! Wiki (CC BY-NC-SA); original math credited to vxyzview; never present an inference as a wiki fact.

## Accessibility & Inclusion

- Confirmed binding: Atkinson Hyperlegible as the body font and strong contrast stay; "high-legibility body font that works on any phone" is the whole requirement — no WCAG-level audit promised or claimed.
- The page already does this structurally: real table headers with `scope`, aria-hidden decorative glyphs, native `<details>`/`<summary>` collapsibles, keyboard focus rings, single-column responsive reading.
