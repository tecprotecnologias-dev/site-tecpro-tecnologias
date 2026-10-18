import Link from "next/link";
import { empresa, linkWhatsApp, modelos } from "@/lib/dados";
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
                  <Link href={`/modelos/${m.slug}/`}>
                    {m.segmento}: {m.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li>
                <a href={linkWhatsApp("Olá, TecPro! Quero saber mais sobre os sites.")} target="_blank" rel="noopener">
                  WhatsApp {empresa.whatsappTexto}
                </a>
              </li>
              <li>
                <a href={`mailto:${empresa.email}`}>{empresa.email}</a>
              </li>
              <li>
                <a href={`https://instagram.com/${empresa.instagram}`} target="_blank" rel="noopener">
                  Instagram @{empresa.instagram}
                </a>
              </li>
              <li>{empresa.cidade}</li>
            </ul>
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
