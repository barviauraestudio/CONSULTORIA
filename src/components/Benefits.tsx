function Icon({ d }: { d: string }) {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d={d} />
    </svg>
  )
}

const CARDS = [
  {
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    text: 'construir autoridade real antes da primeira palavra',
  },
  {
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    text: 'comunicação que magnetiza — não apenas informa',
  },
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    text: 'posicionamento estratégico com profundidade psicológica',
  },
  {
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    text: 'presença inevitável — sua marca passa a ser desejada',
  },
]

export default function Benefits() {
  return (
    <section id="beneficios">
      <div className="reveal">
        <h2 className="beneficios-title">
          a consultoria é o <em>atalho</em> para você:
        </h2>
      </div>
      <div className="beneficios-grid reveal">
        {CARDS.map((c, i) => (
          <div className="beneficio-card" key={i}>
            <div className="beneficio-icon">
              <Icon d={c.icon} />
            </div>
            <p>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
