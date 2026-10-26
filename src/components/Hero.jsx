import { scene, specimen } from '../data/images.js'

const PLATES = [
  { id: 'guardian', key: 'keyOfLife', cls: 'dot-guardian', name: 'GUARDIAN', tag: 'Luck + Capacity' },
  { id: 'sunstruck', key: 'eyeOfTheSands', cls: 'dot-sunstruck', name: 'SUNSTRUCK', tag: 'Pure Luck' },
  { id: 'colossus', key: 'solarium', cls: 'dot-colossus', name: 'COLOSSUS', tag: 'Pure Size' },
  { id: 'foreman', key: 'adamantine', cls: 'dot-foreman', name: 'FOREMAN', tag: 'Dredge Master' },
]

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <img className="hero-bg" src={scene('sandstoneStreamBanner')} alt="" aria-hidden="true" fetchPriority="high" />
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-inner">
        <p className="hero-fact">
          The Sunscorched Desert
          <span className="sep">·</span>
          Events at XX:00 &amp; XX:30 — identical on all servers
        </p>
        <h1>Farm the desert.<br />Mutate at the forge.<br />Stop guessing.</h1>
        <p className="hero-sub">
          Four museum setups for <strong>Prospecting!</strong>, built around the Sunscorched
          Desert and costed to the last catalyst stone. Wiki numbers, my math.
        </p>
        <p className="hero-credit">
          Field guide by <span className="sig">vxyzview</span>{' '}
          <span className="hero-note">every piece below assumes the endgame state: all equipment unlocked, all blueprints owned</span>
        </p>
        <nav className="plates" aria-label="The four setups">
          {PLATES.map((p) => (
            <a key={p.id} className="plate" href={`#${p.id}`}>
              <img src={specimen(p.key)} alt="" aria-hidden="true" width="34" height="34" />
              <span>
                <span className="plate-name"><span className={`dot ${p.cls}`} aria-hidden="true" /> {p.name}</span>
                <span className="plate-tag">{p.tag}</span>
              </span>
            </a>
          ))}
        </nav>
        <p className="hero-new">
          <strong>New to setups?</strong> Read top to bottom — the answer line comes first, the recipes after, the math last.
        </p>
      </div>
    </section>
  )
}
