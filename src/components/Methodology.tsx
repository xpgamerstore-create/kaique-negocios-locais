export default function Methodology() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Analisamos seu perfil e encontramos oportunidades.",
    },
    {
      number: "02",
      title: "Otimização",
      description: "Aplicamos melhorias estratégicas no seu perfil.",
    },
    {
      number: "03",
      title: "Crescimento",
      description: "Acompanhamos sua presença local e avaliações.",
    },
  ]

  return (
    <section className="py-24 bg-surface border-y border-surface-border">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Como funciona nossa consultoria
          </h2>
          <p className="text-lg text-neutral-400">
            Um processo claro e eficiente focado em gerar resultados reais para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-surface-border" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 text-center">
              <div className="w-24 h-24 mx-auto bg-background border-2 border-surface-border rounded-full flex items-center justify-center mb-6 shadow-xl text-3xl font-bold text-electric-light">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed max-w-[250px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
