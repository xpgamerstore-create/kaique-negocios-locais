import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Load Tailwind and base styles

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaique Borges | Consultoria em Negócios Locais",
  description: "Ajudamos empresas locais a aumentarem sua presença no Google Maps e conquistarem mais oportunidades de clientes da própria região.",
  robots: "index, follow",
  openGraph: {
    title: "Kaique Borges | Consultoria em Negócios Locais",
    description: "Ajudamos empresas locais a aumentarem sua presença no Google Maps e conquistarem mais oportunidades de clientes da própria região.",
    url: "https://kaique-negocios-locais.vercel.app",
    siteName: "Kaique Borges Negócios Locais",
    images: [
      {
        url: "https://kaique-negocios-locais.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kaique Borges | Consultoria em Negócios Locais",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      {/* Watermark background */}
      <body className="relative min-h-screen flex flex-col bg-background text-foreground">
        <div className="pointer-events-none fixed inset-0 opacity-5 bg-[url('/logo-kb.png')] bg-center bg-no-repeat bg-contain" />
        {children}
      </body>
    </html>
  );
}