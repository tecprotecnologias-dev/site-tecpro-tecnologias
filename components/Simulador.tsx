"use client";

import { useState } from "react";
import { ferramentas, linkWhatsApp, modelos, pacotes, planosAjuste, reais, segmentos } from "@/lib/dados";
import { salvarPedido } from "@/lib/supabase";

const SOB_MEDIDA = "sob-medida";

export function Simulador({ modeloInicial = modelos[0].slug }: { modeloInicial?: string }) {
  const [modelo, setModelo] = useState(modeloInicial);
  const [segmento, setSegmento] = useState(segmentos[0].id);
  const [pacoteId, setPacoteId] = useState(pacotes[0].id);
  const [ajusteId, setAjusteId] = useState("um");
  const [escolhidas, setEscolhidas] = useState<string[]>([]);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [negocio, setNegocio] = useState("");
  const [cidade, setCidade] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [aceite, setAceite] = useState(false);

  const pacote = pacotes.find((p) => p.id === pacoteId)!;
  const ajuste = planosAjuste.find((a) => a.id === ajusteId)!;
  const ferramentasEscolhidas = ferramentas.filter((f) => escolhidas.includes(f.id));
  const nomeModelo =
    modelo === SOB_MEDIDA
      ? `Projeto sob medida (${segmentos.find((s) => s.id === segmento)?.nome})`
      : `${modelos.find((m) => m.slug === modelo)?.nome} (${modelos.find((m) => m.slug === modelo)?.segmento})`;

  const mensalFerramentas = ferramentasEscolhidas.reduce((soma, f) => soma + f.mensal, 0);
  const mensalSobConsulta = ajuste.valor === null;
  const mensal = (ajuste.valor ?? 0) + mensalFerramentas;
  const textoUnico = `${modelo === SOB_MEDIDA ? "a partir de " : ""}${reais(pacote.valor)}`;
  const textoMensal = mensalSobConsulta ? (mensal > 0 ? `${reais(mensal)} + plano sob medida` : "sob consulta") : reais(mensal);

  function trocarPacote(id: string) {
    setPacoteId(id);
    if (!pacotes.find((p) => p.id === id)?.comMarketing) setEscolhidas([]);
  }

  function alternarFerramenta(id: string) {
    setEscolhidas((atual) => (atual.includes(id) ? atual.filter((x) => x !== id) : [...atual, id]));
    const comMarketing = pacotes.find((p) => p.comMarketing);
    if (comMarketing) setPacoteId(comMarketing.id);
  }

  const digitosWhatsapp = whatsapp.replace(/\D/g, "");
  const faltando = [
    nome.trim() === "" && "seu nome",
    (digitosWhatsapp.length < 10 || digitosWhatsapp.length > 13) && "seu WhatsApp com DDD",
    negocio.trim() === "" && "o nome do negócio",
    !aceite && "a autorização no fim do formulário",
  ].filter(Boolean) as string[];
  const podeEnviar = faltando.length === 0;

  function enviar() {
    const linhas = [
      "Olá, TecPro! Quero contratar um site.",
      "",
      `Nome: ${nome}`,
      `WhatsApp: ${whatsapp}`,
      `Negócio: ${negocio}`,
      cidade && `Cidade: ${cidade}`,
      "",
      `Modelo: ${nomeModelo}`,
      `Pacote: ${pacote.nome} (${textoUnico})`,
      `Plano mensal: ${ajuste.nome}${ajuste.valor ? ` (${reais(ajuste.valor)})` : ""}`,
      ferramentasEscolhidas.length > 0 && `Marketing: ${ferramentasEscolhidas.map((f) => f.nome).join(", ")}`,
      `Valor mensal estimado: ${textoMensal}`,
      detalhes && "",
      detalhes && `Detalhes: ${detalhes}`,
      "",
      "Autorizo o contato da TecPro Tecnologias pelo WhatsApp sobre este pedido.",
    ].filter((l) => l !== false && l !== null && l !== undefined) as string[];
    // Abre o WhatsApp primeiro (dentro do clique, para o navegador não bloquear) e grava o pedido em seguida.
    // Se o navegador bloquear a janela nova (celular, navegador do Instagram), abre na mesma aba.
    const link = linkWhatsApp(linhas.join("\n"));
    const janela = window.open(link, "_blank");
    if (janela) janela.opener = null;
    const gravacao = salvarPedido({
      nome: nome.trim(),
      whatsapp: whatsapp.trim(),
      negocio: negocio.trim(),
      cidade: cidade.trim() || null,
      modelo: nomeModelo,
      pacote: pacote.nome,
      plano_ajuste: ajuste.nome,
      marketing: ferramentasEscolhidas.map((f) => f.nome),
      valor_unico: textoUnico,
      valor_mensal: textoMensal,
      detalhes: detalhes.trim() || null,
      consentimento: true,
    });
    // Na mesma aba, espera o pedido ser gravado antes de sair da página.
    if (!janela) void gravacao.finally(() => (window.location.href = link));
  }

  return (
    <div className="simulador">
      <div>
        <fieldset>
          <legend>
            1. Modelo
            <small>Escolha um modelo pronto ou peça um projeto do zero.</small>
          </legend>
          <div className="opcoes">
            {modelos.map((m) => (
              <label key={m.slug} className="opcao">
                <input type="radio" name="modelo" checked={modelo === m.slug} onChange={() => setModelo(m.slug)} />
                <span className="opcao-caixa">
                  <strong>{m.nome}</strong>
                  <span>{m.segmento}</span>
                </span>
              </label>
            ))}
            <label className="opcao">
              <input type="radio" name="modelo" checked={modelo === SOB_MEDIDA} onChange={() => setModelo(SOB_MEDIDA)} />
              <span className="opcao-caixa">
                <strong>Sob medida</strong>
                <span>Outro segmento</span>
              </span>
            </label>
          </div>
          {modelo === SOB_MEDIDA && (
            <label className="campo" style={{ marginTop: 16 }}>
              Tipo de site
              <select value={segmento} onChange={(e) => setSegmento(e.target.value)}>
                {segmentos.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nome}
                  </option>
                ))}
              </select>
            </label>
          )}
        </fieldset>

        <fieldset>
          <legend>
            2. Pacote
            <small>Pagamento único pela criação do site.</small>
          </legend>
          <div className="opcoes">
            {pacotes.map((p) => (
              <label key={p.id} className="opcao">
                <input type="radio" name="pacote" checked={pacoteId === p.id} onChange={() => trocarPacote(p.id)} />
                <span className="opcao-caixa">
                  <strong>{p.nome}</strong>
                  <span>{p.resumo}</span>
                  <em>{reais(p.valor)}</em>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>
            3. Plano mensal de ajustes
            <small>Quantas alterações por mês o seu negócio costuma precisar?</small>
          </legend>
          <div className="opcoes">
            {planosAjuste.map((a) => (
              <label key={a.id} className="opcao">
                <input type="radio" name="ajuste" checked={ajusteId === a.id} onChange={() => setAjusteId(a.id)} />
                <span className="opcao-caixa">
                  <strong>{a.nome}</strong>
                  <span>{a.descricao}</span>
                  <em>{a.valor === null ? "sob consulta" : a.valor === 0 ? "sem mensalidade" : `${reais(a.valor)} por mês`}</em>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>
            4. Marketing
            <small>Opcional. Ao escolher uma ferramenta, o pacote passa para Site + Marketing.</small>
          </legend>
          <div className="opcoes">
            {ferramentas.map((f) => (
              <label key={f.id} className="opcao">
                <input type="checkbox" checked={escolhidas.includes(f.id)} onChange={() => alternarFerramenta(f.id)} />
                <span className="opcao-caixa">
                  <strong>{f.nome}</strong>
                  <span>{f.plataformas}</span>
                  <em>{reais(f.mensal)} por mês</em>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset style={{ borderBottom: 0, marginBottom: 0 }}>
          <legend>5. Seus dados</legend>
          <div className="campos">
            <label className="campo">
              Seu nome
              <input value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="name" maxLength={120} />
            </label>
            <label className="campo">
              Seu WhatsApp com DDD
              <input
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(21) 99999-9999"
                maxLength={20}
              />
            </label>
            <label className="campo">
              Nome do negócio
              <input value={negocio} onChange={(e) => setNegocio(e.target.value)} autoComplete="organization" maxLength={120} />
            </label>
            <label className="campo">
              Cidade
              <input value={cidade} onChange={(e) => setCidade(e.target.value)} autoComplete="address-level2" maxLength={120} />
            </label>
            <label className="campo campo-inteiro">
              Conte um pouco sobre o que você imagina
              <textarea
                value={detalhes}
                onChange={(e) => setDetalhes(e.target.value)}
                maxLength={2000}
                placeholder="Cores, páginas, referências, se já tem logo e domínio..."
              />
            </label>
          </div>
          <label className="consentimento">
            <input type="checkbox" checked={aceite} onChange={(e) => setAceite(e.target.checked)} />
            <span>
              Autorizo a TecPro Tecnologias a usar estes dados para responder ao meu pedido pelo WhatsApp, conforme a
              LGPD. Posso pedir a exclusão a qualquer momento.
            </span>
          </label>
        </fieldset>
      </div>

      <aside className="resumo" aria-live="polite">
        <h3>Seu projeto</h3>
        <div className="resumo-linha">
          <span>Modelo</span>
          <span>{nomeModelo}</span>
        </div>
        <div className="resumo-linha">
          <span>Pacote</span>
          <span>{pacote.nome}</span>
        </div>
        <div className="resumo-linha">
          <span>Ajustes</span>
          <span>{ajuste.nome}</span>
        </div>
        <div className="resumo-linha">
          <span>Marketing</span>
          <span>{ferramentasEscolhidas.length > 0 ? ferramentasEscolhidas.map((f) => f.nome.replace("Marketing por ", "")).join(", ") : "Nenhum"}</span>
        </div>
        <div className="resumo-total">
          <div>
            <small>Investimento único</small>
            <strong>{textoUnico}</strong>
          </div>
          <div>
            <small>Mensal</small>
            <strong style={{ fontSize: mensalSobConsulta ? 24 : undefined }}>{textoMensal}</strong>
          </div>
        </div>
        <button className="botao" onClick={enviar} disabled={!podeEnviar}>
          Enviar pelo WhatsApp
        </button>
        <p className="resumo-aviso">
          {podeEnviar ? `Prazo estimado: ${pacote.prazo}.` : `Para enviar, falta preencher: ${faltando.join(", ")}.`}
        </p>
      </aside>
    </div>
  );
}
