const STEPS = [
  {
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    text: 'a consultoria acontece online, 1h por sessão — vamos a fundo na sua marca, narrativa e posicionamento',
  },
  {
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    text: 'você recebe materiais estratégicos, análises e orientações práticas para aplicar de imediato',
  },
  {
    icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
    text: 'ao final, entrego um plano de ação personalizado com clareza total sobre seus próximos passos',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona">
      <div className="reveal">
        <h2 className="como-title">como <em>funciona:</em></h2>
      </div>
      <div className="como-steps reveal">
        {STEPS.map((s, i) => (
          <>
            <div className="como-step" key={i}>
              <div className="como-step-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d={s.icon} />
                </svg>
              </div>
              <p>{s.text}</p>
            </div>
            {i < STEPS.length - 1 && (
              <div className="como-arrow" key={`arrow-${i}`}>›</div>
            )}
          </>
        ))}
      </div>
    </section>
  )
}
