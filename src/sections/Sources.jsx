import { Stop, Stamp } from '../components/Shared.jsx'
import { CREDITS, img } from '../data/images.js'

const WIKI = 'https://prospecting.miraheze.org/wiki/'

export default function Sources() {
  return (
    <section id="sources">
      <div className="wrap">
        <Stop num="06" title="Sources" />

        <ul className="srcs">
          <li>
            <a href={`${WIKI}Mutations?oldid=7033`}>Mutation Forge page, revision 7033</a> (16 Aug 2026) — effects, chance tables, the full catalyst-to-equipment binding
          </li>
          <li>
            <a href={`${WIKI}Events?oldid=7172`}>Events page, revision 7172</a> (5 Oct 2026) — classes, timers, relic spawning
          </li>
          <li>
            <a href={`${WIKI}Minerals`}>Mineral list</a> and <a href={`${WIKI}Equipment`}>Equipment page</a> — base values, spawn sites, 6★ stat ranges
          </li>
          <li>
            <a href="https://prospecting.miraheze.org/wiki/Sunscorched_Desert">Sunscorched Desert page</a> — the three digsite scenes this guide farms
          </li>
        </ul>

        <p className="label" style={{ marginTop: '2rem' }}>Image credits — Official Prospecting! Wiki (CC BY-NC-SA 4.0)</p>
        <ul className="credits">
          {CREDITS.map((c) => (
            <li key={c.src}>
              <img src={img(c.src)} alt="" aria-hidden="true" loading="lazy" />
              <span className="credit-label">{c.label}</span>
              <a href={c.url} hrefLang="en">{c.file}</a>
            </li>
          ))}
        </ul>
        <p className="credit-note" style={{ marginTop: '0.8rem', color: 'var(--muted)', fontSize: '0.84rem', maxWidth: '52rem' }}>
          Source files may be superseded by later wiki revisions; the links above resolve to each image's wiki file page. Wiki content is licensed CC BY-NC-SA 4.0 by its contributors.
        </p>

        <p className="foot-credit">
          Setup design, catalyst costings, mutation queue, event grades and expected-value math: <strong style={{ color: 'var(--gold-text)' }}>vxyzview</strong>. Game wording, numbers and imagery belong to the <a href="https://prospecting.miraheze.org/">Official Prospecting! Wiki</a> (CC BY-NC-SA). Not affiliated with the game or Roblox.
        </p>
      </div>
    </section>
  )
}

export function SiteFoot() {
  return (
    <footer className="site-foot">
      <div className="foot-inner">
        <p>
          <span className="sig">vxyzview</span> digs Lifespring Oasis most afternoons — corrections welcome via the repo.
        </p>
        <Stamp />
      </div>
    </footer>
  )
}
