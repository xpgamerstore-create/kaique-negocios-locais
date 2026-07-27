"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2 } from "lucide-react"
import ResultPanel from "./ResultPanel"
import { cn } from "@/lib/utils"

const schema = z.object({
  nome: z.string().min(2, "O nome é obrigatório"),
  empresa: z.string().min(2, "A empresa é obrigatória"),
  cidade: z.string().min(2, "A cidade é obrigatória"),
  segmento: z.string().min(2, "O segmento é obrigatório"),
})

export type FormData = z.infer<typeof schema>

export default function AuditForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [formData, setFormData] = useState<FormData | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setFormData(data)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setShowResult(true)
  }

  return (
    <section id="audit-form" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Descubra o potencial da sua empresa no Google
          </h2>
          <p className="text-lg text-neutral-400">
            Faça uma análise gratuita e descubra oportunidades para melhorar sua presença local.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {showResult && formData ? (
            <ResultPanel data={formData} />
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-surface border border-surface-border rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
            >
              {isSubmitting && (
                <div className="absolute inset-0 bg-surface/90 backdrop-blur-sm z-20 flex flex-col items-center justify-center">
                  <Loader2 className="w-12 h-12 text-electric-light animate-spin mb-4" />
                  <p className="text-electric-light font-medium tracking-widest uppercase text-sm animate-pulse">
                    Analisando Presença Local...
                  </p>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-neutral-300 mb-2">
                    Seu Nome
                  </label>
                  <input
                    id="nome"
                    type="text"
                    {...register("nome")}
                    className={cn(
                      "w-full bg-background border rounded-xl px-4 py-3 text-foreground placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-electric-light/50 transition-all",
                      errors.nome ? "border-red-400" : "border-surface-border"
                    )}
                    placeholder="Ex: João Silva"
                  />
                  {errors.nome && (
                    <p className="mt-1 text-sm text-red-400">{errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-neutral-300 mb-2">
                    Nome da Empresa
                  </label>
                  <input
                    id="empresa"
                    type="text"
                    {...register("empresa")}
                    className={cn(
                      "w-full bg-background border rounded-xl px-4 py-3 text-foreground placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-electric-light/50 transition-all",
                      errors.empresa ? "border-red-400" : "border-surface-border"
                    )}
                    placeholder="Ex: Odonto Mais"
                  />
                  {errors.empresa && (
                    <p className="mt-1 text-sm text-red-400">{errors.empresa.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cidade" className="block text-sm font-medium text-neutral-300 mb-2">
                      Cidade
                    </label>
                    <input
                      id="cidade"
                      type="text"
                      {...register("cidade")}
                      className={cn(
                        "w-full bg-background border rounded-xl px-4 py-3 text-foreground placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-electric-light/50 transition-all",
                        errors.cidade ? "border-red-400" : "border-surface-border"
                      )}
                      placeholder="Ex: Passos"
                    />
                    {errors.cidade && (
                      <p className="mt-1 text-sm text-red-400">{errors.cidade.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="segmento" className="block text-sm font-medium text-neutral-300 mb-2">
                      Segmento
                    </label>
                    <input
                      id="segmento"
                      type="text"
                      {...register("segmento")}
                      className={cn(
                        "w-full bg-background border rounded-xl px-4 py-3 text-foreground placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-electric-light/50 transition-all",
                        errors.segmento ? "border-red-400" : "border-surface-border"
                      )}
                      placeholder="Ex: Clínica Odontológica"
                    />
                    {errors.segmento && (
                      <p className="mt-1 text-sm text-red-400">{errors.segmento.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-hover text-background font-bold py-4 rounded-xl transition-colors mt-4 cursor-pointer"
                >
                  Ver minha análise gratuita
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}