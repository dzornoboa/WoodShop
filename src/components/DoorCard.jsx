import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import DoorVisual from './DoorVisual'

export default function DoorCard({ door, onSelect }) {
  const ref = useRef(null)

  const move = (e) => {
    if (matchMedia('(pointer: coarse)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - .5
    const y = (e.clientY - rect.top) / rect.height - .5
    ref.current.style.setProperty('--rx', `${-y * 5}deg`)
    ref.current.style.setProperty('--ry', `${x * 7}deg`)
  }

  const leave = () => {
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }

  return (
    <article ref={ref} className="door-card generated-card" onPointerMove={move} onPointerLeave={leave} onClick={() => onSelect?.(door)}>
      <div className="door-card-image generated-door-stage">
        <DoorVisual index={door.spriteIndex} label={`${door.name} door`} />
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
