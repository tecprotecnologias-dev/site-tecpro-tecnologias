# Segurança e LGPD

## Chaves e senhas

| Chave | Pode ficar no código? | Onde fica |
|---|---|---|
| URL do Supabase | sim | `lib/supabase.ts` |
| Chave **publicável** do Supabase (`sb_publishable_...`) | sim, foi feita para ser pública | `lib/supabase.ts` |
| Chave **secreta** do Supabase (`sb_secret_...` ou `service_role`) | **nunca** | só no painel do Supabase |
| Senha do banco de dados | **nunca** | gerenciador de senhas da TecPro |
| Chave SMTP do Brevo | **nunca** | só no Gmail ("Enviar e-mail como") |
| Senhas das contas (GitHub, Cloudflare, Registro.br...) | **nunca** | gerenciador de senhas da TecPro |

A chave publicável é segura porque a regra RLS só permite que visitantes **criem** pedidos (veja [banco-de-dados.md](banco-de-dados.md)). Se alguma chave secreta for exposta por engano, gere uma nova no serviço e apague a antiga.

Recomendado em todas as contas: verificação em duas etapas.

## Dados pessoais coletados

O simulador coleta: nome, WhatsApp, nome do negócio, cidade (opcional), escolhas do pedido e detalhes livres.

- **Finalidade:** responder ao pedido.
- **Consentimento:** o botão de envio só funciona com a caixa marcada: "Autorizo a TecPro Tecnologias a usar estes dados para responder ao meu pedido pelo WhatsApp, conforme a LGPD. Posso pedir a exclusão a qualquer momento."
- **Onde ficam:** tabela `pedidos` no Supabase (São Paulo) e a conversa no WhatsApp.
- O banco recusa pedido sem consentimento (`check (consentimento)`).

### Pedido de exclusão

Se um cliente pedir para apagar os dados: Supabase > Table Editor > `pedidos` > encontrar a linha > apagar. Apagar também a conversa no WhatsApp, se ele pedir.

### Marketing

O consentimento atual cobre **só a resposta ao pedido**. Para mandar campanhas (e-mail, SMS, WhatsApp) é preciso um consentimento específico para marketing, com opção de sair. Incluir isso antes de usar a base em campanhas.

## Privacidade da TecPro

- O telefone da empresa não aparece em nenhuma página; só é usado no link de envio do pedido.
- A cidade não aparece no site.

## Futuro: carrinho de compras

Quando houver pagamento online: o pagamento fica com a plataforma (Mercado Pago ou Asaas), sem dados de cartão no site; termos claros antes da compra; direito de arrependimento de 7 dias (Código de Defesa do Consumidor, art. 49).
