import { Ledger, Price, Stop } from '../components/Shared.jsx'
import { specimen } from '../data/images.js'

function Build({ id, img, dot, name, tag, blurb, children }) {
  return (
    <article className="build" id={id} style={{ '--dotc': `var(--${dot})` }}>
      <header className="build-head">
        <img src={img} alt="" aria-hidden="true" loading="lazy" />
        <div>
          <h3><span className="dot" aria-hidden="true" />{name}<span className="build-tag">{tag}</span></h3>
          <p>{blurb}</p>
        </div>
      </header>
      {children}
    </article>
  )
}

function Bill({ children, sum }) {
  return (
    <details className="bill">
      <summary>The crafting bill</summary>
      <div>
        <ul>{children}</ul>
        <p className="bill-sum">{sum}</p>
      </div>
    </details>
  )
}

export default function Builds() {
  return (
    <section id="builds">
      <div className="wrap">
        <Stop
          num="02"
          title="The four builds, as recipes"
          lede={
            <>Each block lists the pieces I run, their 6★ stat ranges, the <em>one</em> catalyst the forge accepts per piece, where that catalyst spawns, and the mutation I fish for. Prices are base values; ranges are the wiki's 6★ rolls.</>
          }
        />

        {/* GUARDIAN */}
        <Build
          id="guardian" img={specimen('keyOfLife')} dot="teal"
          name="GUARDIAN" tag="Luck + Capacity"
          blurb="The workhorse. The setup that farms every other setup: luck lines that beat 1-in-billions, capacity so an Oasis session fills the museum instead of the bag."
        >
          <Ledger
            head={['Piece', '6★ ranges', 'Forge catalyst', 'Catalyst farm', 'My mutation target']}
            rows={[
              <tr key="pendant"><td>Guardian Pendant <Price>$6.0B</Price></td><td>Luck 1,000–3,000, and nothing else</td><td>Key of Life</td><td>🏜 Lifespring Oasis ($1B)</td><td><strong>Prismatic</strong> — a flat-stat-only piece takes the full ×1.6 with zero dilution</td></tr>,
              <tr key="core"><td>Meteor Core <Price>$2.0B</Price></td><td>Luck 200–900, Cap 200–650, Inv 100–450, Size +20–115%, Mod +10–45%, Status −30</td><td>Singularium</td><td>Starfall River ($250M)</td><td>Overclocked first, Prismatic when stocked</td></tr>,
              <tr key="crown"><td>Fossilized Crown <Price>$100M</Price></td><td>Luck 100–260, Cap 50–225, Shake spd +10–32%, Size +0–55%, Sell +0–110%</td><td>Dinosaur Skull</td><td>Infernal Heart ($50M — cheapest exotic-tier catalyst in my whole gear)</td><td>Diamond ladder, roll until Prismatic</td></tr>,
              <tr key="vortex"><td>Vortex Ring <Price>$333M</Price></td><td>Dig 20–90, Luck 50–155, Cap 100–325, Shake str 3–11 — all flat</td><td>Voidstone</td><td>The Void only ($111M)</td><td>Overclocked and stop — Voidstones are event currency, don't burn them chasing 1.6×</td></tr>,
              <tr key="umbrite"><td>Umbrite Ring <Price>$400M</Price></td><td>Luck 50–245, Dig 5–50, Cap 20–220, Shake str 5–22, Size +5–16%</td><td>Umbrite</td><td>Abyssal Depths ($180M)</td><td>Overclocked, later Prismatic</td></tr>,
              <tr key="gift"><td>Sun's Gift <Price>$1.0B</Price></td><td>Luck 125–500, Dig 5–55, Cap 40–135, Size +10–50%, Sell +20–65%</td><td>Starpiercer</td><td>Meteor Falls ($450M)</td><td>Overclocked (craft quest reward role), Prismatic late</td></tr>,
            ]}
          />
          <p className="build-note"><strong>Why this is mutation target #1:</strong> Guardian Pendant carries <em>zero</em> % stats. A Prismatic roll turns 6★ 3,000 luck into 4,800 — the cleanest ×1.6 on the gear rack, and Key of Life is already my Oasis loot, so the catalyst stockpile never costs a detour.</p>
          <Bill sum="GUARDIAN shops the desert and Meteor Valley — one farming loop covers nearly the whole bill.">
            <li><strong>Meteor Core</strong> — 5 Sunstone ($28M, Meteor Valley), 10 Depleted Shard ($4.5M, incl 🏜 Lifespring Oasis), 1 Astral Spore ($400M, Timelocked Sanctuary), 1 Singularium (its forge catalyst)</li>
            <li><strong>Guardian Pendant</strong> — 5 Catseye ($2.2M, incl 🏜 Floodplains + Oasis), 5 Agate ($3.5M, 🏜 desert-only), 5 Prismara ($25M, Azuralite Oasis · Overgrown Grotto · Enchanted Ruins), 1 Key of Life</li>
            <li><strong>Fossilized Crown</strong> — 5 Cinnabar ($900k, volcano heart), 1 Volcanic Core ($40M), 5 Dragon Bone ($2M), 1 Dinosaur Skull ($50M)</li>
            <li><strong>Vortex Ring</strong> — 2 Prismara, 3 Vortessence ($20M), 1 Voidstone ($111M, The Void)</li>
            <li><strong>Umbrite Ring</strong> — 3 Chrysoberyl ($21M), 3 Painite ($10M), 1 Dinosaur Skull, 5 Specterite ($2.8M), 1 Umbrite ($180M)</li>
            <li><strong>Sun's Gift</strong> — 10 Inferlume ($14M, incl 🏜 every desert site), 5 Agate ($3.5M, 🏜 desert-only), 1 Solarium ($350M, 🏜 Sandstone Stream)</li>
          </Bill>
        </Build>

        {/* SUNSTRUCK */}
        <Build
          id="sunstruck" img={specimen('eyeOfTheSands')} dot="gold-dot"
          name="SUNSTRUCK" tag="Pure Luck"
          blurb="Gun for exactly one number: the luck stat, stacked as far as the game allows. Built to gamble on Exotics during my desert-loop sessions."
        >
          <Ledger
            head={['Piece', '6★ ranges', 'Forge catalyst', 'Catalyst farm', 'My mutation target']}
            rows={[
              <tr key="lunar"><td>Lunar Mask <Price>$4.0B</Price></td><td>Luck 300–1,400, Dig spd +20–85%, Shake spd +20–85%, Mod +20–170%, Size +40–100%, Walk +4.5, Jump +10</td><td>Eye of the Sands</td><td>🏜 Mystic Floodplains ($350M)</td><td><strong>Prismatic</strong> — half the piece is diluted %s, but the Luck roll is worth carrying</td></tr>,
              <tr key="rings"><td>Luck rings (Solar Ring tier)</td><td>Luck-tilted rolls, see <a href="https://prospecting.miraheze.org/wiki/Equipment">equipment wiki</a></td><td>Volcanic Core</td><td>Magma Furnace / Infernal Heart ($40M — cheapest catalyst I farm)</td><td><strong>Festive</strong> (+50 flat luck, +10% size) during Candy Canes, then Prismatic</td></tr>,
              <tr key="pendant2"><td>Guardian Pendant <Price>$6.0B</Price></td><td>Luck 1,000–3,000</td><td>Key of Life</td><td>🏜 Lifespring Oasis</td><td>Same as GUARDIAN — <strong>Prismatic</strong></td></tr>,
            ]}
          />
          <p className="build-note"><strong>Catalyst double-dip:</strong> Eye of the Sands drops in Mystic Floodplains, two maps from the Oasis. One desert loop restocks Catalysts for both necklace-tier pieces and the Key of Life line — no travel tax on this build's mutation plan.</p>
          <Bill sum="Aetherium and Eye of the Sands keep this build desert-local — SUNSTRUCK pays four material visits, none of them far.">
            <li><strong>Lunar Mask</strong> — 1 Singularium ($250M), 3 Umbrite ($180M), 5 Aetherium ($4.4M, 🏜 all three desert sites), 1 Eye of the Sands ($350M, 🏜 Mystic Floodplains)</li>
            <li><strong>Luck rings</strong> — bills change by tier and season ring; the current ones live on the equipment wiki page</li>
          </Bill>
        </Build>

        {/* COLOSSUS */}
        <Build
          id="colossus" img={specimen('solarium')} dot="ember"
          name="COLOSSUS" tag="Pure Size"
          blurb="Weight records, not rarity. Solarium hunting with the pan, Solar Flare zones when they align, and every Size Boost point pushed into the machine."
        >
          <Ledger
            head={['Piece', '6★ ranges', 'Forge catalyst', 'Catalyst farm', 'My mutation target']}
            rows={[
              <tr key="clockwork"><td>Clockwork <Price>$9.0B</Price></td><td>Luck 50–225, Cap 100–275, Inv 100–325, Shake spd +40–100%, <strong>Size +30–210%</strong>, Sell +0–110%</td><td>Celestium</td><td>Astral Caverns ($800M — the most expensive catalyst period)</td><td>Diamond floor. Prismatic only with 8+ stones <em>during</em> a Rainbow window</td></tr>,
              <tr key="mutators"><td>Size mutators (Gravity Coil, Mass Accumulator tiers)</td><td>Size-boost rolls, see <a href="https://prospecting.miraheze.org/wiki/Equipment">equipment wiki</a></td><td>Osmium / Uranium</td><td>Cheapest of all catalyst tiers</td><td><strong>Overclocked</strong> — spend cheap stones here, save Celestium</td></tr>,
            ]}
          />
          <p className="build-note"><strong>The dilution catch:</strong> Multipliers don't translate 1:1 onto % stats. On a god-roll Clockwork (+210% size), Prismatic gives a real +41% final weight, not +60%. On a +30% roll it would give +14%. So the piece quality bar comes <em>before</em> the forge: never feed Celestium into a mediocre Size Boost roll — the forge rerolls at Frozen Peak and you must keep existing mutation or apply new, so every attempt is safe, but every Celestium is 800M base value.</p>
          <Bill sum="Three Dinosaur Skulls per Clockwork — skull farming at Infernal Heart feeds this chime and GUARDIAN's crown from one place.">
            <li><strong>Clockwork</strong> — 5 Gold ($1k, everywhere incl 🏜 desert; the wiki marks a +60 kg bracket on this bill, so size your rolls), 3 Dinosaur Skull ($50M, Infernal Heart), 2 Bloodstone ($250M, Rotwood Swamp · Timelocked Sanctuary), 1 Celestium ($800M, Astral Caverns)</li>
            <li><strong>Cheap mutators</strong> — Gravity Coil (Osmium-led) and Mass Accumulator (Uranium-led) use the cheapest catalyst tiers in the forge</li>
          </Bill>
        </Build>

        {/* FOREMAN */}
        <Build
          id="foreman" img={specimen('adamantine')} dot="steel"
          name="FOREMAN" tag="Dredge Master"
          blurb="The quest-runner. Dig Strength and capacity carry the Dredge leaderboard; this is the one setup graded by a quest rather than a mineral."
        >
          <Ledger
            head={['Piece', '6★ ranges', 'Forge catalyst', 'Catalyst farm', 'My mutation target']}
            rows={[
              <tr key="dredge"><td>Dredge Master's Ring <Price>$2.5B</Price> <em className="price">only one at a time</em></td><td>Dig 20–135, Cap 100–550, Shake str 10–30, Size +10–55%, Mod +10–75% — mostly flat</td><td>Adamantine</td><td>Enchanted Ruins ($250M)</td><td><strong>Granite</strong> — 1.36× plus +24 Flat Dig Strength, +6 Shake Strength. Role-perfect</td></tr>,
              <tr key="soul"><td>Timelocked Soul <Price>$1.0B</Price></td><td>Luck 222–999, Dig spd +30–110%, Inv 100–500, Shake spd +30–110%, Size +10–55%</td><td>Eternium</td><td>Timelocked Sanctuary ($555,555,555)</td><td><strong>Granite</strong></td></tr>,
              <tr key="core2"><td>Meteor Core <Price>$2.0B</Price></td><td>Luck 200–900 + Cap 200–650</td><td>Singularium</td><td>Starfall River</td><td><strong>Overclocked</strong> — digs per minute is the quest speed-run stat (second copy, not the GUARDIAN one)</td></tr>,
            ]}
          />
          <p className="build-note"><strong>Quest etiquette:</strong> all Dredge Master attempts run on the rune stack above minus <em>anything</em> Annihilation-shaped. The ring is one-at-a-time — if you also run Excalibur, it shares the same Adamantine catalyst, so my Enchanted Ruins stockpile feeds both. <strong>Hybrid line:</strong> outside equipment, the <strong>North Star</strong> mineral — an Exotic carrying a 4-way hybrid stat line, ⚠ North Pole and Christmas-gated — is this build's chase mineral whenever the event hands one out. It has no forge entry, so no mutation plan attaches.</p>
          <Bill sum="Timelocked Sanctuary feeds three bills at once — Spore, Radiant Gold, Eternium — so grinding it pays this build twice.">
            <li><strong>Dredge Master's Ring</strong> — 3 Aquamarine ($4M, snowy band + Meteor Valley), 3 Chrysoberyl ($21M), 3 Prismara ($25M), 1 Umbrite ($180M), 1 Adamantine ($250M, Enchanted Ruins)</li>
            <li><strong>Timelocked Soul</strong> — 3 Red Beryl ($28M), 5 Radiant Gold ($40M, incl Timelocked Sanctuary), 1 Astral Spore ($400M), 1 Umbrite, 1 Eternium ($555,555,555, Timelocked Sanctuary)</li>
          </Bill>
        </Build>
      </div>
    </section>
  )
}
