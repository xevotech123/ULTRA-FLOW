import './TrustStrip.css'

const icon = (children) => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

const items = [
  {
    title: 'Safety First',
    sub: 'In Everything We Do',
    icon: icon(<><path d="M24 4l16 6v12c0 10-7 18-16 22C15 40 8 32 8 22V10z" /><path d="M16 24l6 6 11-12" /></>),
  },
  {
    title: 'Engineering Expertise',
    sub: 'Built on Experience',
    icon: icon(<><circle cx="24" cy="24" r="6" /><path d="M24 4v6M24 38v6M4 24h6M38 24h6M10 10l4 4M34 34l4 4M38 10l-4 4M14 34l-4 4" /><circle cx="24" cy="24" r="13" /></>),
  },
  {
    title: 'Sustainable Solutions',
    sub: 'For a Greener Future',
    icon: icon(<><path d="M10 38C8 20 18 8 40 8c0 22-12 32-26 30" /><path d="M10 38c6-10 12-16 20-20" /></>),
  },
  {
    title: 'Trusted Partner',
    sub: 'For Your Growth',
    icon: icon(<><path d="M4 22l8-8 10 4 8-4 14 8" /><path d="M8 24l12 12c2 2 5 1 6-1M14 28l6 6M22 32l4 4M30 28l-6 6" /></>),
  },
]

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Why choose Ultra Flow">
      <ul className="trust__list container">
        {items.map((it, i) => (
          <li key={it.title} className="trust__item" style={{ '--i': i }}>
            <span className="trust__icon">{it.icon}</span>
            <span className="trust__text">
              <strong>{it.title}</strong>
              <small>{it.sub}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}