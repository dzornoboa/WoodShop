import { useEffect, useRef } from 'react'

const interactiveSelector = 'a, button, input, textarea, select, option, label, [role="button"], [contenteditable="true"]'

export default function NailCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(pointer: coarse)').matches) return

    let frame = 0
    let x = -100
    let y = -100

    const render = () => {
      el.style.transform = `translate3d(${x + 16}px, ${y + 18}px, 0) rotate(34deg)`
      frame = 0
    }

    const move = (e) => {
      x = e.clientX
      y = e.clientY

      const interactive = e.target instanceof Element && e.target.closest(interactiveSelector)
      el.classList.toggle('is-hidden', Boolean(interactive))

      if (!frame) frame = requestAnimationFrame(render)
    }

    const leave = () => el.classList.add('is-hidden')
    const enter = () => el.classList.remove('is-hidden')

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('mouseleave', leave)
    document.addEventListener('mouseenter', enter)

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', move)
      document.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseenter', enter)
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
