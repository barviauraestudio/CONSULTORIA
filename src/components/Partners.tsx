const PAST = [
  'Sarah Thiesen', 'Monan — Coach Fitness', 'Serra Mat. de Construção',
  'Savini Saúde e Bem-Estar', 'Villa Del Capo', 'Cavalos & Montanhas',
  'Dr. Bernardo — Cirurgião', 'Fruta Fina Orgânicos', 'Qu4d Experience',
  'Dr. Thiago Piva', 'Calmaria Centro de Saúde', 'Parque Mundo Novo',
]

const CURRENT = [
  'Buss & Siementcoski', 'Rei Cell', 'Pousada Vale da Ímbuia', 'Lalaio',
]

const ALL_BRANDS = [...PAST, ...CURRENT]

export default function Partners() {
  return (
    <section id="marcas">
      <div className="cw">
        <div className="reveal">
          <h2 className="marcas-headline">
            Marcas que já <em>confiam</em><br />no meu trabalho:
          </h2>
        </div>

        <div className="reveal">
          <div className="marcas-grid">
            {ALL_BRANDS.map(name => (
              <div className="marca-item" key={name}>{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
