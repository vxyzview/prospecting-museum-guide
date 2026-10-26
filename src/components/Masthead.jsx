const STOPS = [
  { n: '01', href: '#answers', label: 'One-line answers' },
  { n: '02', href: '#builds', label: 'The four builds' },
  { n: '03', href: '#lab', label: 'Mutation lab' },
  { n: '04', href: '#events', label: 'Luck events' },
  { n: '05', href: '#math', label: 'Show my work' },
  { n: '06', href: '#sources', label: 'Sources' },
]

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <a className="brand" href="#top">
          The Sunscorched Ledger<span className="brand-author">vxyzview</span>
        </a>
        <nav className="jump" aria-label="Sections">
          {STOPS.map((s) => (
            <a key={s.n} href={s.href}><i className="stopn" aria-hidden="true">{s.n}</i>{s.label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
