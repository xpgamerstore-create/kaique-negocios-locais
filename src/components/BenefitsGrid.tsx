import { Eye, ShieldCheck, MessageCircle } from "lucide-react"

export default function BenefitsGrid() {
  const benefits = [
    {
      icon: <Eye className="w-6 h-6 text-electric-light" />,
      title: "Mais visibilidade local",
      description: "Sua empresa será encontrada exatamente por clientes que estão na sua região buscando pelo que você oferece.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-electric-light" />,
      title: "Mais confiança para clientes",
      description: "Um perfil profissional e bem avaliado transmite a credibilidade necessária para o cliente escolher você.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-electric-light" />,
      title: "Mais oportunidades de contato",
      description: "Facilite o caminho para o cliente ligar, mandar mensagem no WhatsApp ou visitar o seu estabelecimento físico.",
    },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-electric-blue/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            O que acontece quando você domina sua região
          </h2>
          <p className="text-lg text-neutral-400">
            Estar bem posicionado no Google não é apenas vaidade, é sobre construir um ativo que atrai clientes diariamente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-surface border border-surface-border rounded-2xl p-8 hover:border-electric-blue/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative z-10">
                <div className="bg-background border border-surface-border w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
