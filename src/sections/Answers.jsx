import { Ledger, Min, Price, Stop } from '../components/Shared.jsx'
import { specimen } from '../data/images.js'

export default function Answers() {
  return (
    <section id="answers">
      <div className="wrap">
        <Stop
          num="01"
          title="If you only read one line"
          lede="The four questions I actually get asked mid-session. Everything else on this page justifies these rows."
        />
        <Ledger
          head={['Ask', 'Take this mineral', 'Hunt it here', 'Note']}
          rows={[
            <tr key="luck">
              <td>More luck?</td>
              <td><Min img={specimen('keyOfLife')} name={<strong>Key of Life</strong>} rarity="(Exotic)" /></td>
              <td>🏜 Lifespring Oasis — desert-native</td>
              <td>1 in 64,000,000,000 raw. Luck stacking is what beats those odds.</td>
            </tr>,
            <tr key="cap">
              <td>More capacity?</td>
              <td><Min img={specimen('vortessence')} name={<strong>Vortessence</strong>} rarity="(Mythic)" /></td>
              <td>Meteor Valley sites</td>
              <td>Catseye is the desert-side stepping stone (Mystic Floodplains, Oasis).</td>
            </tr>,
            <tr key="size">
              <td>Bigger minerals?</td>
              <td><Min img={specimen('solarium')} name={<strong>Solarium</strong>} rarity="(Mythic)" /></td>
              <td>🏜 Sandstone Stream — nowhere else</td>
              <td>1 in 12,000,000,000 raw. Pull with a desert luck stack + Sandstorm.</td>
            </tr>,
            <tr key="dig">
              <td>Heavier digs?</td>
              <td><Min img={specimen('adamantine')} name={<strong>Adamantine</strong>} rarity="(Exotic)" /></td>
              <td>Enchanted Ruins</td>
              <td>Dig Strength gate: Pharaoh's Shovel (500) already opens toughness 11.</td>
            </tr>,
            <tr key="mut" className="inv">
              <td>Best mutation?</td>
              <td><strong>Prismatic</strong> — a universal ×1.6</td>
              <td>Not farmed. Forge-rolled</td>
              <td>~185 catalysts expected from zero, ~61 during a Rainbow admin event. <a href="#lab">Math</a>.</td>
            </tr>,
          ]}
        />
        <p className="footline">
          Wealth snapshots are base values from the <a href="https://prospecting.miraheze.org/wiki/Minerals">official mineral list</a>; desert digsites marked 🏜.
        </p>
      </div>
    </section>
  )
}
