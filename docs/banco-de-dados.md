# Banco de dados (Supabase)

## Projeto

| Item | Valor |
|---|---|
| Organização | TecPro Tecnologias (plano Free) |
| Projeto | `tecpro` |
| Região | South America (São Paulo), `sa-east-1` |
| URL | `https://zwkmswvwhvsutjlpgpng.supabase.co` |
| Integração com GitHub | nenhuma (o repositório não tem pasta `supabase/`) |

Criado com "Enable Data API" ligado, "Automatically expose new tables" desligado e "Enable automatic RLS" ligado.

**Plano gratuito:** o projeto é pausado depois de 7 dias sem uso. Se pausar, os pedidos deixam de ser gravados (o WhatsApp continua funcionando). Reative no painel.

## Tabela `pedidos`

Guarda cada pedido enviado pelo simulador. Criada pelo SQL Editor com:

```sql
create table public.pedidos (
  id uuid primary key default gen_random_uuid(),
  criado_em timestamptz not null default now(),
  nome text not null check (char_length(nome) between 1 and 120),
  whatsapp text not null check (char_length(whatsapp) between 8 and 20),
  negocio text not null check (char_length(negocio) between 1 and 120),
  cidade text check (char_length(cidade) <= 120),
  modelo text not null check (char_length(modelo) <= 120),
  pacote text not null check (char_length(pacote) <= 60),
  plano_ajuste text not null check (char_length(plano_ajuste) <= 60),
  marketing text[] not null default '{}',
  valor_unico text check (char_length(valor_unico) <= 60),
  valor_mensal text check (char_length(valor_mensal) <= 60),
  detalhes text check (char_length(detalhes) <= 2000),
  consentimento boolean not null check (consentimento),
  status text not null default 'novo'
);

alter table public.pedidos enable row level security;

-- Visitantes do site só podem CRIAR pedidos, nunca ler os de outras pessoas.
create policy "visitante cria pedido"
  on public.pedidos for insert to anon
  with check (consentimento and status = 'novo');

grant insert on public.pedidos to anon;
```

`cidade` é preenchida pelo cliente no formulário (é a cidade dele, não a da TecPro).

### Regras de segurança

- RLS ligado: sem uma política, ninguém acessa.
- O papel `anon` (visitante) só tem **INSERT**, e só com `consentimento = true` e `status = 'novo'`.
- Não existe política de leitura para visitantes: uma consulta pública volta vazia.
- Os limites de tamanho (`check`) impedem textos gigantes; os campos do formulário usam os mesmos limites (`maxLength`).

### Conferir as regras

```sql
select
  (select relrowsecurity from pg_class where oid = 'public.pedidos'::regclass) as rls_ligado,
  (select count(*) from pg_policies where tablename = 'pedidos' and policyname = 'visitante cria pedido') as regra_criada,
  (select count(*) from information_schema.role_table_grants
     where table_name = 'pedidos' and grantee = 'anon' and privilege_type = 'INSERT') as permissao_insert;
```

Esperado: `true`, `1`, `1`. Testado em 2026-10-18: inserção aceita (201), leitura pública vazia e pedido sem consentimento recusado.

## Como o site grava

`lib/supabase.ts` faz `POST /rest/v1/pedidos` com o cabeçalho `apikey` (chave publicável) e `Prefer: return=minimal` (não pede a linha de volta, porque o visitante não pode ler). Se a chave estiver vazia, a função não grava nada.

## Ver os pedidos

Supabase > projeto `tecpro` > **Table Editor** > `pedidos`. O campo `status` pode ser usado para acompanhar o atendimento (por exemplo: novo, em conversa, fechado).

## Planos para o futuro

- Tabelas `modelos` e `clientes` para a área administrativa, com leitura pública só do que estiver publicado e escrita só para a TecPro logada.
- Status "pago" nos pedidos quando existir o carrinho de compras.
