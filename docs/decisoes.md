# Registro de decisões

Decisões tomadas no projeto, com o motivo. A mais recente fica no fim. Ao tomar uma decisão nova, acrescente uma linha.

| Data | Decisão | Motivo |
|---|---|---|
| 2026-10-18 | Modelo de negócio: a TecPro personaliza modelos prontos para o cliente (não é "faça você mesmo" como a Squarespace) | A vitrine serve de portfólio e o cliente recebe o site pronto |
| 2026-10-18 | Next.js em vez de React puro | Páginas saem prontas do build, o que ajuda o SEO |
| 2026-10-18 | Exportação estática + Cloudflare (em vez da Vercel) | Hospedagem gratuita, rápida e no mesmo lugar do domínio e do e-mail |
| 2026-10-18 | Demonstrações com nomes fictícios; clientes reais só com autorização | Não expor clientes sem permissão; "Barbearia do Zé" é marca real e não pode ser usada |
| 2026-10-18 | 15 tipos de site no filtro; sem modelo pronto, o cartão oferece projeto sob medida | Atender todos os segmentos pedidos sem precisar de 15 modelos |
| 2026-10-18 | Preço em três partes: site (único), plano mensal de ajustes (1, 2, 3 ou mais) e ferramentas de marketing (mensais) | Definido pela TecPro: o cliente paga conforme a necessidade |
| 2026-10-18 | Preços: R$ 790 / R$ 1.890; ajustes R$ 90/160/220; marketing R$ 190 a R$ 490 | Pesquisa de mercado; R$ 350 era baixo demais para um site classe A |
| 2026-10-18 | Simulador envia pelo WhatsApp e grava no Supabase | O pedido chega organizado e fica guardado mesmo sem conversa |
| 2026-10-18 | Contas separadas da empresa (Gmail, GitHub, Cloudflare, Supabase, Brevo) | Separar o pessoal do profissional |
| 2026-10-18 | Logo novo (globo azul); acento do site trocado de laranja para azul e ciano | Combinar com o logo |
| 2026-10-18 | Não mostrar cidade nem telefone no site | Pedido da TecPro: evitar contatos de curiosos |
| 2026-10-18 | Página Portfólio separada | Clientes conhecerem modelos e sites entregues |
| 2026-10-18 | Links `<a>` comuns em vez de `next/link` | Âncoras entre páginas não funcionavam na exportação estática |
| 2026-10-18 | Conteúdo visível sem JavaScript; animação só depois que o script carrega | Em internet lenta a página ficava vazia |
| 2026-10-18 | E-mail: Cloudflare Email Routing + Brevo + Gmail | Custo zero e tudo dentro do Gmail que a TecPro já usa |
| 2026-10-18 | Desligar o endereço `.workers.dev` | Um único endereço para o Google e para divulgação |
| 2026-10-18 | Documentação dentro do repositório (`README.md` e `docs/`) | Qualquer pessoa que trabalhar no site encontra tudo junto do código |
| 2026-10-18 | Google Search Console como propriedade do tipo Domínio | Cobre `www` e a raiz juntos; verificação automática pelo Cloudflare |
| 2026-10-18 | Logo do globo mantido | Comparado lado a lado com o logo laranja (>>); a TecPro preferiu o globo |
| 2026-10-18 | Ícone da aba simplificado ("T" no anel) em vez do globo inteiro | O globo virava borrão em 16 px |
| 2026-10-18 | Ficha da empresa (JSON-LD) sem telefone e sem endereço | Ajudar o Google a separar a TecPro de outras "TecPro", mantendo a regra de não mostrar telefone e cidade |
| 2026-10-18 | Foto de perfil das redes com o globo do site (o "T" não é usado nas redes) | A TecPro quer o logo igual no site e nas redes |
