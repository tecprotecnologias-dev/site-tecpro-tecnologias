# E-mail contato@tecprotecnologias.com.br

Custo total: zero. A TecPro lê e escreve tudo pelo Gmail **tecprotecnologias@gmail.com**.

```
Cliente escreve para contato@ ──> Cloudflare Email Routing ──> Gmail da TecPro
TecPro responde pelo Gmail (De: contato@) ──> Brevo (SMTP) ──> Cliente
```

## Recebimento (Cloudflare Email Routing)

- Regra: `contato@tecprotecnologias.com.br` → `tecprotecnologias@gmail.com` (endereço de destino verificado).
- **Catch-all desligado**: endereços inventados (vendas@, qualquercoisa@) são descartados, para evitar spam.
- Painel: domínio no Cloudflare > **Email** > **Email Routing** > **Routing rules**.

Para criar outro endereço (por exemplo, financeiro@), crie uma nova regra com destino ao mesmo Gmail.

## Envio (Brevo + Gmail)

- Brevo no plano gratuito: até 300 e-mails por dia.
- Domínio autenticado no Brevo (registros `brevo-code` e DKIM `brevo1`/`brevo2`, veja [publicacao-e-dominio.md](publicacao-e-dominio.md)).
- Remetente cadastrado no Brevo: `TecPro Tecnologias <contato@tecprotecnologias.com.br>`.
- Gmail > **Configurações** > **Contas e importação** > **Enviar e-mail como**:
  - servidor `smtp-relay.brevo.com`, porta `587`, TLS;
  - usuário: o login SMTP do Brevo (Brevo > **SMTP e API** > **SMTP**);
  - senha: uma **chave SMTP** gerada no Brevo (fica só no Gmail; não guardar no código);
  - contato@ é o remetente **padrão**;
  - recomendado: "Responda pelo mesmo endereço em que a mensagem foi recebida".

**A chave SMTP expira depois de 90 dias sem uso.** Se o Gmail não conseguir enviar pelo contato@, gere uma chave nova no Brevo e troque no Gmail (Enviar e-mail como > editar informações).

**Não ative** no Brevo a restrição de "Endereços IP autorizados" para chaves SMTP: o Gmail envia de vários endereços e seria bloqueado.

Os e-mails enviados pelo Brevo podem mostrar "Cancelar inscrição" no Gmail de quem recebe, porque o Brevo é feito para campanhas.

## Logo no remetente

Foi criada uma **Conta Google usando o endereço contato@** (sem Gmail próprio), só para ter foto de perfil. A foto é o logo, visível para "Qualquer pessoa". Assim, quem usa Gmail vê o logo no círculo do remetente. Outros serviços podem continuar mostrando a inicial.

Alternativa que mostra o logo em qualquer caixa de entrada: padrão BIMI. Para o Gmail exige certificado pago (cerca de US$ 1.000/ano), por isso não foi feito.

## Autenticação

| Proteção | Situação |
|---|---|
| SPF | um registro, do Cloudflare |
| DKIM | Cloudflare (repasse) e Brevo (envio) |
| DMARC | `p=reject`: e-mails falsos com o domínio são recusados |

Teste de 2026-10-18: e-mail enviado pelo Gmail como contato@ chegou na caixa de entrada (não no spam).
