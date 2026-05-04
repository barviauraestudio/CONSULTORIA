import { useState } from 'react'

const FAQS = [
  {
    q: 'funciona para qualquer tipo de negócio ou nicho?',
    a: 'Sim. A consultoria trabalha com percepção, narrativa e posicionamento — princípios que se aplicam a qualquer marca ou profissional. Já trabalhei com clínicas, advogados, coaches, construtoras, pousadas e pessoas físicas. O que muda é a estratégia; o processo de construção de autoridade é universal.',
  },
  {
    q: 'e se eu não tiver uma identidade visual definida ainda?',
    a: 'Melhor assim. Construir a identidade visual sem posicionamento claro é um dos erros mais comuns. Na consultoria, primeiro definimos quem você é, o que você transmite e como quer ser percebido — depois a estética nasce com intenção real.',
  },
  {
    q: 'quanto tempo preciso dedicar?',
    a: 'A consultoria acontece em sessões de 1 hora. Entre os encontros, você aplica o plano de ação no seu próprio ritmo. Não exige horas extras por dia — exige intenção e consistência.',
  },
  {
    q: 'e se eu não entender nada de marketing?',
    a: 'Perfeito. Trabalho exatamente para quem quer entender como funciona a percepção humana na prática — sem jargão de agência, sem planilha complicada. Você vai sair da consultoria com clareza e com um caminho concreto nas mãos.',
  },
  {
    q: 'como funciona o pagamento?',
    a: 'Você pode parcelar em 12x ou pagar à vista com desconto. Após o contato via WhatsApp, combino todos os detalhes e envio o link de pagamento. Sem burocracia.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq">
      <div className="cw">
        <div className="reveal">
          <h2 className="faq-title">dúvidas <em>frequentes</em></h2>
        </div>
        <div className="faq-list reveal">
          {FAQS.map((f, i) => (
            <div className={`faq-item${open === i ? ' open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-chevron">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
