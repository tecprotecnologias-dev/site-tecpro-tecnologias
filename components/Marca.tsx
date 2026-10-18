import Link from "next/link";

export function Marca() {
  return (
    <Link href="/" className="marca" aria-label="TecPro Tecnologias, página inicial">
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="#17294a" />
        <path d="M12 12 L19 20 L12 28 H16.5 L23.5 20 L16.5 12 Z" fill="#e8692c" />
        <path d="M20 12 L27 20 L20 28 H24.5 L31.5 20 L24.5 12 Z" fill="#f3eee4" />
      </svg>
      <span className="marca-nome">
        <strong>
          Tec<span>Pro</span>
        </strong>
        <small>TECNOLOGIAS</small>
      </span>
    </Link>
  );
}
