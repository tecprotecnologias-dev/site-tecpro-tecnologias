import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Previa } from "@/components/Previa";
import { Simulador } from "@/components/Simulador";
import { modelos } from "@/lib/dados";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return modelos.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const modelo = modelos.find((m) => m.slug === slug);
  if (!modelo) return {};
  return {
    title: `Site para ${modelo.segmento.toLowerCase()}: ${modelo.nome}`,
    description: modelo.descricao,
  };
}

export default async function PaginaModelo({ params }: Props) {
  const { slug } = await params;
  const modelo = modelos.find((m) => m.slug === slug);
  if (!modelo) notFound();

  return (
    <>
      <section className="modelo-hero">
        <div className="container">
          <Link href="/#modelos" className="voltar">
            Voltar para a galeria
          </Link>
          <div className="modelo-hero-grade">
            <div>
              <span className="rotulo">Modelo {modelo.segmento}</span>
              <h1>{modelo.nome}</h1>
            </div>
            <div>
              <p className="texto-grande">{modelo.descricao}</p>
              <div className="hero-acoes" style={{ marginTop: 28 }}>
                {modelo.demoUrl ? (
                  <a href={modelo.demoUrl} target="_blank" rel="noopener" className="botao">
                    Ver demonstração
                  </a>
                ) : (
                  <span className="botao botao-contorno" aria-disabled="true" style={{ cursor: "default" }}>
                    Demonstração em breve
                  </span>
                )}
                <Link href="#contratar" className="botao botao-contorno">
                  Quero este modelo
                </Link>
              </div>
            </div>
          </div>
          <div data-revelar>
            <Previa modelo={modelo} />
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 60 }}>
        <div className="container modelo-detalhes">
          <div data-revelar>
            <h2>O que está incluído</h2>
            <ol className="lista-numerada">
              {modelo.incluso.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ol>
          </div>
          <div data-revelar>
            <h2>O que personalizamos</h2>
            <ol className="lista-numerada">
              {modelo.personalizacao.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="secao" id="contratar" style={{ borderTop: "1px solid var(--linha)" }}>
        <div className="container">
          <div className="secao-cabeca">
            <div>
              <span className="rotulo">Contratar</span>
              <h2 className="titulo">
                Monte o seu <em>{modelo.nome}.</em>
              </h2>
            </div>
          </div>
          <Simulador modeloInicial={modelo.slug} />
        </div>
      </section>
    </>
  );
}
