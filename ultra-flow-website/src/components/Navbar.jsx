import { useEffect, useState } from 'react'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  {
    label: 'Supply Of',
    href: '#supply',
    children: [
      'Fire Fighting Equipment',
      'Foam & Suppression Systems',
      'Sprinkler Systems',
      'Pumps & Rescue Equipment',
    ],
  },
  {
    label: 'Products',
    href: '#products',
    children: [
      'Fire Hoses',
      'Couplings & Adaptors',
      'Landing Valves',
      'Stand-Post Hydrants',
      'Nozzles',
      'Monitors',
      'Foam Equipments',
    ],
  },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const Chevron = () => (
  <svg className="nav__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [dd, setDd] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (label) => {
    setActive(label)
    setOpen(false)
    setDd(null)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="nav__brand" onClick={() => go('Home')} aria-label="Ultra Flow Engineering Services">
          <svg className="nav__logo" viewBox="0 0 76 52" aria-hidden="true">
            <defs>
              <linearGradient id="ufg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#5ff3ff" />
                <stop offset="1" stopColor="#00b8d9" />
              </linearGradient>
            </defs>
            <path d="M2 4h14v26c0 5 3 8 8 8s8-3 8-8V4h14v27c0 14-9 21-22 21S2 45 2 31z" fill="url(#ufg)" />
            <path d="M44 4h30v10H58v8h14v10H58v20H44z" fill="url(#ufg)" />
          </svg>
          <span className="nav__word">
            <strong>ULTRA FLOW</strong>
            <small>ENGINEERING SERVICES</small>
          </span>
        </a>

        <span className="nav__divider" aria-hidden="true" />

        <nav className={`nav__menu ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul>
            {links.map((l) => (
              <li
                key={l.label}
                className={`nav__item ${l.children ? 'has-dd' : ''} ${dd === l.label ? 'dd-open' : ''}`}
              >
                <a
                  href={l.href}
                  className={active === l.label ? 'is-active' : ''}
                  onClick={(e) => {
                    if (l.children && window.innerWidth <= 960) {
                      e.preventDefault()
                      setDd(dd === l.label ? null : l.label)
                    } else go(l.label)
                  }}
                  aria-haspopup={l.children ? 'true' : undefined}
                  aria-expanded={l.children ? dd === l.label : undefined}
                >
                  {l.label}
                  {l.children && <Chevron />}
                </a>
                {l.children && (
                  <ul className="nav__dd">
                    {l.children.map((c) => (
                      <li key={c}>
                        <a href={l.href} onClick={() => go(l.label)}>
                          {c}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn--cut nav__cta-mobile" onClick={() => go('Contact')}>
            <span>Get In Touch</span>
          </a>
        </nav>

        <a href="#contact" className="nav__cta" onClick={() => go('Contact')}>
          <span className="btn btn--cut">
            <span>Get In Touch</span>
            <Arrow />
          </span>
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}