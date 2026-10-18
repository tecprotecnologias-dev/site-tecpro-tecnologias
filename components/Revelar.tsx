"use client";

import { useEffect } from "react";

// Anima a entrada dos elementos marcados com data-revelar.
export function Revelar() {
  useEffect(() => {
    const alvos = document.querySelectorAll("[data-revelar]");
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            observador.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    alvos.forEach((a) => observador.observe(a));
    return () => observador.disconnect();
  }, []);

  return null;
}
