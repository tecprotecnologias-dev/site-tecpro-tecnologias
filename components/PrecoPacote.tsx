"use client";

import { useEffect, useState } from "react";
import { type Pacote, promocao, promocaoAtiva, reais } from "@/lib/dados";

// Preço do cartão na seção Valores. No pacote da promoção, mostra o valor com desconto
// enquanto ela estiver valendo (a data é conferida no navegador de quem visita).
export function PrecoPacote({ pacote }: { pacote: Pacote }) {
  const [ativa, setAtiva] = useState(true);
  useEffect(() => setAtiva(promocaoAtiva()), []);

  const temPromocao = ativa && pacote.id === promocao.pacoteId;
  const valorPromocao = Math.round(pacote.valor * (1 - promocao.desconto));

  if (!temPromocao) {
    return (
      <div className="pacote-preco">
        <small>investimento único</small>
        <strong>{reais(pacote.valor)}</strong>
      </div>
    );
  }

  return (
    <>
      <div className="pacote-preco">
        <small>investimento único</small>
        <strong>{reais(valorPromocao)}</strong>
        <s>{reais(pacote.valor)}</s>
      </div>
      <p className="pacote-promo">
        <b>{promocao.desconto * 100}% de desconto</b> em qualquer modelo pronto, assinando o plano de {promocao.ajustesMinimos}{" "}
        ajustes ou mais por mês.
        Válido até {promocao.validaAteTexto}, com permanência mínima de {promocao.permanenciaMeses} meses no plano.
      </p>
    </>
  );
}
