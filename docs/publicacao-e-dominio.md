# Publicação e domínio

## Contas

Todas as contas da empresa usam o e-mail **tecprotecnologias@gmail.com**.

| Serviço | Conta |
|---|---|
| GitHub | `tecprotecnologias-dev` |
| Cloudflare | conta da TecPro (tecprotecnologias@gmail.com) |
| Registro.br | conta da titular do domínio |
| Supabase | organização "TecPro Tecnologias" |
| Brevo | conta "TecPro Tecnologias" |

## Publicação automática

O Cloudflare está ligado ao repositório do GitHub (Workers Builds). A cada envio para `main`:

1. clona o repositório;
2. roda `npm run build` (gera `out/`);
3. roda `npx wrangler deploy`, que publica `out/` conforme `wrangler.jsonc`.

| Configuração | Valor |
|---|---|
| Projeto (Worker) | `site-tecpro-tecnologias` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Preview builds | ligados (branches que não são `main` geram versão de teste) |

`wrangler.jsonc` define a pasta `./out` como arquivos estáticos e usa `out/404.html` para endereços inexistentes.

Para acompanhar ou repetir uma publicação: Cloudflare > **Compute** > **Workers & Pages** > `site-tecpro-tecnologias` > **Deployments**.

## Endereços

| Endereço | Situação |
|---|---|
| https://tecprotecnologias.com.br | oficial |
| https://www.tecprotecnologias.com.br | também abre o site |
| `site-tecpro-tecnologias.tecprotecnologias.workers.dev` | **desligado** de propósito, para o Google ver um endereço só |
| `*-site-tecpro-tecnologias...workers.dev` | ligado, só para versões de teste |

**Always Use HTTPS** está ligado: quem digita `http://` é levado para `https://`.

## Domínio

- `tecprotecnologias.com.br`, registrado no Registro.br em 2026-10-18. **Renovar até 18/10/2027.** Cuidado com cobranças falsas: o único endereço oficial é registro.br.
- Servidores DNS: `matteo.ns.cloudflare.com` e `megan.ns.cloudflare.com`. DNSSEC desligado.

## Registros DNS (Cloudflare)

| Tipo | Nome | Conteúdo | Para quê |
|---|---|---|---|
| Worker | `tecprotecnologias.com.br` | site-tecpro-tecnologias | Site |
| Worker | `www` | site-tecpro-tecnologias | Site |
| MX | raiz | `route1/2/3.mx.cloudflare.net` | Receber e-mail (Email Routing) |
| TXT | raiz | `v=spf1 include:_spf.mx.cloudflare.net ~all` | SPF (um único registro SPF no domínio) |
| TXT | `cf2024-1._domainkey` | DKIM do Cloudflare | Assinatura do Email Routing |
| TXT | raiz | `brevo-code:...` | Prova de domínio para o Brevo |
| CNAME | `brevo1._domainkey`, `brevo2._domainkey` | `b1/b2...dkim.brevo.com` | Assinatura dos e-mails enviados pelo Brevo |
| TXT | `_dmarc` | `v=DMARC1; p=reject;` | Proteção contra uso falso do domínio |

Os registros "Worker" são criados pelo Cloudflare ao adicionar o domínio no projeto (**Domains & Routes** > **Custom domain**). Não use "Workers Routes" para isso.

**Nunca crie um segundo registro SPF.** Se um serviço novo pedir SPF, junte os `include:` no registro existente.

## Configurações de robôs

No cadastro do domínio, Search, Agent e Training foram deixados como "Allow". "Bot Preference Sync" ligado (acrescenta as regras no robots.txt).
