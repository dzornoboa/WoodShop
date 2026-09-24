import { useEffect, useRef } from 'react'

const interactiveSelector = 'a, button, input, textarea, select, option, label, [role="button"], [contenteditable="true"]'
const decorativeZones = '.scroll-door-hero, .workshop-film, .about-workshop'

export default function NailCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    let x = -100
    let y = -100

    const render = () => {
      el.style.transform = `translate3d(${x + 18}px, ${y + 18}px, 0) rotate(34deg)`
      frame = 0
    }

    const move = (e) => {
      x = e.clientX
      y = e.clientY

      const target = e.target instanceof Element ? e.target : null
      const interactive = target?.closest(interactiveSelector)
      const inDecorativeZone = target?.closest(decorativeZones)

      el.classList.toggle('is-hidden', Boolean(interactive) || !inDecorativeZone)

      if (!frame) frame = requestAnimationFrame(render)
    }

    const hide = () => el.classList.add('is-hidden')

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('mouseleave', hide)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('mouseleave', hide)
    }
  }, [])

  return (
    <div ref={ref} className="nail-cursor is-hidden" aria-hidden="true">
      <span className="nail-head" />
      <span className="nail-shaft" />
      <span className="nail-tip" />
    </div>
  )
}
