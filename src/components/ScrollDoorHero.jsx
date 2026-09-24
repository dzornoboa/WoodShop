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
        .set('.scroll-door-hero', { attr: { 'data-header-theme': 'light' } }, 1.22)
        .to('.hero-grain', { opacity: .22, duration: .55 }, 1.22)
        .to('.door-lab-shadow', { opacity: .15, scale: 1.1, duration: .5 }, 1.25)
        .to('.phase-two', { opacity: 0, y: -14, duration: .2 }, 1.8)
        .to('.phase-three', { opacity: 1, y: 0, duration: .22 }, 1.9)
        .to('.part-callouts', { opacity: 1, duration: .3 }, 1.88)

        // Workshop details enter around the exploded assembly
        .fromTo('.workshop-orbit', {
          opacity: 0,
          scale: .72,
        }, {
          opacity: 1,
          scale: 1,
          duration: .52,
        }, 1.58)
        .fromTo('.tool-hammer', {
          x: -280,
          y: 180,
          rotate: -68,
        }, {
          x: -190,
          y: 92,
          rotate: -26,
          duration: .7,
        }, 1.58)
        .fromTo('.tool-chisel', {
          x: 270,
          y: -190,
          rotate: 56,
        }, {
          x: 182,
          y: -96,
          rotate: 18,
          duration: .7,
        }, 1.62)
        .fromTo('.tool-square', {
          x: 285,
          y: 145,
          rotate: 80,
        }, {
          x: 185,
          y: 92,
          rotate: 15,
          duration: .7,
        }, 1.66)
        .fromTo('.hardware-particle', {
          opacity: 0,
          scale: .2,
          x: 0,
          y: 0,
          rotation: 0,
        }, {
          opacity: .9,
          scale: 1,
          x: (i) => [-235,-196,-152,206,232,172,128,-215][i % 8],
          y: (i) => [-116,-44,154,-132,-28,162,70,34][i % 8],
          rotation: (i) => [-34,22,71,-18,52,96,-62,39][i % 8],
          stagger: .045,
          duration: .52,
        }, 1.6)
        .fromTo('.wood-shaving', {
          opacity: 0,
          scale: .35,
          x: 0,
          y: 45,
          rotation: 0,
        }, {
          opacity: .62,
          scale: 1,
          x: (i) => [-245,-118,142,246,-205,196][i % 6],
          y: (i) => [188,215,204,164,104,128][i % 6],
          rotation: (i) => [-18,32,9,-28,54,-42][i % 6],
          stagger: .05,
          duration: .6,
        }, 1.7)
        .to('.dust-speck', {
          opacity: .32,
          x: (i) => [22,-18,35,-30,14,-12,28,-22,18,-10][i % 10],
          y: (i) => [-34,-20,-48,-27,-42,-30,-18,-52,-26,-38][i % 10],
          rotation: (i) => 20 + i * 13,
          stagger: .025,
          duration: .7,
        }, 1.72)

        // 03 — inspection orbit
        .to('.door-lab-unit', { rotateY: 13, rotateX: -2.5, scale: .93, xPercent: 0, duration: .72 }, 2.03)
        .to('.tool-hammer', { x: -214, y: 72, rotate: -14, duration: .72 }, 2.03)
        .to('.tool-chisel', { x: 205, y: -74, rotate: 30, duration: .72 }, 2.03)
        .to('.tool-square', { x: 214, y: 108, rotate: 4, duration: .72 }, 2.03)
        .to('.hardware-particle', {
          x: (i) => [-252,-208,-167,224,246,192,143,-229][i % 8],
          y: (i) => [-128,-56,168,-145,-37,176,84,47][i % 8],
          rotation: (i) => 35 + i * 41,
          duration: .72,
        }, 2.03)
        .to('.lab-front-face', { x: 205, z: 345, duration: .72 }, 2.03)
        .to('.lab-back-face', { x: -180, z: -320, duration: .72 }, 2.03)
        .to('.door-lab-unit', { rotateY: -10, rotateX: 3, duration: .72 }, 2.72)

        // 04 — rebuild
        .to('.workshop-orbit', { opacity: 0, scale: .86, duration: .38 }, 3.02)
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

      const quickX = gsap.quickTo(stage.current, 'rotationY', { duration: .45, ease: 'power3.out' })
      const quickY = gsap.quickTo(stage.current, 'rotationX', { duration: .45, ease: 'power3.out' })

      const move = (e) => {
        if (matchMedia('(pointer: coarse)').matches) return
        const rect = section.current.getBoundingClientRect()
        const nx = ((e.clientX - rect.left) / rect.width - .5) * 4
        const ny = ((e.clientY - rect.top) / rect.height - .5) * -2.5
        quickX(nx)
        quickY(ny)
      }

      const reset = () => {
        quickX(0)
        quickY(0)
      }

      section.current.addEventListener('pointermove', move, { passive: true })
      section.current.addEventListener('pointerleave', reset)

      return () => {
        section.current?.removeEventListener('pointermove', move)
        section.current?.removeEventListener('pointerleave', reset)
      }
    }, section)

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === section.current) trigger.kill(true)
      })
      ctx.revert()
      ScrollTrigger.clearScrollMemory()
    }
  }, [])

  return (
    <section ref={section} className="scroll-door-hero" data-header-theme="dark">
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

        <div className="workshop-orbit" aria-hidden="true">
          <div className="tool tool-hammer">
            <span className="hammer-handle" />
            <span className="hammer-head" />
            <span className="hammer-claw" />
          </div>

          <div className="tool tool-chisel">
            <span className="chisel-handle" />
            <span className="chisel-collar" />
            <span className="chisel-blade" />
          </div>

          <div className="tool tool-square">
            <span className="square-long" />
            <span className="square-short" />
            <span className="square-mark mark-a" />
            <span className="square-mark mark-b" />
            <span className="square-mark mark-c" />
          </div>

          <span className="hardware-particle nail-particle n1" />
          <span className="hardware-particle screw-particle s1" />
          <span className="hardware-particle nail-particle n2" />
          <span className="hardware-particle screw-particle s2" />
          <span className="hardware-particle nail-particle n3" />
          <span className="hardware-particle screw-particle s3" />
          <span className="hardware-particle nail-particle n4" />
          <span className="hardware-particle screw-particle s4" />

          <span className="wood-shaving shaving-a" />
          <span className="wood-shaving shaving-b" />
          <span className="wood-shaving shaving-c" />
          <span className="wood-shaving shaving-d" />
          <span className="wood-shaving shaving-e" />
          <span className="wood-shaving shaving-f" />

          <span className="dust-speck dust-1" />
          <span className="dust-speck dust-2" />
          <span className="dust-speck dust-3" />
          <span className="dust-speck dust-4" />
          <span className="dust-speck dust-5" />
          <span className="dust-speck dust-6" />
          <span className="dust-speck dust-7" />
          <span className="dust-speck dust-8" />
          <span className="dust-speck dust-9" />
          <span className="dust-speck dust-10" />
        </div>

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
