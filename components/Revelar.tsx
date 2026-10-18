"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Anima a entrada dos elementos marcados com data-revelar.
// Roda de novo a cada troca de página e observa elementos que surgirem depois.
export function Revelar() {
  const caminho = usePathname();

  useEffect(() => {
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            observador.unobserve(e.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -6% 0px" },
    );

    // O que já está na tela fica visível na hora, sem animação.
    document.querySelectorAll("[data-revelar]:not(.visivel)").forEach((a) => {
      const caixa = a.getBoundingClientRect();
      if (caixa.top < window.innerHeight && caixa.bottom > 0) a.classList.add("visivel");
    });
    document.documentElement.classList.add("revelar-pronto");

    const observarPendentes = () => {
      document.querySelectorAll("[data-revelar]:not(.visivel)").forEach((a) => observador.observe(a));
    };
    observarPendentes();

    const mutacoes = new MutationObserver(observarPendentes);
    mutacoes.observe(document.body, { childList: true, subtree: true });

    return () => {
      observador.disconnect();
      mutacoes.disconnect();
    };
  }, [caminho]);

  return null;
}
