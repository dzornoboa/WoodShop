import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const pieces = [
  ['frame-top', 'door-frame frame-top'],
  ['frame-left', 'door-frame frame-left'],
  ['frame-right', 'door-frame frame-right'],
  ['frame-bottom', 'door-frame frame-bottom'],
  ['door-core', 'door-core'],
  ['skin-left', 'door-skin skin-left'],
  ['skin-right', 'door-skin skin-right'],
  ['handle', 'door-handle'],
  ['lock', 'door-lock'],
  ['hinge-a', 'hinge hinge-a'],
  ['hinge-b', 'hinge hinge-b'],
  ['hinge-c', 'hinge hinge-c'],
]

export default function ScrollDoorHero() {
  const section = useRef(null)
  const stage = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: '+=420%',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      })

      tl.from('.frame-top', { y: -420, rotateX: 50, opacity: 0 }, 0)
        .from('.frame-left', { x: -520, rotateY: -60, opacity: 0 }, 0)
        .from('.frame-right', { x: 520, rotateY: 60, opacity: 0 }, 0)
        .from('.frame-bottom', { y: 420, rotateX: -50, opacity: 0 }, 0)
        .from('.door-core', { z: -520, scale: .52, opacity: 0 }, .12)
        .from('.skin-left', { x: -520, rotateY: -75, opacity: 0 }, .25)
        .from('.skin-right', { x: 520, rotateY: 75, opacity: 0 }, .25)
        .from('.hinge-a,.hinge-b,.hinge-c', { x: 300, rotate: 120, opacity: 0, stagger: .07 }, .48)
        .from('.door-lock', { x: 300, rotate: 50, opacity: 0 }, .56)
        .from('.door-handle', { x: 420, rotateZ: 180, opacity: 0 }, .62)
        .to('.door-assembly', { rotateY: -12, rotateX: 4, scale: 1.04, duration: .5 }, .76)
        .to('.door-assembly', { rotateY: 72, xPercent: 32, transformOrigin: '0% 50%', duration: .85 }, 1.15)
        .to('.hero-copy', { y: -80, opacity: 0, duration: .35 }, 1.05)
        .fromTo('.hero-stage-label', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: .4 }, 1.34)
        .to('.door-assembly', { y: -90, scale: .82, opacity: .2, duration: .55 }, 1.8)
        .to('.hero-stage-label', { opacity: 0, y: -25, duration: .3 }, 1.9)

      const quickX = gsap.quickTo(stage.current, 'rotationY', { duration: .6, ease: 'power3.out' })
      const quickY = gsap.quickTo(stage.current, 'rotationX', { duration: .6, ease: 'power3.out' })

      const move = (e) => {
        if (matchMedia('(pointer: coarse)').matches) return
        const nx = (e.clientX / innerWidth - .5) * 5
        const ny = (e.clientY / innerHeight - .5) * -3
        quickX(nx)
        quickY(ny)
      }

      window.addEventListener('pointermove', move)
      return () => window.removeEventListener('pointermove', move)
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={section} className="scroll-door-hero">
      <div className="hero-grain" />
      <div className="hero-copy">
        <span className="eyebrow">Custom joinery · security · finishing</span>
        <h1>Built in pieces.<br/><em>Finished as one.</em></h1>
        <p>Scroll to assemble a WoodShop door — from structural frame to timber face, hardware and final fit.</p>
        <div className="scroll-cue"><ArrowDown size={18}/> Scroll to build</div>
      </div>

      <div className="assembly-wrap" ref={stage}>
        <div className="door-assembly">
          {pieces.map(([key, cls]) => <div key={key} className={cls} />)}
          <div className="grain-line grain-a"/>
          <div className="grain-line grain-b"/>
          <div className="grain-line grain-c"/>
          <div className="grain-line grain-d"/>
        </div>
      </div>

      <div className="hero-stage-label">
        <span>01 — Assemble</span>
        <strong>Joinery that becomes architecture.</strong>
      </div>
      <div className="hero-index">WS / 01</div>
    </section>
  )
}
