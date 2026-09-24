import DoorCard from './DoorCard'

export default function ProductGrid({ items, onSelect }) {
  return (
    <div className="product-grid">
      {items.map(door => <DoorCard key={door.id} door={door} onSelect={onSelect}/>)}
    </div>
  )
}
