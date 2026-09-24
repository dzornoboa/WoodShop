import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowRight, Mail, MessageCircle, Phone, Ruler, ShieldCheck } from 'lucide-react'
import { doors, workshopImages } from '../data/doors'

export default function Contact() {
  const location = useLocation()
  const requestedDoor = useMemo(() => {
    const id = new URLSearchParams(location.search).get('door')
    return doors.find(d => d.id === id)
  }, [location.search])

  const submit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = data.get('name') || ''
    const phone = data.get('phone') || ''
    const email = data.get('email') || ''
    const door = data.get('door') || ''
    const dimensions = data.get('dimensions') || ''
    const message = data.get('message') || ''

    const subject = encodeURIComponent(`WoodShop enquiry — ${door || 'Custom door'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nDoor / style: ${door}\nOpening dimensions: ${dimensions}\n\nProject details:\n${message}`,
    )
    window.location.href = `mailto:cstmrsolution@gmail.com?subject=${subject}&body=${body}`
  }

  const whatsappText = encodeURIComponent(
    requestedDoor
      ? `Hello WoodShop, I would like to enquire about the ${requestedDoor.name} door.`
      : 'Hello WoodShop, I would like to discuss a custom door project.',
  )

  return (
    <main className="contact-page">
      <section
        className="contact-hero contact-hero-image section-pad"
        data-header-theme="dark"
        style={{ '--hero-bg': `url(${workshopImages.detail})` }}
      >
        <div className="page-hero-overlay" />
        <div className="page-hero-copy">
          <span className="eyebrow">Contact WoodShop</span>
          <h1>Tell us about<br/><em>the opening.</em></h1>
          <p>Share the door style, opening size, intended use and any security requirement. A reference image is welcome too — you can send it by WhatsApp or email after your first message.</p>
        </div>
      </section>

      <section className="contact-layout section-pad" data-header-theme="light">
        <div className="contact-details">
          <div className="contact-detail-intro">
            <span className="eyebrow dark">Direct contact</span>
            <h2>Start with a call, message or brief.</h2>
          </div>

          <a className="contact-card" href="tel:+233549860795">
            <Phone size={22}/>
            <div>
              <span>Phone</span>
              <strong>+233 54 986 0795</strong>
            </div>
            <ArrowRight size={18}/>
          </a>

          <a className="contact-card" href={`https://wa.me/233549860795?text=${whatsappText}`} target="_blank" rel="noreferrer">
            <MessageCircle size={22}/>
            <div>
              <span>WhatsApp</span>
              <strong>Message WoodShop</strong>
            </div>
            <ArrowRight size={18}/>
          </a>

          <a className="contact-card" href="mailto:cstmrsolution@gmail.com">
            <Mail size={22}/>
            <div>
              <span>Email</span>
              <strong>cstmrsolution@gmail.com</strong>
            </div>
            <ArrowRight size={18}/>
          </a>

          <div className="contact-prep">
            <div><Ruler size={20}/><span>Opening width × height</span></div>
            <div><ShieldCheck size={20}/><span>Security requirement</span></div>
            <div><MessageCircle size={20}/><span>Reference image or preferred style</span></div>
          </div>
        </div>

        <form className="quote-form" onSubmit={submit}>
          <div className="form-heading">
            <span className="eyebrow dark">Request a quote</span>
            <h2>Project details</h2>
            {requestedDoor && <p className="selected-door-note">Enquiring about: <strong>{requestedDoor.name}</strong></p>}
          </div>

          <div className="field-grid">
            <label>
              <span>Your name</span>
              <input name="name" required placeholder="Full name" />
            </label>
            <label>
              <span>Phone number</span>
              <input name="phone" type="tel" required placeholder="+233…" />
            </label>
          </div>

          <label>
            <span>Email</span>
            <input name="email" type="email" placeholder="name@email.com" />
          </label>

          <label>
            <span>Door / style</span>
            <select name="door" defaultValue={requestedDoor?.name || ''}>
              <option value="">Custom / not sure yet</option>
              {doors.map(door => <option key={door.id} value={door.name}>{door.name}</option>)}
            </select>
          </label>

          <label>
            <span>Opening dimensions</span>
            <input name="dimensions" placeholder="e.g. 1000 mm W × 2100 mm H" />
          </label>

          <label>
            <span>Tell us about the project</span>
            <textarea name="message" rows="6" required placeholder="Exterior or interior? Preferred wood/finish? Security level? Quantity?"/>
          </label>

          <button type="submit" className="quote-submit">
            Prepare email enquiry <ArrowRight size={18}/>
          </button>
          <p className="form-note">Submitting opens your email app with the project details addressed to WoodShop.</p>
        </form>
      </section>

      <section className="contact-bottom-band" data-header-theme="dark">
        <span>Custom joinery</span>
        <span>Security doors</span>
        <span>Timber entrance doors</span>
        <span>Door finishing</span>
      </section>
    </main>
  )
}
