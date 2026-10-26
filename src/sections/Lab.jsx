import { Ledger, Stop } from '../components/Shared.jsx'
import { scene } from '../data/images.js'

export default function Lab() {
  return (
    <section id="lab">
      <div className="wrap">
        <Stop
          num="03"
          title="Mutation lab"
          lede={<>The forge at Frozen Peak binds <strong>one</strong> catalyst to each equipment type (no choosing minerals — you choose how many stones to load per roll and what to fish for). Re-rolls never lose ground: keep the old mutation or apply the new one.</>}
        />

        {/* the forge itself, as seen in game */}
        <figure className="exhibit">
          <div className="frame">
            <img src={scene('mutationForge')} alt="The Mutation Forge: an anvil ringed by tall blue ice crystals at Frozen Peak" loading="lazy" width="1680" height="950" />
          </div>
          <figcaption>
            <span className="cap-name">The Mutation Forge, Frozen Peak</span>
            <span className="cap-note">one catalyst per equipment type · re-rolls never lose ground</span>
          </figcaption>
        </figure>

        <Ledger
          head={['Target', 'Effect', 'Odds @1', '@5', '@10', '@15', 'My expected stones per hit']}
          rows={[
            <tr key="gold"><td>Gold</td><td>×1.2</td><td>5.6%</td><td>20%</td><td>25%</td><td>25%</td><td>~40</td></tr>,
            <tr key="diamond"><td>Diamond</td><td>×1.35</td><td>2.5%</td><td>10%</td><td>17%</td><td>20%</td><td>~60</td></tr>,
            <tr key="granite"><td>Granite</td><td>×1.36, +24 Dig str, +6 Shake str</td><td>1.2%</td><td>5.7%</td><td>10%</td><td>13%</td><td>~100</td></tr>,
            <tr key="overclocked"><td>Overclocked</td><td>×1.36, +10% dig spd, +10% shake spd</td><td>1.3%</td><td>6%</td><td>10%</td><td>16%</td><td>~100</td></tr>,
            <tr key="festive"><td>Festive</td><td>×1.4, +50 Luck, +10% Size boost</td><td colSpan={4}>Candy Canes event or Festive Catalyst relic — not baseline-rollable</td><td>event-fed / relic</td></tr>,
            <tr key="prismatic" className="inv"><td><strong>Prismatic</strong></td><td>×1.6 universal</td><td>0.56%</td><td>2.7%</td><td>5.4%</td><td>8%</td><td><strong>~185</strong> — or <strong>~61 at 8 stones during a Rainbow event</strong> (13%)</td></tr>,
          ]}
        />

        <div className="split measure-none" style={{ marginTop: '1.4rem' }}>
          <p style={{ maxWidth: '46rem' }}>
            <strong>The flat-stat rule (why GUARDIAN mutates first).</strong> A mutation multiplies a piece's stat values. Flat stats gain the full ×1.6. % stats don't: a Size Boost of +B% becomes +1.6B%, so output moves by (1 + 1.6B) / (1 + B) — only +28% on a +90% roll, +41% on Clockwork's +210% ceiling, +0% on a rolled zero. My mutation queue: flat-luck pieces, then flat-strength pieces, and %-heavy pieces only after their roll is already fat. Full derivation in <a href="#math">my work</a>.
          </p>
          <p style={{ maxWidth: '46rem' }}>
            <strong>Event calendar around the forge.</strong> Rainbow admin events roughly double Prismatic odds (0.56% → 1.8% at one stone; 13% at eight). Candy Canes week lets Festive onto the table. If a Festive or Prismatic Catalyst <em>relic</em> ever drops, it applies directly and beats every roll — bank those.
          </p>
        </div>
      </div>
    </section>
  )
}
