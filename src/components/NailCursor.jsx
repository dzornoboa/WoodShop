import { useEffect, useRef } from 'react'

export default function NailCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) rotate(34deg)`
    }
    const down = () => el.classList.add('pressed')
    const up = () => el.classList.remove('pressed')

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    document.documentElement.classList.add('custom-cursor')

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      document.documentElement.classList.remove('custom-cursor')
    }
  }, [])

  return (
    <div ref={ref} className="nail-cursor" aria-hidden="true">
      <span className="nail-head" />
      <span className="nail-shaft" />
      <span className="nail-tip" />
    </div>
  )
}
