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
      <div className="footer-contact">
        <a href="tel:+233549860795">+233 54 986 0795</a>
        <a href="mailto:cstmrsolution@gmail.com">cstmrsolution@gmail.com</a>
      </div>
    </footer>
  )
}
