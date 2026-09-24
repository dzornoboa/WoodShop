import { useEffect, useRef } from 'react'

const interactiveSelector = 'a, button, input, textarea, select, label, [role="button"], .door-card'

export default function NailCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    let x = -100
    let y = -100
    let hovering = false

    const render = () => {
      el.style.transform = `translate3d(${x - 36}px, ${y - 8}px, 0) rotate(34deg)`
      frame = 0
    }

    const move = (event) => {
      x = event.clientX
      y = event.clientY
      const target = event.target instanceof Element ? event.target : null
      hovering = Boolean(target?.closest(interactiveSelector))
      el.classList.toggle('is-hovering', hovering)
      el.classList.remove('is-hidden')
      if (!frame) frame = requestAnimationFrame(render)
    }

    const down = () => el.classList.add('is-clicking')
    const up = () => el.classList.remove('is-clicking')
    const hide = () => el.classList.add('is-hidden')

    document.documentElement.classList.add('custom-cursor')
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', down, { passive: true })
    window.addEventListener('pointerup', up, { passive: true })
    document.addEventListener('mouseleave', hide)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      document.documentElement.classList.remove('custom-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      document.removeEventListener('mouseleave', hide)
    }
  }, [])

  return (
    <div ref={ref} className="nail-cursor is-hidden" aria-hidden="true">
      <div className="nail-cursor-inner">
        <span className="nail-head" />
        <span className="nail-shaft" />
        <span className="nail-tip" />
      </div>
    </div>
  )
}
