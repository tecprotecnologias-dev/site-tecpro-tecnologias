import type { Metadata } from "next";
import { Previa } from "@/components/Previa";
import { clientesPublicados, modelos } from "@/lib/dados";

export const metadata: Metadata = {
  title: "Portfólio",
  description: "Conheça os modelos de site da TecPro Tecnologias e os sites que já entregamos para nossos clientes.",
};

function Seta() {
  return (
    <span className="seta-circulo" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 13 L13 3 M5 3 H13 V11" />
      </svg>
    </span>
  );
}

export default function Portfolio() {
  return (
    <>
      <section className="modelo-hero" style={{ paddingBottom: 40 }}>
        <div className="container">
          <span className="rotulo">Portfólio</span>
          <h1>
            Veja de perto <em style={{ color: "var(--acento-claro)" }}>o que criamos.</em>
          </h1>
          <p className="texto-grande" style={{ marginTop: 28 }}>
            Abra as demonstrações dos nossos modelos e visite os sites que já estão no ar, trabalhando para os nossos
            clientes.
          </p>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="secao-cabeca" data-revelar>
            <div>
              <span className="rotulo">Modelos</span>
              <h2 className="titulo">
                Pontos de partida <em>prontos.</em>
              </h2>
            </div>
            <p className="texto-grande">Cada demonstração mostra o modelo funcionando. O seu site sai com a sua marca.</p>
          </div>
          <div className="grade-modelos" data-revelar>
            {modelos.map((m) => (
              <div key={m.slug} className="cartao-modelo">
                <Previa modelo={m} />
                <div className="cartao-info">
                  <div>
                    <span className="etiqueta">{m.segmento}</span>
                    <h3>{m.nome}</h3>
                    <p>{m.chamada}</p>
                  </div>
                </div>
                <div className="hero-acoes" style={{ marginTop: 18, padding: "0 6px 6px" }}>
                  {m.demoUrl ? (
                    <a href={m.demoUrl} target="_blank" rel="noopener" className="botao">
                      Ver demonstração
                    </a>
                  ) : (
                    <span className="botao botao-contorno" aria-disabled="true" style={{ cursor: "default" }}>
                      Demonstração em breve
                    </span>
                  )}
                  <a href={`/modelos/${m.slug}/`} className="botao botao-contorno">
                    Detalhes e valores
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="secao-cabeca" data-revelar>
            <div>
              <span className="rotulo">Sites entregues</span>
              <h2 className="titulo">
                Clientes que já estão <em>no ar.</em>
              </h2>
            </div>
          </div>
          {clientesPublicados.length > 0 ? (
            <div className="clientes" data-revelar>
              {clientesPublicados.map((c) => (
                <a key={c.nome} href={c.url} target="_blank" rel="noopener" className="cliente cliente-portfolio">
                  {c.imagem && <img src={c.imagem} alt={`Página inicial do site ${c.nome}`} className="cliente-imagem" />}
                  <div className="cliente-corpo">
                    <div>
                      <span className="etiqueta">{c.segmento}</span>
                      <h3 style={{ marginTop: 10 }}>{c.nome}</h3>
                      <p>{c.descricao}</p>
                    </div>
                    <Seta />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="sob-medida" data-revelar>
              <div>
                <span className="etiqueta">Em breve</span>
                <h3>Os primeiros projetos estão chegando.</h3>
                <p>Em breve, você poderá visitar aqui os sites que criamos para os nossos clientes.</p>
              </div>
              <a href="/#simulador" className="botao botao-contorno">
                Seja o próximo
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="cta-final">
        <div className="container">
          <span className="rotulo">Gostou?</span>
          <h2 className="titulo">
            O próximo site <em>pode ser o seu.</em>
          </h2>
          <a href="/#simulador" className="botao">
            Monte o seu projeto
          </a>
        </div>
      </section>
    </>
  );
}
