import { doorSpriteUrl, doorSpriteCount } from '../assets/doorSprite'

export default function DoorVisual({ index = 0, className = '', label = 'WoodShop door' }) {
  const safeIndex = Math.max(0, Math.min(index, doorSpriteCount - 1))
  const translate = safeIndex * (100 / doorSpriteCount)

  return (
    <div className={`door-visual ${className}`} role="img" aria-label={label}>
      <div
        className="door-visual-sprite"
        style={{
          width: `${doorSpriteCount * 100}%`,
          backgroundImage: `url("${doorSpriteUrl}")`,
          transform: `translate3d(-${translate}%, 0, 0)`,
        }}
      />
    </div>
  )
}
