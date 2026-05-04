// Substitua /foto-arthur-2.jpg por uma foto sua real

export default function WhatYouGain() {
  return (
    <section id="conquistas">
      <div className="conquistas-content">
        <div className="reveal">
          <h2 className="conquistas-title">
            o que você vai<br />
            <em>conquistar</em> com meu<br />
            direcionamento:
          </h2>
          <ul className="conquistas-list">
            {[
              { b: 'clareza', t: 'sobre quem você é e como se comunicar com autoridade' },
              { b: 'narrativa', t: 'que atravessa o olhar e cria desejo real no seu público' },
              { b: 'segurança', t: 'para aparecer, ser visto e gerar percepção de valor' },
              { b: 'consistência', t: 'estética e estratégica em cada ponto de contato' },
              { b: 'plano de ação', t: 'personalizado e pronto para aplicar de imediato' },
            ].map((item, i) => (
              <li key={i}>
                <span className="conquistas-check">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span><strong>{item.b}</strong> {item.t}</span>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/5548996534721" className="conquistas-cta">
            Quero crescer no digital
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="conquistas-photo">
        {/* FOTO: coloque /foto-arthur-2.jpg na pasta public/ */}
        <img src="/foto-arthur-2.jpg" alt="Arthur Bernardo"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <div className="photo-placeholder">
          <div className="photo-placeholder-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
          </div>
          <p>foto-arthur-2.jpg</p>
        </div>
      </div>
    </section>
  )
}
