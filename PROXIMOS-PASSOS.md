# Próximos passos da TecPro Tecnologias

Lista de tarefas do site da TecPro (https://tecprotecnologias.com.br).
Marque com `[x]` o que for concluído. A documentação técnica está no [README](README.md) e na pasta [docs](docs/).

## Por onde recomeçar (anotado em 18/10/2026)

1. Confirmar os prazos de entrega em `lib/dados.ts` (rápido).
2. Criar as demonstrações dos 4 modelos, que deixam a vitrine mais convincente.
3. Enquanto isso, ir fazendo as tarefas rápidas abaixo (fotos e links das redes, Google Meu Negócio, WhatsApp Business).

## Rápido (você mesma faz em minutos)

- [ ] **Foto de perfil das redes:** trocar no Facebook (hoje está o "T"), no Instagram e no WhatsApp Business pelo globo: `docs/marca/tecpro-globo-perfil-1080.jpg` (cópia na pasta `logo-redes-sociais`).
- [ ] **Atualizar links nas redes:** colocar `tecprotecnologias.com.br` e `contato@tecprotecnologias.com.br` na bio do Instagram e no Facebook.
- [ ] **Conferir no Google:** em alguns dias, pesquisar `site:tecprotecnologias.com.br`. Se não aparecer em uma semana, olhar o Search Console (Indexação > Páginas).
- [ ] **Marca no INPI:** pesquisar "TECPRO" em busca.inpi.gov.br (Marcas), nas classes 42 (sites e software) e 35 (marketing). Há outras empresas com "TecPro" no nome; se ninguém tiver registro nessas classes, considerar registrar "TecPro Tecnologias".
- [ ] **Google Meu Negócio:** criar o perfil da empresa no Google, sem mostrar endereço nem telefone.
- [ ] **WhatsApp Business:** configurar a mensagem de saudação e a de ausência (Ferramentas comerciais), por exemplo "Recebemos seu pedido! Respondemos em até 1 dia útil."

## No site (junto com o Claude)

- [ ] **Prazos de entrega:** confirmar ou trocar os prazos de exemplo (Site estilizado: até 15 dias úteis; Site + Marketing: até 25 dias úteis). Ficam em `lib/dados.ts`.
- [ ] **Assinatura de e-mail:** montar uma assinatura com o logo, o site e o Instagram para colar no Gmail.
- [ ] **Demonstrações dos 4 modelos:** criar as cópias com nomes fictícios e ligar o botão "Ver demonstração" (`demoUrl` em `lib/dados.ts`).
  - [ ] Ofício Barbearia (base: projeto da barbearia, já em Next.js)
  - [ ] Maison Itinerante (base: Casa do Chef)
  - [ ] Prato Nobre (base: Só Chef)
  - [ ] Atlas Estudos (base: hub de estudos)
- [ ] **Fotos de tela reais** dos modelos no lugar das miniaturas desenhadas em código, quando as demonstrações existirem.
- [ ] **Área administrativa (`/admin`):** login só da TecPro (Supabase) para cadastrar, sem mexer no código:
  - modelos (nome, segmento, descrição, o que inclui, link da demonstração, foto);
  - clientes atendidos (nome, segmento, link, foto e a chave "autorizado a aparecer").
- [ ] **Carrinho de compras:** o cliente escolhe modelo, pacote e plano, paga online e depois envia o briefing.
  - pagamento por Mercado Pago ou Asaas (Pix, cartão e boleto);
  - cobrança recorrente para o plano mensal de ajustes;
  - pedido marcado como "pago" no Supabase;
  - formulário de briefing depois do pagamento;
  - termos claros (o que inclui, prazo, rodadas de ajuste) e direito de arrependimento de 7 dias (CDC, art. 49).
- [ ] **Consentimento para marketing:** antes de usar a base de pedidos em campanhas (e-mail, SMS, WhatsApp), incluir no simulador uma caixa opcional e separada de autorização para receber novidades, com opção de sair (LGPD). Hoje o consentimento cobre só a resposta ao pedido.
- [ ] **Endereço principal (opcional):** redirecionar `www.tecprotecnologias.com.br` para `tecprotecnologias.com.br`.

## Depende de terceiros

- [ ] **Autorização para o portfólio:** perguntar aos donos da Casa do Chef e da Só Chef. Com o "sim", trocar `autorizado: false` para `true` em `lib/dados.ts` e tirar uma foto de tela de cada site.

## Já concluído

- [x] Domínio `tecprotecnologias.com.br` registrado no Registro.br (renovar em outubro de 2027).
- [x] Site publicado no Cloudflare, com atualização automática a cada envio para o GitHub.
- [x] Domínio e `www` ligados ao site, com https obrigatório.
- [x] Endereço técnico `.workers.dev` desligado.
- [x] Banco de dados no Supabase (projeto `tecpro`, São Paulo) guardando os pedidos do simulador, com proteção RLS.
- [x] E-mail `contato@tecprotecnologias.com.br`: recebe pelo Cloudflare e envia pelo Gmail com o Brevo, com o logo no remetente.
- [x] Logo novo, cores da marca, contatos reais e preços definidos com pesquisa de mercado.
- [x] Página Portfólio e menu corrigido.
- [x] Telefone fora do site: o WhatsApp só aparece ao enviar um pedido.
- [x] Ficha da empresa para o Google (JSON-LD) e ícone da aba novo, legível em tamanho pequeno.
- [x] Google Search Console: domínio verificado pelo Cloudflare e sitemap processado com 6 páginas (18/10/2026).

## Lembretes

- A chave SMTP do Brevo expira se ficar 90 dias sem uso. Se o Gmail não conseguir enviar pelo `contato@`, gere uma chave nova no Brevo e troque no Gmail (Contas e importação > editar informações).
- Projetos gratuitos do Supabase são pausados depois de 7 dias sem uso. Se isso acontecer, reative no painel.
- O site não deve mostrar o telefone nem a cidade.
