import { MapPinOff, SearchX, ShieldAlert } from "lucide-react"

export default function ProblemsSection() {
  const problems = [
    {
      icon: <MapPinOff className="w-8 h-8 text-red-400" />,
      title: "Seu concorrente aparece antes no Google Maps",
      description: "Quando um cliente pesquisa pelo seu serviço na região, empresas menos qualificadas estão sendo encontradas primeiro.",
    },
    {
      icon: <SearchX className="w-8 h-8 text-red-400" />,
      title: "Clientes encontram outras empresas primeiro",
      description: "A falta de otimização faz com que seu negócio fique invisível para quem já está pronto para comprar de você.",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-red-400" />,
      title: "Seu perfil não transmite autoridade suficiente",
      description: "Poucas avaliações ou informações desatualizadas geram desconfiança, fazendo o cliente escolher a concorrência.",
    },
  ]

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Enquanto sua empresa não aparece, seus concorrentes recebem seus clientes.
          </h2>
          <p className="text-lg text-neutral-400">
            Muitos negócios locais excelentes perdem vendas todos os dias simplesmente porque não podem ser encontrados na internet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-background border border-surface-border rounded-2xl p-8 hover:border-red-400/30 transition-colors"
            >
              <div className="bg-red-400/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {problem.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
