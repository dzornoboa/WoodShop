import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown } from 'lucide-react'
import DoorVisual from './DoorVisual'
import { doors } from '../data/doors'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollDoorHero() {
  const section = useRef(null)
  const stage = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: '+=620%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      tl
        .to('.scroll-progress-bar', { scaleX: 1, duration: 6.2 }, 0)

        // 01 — arrive / open
        .to('.door-lab-copy', { y: -54, opacity: 0, duration: .55 }, .65)
        .to('.door-lab-unit', {
          rotateY: -18,
          xPercent: 6,
          scale: 1.025,
          transformOrigin: '0% 50%',
          duration: .72,
        }, .68)
        .to('.phase-one', { opacity: 0, y: -14, duration: .18 }, .72)
        .to('.phase-two', { opacity: 1, y: 0, duration: .22 }, .82)

        // 02 — explode the complete construction
        .to('.lab-front-face', { z: 310, x: 170, rotateY: -8, duration: .78 }, 1.08)
        .to('.lab-back-face', { z: -275, x: -145, rotateY: 7, duration: .78 }, 1.08)
        .to('.lab-core', { z: -20, scaleX: .9, duration: .78 }, 1.08)
        .to('.lab-lock-rail', { x: 245, z: 95, duration: .66 }, 1.16)
        .to('.lab-handle', { x: 410, z: 170, rotateZ: 18, duration: .62 }, 1.18)
        .to('.lab-lock-top', { x: 350, y: -45, z: 150, rotate: 70, duration: .58 }, 1.18)
        .to('.lab-lock-bottom', { x: 370, y: 55, z: 145, rotate: -65, duration: .58 }, 1.18)
        .to('.lab-hinge-a', { x: -325, y: -32, z: 70, rotate: -65, duration: .58 }, 1.2)
        .to('.lab-hinge-b', { x: -345, z: 70, rotate: 55, duration: .58 }, 1.2)
        .to('.lab-hinge-c', { x: -325, y: 32, z: 70, rotate: -55, duration: .58 }, 1.2)
        .to('.lab-frame-top', { y: -185, z: -35, duration: .72 }, 1.1)
        .to('.lab-frame-bottom', { y: 185, z: -35, duration: .72 }, 1.1)
        .to('.lab-frame-left', { x: -205, z: -35, duration: .72 }, 1.1)
        .to('.lab-frame-right', { x: 205, z: -35, duration: .72 }, 1.1)
        .to('.lab-rail-top', { y: -62, z: 40, duration: .62 }, 1.14)
        .to('.lab-rail-mid', { y: 12, z: 40, duration: .62 }, 1.14)
        .to('.lab-rail-bottom', { y: 70, z: 40, duration: .62 }, 1.14)
        .to('.lab-stile-left', { x: -88, z: 40, duration: .62 }, 1.14)
        .to('.lab-stile-right', { x: 88, z: 40, duration: .62 }, 1.14)

        // lighten the studio while components are separated
        .to('.scroll-door-hero', { backgroundColor: '#e8e7e3', color: '#11100e', duration: .65 }, 1.22)
        .to('.hero-grain', { opacity: .22, duration: .55 }, 1.22)
        .to('.door-lab-shadow', { opacity: .15, scale: 1.1, duration: .5 }, 1.25)
        .to('.phase-two', { opacity: 0, y: -14, duration: .2 }, 1.8)
        .to('.phase-three', { opacity: 1, y: 0, duration: .22 }, 1.9)
        .to('.part-callouts', { opacity: 1, duration: .3 }, 1.88)

        // 03 — inspection orbit
        .to('.door-lab-unit', { rotateY: 13, rotateX: -2.5, scale: .93, xPercent: 0, duration: .72 }, 2.03)
        .to('.lab-front-face', { x: 205, z: 345, duration: .72 }, 2.03)
        .to('.lab-back-face', { x: -180, z: -320, duration: .72 }, 2.03)
        .to('.door-lab-unit', { rotateY: -10, rotateX: 3, duration: .72 }, 2.72)

        // 04 — rebuild
        .to('.part-callouts', { opacity: 0, duration: .2 }, 3.18)
        .to('.phase-three', { opacity: 0, y: -14, duration: .18 }, 3.18)
        .to('.phase-four', { opacity: 1, y: 0, duration: .2 }, 3.28)
        .to('.lab-frame-top,.lab-frame-bottom', { y: 0, z: 0, duration: .72 }, 3.36)
        .to('.lab-frame-left,.lab-frame-right', { x: 0, z: 0, duration: .72 }, 3.36)
        .to('.lab-rail-top,.lab-rail-mid,.lab-rail-bottom', { y: 0, z: 0, duration: .62 }, 3.44)
        .to('.lab-stile-left,.lab-stile-right', { x: 0, z: 0, duration: .62 }, 3.44)
        .to('.lab-back-face', { x: 0, z: -12, rotateY: 0, duration: .72 }, 3.5)
        .to('.lab-core', { z: 0, scaleX: 1, duration: .65 }, 3.5)
        .to('.lab-lock-rail', { x: 0, z: 14, duration: .58 }, 3.56)
        .to('.lab-front-face', { x: 0, z: 24, rotateY: 0, duration: .72 }, 3.58)
        .to('.lab-handle,.lab-lock-top,.lab-lock-bottom,.lab-hinge-a,.lab-hinge-b,.lab-hinge-c', {
          x: 0,
          y: 0,
          z: 30,
          rotate: 0,
          rotateZ: 0,
          duration: .62,
        }, 3.72)
        .to('.door-lab-unit', { rotateY: 0, rotateX: 0, scale: .84, duration: .7 }, 3.76)

        // 05 — transition into collection wall, mirroring the reference video ending
        .to('.phase-four', { opacity: 0, y: -14, duration: .18 }, 4.3)
        .to('.phase-five', { opacity: 1, y: 0, duration: .22 }, 4.4)
        .to('.door-lab-unit', { scale: .42, y: -65, opacity: 0, duration: .62 }, 4.4)
        .fromTo('.collection-wall', {
          opacity: 0,
          scale: .72,
          z: -260,
        }, {
          opacity: 1,
          scale: 1,
          z: 0,
          duration: .82,
        }, 4.48)
        .from('.collection-item', {
          opacity: 0,
          y: 80,
          rotateY: 12,
          stagger: .07,
          duration: .52,
        }, 4.56)
        .to('.collection-caption', { opacity: 1, y: 0, duration: .35 }, 5.0)
        .to('.phase-five', { opacity: 0, y: -12, duration: .2 }, 5.52)
        .to('.collection-wall', { scale: 1.08, y: -26, duration: .52 }, 5.52)
        .to('.collection-wall,.collection-caption', { opacity: 0, duration: .42 }, 5.88)

      const quickX = gsap.quickTo(stage.current, 'rotationY', { duration: .55, ease: 'power3.out' })
      const quickY = gsap.quickTo(stage.current, 'rotationX', { duration: .55, ease: 'power3.out' })

      const move = (e) => {
        if (matchMedia('(pointer: coarse)').matches) return
        const nx = (e.clientX / innerWidth - .5) * 4
        const ny = (e.clientY / innerHeight - .5) * -2.5
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

      <div className="door-lab-copy">
        <span className="eyebrow">WoodShop / joinery in motion</span>
        <h1>See what sits<br/><em>inside the finish.</em></h1>
        <p>Scroll through the construction of a WoodShop security door — frame, internal structure, faces, locks, hinges and final assembly.</p>
        <div className="scroll-cue"><ArrowDown size={18}/> Scroll to deconstruct</div>
      </div>

      <div className="door-lab-scene" ref={stage}>
        <div className="door-lab-shadow" />

        <div className="door-lab-unit">
          <div className="lab-frame lab-frame-top" />
          <div className="lab-frame lab-frame-bottom" />
          <div className="lab-frame lab-frame-left" />
          <div className="lab-frame lab-frame-right" />

          <div className="lab-back-face" />

          <div className="lab-core">
            <div className="lab-stile lab-stile-left" />
            <div className="lab-stile lab-stile-right" />
            <div className="lab-rail lab-rail-top" />
            <div className="lab-rail lab-rail-mid" />
            <div className="lab-rail lab-rail-bottom" />
            <div className="core-cavity cavity-a" />
            <div className="core-cavity cavity-b" />
            <div className="core-cavity cavity-c" />
          </div>

          <div className="lab-lock-rail" />

          <div className="lab-front-face">
            <div className="face-wood" />
            <div className="face-graphite" />
            <span className="face-line fl-1" />
            <span className="face-line fl-2" />
            <span className="face-line fl-3" />
            <span className="face-line fl-4" />
            <span className="face-line fl-5" />
          </div>

          <div className="lab-lock lab-lock-top" />
          <div className="lab-lock lab-lock-bottom" />
          <div className="lab-handle" />
          <div className="lab-hinge lab-hinge-a" />
          <div className="lab-hinge lab-hinge-b" />
          <div className="lab-hinge lab-hinge-c" />
        </div>

        <div className="part-callouts" aria-hidden="true">
          <span className="callout callout-frame">Frame</span>
          <span className="callout callout-core">Reinforced core</span>
          <span className="callout callout-face">Timber + steel face</span>
          <span className="callout callout-hardware">Hardware</span>
        </div>

        <div className="collection-wall">
          {doors.map((door) => (
            <div className="collection-item" key={door.id}>
              <DoorVisual index={door.spriteIndex} label={door.name} />
              <span>{door.name}</span>
            </div>
          ))}
        </div>
        <div className="collection-caption">
          <span>07 WoodShop concepts</span>
          <strong>One workshop language. Different doors.</strong>
        </div>
      </div>

      <div className="phase-readout">
        <div className="phase phase-one"><span>01</span><strong>Complete door</strong></div>
        <div className="phase phase-two"><span>02</span><strong>Deconstruct</strong></div>
        <div className="phase phase-three"><span>03</span><strong>Inspect the build</strong></div>
        <div className="phase phase-four"><span>04</span><strong>Reassemble</strong></div>
        <div className="phase phase-five"><span>05</span><strong>The collection</strong></div>
      </div>

      <div className="hero-index">WS / BUILD 01</div>
      <div className="scroll-progress"><span className="scroll-progress-bar" /></div>
    </section>
  )
}
