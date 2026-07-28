import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import './Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/groupe-camoi', label: 'Groupe CAMOI' },
  { to: '/services', label: 'Nos Services' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <NavLink to="/" className="site-header__logo" onClick={() => setOpen(false)}>
          <Logo variant="mark" className="site-header__mark" />
          <span>
            Expert
            <br />
            Conseils
          </span>
        </NavLink>

        <nav className={`site-nav ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" className="btn btn-primary site-nav__cta" onClick={() => setOpen(false)}>
            Demander un diagnostic
          </NavLink>
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
