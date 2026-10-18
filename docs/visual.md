# Visual

Pedido da TecPro: um site **chique, classe A e de impacto**. Fundo quase preto, texto marfim, títulos grandes com fonte serifada e o azul e ciano do logo só como detalhe.

## Cores (variáveis em `app/globals.css`)

| Variável | Cor | Uso |
|---|---|---|
| `--preto` | `#0a0a0b` | Fundo |
| `--grafite` | `#131315` | Cartões e campos |
| `--marfim` | `#f3eee4` | Texto principal e seção clara (Valores) |
| `--cinza` | `#a39d93` | Texto secundário |
| `--acento` | `#34b8e4` | Ciano do logo: linhas, etiquetas, seleção |
| `--acento-claro` | `#6fd3ee` | Palavras em itálico nos títulos |
| `--azul` | `#2f6be0` | Destaques na seção clara, onde o ciano tem pouco contraste |
| `--linha`, `--linha-forte` | marfim transparente | Bordas finas |

Até 2026-10-18 o acento era laranja. Ele foi trocado pelo azul e ciano quando o logo novo chegou.

## Fontes

- **Instrument Serif** (normal e itálico): títulos, números grandes, preços
- **Manrope**: textos, botões, menu

Carregadas por `next/font/google` em `app/layout.tsx` e expostas como `--fonte-serif` e `--fonte-sans`.

## Logo

| Arquivo | Uso |
|---|---|
| `public/marca/logo-tecpro-original.jpg` | Logo completo enviado pela TecPro (350 px, fundo azul-marinho) |
| `public/marca/tecpro-emblema.png` | Só o globo, recortado com fundo transparente, usado no cabeçalho e no rodapé |
| `app/icon.png` | Ícone da aba (192 px): "T" branco num anel azul e ciano, com dois pontos violeta, sobre o azul-marinho. Simplificado do globo, que virava borrão em 16 px |
| `app/apple-icon.png` | O mesmo ícone em 180 px, sem transparência, para a tela inicial do iPhone |
| `public/marca/favicon.png` | Cópia do ícone em 256 px, para usar fora do site |

O nome "TECPRO / TECNOLOGIAS" ao lado do emblema é texto (`components/Marca.tsx`), não imagem. Se chegar uma versão do logo em alta resolução ou SVG, troque o emblema por ela.

## Padrões de estilo

- Títulos de seção: rótulo pequeno em maiúsculas com traço (`.rotulo`) + título serifado com uma parte em itálico colorido (`.titulo em`)
- Botões arredondados: claro (`.botao`) e contorno (`.botao-contorno`)
- Cantos levemente arredondados (6 px) e bordas de 1 px
- Números grandes em contorno nas etapas
- Seção de Valores em fundo claro (`.secao-clara`) para quebrar a página escura
- Redes sociais no rodapé só como ícones redondos (`.redes`), com nome acessível em `aria-label`
- Animações suaves; tudo desligado para quem ativou "reduzir movimento" no sistema

## Responsivo

Pontos de quebra em 1080 px, 900 px (menu vira sanduíche) e 600 px (margens de 16 px, uma coluna). A página não pode ter rolagem lateral no celular.

## Regras

- Sem emojis
- Não mostrar telefone nem cidade
