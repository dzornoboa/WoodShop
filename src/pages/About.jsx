import { ArrowRight, Hammer, Ruler, ShieldCheck, Sparkles, Layers3, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { workshopImages } from '../data/doors'

const disciplines = [
  {
    icon: Ruler,
    title: 'Measured for the opening',
    text: 'We begin with the actual opening, swing direction, wall condition and hardware requirement rather than forcing a standard door into a custom space.',
  },
  {
    icon: Layers3,
    title: 'Built as a complete system',
    text: 'Leaf, core, frame, jamb, finish, hinges and lock preparation are considered together so the finished door feels deliberate and fits properly.',
  },
  {
    icon: ShieldCheck,
    title: 'Security where it matters',
    text: 'For security doors, strength is designed into the core, perimeter, frame and lock zones while the visible face stays refined.',
  },
  {
    icon: Sparkles,
    title: 'Furniture-level finishing',
    text: 'Timber selection, sanding, edge work and finishing are treated with the same care expected from well-made furniture.',
  },
]

const process = [
  ['01', 'Brief', 'Door type, reference images, security needs and intended space.'],
  ['02', 'Measure', 'Opening dimensions, frame condition, clearances and swing direction.'],
  ['03', 'Design', 'Material, face pattern, hardware, finish and construction approach.'],
  ['04', 'Build', 'Joinery, core assembly, framing, machining and hardware preparation.'],
  ['05', 'Finish', 'Sanding, coating, detailing, quality checks and final fitting preparation.'],
]

export default function About() {
  return (
    <main className="about-page">
      <section
        className="about-hero about-hero-image section-pad"
        data-header-theme="dark"
        style={{ '--hero-bg': `url(${workshopImages.joiner})` }}
      >
        <div className="page-hero-overlay" />
        <div className="about-hero-copy page-hero-copy">
          <span className="eyebrow">About WoodShop</span>
          <h1>Made by joiners.<br/><em>Not picked from a shelf.</em></h1>
          <p>WoodShop is built around workshop craft: measuring, cutting, joining, reinforcing and finishing doors for the spaces they are meant to serve.</p>
        </div>
      </section>

      <section className="about-manifesto section-pad" data-header-theme="light">
        <div className="manifesto-kicker">What a joiner brings</div>
        <div className="manifesto-copy">
          <h2>A door is more than the face you see.</h2>
          <p>Behind the finish are joints, a core, frame tolerances, hardware positions and the relationship between timber and metal. Our role is to make those parts work as one object — visually, mechanically and securely.</p>
        </div>
      </section>

      <section className="about-workshop section-pad" data-header-theme="dark">
        <div className="about-workshop-image">
          <img src={workshopImages.bench} alt="Joinery workbench and timber craftsmanship" loading="lazy" decoding="async" />
          <span className="image-caption">Workshop craft / shaping & fitting</span>
        </div>
        <div className="about-workshop-copy">
          <span className="eyebrow">Built inside the workshop</span>
          <h2>Precision before installation.</h2>
          <p>Good fitting begins long before a door reaches site. The workshop gives us control over material preparation, joinery, alignment, hardware machining and finishing.</p>
          <p>That is especially important for security doors, where the visible timber or decorative surface must work around a stronger internal structure without looking heavy or industrial.</p>
          <Link to="/shop" className="arrow-link">Explore the door collection <ArrowRight size={18}/></Link>
        </div>
      </section>

      <section className="disciplines-section section-pad" data-header-theme="light">
        <div className="section-heading-row compact-heading">
          <div>
            <span className="eyebrow dark">Our discipline</span>
            <h2>Craft, structure and finish.</h2>
          </div>
        </div>
        <div className="discipline-grid">
          {disciplines.map(({ icon: Icon, title, text }) => (
            <article className="discipline-card" key={title}>
              <Icon size={25}/>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="build-process section-pad" data-header-theme="dark">
        <div className="build-process-title">
          <span className="eyebrow">From brief to build</span>
          <h2>One controlled sequence.</h2>
        </div>
        <div className="process-list">
          {process.map(([n, title, text]) => (
            <div className="process-line" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="materials-band" data-header-theme="light">
        <div><Hammer size={22}/><span>Hardwood & engineered timber</span></div>
        <div><ShieldCheck size={22}/><span>Reinforced security cores</span></div>
        <div><Wrench size={22}/><span>Locks, hinges & fittings</span></div>
        <div><Sparkles size={22}/><span>Stains, oils & protective finishes</span></div>
      </section>

      <section className="about-cta section-pad" data-header-theme="dark">
        <span className="eyebrow">Made for your opening</span>
        <h2>Have a design in mind?<br/><em>We can turn it into a build.</em></h2>
        <Link to="/contact" className="light-button">Discuss your door <ArrowRight size={18}/></Link>
      </section>
    </main>
  )
}
