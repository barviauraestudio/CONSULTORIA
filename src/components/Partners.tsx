const PAST = [
  'Sarah Thiesen', 'Monan — Coach Fitness', 'Serra Mat. de Construção',
  'Savini Saúde e Bem-Estar', 'Villa Del Capo', 'Cavalos & Montanhas',
  'Dr. Bernardo — Cirurgião', 'Fruta Fina Orgânicos', 'Qu4d Experience',
  'Dr. Thiago Piva', 'Calmaria Centro de Saúde', 'Parque Mundo Novo',
]

const CURRENT = [
  'Buss & Siementcoski', 'Rei Cell', 'Pousada Vale da Ímbuia', 'Lalaio',
]

export default function Partners() {
  return (
    <section id="marcas">
      <div className="cw">
        <div className="reveal">
          <h2 className="marcas-headline">
            marcas que já <em>confiam</em><br />no meu trabalho:
          </h2>
        </div>

        <div className="reveal" style={{ marginBottom: 48 }}>
          <p style={{ textAlign: 'center', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
            Colaborações anteriores
          </p>
          <div className="marcas-grid">
            {PAST.map(name => (
              <div className="marca-item" key={name}>{name}</div>
            ))}
          </div>
        </div>

        <div className="reveal">
          <p style={{ textAlign: 'center', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>
            Colaborações atuais
          </p>
          <div className="marcas-grid" style={{ maxWidth: 600 }}>
            {CURRENT.map(name => (
              <div className="marca-item" key={name}>{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
