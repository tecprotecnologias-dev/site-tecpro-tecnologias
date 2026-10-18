import { empresa, modelos } from "@/lib/dados";
import { Marca } from "./Marca";

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="container">
        <div className="rodape-grade">
          <div>
            <Marca />
            <p style={{ marginTop: 20, maxWidth: 340 }}>
              Sites sob medida, hospedagem, domínio e marketing para negócios que querem ser lembrados.
            </p>
          </div>
          <div>
            <h4>Modelos</h4>
            <ul>
              {modelos.map((m) => (
                <li key={m.slug}>
                  <a href={`/modelos/${m.slug}/`}>
                    {m.segmento}: {m.nome}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a href="/#simulador">Fazer um pedido</a>
              </li>
              <li>
                <a href={`mailto:${empresa.email}`}>{empresa.email}</a>
              </li>
            </ul>
            <div className="redes">
              <a
                href={`https://instagram.com/${empresa.instagram}`}
                target="_blank"
                rel="noopener"
                aria-label="Instagram da TecPro Tecnologias"
                title="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href={empresa.facebook} target="_blank" rel="noopener" aria-label="Facebook da TecPro Tecnologias" title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="rodape-base">
          <span>
            © {new Date().getFullYear()} {empresa.nome}. Todos os direitos reservados.
          </span>
          <span>Seus dados são tratados conforme a LGPD.</span>
        </div>
      </div>
    </footer>
  );
}
