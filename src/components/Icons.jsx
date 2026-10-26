// Small geometric event marks (decorative; the event name carries the meaning).
// Drawn with basic shapes — no icon font, no dependencies.

const base = {
  width: 15,
  height: 15,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function GlyphMeteor() {
  return (
    <svg {...base}>
      <path d="M13.5 2.5 6 10" />
      <circle cx="4.6" cy="11.4" r="2.1" fill="currentColor" stroke="none" />
      <path d="M10.5 2h3v3" opacity="0.55" />
    </svg>
  )
}

export function GlyphFire() {
  return (
    <svg {...base}>
      <path d="M8 1.8c1.2 1.6 3.4 3.3 3.4 6A3.4 3.4 0 0 1 8 13.8a3.4 3.4 0 0 1-3.4-6C5.7 5.4 6.8 3.6 8 1.8Z" />
      <path d="M8 13.8c-1.1 0-1.9-.8-1.9-1.9 0-1 .8-1.6 1.9-2.9 1.1 1.3 1.9 1.9 1.9 2.9 0 1.1-.8 1.9-1.9 1.9Z" opacity="0.6" />
    </svg>
  )
}

export function GlyphSand() {
  return (
    <svg {...base}>
      <path d="M2 5.5h8.5" /><path d="M5.5 8h9" /><path d="M2 10.5h6.5" /><circle cx="12.5" cy="10.5" r="1" fill="currentColor" stroke="none" opacity="0.7" />
    </svg>
  )
}

export function GlyphSnow() {
  return (
    <svg {...base}>
      <path d="M8 1.5v13M2.2 4.8l11.6 6.4M13.8 4.8 2.2 11.2" />
    </svg>
  )
}

export function GlyphAdd() {
  return (
    <svg {...base}>
      <rect x="2" y="2" width="12" height="12" rx="1.5" opacity="0.5" />
      <path d="M8 5.2v5.6M5.2 8h5.6" />
    </svg>
  )
}

export function GlyphPin() {
  return (
    <svg {...base}>
      <path d="M8 14.2c3.4-4 3.4-6.9 3.4-8.2a3.4 3.4 0 1 0-6.8 0c0 1.3 0 4.2 3.4 8.2Z" />
      <circle cx="8" cy="6" r="1.3" />
    </svg>
  )
}

export function GlyphAdmin() {
  return (
    <svg {...base}>
      <path d="M2.5 12.5 8 2.5l5.5 10" />
      <path d="M4.8 8.5h6.4" opacity="0.55" />
    </svg>
  )
}
