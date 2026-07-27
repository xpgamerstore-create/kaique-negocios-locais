import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kaique Borges | Negócios Locais",
  description: "Ajudamos empresas locais a aumentarem sua presença no Google Maps.",
  metadataBase: new URL("https://kaique-negocios-locais.vercel.app"),
  openGraph: {
    title: "Kaique Borges | Negócios Locais",
    description: "Sua empresa aparece no Google quando seus clientes estão procurando?",
    url: "https://kaique-negocios-locais.vercel.app",
    siteName: "Kaique Borges Negócios Locais",
    images: [
      {
        url: "https://kaique-negocios-locais.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prévia da Landing Page Kaique Borges",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}