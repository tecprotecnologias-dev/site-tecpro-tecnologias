"use client";

import { useState } from "react";
import { modelos, segmentos } from "@/lib/dados";
import { Previa } from "./Previa";

export function Galeria() {
  const [filtro, setFiltro] = useState("todos");
  const visiveis = filtro === "todos" ? modelos : modelos.filter((m) => m.segmentos.includes(filtro));
  const segmento = segmentos.find((s) => s.id === filtro);
  const semModelo = segmento && visiveis.length === 0;

  return (
    <>
      <div className="filtros" role="group" aria-label="Filtrar por tipo de site">
        <button className={`filtro${filtro === "todos" ? " ativo" : ""}`} onClick={() => setFiltro("todos")}>
          Todos
        </button>
        {segmentos.map((s) => (
          <button key={s.id} className={`filtro${filtro === s.id ? " ativo" : ""}`} onClick={() => setFiltro(s.id)}>
            {s.nome}
          </button>
        ))}
      </div>

      <div className="grade-modelos">
        {visiveis.map((m) => (
          <a key={m.slug} href={`/modelos/${m.slug}/`} className="cartao-modelo">
            <Previa modelo={m} />
            <div className="cartao-info">
              <div>
                <span className="etiqueta">{m.segmento}</span>
                <h3>{m.nome}</h3>
                <p>{m.chamada}</p>
              </div>
              <span className="seta-circulo" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M3 13 L13 3 M5 3 H13 V11" />
                </svg>
              </span>
            </div>
          </a>
        ))}

        <div className="sob-medida">
          <div>
            <span className="etiqueta">{semModelo ? segmento.nome : "Sob medida"}</span>
            <h3>{semModelo ? `Seu site de ${segmento.nome.toLowerCase()}, criado do zero.` : "Não encontrou o seu segmento?"}</h3>
            <p>
              {semModelo
                ? `${segmento.descricao} Desenhamos um projeto exclusivo com a identidade da sua marca.`
                : "Criamos sites para cursos, imobiliárias, viagem, fitness, finanças, decoração e muito mais."}
            </p>
          </div>
          <a href="/#simulador" className="botao botao-contorno">
            Pedir projeto
          </a>
        </div>
      </div>
    </>
  );
}
