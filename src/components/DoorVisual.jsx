import { doorSpriteUrl, doorSpriteCount } from '../assets/doorSprite'

export default function DoorVisual({ index = 0, className = '', label = 'WoodShop door' }) {
  const safeIndex = Math.max(0, Math.min(index, doorSpriteCount - 1))
  const position = doorSpriteCount > 1 ? (safeIndex / (doorSpriteCount - 1)) * 100 : 0

  return (
    <div
      className={`door-visual ${className}`}
      role="img"
      aria-label={label}
      style={{
        backgroundImage: `url("${doorSpriteUrl}")`,
        backgroundSize: `${doorSpriteCount * 100}% 100%`,
        backgroundPosition: `${position}% center`,
      }}
    />
  )
}
