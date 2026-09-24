import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  ['/', 'Home'],
  ['/shop', 'Shop'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="WoodShop home">
        <span className="wordmark-mark">W</span>
        <span>WoodShop</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>
        ))}
      </nav>

      <Link to="/contact" className="header-cta">Start a project</Link>
      <button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`mobile-panel ${open ? 'open' : ''}`}>
        {links.map(([to, label]) => <Link onClick={() => setOpen(false)} key={to} to={to}>{label}</Link>)}
      </div>
    </header>
  )
}
