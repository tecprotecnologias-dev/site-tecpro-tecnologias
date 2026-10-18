# TecPro Tecnologias: site oficial

Vitrine da TecPro Tecnologias, que vende modelos de site personalizados. O visitante conhece os modelos, simula o investimento e envia o pedido pelo WhatsApp. A TecPro personaliza o modelo com a identidade de cada cliente.

- **No ar:** https://tecprotecnologias.com.br
- **Repositório:** https://github.com/tecprotecnologias-dev/site-tecpro-tecnologias
- **Pendências:** [PROXIMOS-PASSOS.md](PROXIMOS-PASSOS.md)

## Tecnologias

| Camada | Ferramenta |
|---|---|
| Framework | Next.js 16 (App Router) com exportação estática |
| Linguagem | TypeScript, React 19 |
| Estilo | CSS puro em `app/globals.css` (sem Tailwind) |
| Fontes | Instrument Serif (títulos) e Manrope (texto), via `next/font` |
| Hospedagem | Cloudflare Workers (arquivos estáticos) |
| Banco de dados | Supabase (Postgres), tabela `pedidos` |
| E-mail | Cloudflare Email Routing (recebe) e Brevo (envia) |

## Como rodar no computador

Requisitos: Node.js 20 ou mais novo.

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:3000
npm run build    # gera o site estático na pasta out/
```

Para ver o resultado do build como ele vai ao ar, sirva a pasta `out` de fora dela (servir de dentro trava o próximo build no Windows):

```bash
python -m http.server 4789 --directory out
```

## Como publicar

Basta enviar para a branch `main` do GitHub. O Cloudflare detecta o envio, roda `npm run build` e publica a pasta `out` em 1 a 2 minutos. Detalhes em [docs/publicacao-e-dominio.md](docs/publicacao-e-dominio.md).

## Onde está cada coisa

```
app/
  layout.tsx            estrutura comum: fontes, cabeçalho, rodapé, metadados de SEO
  page.tsx              página inicial (hero, galeria, etapas, valores, marketing, simulador)
  portfolio/page.tsx    página Portfólio (modelos e sites entregues)
  modelos/[slug]/       página de cada modelo, gerada a partir de lib/dados.ts
  sitemap.ts, robots.ts SEO
  globals.css           todo o visual do site
  icon.png              ícone da aba do navegador
components/             partes reutilizáveis (cabeçalho, galeria, simulador...)
lib/
  dados.ts              TODO o conteúdo: textos, modelos, preços, contatos
  supabase.ts           gravação dos pedidos no banco
public/marca/           logo original e emblema recortado
docs/                   documentação de desenvolvimento
wrangler.jsonc          configuração de publicação no Cloudflare
```

## Documentação

| Documento | Assunto |
|---|---|
| [docs/arquitetura.md](docs/arquitetura.md) | Como o site é montado, componentes e decisões técnicas |
| [docs/conteudo-e-precos.md](docs/conteudo-e-precos.md) | Como trocar textos, preços, modelos, clientes e contatos |
| [docs/visual.md](docs/visual.md) | Cores, fontes, logo e regras de estilo |
| [docs/publicacao-e-dominio.md](docs/publicacao-e-dominio.md) | Cloudflare, domínio, DNS e https |
| [docs/banco-de-dados.md](docs/banco-de-dados.md) | Supabase, tabela de pedidos e regras de segurança |
| [docs/email.md](docs/email.md) | E-mail contato@: recebimento, envio e logo no remetente |
| [docs/seguranca-e-lgpd.md](docs/seguranca-e-lgpd.md) | Chaves, dados pessoais e consentimento |
| [docs/decisoes.md](docs/decisoes.md) | Registro das decisões tomadas e por quê |

## Regras do projeto

- Não mostrar o telefone nem a cidade em nenhuma página. O WhatsApp só é usado no envio do pedido pelo simulador.
- Clientes reais só aparecem no portfólio com autorização do dono.
- Sem emojis nas páginas.
- Nunca colocar chaves secretas no código (veja [docs/seguranca-e-lgpd.md](docs/seguranca-e-lgpd.md)).
