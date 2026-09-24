import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const links = [
  ['/', 'Home'],
  ['/shop', 'Shop'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
]

export default function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [overLightBackground, setOverLightBackground] = useState(pathname !== '/')

  useEffect(() => {
    setOpen(false)

    if (pathname !== '/') {
      setOverLightBackground(true)
      return
    }

    const updateHeaderTone = () => {
      // The pinned hero changes from dark to a light workshop background
      // after roughly one viewport of scroll. From that point onward the
      // dark navigation stays readable across the light Home sections.
      setOverLightBackground(window.scrollY > window.innerHeight * 1.15)
    }

    updateHeaderTone()
    window.addEventListener('scroll', updateHeaderTone, { passive: true })
    window.addEventListener('resize', updateHeaderTone)

    return () => {
      window.removeEventListener('scroll', updateHeaderTone)
      window.removeEventListener('resize', updateHeaderTone)
    }
  }, [pathname])

  const toneClass = overLightBackground ? 'header-dark' : 'header-light'

  return (
    <header className={`site-header ${toneClass} ${open ? 'menu-open' : ''}`}>
      <Link to="/" className="wordmark" aria-label="WoodShop home">
        <span className="wordmark-mark">W</span>
        <span>WoodShop</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Link to="/contact" className="header-cta">Start a project</Link>

      <button
        className="menu-toggle"
        onClick={() => setOpen(v => !v)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`mobile-panel ${open ? 'open' : ''}`} aria-label="Mobile navigation">
        {links.map(([to, label]) => (
          <NavLink
            onClick={() => setOpen(false)}
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => isActive ? 'active' : ''}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
