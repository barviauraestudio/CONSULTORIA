// Edite os valores de preço abaixo conforme sua oferta

export default function Investment() {
  return (
    <section id="investimento">
      <div className="cw">
        <div className="investimento-inner">
          <div className="investimento-left">
            <div className="reveal">
              <p className="investimento-label">Investimento</p>
              <h2 className="investimento-title">consultoria</h2>
              <p className="investimento-sub">por apenas</p>
              <p className="investimento-price">Parcelamento a combinar</p>
              <p className="investimento-ou">ou</p>
              <p className="investimento-avista">R$ 1.997 à vista</p>
              <a href="https://wa.me/5548996534721" className="investimento-cta">
                Quero transformar minha marca
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="investimento-divider" />

          <div className="investimento-right">
            <div className="reveal">
              <p className="investimento-includes">O que você vai receber:</p>
              <ul className="investimento-list">
                {[
                  { b: 'diagnóstico', t: 'personalizado da sua marca ou perfil' },
                  { b: 'definição de posicionamento', t: 'claro, autêntico e com profundidade psicológica' },
                  { b: 'narrativa estratégica', t: 'com ideias e formatos que geram desejo' },
                  { b: 'análise de percepção', t: 'do que sua marca transmite vs. o que deveria transmitir' },
                  { b: 'plano de ação', t: 'final personalizado para aplicar de imediato' },
                ].map((item, i) => (
                  <li key={i}>
                    <span className="inv-check">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span><strong>{item.b}</strong> {item.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
