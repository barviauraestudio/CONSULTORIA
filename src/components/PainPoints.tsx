// Substitua /foto-arthur-1.jpg por uma foto sua real
// Tamanho ideal: 800x900px, formato retrato

export default function PainPoints() {
  return (
    <section id="dores">
      <div className="dores-photo">
        {/* FOTO: coloque /foto-arthur-1.jpg na pasta public/ */}
        <img src="/foto-arthur-1.jpg" alt="Arthur Bernardo"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
        <div className="photo-placeholder">
          <div className="photo-placeholder-icon">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
          </div>
          <p>foto-arthur-1.jpg</p>
        </div>
      </div>

      <div className="dores-content">
        <div className="reveal">
          <h2 className="dores-title">
            Muitas marcas querem<br />
            crescer, mas<br />
            <em>ficam presas em:</em>
          </h2>
          <ul className="dores-list">
            <li>Falta de clareza sobre como se posicionar com autoridade</li>
            <li>Comunicação que não gera desejo — apenas visibilidade vazia</li>
            <li>Identidade visual sem intenção psicológica real</li>
            <li>Presença digital inconsistente, sem narrativa coerente</li>
            <li>Sensação de que fazem muito e alcançam pouco</li>
          </ul>
          <a href="https://wa.me/5548996534721" className="dores-cta-link">
            Quero sair dessa situação
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
