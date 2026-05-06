// Substitua /foto-arthur-sobre.jpg por uma foto sua
// Para o grid do Instagram: adicione /insta-1.jpg até /insta-6.jpg na pasta public/
// Ou substitua por um link embed do Instagram

const INSTA_PHOTOS = [
  '/insta-1.jpg', '/insta-2.jpg', '/insta-3.jpg',
  '/insta-4.jpg', '/insta-5.jpg', '/insta-6.jpg',
]

export default function About() {
  return (
    <section id="sobre">
      <div className="cw">
        <div className="reveal">
          <h2 className="sobre-headline">
            se você é bom, o<br />
            <em>mundo precisa saber.</em>
          </h2>
        </div>
      </div>

      <div className="cw">
        <div className="sobre-grid">
          <div className="sobre-photo">
            {/* FOTO: coloque /foto-arthur-sobre.jpg na pasta public/ */}
            <img src="/foto-arthur-sobre.jpg" alt="Arthur Bernardo"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
            <div className="photo-placeholder">
              <div className="photo-placeholder-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <p>foto-arthur-sobre.jpg</p>
            </div>
          </div>

          <div className="sobre-content">
            <div className="reveal">
              <h3 className="sobre-greeting">
                Prazer,<br />
                <em>Arthur Bernardo.</em>
              </h3>

              <p className="sobre-text">
                Em 2016 eu não tinha ideia do peso que aquele instante carregava. Só um garoto com uma câmera simples, um tripé e uma vontade absurda de transformar o mundo em cena.
              </p>

              <p className="sobre-text">
                Fiz curso de fotografia. Na pandemia, vendi todos meus equipamentos por frustração de um mercado rígido que não tinha espaço pra mim. Até que acordei.
              </p>

              <p className="sobre-text">
                Mergulhei em <strong>psicologia do comportamento, estética visual, narrativa cinematográfica</strong> e comunicação de alto impacto — não para montar um portfólio bonito, mas para dominar o território onde as decisões humanas realmente acontecem: <em>a percepção.</em>
              </p>

              <div className="sobre-quote">
                "Não fazemos comunicação por intuição. Fazemos comunicação por neurociência aplicada — com a elegância de quem entende que o maior poder não é gritar mais alto, é sussurrar na frequência certa."
              </div>

              <p className="sobre-text">
                Hoje aplico <strong>neurociência comportamental, direção criativa e construção de autoridade magnética</strong> com intenção. +13 anos na interseção entre psicologia, estética e narrativa. +10.000 mentes impactadas. +100 projetos dirigidos com identidade e profundidade.
              </p>

              <p className="sobre-insta-label">Acompanhe no Instagram</p>
              <div className="sobre-insta-grid">
                {INSTA_PHOTOS.map((src, i) => (
                  <a
                    href="https://www.instagram.com/barviauraestudio/" target="_blank" rel="noopener noreferrer"
                    className="insta-cell" key={i}
                  >
                    <img src={src} alt={`post ${i + 1}`}
                      onError={(e) => {
                        const el = e.target as HTMLImageElement
                        el.style.display = 'none'
                        el.parentElement!.innerText = `foto`
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
