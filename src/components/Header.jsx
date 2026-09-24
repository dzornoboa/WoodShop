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
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    setOpen(false)

    const updateTheme = () => {
      const probeY = 78
      const sections = Array.from(document.querySelectorAll('[data-header-theme]'))
      const active = sections.find((section) => {
        const rect = section.getBoundingClientRect()
        return rect.top <= probeY && rect.bottom > probeY
      })

      if (active?.dataset.headerTheme) {
        setTheme(active.dataset.headerTheme)
        return
      }

      setTheme(pathname === '/' ? 'dark' : 'light')
    }

    const frame = requestAnimationFrame(updateTheme)
    window.addEventListener('scroll', updateTheme, { passive: true })
    window.addEventListener('resize', updateTheme)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateTheme)
      window.removeEventListener('resize', updateTheme)
    }
  }, [pathname])

  const toneClass = theme === 'light' ? 'header-on-light' : 'header-on-dark'

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
