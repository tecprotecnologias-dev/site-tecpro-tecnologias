// Grava os pedidos do simulador na tabela "pedidos" do Supabase.
// A chave publicável pode ficar no site: a regra RLS só permite criar pedidos.

export const supabase = {
  url: "https://zwkmswvwhvsutjlpgpng.supabase.co",
  chave: "sb_publishable_HRlJwI-CwKKJk--wo06xHQ_CP65xrAr", // Publishable key. Vazio = não grava.
};

export type Pedido = {
  nome: string;
  whatsapp: string;
  negocio: string;
  cidade: string | null;
  modelo: string;
  pacote: string;
  plano_ajuste: string;
  marketing: string[];
  valor_unico: string;
  valor_mensal: string;
  detalhes: string | null;
  consentimento: true;
};

export async function salvarPedido(pedido: Pedido): Promise<boolean> {
  if (!supabase.chave) return false;
  try {
    const resposta = await fetch(`${supabase.url}/rest/v1/pedidos`, {
      method: "POST",
      headers: {
        apikey: supabase.chave,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(pedido),
      keepalive: true,
    });
    return resposta.ok;
  } catch {
    return false;
  }
}
