import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Ruler, Hammer, Sparkles } from 'lucide-react'
import ScrollDoorHero from '../components/ScrollDoorHero'
import ProductGrid from '../components/ProductGrid'
import { doors, workshopImages } from '../data/doors'

const steps = [
  [Ruler, 'Measure', 'Every opening starts with dimensions, usage and design intent.'],
  [Hammer, 'Join', 'Frames, cores and timber faces are built and aligned in the workshop.'],
  [ShieldCheck, 'Secure', 'Hardware, locks and reinforced elements are prepared around the specification.'],
  [Sparkles, 'Finish', 'The surface is sanded, sealed and finished for the final space.'],
]

export default function Home() {
  return (
    <main>
      <ScrollDoorHero />

      <section className="statement-section section-pad">
        <span className="eyebrow dark">What we make</span>
        <div className="statement-grid">
          <h2>Crafted like furniture.<br/>Built like architecture.</h2>
          <p>WoodShop creates custom timber doors, modern security doors and refined entrance systems. Every frame, core, face, hinge, lock and finish is considered as part of one complete build.</p>
        </div>
      </section>

      <section className="process-section section-pad">
        {steps.map(([Icon, title, text], i) => (
          <article className="process-card" key={title}>
            <div className="process-number">0{i + 1}</div>
            <Icon size={26}/>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="workshop-film section-pad">
        <div className="workshop-copy">
          <span className="eyebrow">Inside the workshop</span>
          <h2>The work happens before the door reaches the wall.</h2>
          <p>Every door is measured, cut, joined, reinforced and finished in the workshop before installation. That control is what gives the final door its fit, strength and finish.</p>
          <Link to="/about" className="arrow-link">See how we build <ArrowRight size={18}/></Link>
        </div>
        <PointerImage src={workshopImages.bench}/>
      </section>

      <section className="featured-products section-pad">
        <div className="section-heading-row">
          <div>
            <span className="eyebrow dark">Selected doors</span>
            <h2>Different doors. One standard of finish.</h2>
          </div>
          <Link to="/shop" className="outline-button">Explore the shop <ArrowRight size={18}/></Link>
        </div>
        <ProductGrid items={doors.slice(0, 4)} />
      </section>

      <section className="home-cta section-pad">
        <p>Have a doorway, reference image or security requirement?</p>
        <h2>Bring us the opening.<br/><em>We’ll build the door.</em></h2>
        <Link to="/contact" className="light-button">Start a custom project <ArrowRight size={18}/></Link>
      </section>
    </main>
  )
}

function PointerImage({ src }) {
  const move = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - .5
    const y = (e.clientY - r.top) / r.height - .5
    el.style.setProperty('--px', `${x * 12}deg`)
    el.style.setProperty('--py', `${-y * 9}deg`)
  }

  const leave = (e) => {
    e.currentTarget.style.setProperty('--px', '0deg')
    e.currentTarget.style.setProperty('--py', '0deg')
  }

  return (
    <div className="pointer-media" onPointerMove={move} onPointerLeave={leave}>
      <img src={src} alt="Joiner working in a wood workshop"/>
    </div>
  )
}
