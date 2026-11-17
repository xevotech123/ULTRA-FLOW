
import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin, ArrowUpRight, ChevronDown } from 'lucide-react'
import './Navbar.css'

const menus = [
  { label: 'Home', href: '/' },
  {
    label: 'Supply Of Services',
    href: '/services',
    children: [
      'Fire Fighting Equipment',
      'Foam & Suppression Systems',
      'Sprinkler Systems',
      'Pumps & Rescue Equipment',
    ],
  },
  {
    label: 'Products',
    href: '/products',
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
  {
    label: 'Industries',
    href: '/industries',
    children: [
      'Oil & Gas',
      'Manufacturing',
      'Power & Energy',
      'Infrastructure',
    ],
  },
  {
    label: 'Company',
    href: '/about',
    children: ['About Us'],
  },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMenu = () => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }

  return (
    <>
      <div className="topbar">
        <div className="topbar__inner">
          <a href="mailto:ultraflowengineering@gmail.com">
            <Mail size={15} />
            <span>ultraflowengineering@gmail.com</span>
          </a>

          <a href="tel:+917798477102">
            <Phone size={15} />
            <span>+91 77984 77102</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=House+No+1618+Ganesh+Park+Kawade+Wasti+Wagholi+Pune"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={15} />
            <span>Wagholi, Pune, Maharashtra</span>
          </a>
        </div>
      </div>

      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">

          <a href="/" className="nav__brand" onClick={closeMenu}>
            <svg className="nav__logo" viewBox="0 0 76 52">
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

          <nav className={`nav__menu ${mobileOpen ? 'is-open' : ''}`}>
            <ul>
              {menus.map((item) => (
                <li
                  key={item.label}
                  className={`nav__item ${item.children ? 'has-dd' : ''} ${
                    activeDropdown === item.label ? 'dd-open' : ''
                  }`}
                  onMouseEnter={() => {
                    if (window.innerWidth > 960 && item.children) {
                      setActiveDropdown(item.label)
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth > 960) {
                      setActiveDropdown(null)
                    }
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault()
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      } else {
                        closeMenu()
                      }
                    }}
                    aria-expanded={
                      item.children ? activeDropdown === item.label : undefined
                    }
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} />}
                  </a>

                  {item.children && (
                    <ul className="nav__dd">
                      {item.children.map((child) => (
                        <li key={child}>
                          <a
                            href={
                              item.label === 'Company'
                                ? '/about'
                                : item.label === 'Supply Of Services'
                                ? '/services'
                                : item.label === 'Products'
                                ? '/products'
                                : '/industries'
                            }
                            onClick={closeMenu}
                          >
                            {child}
                            <ArrowUpRight size={14} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <a href="/contact" className="nav__cta" onClick={closeMenu}>
            Enquiry Now <ArrowUpRight size={17} />
          </a>

          <button
            className={`nav__burger ${mobileOpen ? 'is-open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>
    </>
  )
}
