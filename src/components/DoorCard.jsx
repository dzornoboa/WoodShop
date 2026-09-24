import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

export default function DoorCard({ door, onSelect }) {
  const ref = useRef(null)

  const move = (e) => {
    if (matchMedia('(pointer: coarse)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - .5
    const y = (e.clientY - rect.top) / rect.height - .5
    ref.current.style.setProperty('--rx', `${-y * 6}deg`)
    ref.current.style.setProperty('--ry', `${x * 8}deg`)
  }

  const leave = () => {
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }

  return (
    <article ref={ref} className="door-card" onPointerMove={move} onPointerLeave={leave} onClick={() => onSelect?.(door)}>
      <div className="door-card-image">
        <img src={door.image} alt={`${door.name} door`} loading="lazy" />
      </div>
      <div className="door-card-overlay">
        <span>{door.category}</span>
        <h3>{door.name}</h3>
        <p>{door.description}</p>
        <button className="text-button">View details <ArrowUpRight size={16}/></button>
      </div>
    </article>
  )
}
