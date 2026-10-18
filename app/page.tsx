import Link from "next/link";
import { Galeria } from "@/components/Galeria";
import { Previa } from "@/components/Previa";
import { Simulador } from "@/components/Simulador";
import {
  clientesPublicados,
  etapas,
  exemplosAjuste,
  ferramentas,
  kit,
  modelos,
  pacotes,
  planosAjuste,
  reais,
  segmentos,
} from "@/lib/dados";

export default function Inicio() {
  const faixa = [...segmentos, ...segmentos];
  const clientesVisiveis = clientesPublicados;

  return (
    <>
      <section className="hero">
        <div className="container hero-grade">
          <div>
            <span className="rotulo">Estúdio de sites sob medida</span>
            <h1 className="titulo-hero">
              <span className="linha">
                <span>Seu negócio</span>
              </span>
              <span className="linha">
                <span>merece um site</span>
              </span>
              <span className="linha">
                <span>
                  <em>à altura.</em>
                </span>
              </span>
            </h1>
            <p className="texto-grande">
              Escolha um modelo, conte a sua história e receba um site exclusivo, vestido com a identidade da sua marca e
              pronto para vender.
            </p>
            <div className="hero-acoes">
              <Link href="#modelos" className="botao">
                Ver modelos
              </Link>
              <Link href="#simulador" className="botao botao-contorno">
                Simular investimento
              </Link>
            </div>
            <div className="hero-numeros">
              <div>
                <strong>{segmentos.length}</strong>
                <span>tipos de site</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>personalizado</span>
              </div>
              <div>
                <strong>LGPD</strong>
                <span>desde o primeiro cadastro</span>
              </div>
            </div>
          </div>
          <div className="hero-vitrine" aria-hidden="true">
            {modelos.slice(0, 3).map((m) => (
              <Previa key={m.slug} modelo={m} />
            ))}
          </div>
        </div>
      </section>

      <div className="faixa" aria-hidden="true">
        <div className="faixa-trilho">
          {faixa.map((s, i) => (
            <span key={i}>{s.nome}</span>
          ))}
        </div>
      </div>

      <section className="secao" id="modelos">
        <div className="container">
          <div className="secao-cabeca" data-revelar>
            <div>
              <span className="rotulo">Galeria</span>
              <h2 className="titulo">
                Modelos que já nascem <em>elegantes.</em>
              </h2>
            </div>
            <p className="texto-grande">
              Cada modelo é um ponto de partida. Nós adaptamos cores, fotos, textos e funções ao seu negócio.
            </p>
          </div>
          <div data-revelar>
            <Galeria />
          </div>
        </div>
      </section>

      <section className="secao" id="como-funciona" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="secao-cabeca" data-revelar>
            <div>
              <span className="rotulo">Como funciona</span>
              <h2 className="titulo">
                Você escolhe. <em>Nós criamos.</em>
              </h2>
            </div>
          </div>
          <div className="etapas" data-revelar>
            {etapas.map((e, i) => (
              <div key={e.titulo} className="etapa">
                <span className="etapa-numero">{String(i + 1).padStart(2, "0")}</span>
                <h3>{e.titulo}</h3>
                <p>{e.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao secao-clara" id="valores">
        <div className="container">
          <div className="secao-cabeca" data-revelar>
            <div>
              <span className="rotulo">Valores</span>
              <h2 className="titulo">
                Pague pelo site uma vez. <em>Ajuste quando quiser.</em>
              </h2>
            </div>
            <p className="texto-grande">
              Escolha só o site estilizado ou inclua o marketing. Depois, um plano mensal do tamanho da sua necessidade.
            </p>
          </div>

          <div className="pacotes" data-revelar>
            {pacotes.map((p) => (
              <div key={p.id} className={`pacote${p.comMarketing ? " escuro" : ""}`}>
                <span className="etiqueta">{p.comMarketing ? "Mais completo" : "Essencial"}</span>
                <h3 style={{ marginTop: 14 }}>{p.nome}</h3>
                <p className="pacote-resumo">{p.resumo}</p>
                <div className="pacote-preco">
                  <small>investimento único</small>
                  <strong>{reais(p.valor)}</strong>
                </div>
                <ul>
                  {p.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="pacote-resumo" style={{ margin: "28px 0 0", fontSize: 13 }}>
                  Prazo: {p.prazo}
                </p>
              </div>
            ))}
          </div>

          <div className="ajustes" data-revelar>
            <div>
              <span className="rotulo">Plano mensal</span>
              <h3>Seu site sempre atualizado.</h3>
              <p>
                Escolha quantos ajustes por mês o seu negócio precisa. Se a rotina mudar, o plano muda junto.
              </p>
              <ul className="ajustes-exemplos">
                {exemplosAjuste.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="tabela-ajustes">
              {planosAjuste
                .filter((a) => a.ajustes > 0)
                .map((a) => (
                  <div key={a.id} className="linha-ajuste">
                    <div>
                      <strong>{a.nome}</strong>
                      <span>{a.descricao}</span>
                    </div>
                    <b>
                      {a.valor === null ? (
                        <small>sob consulta</small>
                      ) : (
                        <>
                          {reais(a.valor)} <small>por mês</small>
                        </>
                      )}
                    </b>
                  </div>
                ))}
              <p className="nota">
                Sem mensalidade obrigatória: a hospedagem na Cloudflare começa sem custo. Domínio, e-mail profissional e custos de envio das ferramentas (SMS e mensagens do WhatsApp) são pagos direto ao fornecedor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="secao" id="marketing">
        <div className="container">
          <div className="secao-cabeca" data-revelar>
            <div>
              <span className="rotulo">Ferramentas</span>
              <h2 className="titulo">
                Um site que <em>trabalha por você.</em>
              </h2>
            </div>
            <p className="texto-grande">
              O seu site guarda os contatos dos clientes, com consentimento, e as ferramentas transformam esses contatos em
              vendas.
            </p>
          </div>
          <div className="grade-ferramentas" data-revelar>
            {ferramentas.map((f, i) => (
              <div key={f.id} className="ferramenta">
                <span className="ferramenta-numero">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.nome}</h3>
                <p>{f.descricao}</p>
                <div className="ferramenta-rodape">
                  <span>{f.plataformas}</span>
                  <strong>{reais(f.mensal)}/mês</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="secao" style={{ paddingTop: 0 }}>
        <div className="container kit">
          <div data-revelar>
            <span className="rotulo">Tudo em um lugar</span>
            <h2 className="titulo" style={{ marginTop: 20, fontSize: "clamp(40px, 5vw, 64px)" }}>
              Cuidamos de <em>cada detalhe.</em>
            </h2>
            <p className="texto-grande" style={{ marginTop: 24 }}>
              Indicamos e configuramos os serviços certos para o seu site funcionar do primeiro dia em diante.
            </p>
          </div>
          <div className="kit-lista" data-revelar>
            {kit.map((k) => (
              <div key={k.item} className="kit-item">
                <strong>{k.item}</strong>
                <span>{k.sugestao}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {clientesVisiveis.length > 0 && (
        <section className="secao" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="secao-cabeca" data-revelar>
              <div>
                <span className="rotulo">Portfólio</span>
                <h2 className="titulo">
                  Clientes <em>atendidos.</em>
                </h2>
              </div>
            </div>
            <div className="clientes" data-revelar>
              {clientesVisiveis.map((c) => (
                <a key={c.nome} href={c.url} target="_blank" rel="noopener" className="cliente">
                  <div>
                    <h3>{c.nome}</h3>
                    <p>{c.segmento}</p>
                  </div>
                  <span className="seta-circulo" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <path d="M3 13 L13 3 M5 3 H13 V11" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="secao" id="simulador" style={{ borderTop: "1px solid var(--linha)" }}>
        <div className="container">
          <div className="secao-cabeca" data-revelar>
            <div>
              <span className="rotulo">Simulador</span>
              <h2 className="titulo">
                Monte o seu <em>projeto.</em>
              </h2>
            </div>
            <p className="texto-grande">
              Veja o investimento na hora e envie o pedido pronto pelo WhatsApp. Respondemos com a proposta final.
            </p>
          </div>
          <Simulador />
        </div>
      </section>

      <section className="cta-final">
        <div className="container">
          <span className="rotulo">Vamos começar</span>
          <h2 className="titulo">
            A primeira impressão <em>é o seu site.</em>
          </h2>
          <Link href="#simulador" className="botao">
            Quero o meu site
          </Link>
        </div>
      </section>
    </>
  );
}
