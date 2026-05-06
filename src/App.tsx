import { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero'
import PainPoints from './components/PainPoints'
import Benefits from './components/Benefits'
import WhatYouGain from './components/WhatYouGain'
import HowItWorks from './components/HowItWorks'
import Results from './components/Results'
import Investment from './components/Investment'
import About from './components/About'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import { Closing, Footer } from './components/ClosingFooter'

/* ── SCROLL PROGRESS BAR ── */
function ScrollBar() {
  const barRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement.scrollHeight - window.innerHeight
      if (barRef.current) barRef.current.style.width = (window.scrollY / h * 100) + '%'
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div id="scroll-bar" ref={barRef} />
}

/* ── NAV + MOBILE MENU ── */
function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      navRef.current?.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function close() { setMenuOpen(false) }

  return (
    <>
      <nav id="nav" ref={navRef}>
        <a href="#hero" className="nav-logo" onClick={close}>
          Arthur <em>Bernardo</em>
        </a>
        <ul className="nav-links">
          <li><a href="#dores">Para você</a></li>
          <li><a href="#como-funciona">Como Funciona</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#marcas">Marcas</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <a href="https://wa.me/5548996534721" className="nav-cta">Falar com Arthur</a>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen(p => !p)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <a href="#dores"          onClick={close}>Para você</a>
        <a href="#como-funciona"  onClick={close}>Como Funciona</a>
        <a href="#sobre"          onClick={close}>Sobre</a>
        <a href="#marcas"         onClick={close}>Marcas</a>
        <a href="#faq"            onClick={close}>FAQ</a>
        <div className="mobile-menu-line" />
        <a href="https://wa.me/5548996534721" className="mobile-cta" onClick={close}>
          Falar com Arthur
        </a>
        <p className="mobile-menu-sub">Urubici · Serra Catarinense</p>
      </div>
    </>
  )
}

/* ── BACK TO TOP ── */
function BackToTop() {
  const btnRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    function onScroll() {
      btnRef.current?.classList.toggle('visible', window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      id="back-to-top"
      ref={btnRef}
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      <span style={{
        fontSize: 9, letterSpacing: '0.38em', textTransform: 'uppercase',
        color: '#857870', whiteSpace: 'nowrap', fontFamily: 'var(--sans)',
        transition: 'color 0.3s',
      }}>
        topo
      </span>
    </button>
  )
}

/* ── REVEAL OBSERVER ── */
function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
        else e.target.classList.remove('visible')
      }),
      { threshold: 0.06, rootMargin: '0px 0px -36px 0px' }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ── APP ── */
export default function App() {
  useReveal()
  return (
    <>
      <div id="bg-canvas" aria-hidden="true" />
      <ScrollBar />
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <Benefits />
        <WhatYouGain />
        <HowItWorks />
        <Results />
        <Investment />
        <About />
        <Partners />
        <FAQ />
        <Closing />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
