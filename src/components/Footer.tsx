import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-surface-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <img src="/logo-kb.png" alt="Kaique Borges" className="h-8 w-8 opacity-30" />
              <div className="w-8 h-8 rounded bg-gold flex items-center justify-center font-bold text-background text-sm">
                KB
              </div>
              <span className="font-semibold text-foreground tracking-tight">
                Kaique Borges <span className="text-electric-light text-sm font-normal">| Negócios Locais</span>
              </span>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com/kaiqueborges" target="_blank" rel="noopener noreferrer" className="text-electric-light hover:text-gold">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com/kaiqueborges" target="_blank" rel="noopener noreferrer" className="text-electric-light hover:text-gold">
                <Facebook size={20} />
              </a>
            </div>
          </div>
                    <p className="text-sm text-neutral-500 text-center md:text-left flex items-center justify-center md:justify-start">
            <img src="/logo-kb.png" alt="Logo KB" className="h-6 w-auto mr-2" />
            &copy; {new Date().getFullYear()} Kaique Borges. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-neutral-400 hover:text-gold transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="text-sm text-neutral-400 hover:text-gold transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
