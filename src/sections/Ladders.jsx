import { Ledger, Price, Stop } from '../components/Shared.jsx'
import { scene } from '../data/images.js'

export default function Ladders() {
  return (
    <section>
      <div className="wrap">
        <Stop
          title="The mineral ladders"
          lede="Stat-stall to endcap for the three lines this guide is built on, with my recorded per-stone enchant values. 🏜 marks a Sunscorched Desert digsite; prices are base values from the mineral list."
        />

        <Ledger
          head={['Luck line', 'Stat per stone (my notes)', 'Where it turns up']}
          rows={[
            <tr key="peridot"><td>Peridot <Price>$60,000</Price></td><td>+13%</td><td>Volcanic band, 🏜 all three desert sites</td></tr>,
            <tr key="emerald"><td>Emerald <Price>$250,000</Price></td><td>+20%</td><td>Creeks, rivers, caverns, swamp band — no desert</td></tr>,
            <tr key="diamond"><td>Diamond <Price>$1,000,000</Price></td><td>+30%</td><td>Across the map — none of the three desert sites</td></tr>,
            <tr key="inferlume"><td>Inferlume <Price>$14,000,000</Price></td><td>+50%</td><td>Volcano and beaches, 🏜 all three desert sites</td></tr>,
            <tr key="flarebloom"><td>Flarebloom <Price>$30,000,000</Price></td><td>+75%</td><td>The volcano's heart only</td></tr>,
            <tr key="kol" className="hi"><td>Key of Life <Price>$1,000,000,000</Price></td><td>+88%</td><td>🏜 Lifespring Oasis only — 1 in 64,000,000,000 raw</td></tr>,
          ]}
        />

        <Ledger
          head={['Capacity line', 'Stat per stone (my notes)', 'Where it turns up']}
          rows={[
            <tr key="coral"><td>Coral <Price>$23,000</Price></td><td>+8%</td><td>Beaches</td></tr>,
            <tr key="topaz"><td>Topaz <Price>$14,000</Price></td><td>+8%</td><td>Everywhere, 🏜 all three desert sites</td></tr>,
            <tr key="nickel"><td>Nickel <Price>$6,000</Price></td><td>+8%</td><td>Meteor Valley</td></tr>,
            <tr key="gpearl"><td>Golden Pearl <Price>$250,000</Price></td><td>+20%</td><td>Beaches</td></tr>,
            <tr key="ammonite"><td>Ammonite Fossil <Price>$200,000</Price></td><td>+20%</td><td>Windswept Beach, Seashell Beach</td></tr>,
            <tr key="catseye"><td>Catseye <Price>$2,222,222</Price></td><td>+30%</td><td>Wide band, 🏜 Mystic Floodplains and Lifespring Oasis</td></tr>,
            <tr key="luminum"><td>Luminum <Price>$1,500,000</Price></td><td>+30%</td><td>Beaches and caves — no desert</td></tr>,
            <tr key="vort" className="hi"><td>Vortessence <Price>$20,000,000</Price></td><td>+50%</td><td>Meteor Valley, caverns, frost band — no desert</td></tr>,
          ]}
        />

        <Ledger
          head={['Size line', 'Stat per stone (my notes)', 'Where it turns up']}
          rows={[
            <tr key="osmium"><td>Osmium <Price>$300,000</Price></td><td>+20%</td><td>Wide band, 🏜 Sandstone Stream</td></tr>,
            <tr key="fireopal"><td>Fire Opal <Price>$1,600,000</Price></td><td>+21%</td><td>Volcanic band, 🏜 Sandstone Stream</td></tr>,
            <tr key="cinnabar"><td>Cinnabar <Price>$900,000</Price></td><td>+21%</td><td>The volcano's heart</td></tr>,
            <tr key="dragon"><td>Dragon Bone <Price>$2,000,000</Price></td><td>+21%</td><td>The volcano's heart, Windswept Beach</td></tr>,
            <tr key="redberyl"><td>Red Beryl <Price>$28,000,000</Price></td><td>+35%</td><td>Swamp–fungal band, Meteor Valley, Seashell — no desert</td></tr>,
            <tr key="stargarnet"><td>Star Garnet <Price>$44,000,000</Price></td><td>+35%</td><td>Swamp and Meteor Valley — no desert</td></tr>,
            <tr key="solarium" className="hi"><td>Solarium <Price>$350,000,000</Price></td><td>+64%</td><td>🏜 Sandstone Stream only — 1 in 12,000,000,000 raw</td></tr>,
          ]}
        />

        {/* The desert loop: the three digsites this guide farms, as seen in game */}
        <div className="triptych">
          <figure className="specimen">
            <div className="frame">
              <img src={scene('lifespringOasis')} alt="Lifespring Oasis digsite: palm trees and a spring pool in the Sunscorched Desert" loading="lazy" />
            </div>
            <figcaption>
              <span className="cap-name">Lifespring Oasis</span>
              <span className="cap-note">Key of Life home</span>
            </figcaption>
          </figure>
          <figure className="specimen">
            <div className="frame">
              <img src={scene('sandstoneStream')} alt="Sandstone Stream digsite: a shallow stream running between sandstone cliffs" loading="lazy" />
            </div>
            <figcaption>
              <span className="cap-name">Sandstone Stream</span>
              <span className="cap-note">Solarium home</span>
            </figcaption>
          </figure>
          <figure className="specimen">
            <div className="frame">
              <img src={scene('mysticFloodplains')} alt="Mystic Floodplains digsite: flooded flats under a desert haze" loading="lazy" />
            </div>
            <figcaption>
              <span className="cap-name">Mystic Floodplains</span>
              <span className="cap-note">Eye of the Sands home</span>
            </figcaption>
          </figure>
        </div>

        <p className="footline">
          Climb rung by rung as luck grows — and note the desert feeds itself the whole way up: only the very top of the capacity ladder (Vortessence) ever forces travel, while Key of Life and Solarium never leave the biome.
        </p>
      </div>
    </section>
  )
}
