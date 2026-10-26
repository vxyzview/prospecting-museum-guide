import { Ledger, Stop } from '../components/Shared.jsx'
import {
  GlyphAdd, GlyphAdmin, GlyphFire, GlyphMeteor, GlyphPin, GlyphSand, GlyphSnow,
} from '../components/Icons.jsx'

export default function Events() {
  return (
    <section id="events">
      <div className="wrap">
        <Stop
          num="04"
          title="Luck events, graded"
          lede="Events fire every 30 minutes on the dot (XX:00 and XX:30) and are identical across all servers. The class of the multiplier matters more than the size — that's the whole grade."
        />
        <Ledger
          head={['Event', 'Effect', 'Where / when', 'Grade']}
          rows={[
            <tr key="meteor" className="hi">
              <td><GlyphMeteor /> Meteor Shower</td>
              <td><strong>×2 luck, multiplicative</strong> — doubles the whole stack</td>
              <td>Whole server, 20 min. Stackable; buy with Meteor Fragment</td>
              <td>4×++</td>
            </tr>,
            <tr key="bonfire" className="hi">
              <td><GlyphFire /> Night of the Bonfire</td>
              <td><strong>×2 luck, multiplicative</strong></td>
              <td>Summer event only, when the Seashell Isle bonfire is lit, 15 min. The other true ×2 in the game</td>
              <td>4×++ (Summer only)</td>
            </tr>,
            <tr key="sandstorm">
              <td><GlyphSand /> Sandstorm</td>
              <td>×1.5 luck <em>and</em> ×1.5 modifier boost, multiplicative in-region</td>
              <td>🏜 All three desert digsites, 15 min — force it with a Sand Spirit relic</td>
              <td>4×++ regional</td>
            </tr>,
            <tr key="regions">
              <td><GlyphSnow /> Blizzard, Nimue's Blessing, Swamp Fog, Starfall</td>
              <td>×1.5 luck multiplicative, region-bound</td>
              <td>Snowy Island, Overgrown Caves, swamps, Meteor Valley</td>
              <td>4×++ regional</td>
            </tr>,
            <tr key="hallows">
              <td><GlyphAdd /> Hallows' Eve</td>
              <td>+1× luck <em>additive</em> — dilutes into the stack</td>
              <td>Halloween, hourly, whole map</td>
              <td>3×++</td>
            </tr>,
            <tr key="tides">
              <td><GlyphPin /> Shifting Tides</td>
              <td>+1× luck additive</td>
              <td>Summer, hourly, whole map</td>
              <td>3×++</td>
            </tr>,
            <tr key="admin">
              <td><GlyphAdmin /> Admin weather</td>
              <td>4× / 8× / 12× luck, additive per wording; Rainbow bends mutation odds</td>
              <td>Admin abuse windows</td>
              <td>grab it</td>
            </tr>,
          ]}
        />
        <p className="footline">
          Why the class split: additive events push stack ×N to ×N+1 — on a ×6 desert window that's +15%, so +1× grades below stack-scaled events. Multiplicative ×2 makes ×6 into ×12, +100%, at any stack size. Full example in <a href="#math">my work</a>.
        </p>
      </div>
    </section>
  )
}
