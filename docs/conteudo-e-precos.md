# Conteúdo e preços

Quase todo o conteúdo do site está em **`lib/dados.ts`**. Para mudar um texto, um preço ou um contato, edite esse arquivo, rode `npm run build` para conferir e envie para o GitHub.

Valores ainda provisórios estão marcados com o comentário `// EXEMPLO`.

## Contatos da empresa (`empresa`)

| Campo | Uso |
|---|---|
| `whatsapp` | Número só com dígitos, com 55 e DDD. Usado apenas no envio do pedido. |
| `whatsappTexto` | Número formatado. **Não exibir no site** (decisão da TecPro). |
| `email` | `contato@tecprotecnologias.com.br`, no rodapé |
| `instagram` | Nome de usuário, sem @ |
| `facebook` | Link completo do perfil |
| `url` | Endereço oficial, usado no SEO, no sitemap e no robots |

Não existe campo de cidade: o site não deve mostrar a cidade.

## Tipos de site (`segmentos`)

Os 15 tipos aparecem como filtro da galeria. Para incluir um tipo, adicione `{ id, nome, descricao }`. Se nenhum modelo tiver aquele `id` em `segmentos`, a galeria mostra o cartão "Seu site de ..., criado do zero".

## Modelos (`modelos`)

Cada modelo gera uma página em `/modelos/<slug>/` e um cartão na galeria e no portfólio.

| Campo | Descrição |
|---|---|
| `slug` | Parte do endereço; sem acentos nem espaços |
| `nome` | Nome **fictício** da demonstração (nunca o nome de um cliente real) |
| `segmento` / `segmentos` | Rótulo exibido e ids usados no filtro |
| `chamada`, `descricao` | Textos do cartão e da página |
| `incluso`, `personalizacao` | Listas da página do modelo |
| `demoUrl` | Link da demonstração. Vazio mostra "Demonstração em breve". |
| `paleta` | Cores da miniatura desenhada em CSS |

## Preços

Definidos em 2026-10-18 com base em pesquisa de mercado. O serviço é **modelo pronto personalizado**, não site criado do zero, por isso fica abaixo das agências.

| Item | Onde | Valor |
|---|---|---|
| Site estilizado (único) | `pacotes` | R$ 790 |
| Site + Marketing (único) | `pacotes` | R$ 1.890 |
| 1, 2 e 3 ajustes por mês | `planosAjuste` | R$ 90, R$ 160, R$ 220 |
| 4 ou mais ajustes | `planosAjuste` | sob consulta (`valor: null`) |
| Marketing por e-mail | `ferramentas` | R$ 290/mês |
| Marketing por SMS | `ferramentas` | R$ 190/mês + envios |
| Marketing por SEO | `ferramentas` | R$ 390/mês |
| Marketing por automação | `ferramentas` | R$ 490/mês + taxas da Meta |

Os prazos (`prazo` em `pacotes`) ainda são exemplos.

**Como o simulador calcula:** valor único = pacote escolhido; mensal = plano de ajustes + soma das ferramentas. Escolher uma ferramenta muda o pacote para "Site + Marketing". O plano "4 ou mais" mostra "sob consulta".

Os valores são formatados pela função `reais()`, que usa um espaço especial entre "R$" e o número (padrão do navegador para pt-BR).

## Clientes do portfólio (`clientes`)

| Campo | Descrição |
|---|---|
| `nome`, `segmento`, `descricao`, `url` | Dados do site entregue |
| `imagem` | Foto de tela em `public/portfolio/` (opcional) |
| `autorizado` | Só aparece no site com `true` |

**Só mude `autorizado` para `true` com a autorização do dono do negócio.** A lista `clientesPublicados` já filtra os autorizados, e é ela que as páginas usam.

## Outros textos

- Etapas de "Como funciona": `etapas`
- Kit de serviços ("Cuidamos de cada detalhe"): `kit`
- Exemplos de ajuste: `exemplosAjuste`
- Títulos e frases das seções: direto em `app/page.tsx` e `app/portfolio/page.tsx`
