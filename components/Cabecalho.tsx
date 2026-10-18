"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Marca } from "./Marca";

const links = [
  { href: "/#modelos", texto: "Modelos" },
  { href: "/#como-funciona", texto: "Como funciona" },
  { href: "/#valores", texto: "Valores" },
  { href: "/#marketing", texto: "Marketing" },
];

export function Cabecalho() {
  const [rolado, setRolado] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 30);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header className={`cabecalho${rolado || aberto ? " rolado" : ""}`}>
      <div className="container cabecalho-interno">
        <Marca />
        <button
          className="menu-botao"
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
        >
          <span style={aberto ? { transform: "translateY(4px) rotate(45deg)" } : undefined} />
          <span style={aberto ? { transform: "translateY(-4px) rotate(-45deg)" } : undefined} />
        </button>
        <nav className={`menu${aberto ? " aberto" : ""}`} onClick={() => setAberto(false)}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.texto}
            </Link>
          ))}
          <Link href="/#simulador" className="botao">
            Monte seu site
          </Link>
        </nav>
      </div>
    </header>
  );
}
