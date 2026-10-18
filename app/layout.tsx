import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { Revelar } from "@/components/Revelar";
import { empresa } from "@/lib/dados";
import "./globals.css";

const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--fonte-serif" });
const sans = Manrope({ subsets: ["latin"], variable: "--fonte-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(empresa.url),
  title: {
    default: `${empresa.nome} | Sites sob medida`,
    template: `%s | ${empresa.nome}`,
  },
  description:
    "Modelos de sites elegantes personalizados com a identidade da sua marca. Hospedagem, domínio, ajustes mensais e marketing por e-mail, SMS, SEO e automação.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: empresa.nome,
  },
};

// Ficha da empresa para o Google (JSON-LD). Sem telefone nem endereço, como no resto do site.
const fichaEmpresa = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${empresa.url}/#empresa`,
      name: empresa.nome,
      url: `${empresa.url}/`,
      logo: `${empresa.url}/marca/logo-tecpro-original.jpg`,
      email: empresa.email,
      description: "Criação de sites sob medida a partir de modelos personalizados com a identidade de cada marca.",
      sameAs: [`https://www.instagram.com/${empresa.instagram}/`, empresa.facebook],
    },
    {
      "@type": "WebSite",
      "@id": `${empresa.url}/#site`,
      name: empresa.nome,
      url: `${empresa.url}/`,
      inLanguage: "pt-BR",
      publisher: { "@id": `${empresa.url}/#empresa` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(fichaEmpresa) }} />
        <Cabecalho />
        <main>{children}</main>
        <Rodape />
        <Revelar />
      </body>
    </html>
  );
}
