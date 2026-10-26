import { Ledger, Stop } from '../components/Shared.jsx'

export default function Workings() {
  return (
    <section id="math">
      <div className="wrap">
        <Stop num="05" title="Show my work" />

        <details className="working">
          <summary><i className="wnum" aria-hidden="true">W1</i>Stat tier grades — what 4×++ means</summary>
          <div>
            <p>My own scale for how deeply each stat layers in this game. Grades: <strong>1×</strong> ambient, <strong>2×</strong> minor, <strong>3×++</strong> strong additive, <strong>4×++</strong> the layers that compound.</p>
            <Ledger
              rows={[
                <tr key="4x"><td>Luck, Capacity, Size, Sell, Mod, Dig speed, Shake speed</td><td><strong>4×++</strong> — they compound and stack multiplicatively at the edges</td></tr>,
                <tr key="3x"><td>Dig Strength, Shake Strength, Treasure</td><td><strong>3×++</strong> — threshold-bound: a Dig Strength point pays once it crosses a toughness gate</td></tr>,
              ]}
            />
          </div>
        </details>

        <details className="working">
          <summary><i className="wnum" aria-hidden="true">W2</i>Expected catalysts per mutation — the arithmetic</summary>
          <div>
            <p>For a target with per-roll chance p when loading N stones per roll, the expected stone spend to land it is (1 / p) × N. Against the wiki table that lands at ~40 stones for Gold, ~60 for Diamond, ~100 for Granite or Overclocked, ~185 for Prismatic — remarkably stable across roll sizes (the chance scale mostly tracks the stone count), so loading more stones per roll changes variance, not cost. With a Rainbow event at 8 stones per roll (13%), Prismatic drops to ~61 expected stones, comparable to baseline Diamond farming.</p>
          </div>
        </details>

        <details className="working">
          <summary><i className="wnum" aria-hidden="true">W3</i>Mutation dilution — flat vs % stats</summary>
          <div>
            <p>Flat stat: output is the value itself, so ×1.6 is a true +60% (Guardian Pendant 6★ 3,000 → 4,800 luck). Boost stat: output is 1 + B. After the mutation it is 1 + 1.6B. Real gain = (1 + 1.6B) / (1 + B). Worked cases: B = 0.9 gives +28%, B = 2.1 (Clockwork's best) gives +41%, B = 0.3 gives +14%, B = 0 gains nothing. The gain approaches +60% only as B grows — which is why a god-roll % piece mutates well and a fresh one does not. Same logic grades % stat rolls when assigning pieces low dilution first.</p>
          </div>
        </details>

        <details className="working">
          <summary><i className="wnum" aria-hidden="true">W4</i>Event class math — additive vs multiplicative</summary>
          <div>
            <p>Take a good desert window: base ×1 plus Sun Blessing (+1×) and smaller additives, say stack = ×6 with Sandstorm counting inside. Hallows' Eve adds +1×: ×6 becomes ×7, a +15% effective boost. Night of the Bonfire or Meteor Shower multiplies: ×6 becomes ×12, a +100% boost, and that ratio holds at stack depth ×3 or ×9 — which is why both true ×2 luck events grade 4×++ regardless of season, and +1× ones stay 3×++.</p>
          </div>
        </details>

        <details className="working">
          <summary><i className="wnum" aria-hidden="true">W5</i>Cross-check notes</summary>
          <div>
            <p>Wiki stacking order isn't official, so my stack totals are directional — the relative rankings (rune picks, mutation queue, event grades) don't move under plausible stack orders. Where two wiki revisions disagree on a base percentage (0.44% vs 0.56% Prismatic at one stone), I used the Mutation Forge page's own chance tables <a href="https://prospecting.miraheze.org/wiki/Mutations?oldid=7033">rev 7033</a>.</p>
          </div>
        </details>
      </div>
    </section>
  )
}
