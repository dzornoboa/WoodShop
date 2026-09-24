import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-brand">WoodShop</div>
        <p>Custom joinery, security doors and refined timber finishes.</p>
      </div>
      <div className="footer-links">
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-note">Built in the workshop. Fitted for the space.</div>
    </footer>
  )
}
