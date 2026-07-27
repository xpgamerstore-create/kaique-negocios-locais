"use client"

import GoogleMapSimulation from "./GoogleMapSimulation"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const formSection = document.getElementById("audit-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-electric-blue/40 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-blue/10 border border-electric-blue/20 text-electric-light text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-light"></span>
              </span>
              Consultoria Especializada em Crescimento Local
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Sua empresa aparece no Google quando seus clientes estão procurando?
            </h1>
            
            <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
              Ajudamos empresas locais a aumentarem sua presença no Google Maps e conquistarem mais oportunidades de clientes da própria região.
            </p>

            <a
              href="#audit-form"
              onClick={scrollToForm}
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-background px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
              Solicitar análise gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="lg:justify-self-end w-full">
            <GoogleMapSimulation />
          </div>
        </div>
      </div>
    </section>
  )
}
