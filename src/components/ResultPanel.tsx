"use client"

import { MessageCircle, CheckCircle2 } from "lucide-react"
import { FormData } from "./AuditForm"

interface ResultPanelProps {
  data: FormData
}

export default function ResultPanel({ data }: ResultPanelProps) {
  // Monta a mensagem automática com os dados preenchidos no formulário
  const message = encodeURIComponent(
    `Olá Kaique! Solicitei a análise gratuita no site para a minha empresa: *${data.empresa}* em *${data.cidade}* (Segmento: *${data.segmento}*). Meu nome é *${data.nome}* e gostaria de agendar a apresentação do diagnóstico.`
  )

  // 🔴 COLOQUE O SEU NÚMERO AQUI (DDD + NÚMERO)
  const whatsappNumber = "5535998798965"

  return (
    <div className="bg-surface border border-surface-border rounded-2xl p-8 md:p-10 shadow-2xl text-center animate-in fade-in zoom-in duration-300">
      <div className="w-16 h-16 bg-electric-light/10 text-electric-light rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-2">
        Análise Concluída para {data.empresa}!
      </h3>
      <p className="text-neutral-400 mb-8 text-sm md:text-base">
        Identificamos um alto potencial de crescimento para o seu negócio em **{data.cidade}**. Clique no botão abaixo para receber seu relatório detalhado via WhatsApp.
      </p>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-4 px-6 rounded-xl transition-all shadow-lg text-lg"
      >
        <MessageCircle className="w-6 h-6 fill-black" />
        Receber Análise no WhatsApp
      </a>
    </div>
  )
}