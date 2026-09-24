import { useMemo, useState } from 'react'
import { X, ArrowRight } from 'lucide-react'
import ProductGrid from '../components/ProductGrid'
import { categories, doors } from '../data/doors'

export default function Shop() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(
    () => active === 'All' ? doors : doors.filter(d => d.category === active),
    [active],
  )

  return (
    <main className="shop-page">
      <section className="shop-hero section-pad">
        <span className="eyebrow dark">WoodShop collection</span>
        <h1>Choose a direction.<br/><em>Then make it yours.</em></h1>
        <p>These designs are a starting point for proportions, material and finish. Final dimensions, locking systems and details are specified per project.</p>
      </section>

      <section className="shop-catalogue section-pad">
        <div className="filter-row" role="tablist" aria-label="Door categories">
          {categories.map(cat => (
            <button key={cat} className={active === cat ? 'active' : ''} onClick={() => setActive(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="catalogue-count">{String(filtered.length).padStart(2, '0')} designs</div>
        <ProductGrid items={filtered} onSelect={setSelected}/>
      </section>

      {selected && (
        <div className="product-modal-backdrop" onClick={() => setSelected(null)}>
          <aside className="product-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close"><X/></button>
            <div className="modal-image"><img src={selected.image} alt={selected.name}/></div>
            <div className="modal-content">
              <span className="eyebrow dark">{selected.category}</span>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
              <dl>
                <div><dt>Material</dt><dd>{selected.material}</dd></div>
                <div><dt>Security</dt><dd>{selected.security}</dd></div>
                <div><dt>Use</dt><dd>{selected.use}</dd></div>
                <div><dt>Finish</dt><dd>{selected.finish}</dd></div>
              </dl>
              <a className="dark-button" href={`/contact?door=${selected.id}`}>
                Request this design <ArrowRight size={18}/>
              </a>
            </div>
          </aside>
        </div>
      )}
    </main>
  )
}
