"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Star, CheckCircle2, TrendingUp } from "lucide-react"

export default function GoogleMapSimulation() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev < 3 ? prev + 1 : 0))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const steps = [
    {
      title: "Situação Atual",
      position: "18º",
      reviews: 12,
      rating: 3.8,
      status: "Pouco Otimizado",
      color: "text-red-400",
      items: [],
    },
    {
      title: "Otimização Básica",
      position: "8º",
      reviews: 24,
      rating: 4.5,
      status: "Em Crescimento",
      color: "text-electric-light",
      items: ["✓ Categoria correta", "✓ Fotos estratégicas"],
    },
    {
      title: "Otimização Avançada",
      position: "3º",
      reviews: 58,
      rating: 4.8,
      status: "Destaque Local",
      color: "text-electric-light",
      items: ["✓ Categoria correta", "✓ Fotos estratégicas", "✓ Informações completas"],
    },
    {
      title: "Líder da Região",
      position: "1º",
      reviews: 142,
      rating: 5.0,
      status: "Perfil Otimizado",
      color: "text-gold",
      items: ["✓ Categoria correta", "✓ Fotos estratégicas", "✓ Informações completas", "✓ Avaliações"],
    },
  ]

  const currentStep = steps[step]

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-surface rounded-2xl border border-surface-border p-6 shadow-2xl overflow-hidden flex flex-col justify-between">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-background rounded-lg border border-surface-border">
              <MapPin className="w-5 h-5 text-electric-light" />
            </div>
            <div>
              <p className="text-xs text-neutral-400 font-medium">Seu Negócio</p>
              <p className="text-sm font-semibold text-foreground">Google Maps</p>
            </div>
          </div>
          <div className="px-3 py-1 bg-background rounded-full border border-surface-border text-xs font-medium text-neutral-300">
            {currentStep.title}
          </div>
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="text-center">
            <p className="text-sm text-neutral-400 mb-1">Posição nas Buscas</p>
            <div className={`text-6xl font-bold tracking-tighter ${currentStep.color}`}>
              {currentStep.position}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background rounded-xl p-4 border border-surface-border text-center">
              <div className="flex justify-center mb-2">
                <Star className="w-5 h-5 text-gold fill-gold" />
              </div>
              <p className="text-xl font-bold text-foreground">{currentStep.rating}</p>
              <p className="text-xs text-neutral-400">{currentStep.reviews} avaliações</p>
            </div>
            <div className="bg-background rounded-xl p-4 border border-surface-border text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className={`w-5 h-5 ${currentStep.color}`} />
              </div>
              <p className={`text-sm font-bold ${currentStep.color}`}>{currentStep.status}</p>
              <p className="text-xs text-neutral-400 mt-1">Status do Perfil</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mt-6 h-32">
        <h4 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-electric-light" />
          Processo de Otimização
        </h4>
        <div className="space-y-2">
          {currentStep.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm text-neutral-300 flex items-center gap-2"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-surface-border">
        <motion.div
          className="h-full bg-electric-light"
          initial={{ width: "0%" }}
          animate={{ width: `${((step + 1) / 4) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}
