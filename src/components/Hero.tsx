import { useEffect, useRef } from 'react'

function WhatsApp() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.11 1.522 5.836L.057 23.215a.75.75 0 00.912.912l5.379-1.465A11.941 11.941 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a10 10 0 01-5.197-1.452l-.362-.214-3.748 1.021 1.021-3.748-.214-.362A10 10 0 1122 12c0 5.523-4.477 10-10 10z"/>
    </svg>
  )
}

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (!bgRef.current) return
      const rx = (e.clientX / window.innerWidth - 0.5) * 30
      const ry = (e.clientY / window.innerHeight - 0.5) * 20
      bgRef.current.style.transform = `translate(${rx}px, ${ry}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="hero">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-grain" />

      <p className="hero-eyebrow">· Arthur Bernardo · Barví Aura Estúdio ·</p>

      <h1 className="hero-title">
        te ajudo a transformar<br />
        sua marca em <em>autoridade</em><br />
        magnética
      </h1>

      <p className="hero-sub">
        desde 2016 construindo marcas que dominam a percepção — não por sorte, por neurociência aplicada
      </p>

      <a href="https://wa.me/5548996534721" className="hero-cta">
        <WhatsApp />
        Quero transformar minha marca
      </a>

      <div className="hero-stats">
        <div>
          <p className="hero-stat-num">+13</p>
          <p className="hero-stat-label">anos de experiência</p>
        </div>
        <div>
          <p className="hero-stat-num">+10k</p>
          <p className="hero-stat-label">mentes impactadas</p>
        </div>
        <div>
          <p className="hero-stat-num">+100</p>
          <p className="hero-stat-label">projetos dirigidos</p>
        </div>
      </div>

      <div className="hero-divider" />
    </section>
  )
}
