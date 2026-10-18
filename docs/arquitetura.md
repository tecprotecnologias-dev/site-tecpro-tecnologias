# Arquitetura

## Visão geral

O site é um projeto Next.js 16 exportado como **arquivos estáticos** (`output: "export"` em `next.config.ts`). Não existe servidor próprio: o build gera HTML, CSS e JavaScript na pasta `out/`, e o Cloudflare entrega esses arquivos.

O que precisa de interação acontece no navegador do visitante:

- **Filtro da galeria** (`components/Galeria.tsx`)
- **Simulador de investimento** (`components/Simulador.tsx`), que abre o WhatsApp e grava o pedido no Supabase
- **Menu do celular e cabeçalho que escurece ao rolar** (`components/Cabecalho.tsx`)
- **Animação de entrada dos blocos** (`components/Revelar.tsx`)

```
Visitante ──> Cloudflare (tecprotecnologias.com.br) ──> arquivos de out/
    │
    └── Simulador ──> WhatsApp da TecPro (wa.me)
                 └──> Supabase: POST /rest/v1/pedidos (só inserção)
```

## Páginas

| Rota | Arquivo | Observação |
|---|---|---|
| `/` | `app/page.tsx` | Página inicial com todas as seções |
| `/portfolio/` | `app/portfolio/page.tsx` | Modelos e sites entregues (só clientes autorizados) |
| `/modelos/<slug>/` | `app/modelos/[slug]/page.tsx` | Uma página por modelo, gerada por `generateStaticParams` |
| `/sitemap.xml` | `app/sitemap.ts` | Gerado no build (`dynamic = "force-static"`) |
| `/robots.txt` | `app/robots.ts` | Gerado no build |

Toda página leva a **ficha da empresa** para o Google (JSON-LD `Organization` e `WebSite`, em `app/layout.tsx`): nome, logo, site, e-mail e os links do Instagram e do Facebook (`sameAs`). Ela ajuda o Google a separar a TecPro de outras empresas com nome parecido. Telefone e endereço ficam de fora de propósito. Os dados vêm de `empresa` em `lib/dados.ts`.

`trailingSlash: true` faz todas as rotas terminarem com `/`, o que combina com a hospedagem estática.

## Seções da página inicial (com âncoras)

| Âncora | Seção |
|---|---|
| (topo) | Hero com miniaturas dos modelos |
| `#modelos` | Galeria com filtro dos 15 tipos de site |
| `#como-funciona` | 4 etapas |
| `#valores` | Pacotes (pagamento único) e plano mensal de ajustes |
| `#marketing` | 4 ferramentas de marketing |
| `#simulador` | Simulador e envio do pedido |

## Componentes

| Componente | Tipo | Função |
|---|---|---|
| `Marca` | servidor | Emblema do logo e o nome TECPRO TECNOLOGIAS |
| `Cabecalho` | cliente | Menu fixo; fica escuro ao rolar; menu sanduíche no celular |
| `Rodape` | servidor | Modelos, contato (pedido, e-mail, redes) e aviso de LGPD |
| `Previa` | servidor | Miniatura de um modelo desenhada em CSS, com a paleta do modelo |
| `Galeria` | cliente | Filtro por segmento; mostra "sob medida" quando não há modelo |
| `Simulador` | cliente | Escolhas, cálculo dos valores, envio por WhatsApp e gravação no banco |
| `Revelar` | cliente | Animação de entrada dos elementos com `data-revelar` |

"Cliente" significa que o componente tem `"use client"` e roda no navegador.

## Decisões técnicas importantes

### Links comuns (`<a>`) em vez de `next/link`

A navegação "sem recarregar" do `next/link` não funcionava bem com âncoras entre páginas (`/#valores` a partir de `/portfolio/`) num site exportado: a página abria no topo, sem descer até a seção. Por isso todos os links são `<a href>` comuns. Cada clique carrega a página normalmente e o navegador desce sozinho até a âncora. Não volte para `next/link` sem testar esse caso.

### Animação que nunca esconde conteúdo

`Revelar.tsx` só ativa a animação depois que o JavaScript carrega: ele marca como visível o que já está na tela e então adiciona a classe `revelar-pronto` no `<html>`. O CSS só esconde `[data-revelar]` quando essa classe existe. Assim, com internet lenta ou JavaScript desligado, o conteúdo aparece normalmente. O componente também roda de novo a cada troca de página e observa elementos adicionados depois (MutationObserver), com `threshold: 0` para blocos altos.

### Abrir o WhatsApp antes de gravar

No simulador, `window.open` do WhatsApp é chamado primeiro, dentro do clique, porque o navegador bloqueia janelas abertas depois de uma espera. A gravação no Supabase vem em seguida, com `keepalive: true` para não ser cancelada.

### Miniaturas em CSS

As miniaturas dos modelos (`Previa`) são desenhadas em CSS com a paleta de cada modelo, porque ainda não existem as demonstrações. Quando existirem, podem ser trocadas por fotos de tela.

## Imagens

`images.unoptimized: true` é obrigatório na exportação estática (não existe servidor para otimizar imagens). Os arquivos ficam em `public/` e são servidos como estão.
