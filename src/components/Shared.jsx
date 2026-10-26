// Shared pieces of the night-room catalog frame.

export function Stop({ num, title, lede, children }) {
  return (
    <header className="head">
      <h2 className="stop">
        {num && <i className="stopn" aria-hidden="true">{num}</i>}
        {title}
      </h2>
      {lede && <p className="lede">{lede}</p>}
      {children}
    </header>
  )
}

// The ledger table: hairline-ruled, tabular numerals, overflow-safe.
export function Ledger({ head, rows, flex }) {
  return (
    <div className="scroll">
      <table className={`ledger${flex ? ' flex' : ''}`} style={flex ? { minWidth: 0 } : undefined}>
        {head && (
          <thead>
            <tr>{head.map((h, j) => <th key={j} scope="col">{h}</th>)}</tr>
          </thead>
        )}
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

// A mineral, inline in tables: real specimen tile from the wiki.
export function Min({ img, name, rarity, sub }) {
  return (
    <span className="mcell">
      <img src={img} alt="" aria-hidden="true" loading="lazy" />
      <span>
        {name}
        {rarity && <> <span className="mcell-sub">{rarity}</span></>}
        {sub && <span className="mcell-sub">{sub}</span>}
      </span>
    </span>
  )
}

// Price under a mineral / piece name in tables.
export function Price({ children }) {
  return <em className="price">{children}</em>
}

// Signature seal — simplified from the first edition's stamp.
export function Stamp() {
  return (
    <svg className="stamp" viewBox="0 0 120 120" width="104" height="104" aria-hidden="true" focusable="false">
      <defs>
        <path id="seal-ring" d="M60 60 m -45 0 a 45 45 0 1 1 90 0 a 45 45 0 1 1 -90 0" />
      </defs>
      <g className="stamp-g">
        <circle cx="60" cy="60" r="57" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="60" cy="60" r="30" fill="none" stroke="currentColor" strokeWidth="0.75" />
        <circle cx="60" cy="60" r="11" fill="#e3a72c" />
        <text fill="currentColor" fontSize="10.5" letterSpacing="2.4" fontFamily="Archivo Variable, Archivo, sans-serif" fontWeight="580">
          <textPath href="#seal-ring" startOffset="0">DESIGNED &amp; SIGNED · VXYZVIEW ·</textPath>
        </text>
      </g>
    </svg>
  )
}
