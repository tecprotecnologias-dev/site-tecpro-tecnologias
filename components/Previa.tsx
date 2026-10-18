import type { CSSProperties } from "react";
import type { Modelo } from "@/lib/dados";

// Miniatura do modelo desenhada em CSS, com a paleta de cada demonstração.
export function Previa({ modelo }: { modelo: Modelo }) {
  const { fundo, texto, acento, suave } = modelo.paleta;
  const estilo = { "--p-fundo": fundo, "--p-texto": texto, "--p-acento": acento, "--p-suave": suave } as CSSProperties;

  return (
    <div className="previa" style={estilo} aria-hidden="true">
      <div className="previa-barra">
        <i />
        <i />
        <i />
      </div>
      <div className="previa-nav">
        <b>{modelo.nome}</b>
        <span>
          <i />
          <i />
          <i />
        </span>
      </div>
      <div className="previa-corpo">
        <div>
          <div className="previa-titulo">{modelo.chamada}</div>
          <div className="previa-linhas">
            <i />
            <i />
          </div>
          <div className="previa-cta" />
        </div>
        <div className="previa-imagem" />
      </div>
    </div>
  );
}
