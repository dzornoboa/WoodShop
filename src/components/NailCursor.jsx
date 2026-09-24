import { useEffect, useRef } from 'react'

export default function NailCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    let x = -100
    let y = -100

    const render = () => {
      // Keep the nail tip on the real pointer position. The element never
      // receives pointer events, so links/buttons remain fully clickable.
      el.style.transform = `translate3d(${x - 36}px, ${y - 8}px, 0) rotate(34deg)`
      frame = 0
    }

    const move = (event) => {
      x = event.clientX
      y = event.clientY
      el.classList.remove('is-hidden')
      if (!frame) frame = requestAnimationFrame(render)
    }

    const down = () => el.classList.add('pressed')
    const up = () => el.classList.remove('pressed')
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
      <span className="nail-head" />
      <span className="nail-shaft" />
      <span className="nail-tip" />
    </div>
  )
}
