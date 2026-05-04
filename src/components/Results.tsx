// Substitua /foto-arthur-3.jpg por uma foto sua (vertical, sorrindo)

const LEFT_BUBBLES = [
  {
    text: 'Fora o alto nível de gravação e edição, muito criativo, proativo e responsável com os prazos. Entrega de qualidade. Recomendo sem medo de errar.',
    author: 'Dr. Bernardo Passoni',
  },
  {
    text: 'A Barví foi de grande importância no nosso negócio, desmistificando ideias sobre publicidade e mídias sociais. Foi o começo de um caminho sem volta.',
    author: 'Buss & Siementcoski Advogados',
  },
  {
    text: 'Os vídeos profissionais elevaram significativamente a qualidade do nosso perfil. A atenção cuidadosa aos detalhes é verdadeiramente admirável.',
    author: 'Rei Cell',
  },
]

const RIGHT_BUBBLES = [
  {
    text: 'Arthur foi dedicado, criativo e muito prático. Tornou minha experiência com o marketing mais leve e confiante. Indico demais!',
    author: 'Vitória Lazzaris',
  },
  {
    text: 'Dá pra ver nitidamente a evolução do perfil: a comunicação, a identidade e as mensagens estão cada vez mais alinhadas com o que acredito e quero transmitir.',
    author: 'Monan — Coach Fitness',
  },
  {
    text: 'Além de enxergar nossos pontos fortes, ele compreendeu a essência do negócio, gerando conteúdos muito mais profundos e relevantes. Fez toda diferença.',
    author: 'Savini | Clínica de Saúde',
  },
]

export default function Results() {
  return (
    <section id="resultados">
      <div className="cw">
        <div className="reveal">
          <h2 className="resultados-title">
            o que dizem quem já<br /><em>transformou</em> sua marca:
          </h2>
        </div>

        <div className="resultados-layout reveal">
          <div className="resultados-col">
            {LEFT_BUBBLES.map((b, i) => (
              <div className="chat-bubble" key={i}>
                <p>{b.text}</p>
                <p className="chat-author">— {b.author}</p>
              </div>
            ))}
          </div>

          <div className="resultados-photo">
            {/* FOTO: coloque /foto-arthur-3.jpg na pasta public/ */}
            <img src="/foto-arthur-3.jpg" alt="Arthur Bernardo"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
            />
            <div className="photo-placeholder" style={{ padding: '20px', textAlign: 'center' }}>
              <div className="photo-placeholder-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                </svg>
              </div>
              <p style={{ fontSize: 10, marginTop: 8 }}>foto-arthur-3.jpg</p>
            </div>
          </div>

          <div className="resultados-col">
            {RIGHT_BUBBLES.map((b, i) => (
              <div className="chat-bubble" key={i}>
                <p>{b.text}</p>
                <p className="chat-author">— {b.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
