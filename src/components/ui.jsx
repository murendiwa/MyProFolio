// Small building blocks shared by every section.

// Centres content and keeps a safe side gutter, including on phones with a system bar.
export function Container({ className = '', children }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1160px] pr-[max(16px,env(safe-area-inset-right,0px))] pl-[max(16px,env(safe-area-inset-left,0px))] ${className}`}
    >
      {children}
    </div>
  )
}

// A freeway-style sign: green panel with a white inner border.
export function Sign({ as: Tag = 'div', tone = 'sign', className = '', children }) {
  const bg = tone === 'service' ? 'bg-service' : 'bg-sign'
  return (
    <Tag
      className={`relative rounded-xl text-paper ${bg} before:pointer-events-none before:absolute before:inset-2 before:rounded-lg before:border-2 before:border-paper/90 before:content-[''] ${className}`}
    >
      <div className="relative">{children}</div>
    </Tag>
  )
}

// Yellow route marker, like the "N1" shield on a highway.
export function Shield({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border-2 border-ink bg-marker px-2 py-px font-display text-lg leading-tight font-extrabold tracking-wide text-ink ${className}`}
    >
      {children}
    </span>
  )
}

export function SectionTitle({ kicker, title }) {
  return (
    <div className="mb-10">
      <p className="mb-2 flex items-center gap-3 font-mono text-xs tracking-[0.18em] text-ink-soft uppercase">
        <span className="inline-block h-1 w-8 bg-marker outline-2 -outline-offset-1 outline-ink" aria-hidden="true" />
        {kicker}
      </p>
      <h2 className="font-display text-[clamp(48px,8vw,88px)] leading-[0.9] font-extrabold tracking-[0.01em] uppercase">
        {title}
      </h2>
    </div>
  )
}

// Small plate used for tech tags.
export function Plate({ children, tone = 'light' }) {
  const styles =
    tone === 'dark'
      ? 'border-paper/60 text-paper'
      : 'border-ink/70 text-ink'
  return (
    <li className={`border-2 px-1.5 py-px font-mono text-[11px] tracking-wider uppercase ${styles}`}>
      {children}
    </li>
  )
}
