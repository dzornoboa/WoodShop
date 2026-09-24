import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import NailCursor from './components/NailCursor'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const root = document.documentElement
    const previous = root.style.scrollBehavior

    // Route changes must be instant. A smooth scroll from the very tall
    // pinned Home timeline can leave the next page temporarily outside
    // the viewport, which looks like a blank page until refresh.
    root.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    const frame = requestAnimationFrame(() => {
      root.style.scrollBehavior = previous
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <NailCursor />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}
