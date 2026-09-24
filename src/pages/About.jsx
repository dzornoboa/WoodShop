import { workshopImages } from '../data/doors'

export default function About() {
  return (
    <main className="placeholder-page section-pad">
      <span className="eyebrow dark">About WoodShop</span>
      <h1>The workshop is the product’s first home.</h1>
      <div className="placeholder-grid">
        <img src={workshopImages.joiner} alt="Joiner shaping timber"/>
        <div>
          <p>This page is scaffolded for the next build phase. It will cover the WoodShop story, joinery process, materials, workshop standards and the difference between custom-built and off-the-shelf doors.</p>
          <p className="muted">The navigation and route are already live so the site structure is complete.</p>
        </div>
      </div>
    </main>
  )
}
