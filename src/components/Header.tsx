"use client"

import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Header() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    const formSection = document.getElementById("audit-form")
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-surface-border">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gold flex items-center justify-center font-bold text-background">
            KB
          </div>
          <span className="font-semibold text-foreground hidden sm:block tracking-tight">
            Kaique Borges <span className="text-electric-light">| Negócios Locais</span>
          </span>
        </Link>
          <nav className="flex items-center gap-2">
            <a
              href="#audit-form"
              onClick={scrollToForm}
              className="text-sm font-medium bg-gold hover:bg-gold-hover text-background px-5 py-2.5 rounded-full transition-colors"
            >
              Solicitar Análise Gratuita
            </a>
            <a
              href="https://instagram.com/kaiqueborges"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-light hover:text-gold"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com/kaiqueborges"
              target="_blank"
              rel="noopener noreferrer"
              className="text-electric-light hover:text-gold"
            >
              <Facebook size={20} />
            </a>
          </nav>
      </div>
    </header>
  )
}
