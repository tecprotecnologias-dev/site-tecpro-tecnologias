// Todo o conteúdo da vitrine fica aqui.
// Valores marcados com // EXEMPLO são provisórios e precisam ser trocados.

export const empresa = {
  nome: "TecPro Tecnologias",
  slogan: "Sites sob medida para marcas exigentes",
  whatsapp: "5521983003074", // só números, com 55 e DDD
  whatsappTexto: "(21) 98300-3074",
  email: "contato@tecprotecnologias.com.br", // repassado ao Gmail pelo Cloudflare Email Routing
  instagram: "tecpro_tecnologias",
  facebook: "https://www.facebook.com/profile.php?id=61575373685541",
  url: "https://tecprotecnologias.com.br", // domínio em registro no Registro.br
};

export type Segmento = {
  id: string;
  nome: string;
  descricao: string;
};

export const segmentos: Segmento[] = [
  { id: "cursos", nome: "Cursos", descricao: "Venda de aulas, trilhas e áreas do aluno." },
  { id: "servicos", nome: "Serviços", descricao: "Apresentação, agenda e pedidos de orçamento." },
  { id: "loja-online", nome: "Loja online", descricao: "Catálogo com pedido direto pelo WhatsApp." },
  { id: "portfolio", nome: "Portfólio", descricao: "Trabalhos em destaque para quem vive de imagem." },
  { id: "blog", nome: "Blog", descricao: "Conteúdo bem posicionado no Google." },
  { id: "restaurante", nome: "Restaurante", descricao: "Cardápio, reservas, delivery e eventos." },
  { id: "beleza", nome: "Beleza", descricao: "Salões, barbearias, clínicas e estética." },
  { id: "viagem", nome: "Viagem", descricao: "Roteiros, pacotes e pousadas." },
  { id: "imobiliaria", nome: "Imobiliária", descricao: "Imóveis com filtros, fotos e visitas." },
  { id: "casa-decoracao", nome: "Casa e decoração", descricao: "Ambientes, projetos e produtos." },
  { id: "arte-design", nome: "Arte e design", descricao: "Galerias e estúdios criativos." },
  { id: "ecommerce", nome: "E-commerce", descricao: "Carrinho, Pix, cartão e boleto." },
  { id: "financas", nome: "Soluções financeiras", descricao: "Contabilidade, consultoria e crédito." },
  { id: "fitness", nome: "Fitness", descricao: "Academias, studios e personal trainers." },
  { id: "educacao", nome: "Educação", descricao: "Escolas, hubs de estudo e materiais." },
];

export type Modelo = {
  slug: string;
  nome: string; // nome fictício da demonstração
  segmento: string; // rótulo exibido
  segmentos: string[]; // ids de segmentos para o filtro
  chamada: string;
  descricao: string;
  incluso: string[];
  personalizacao: string[];
  demoUrl: string; // vazio enquanto a demonstração não estiver no ar
  paleta: { fundo: string; texto: string; acento: string; suave: string };
};

export const modelos: Modelo[] = [
  {
    slug: "barbearia",
    nome: "Ofício Barbearia",
    segmento: "Beleza",
    segmentos: ["beleza", "servicos"],
    chamada: "Tradição, navalha e agenda cheia.",
    descricao:
      "Para barbearias e salões que querem transmitir cuidado desde o primeiro clique. Serviços com preços, equipe, galeria de cortes e agendamento direto pelo WhatsApp.",
    incluso: [
      "Página única com rolagem suave",
      "Tabela de serviços e preços",
      "Apresentação da equipe",
      "Galeria de cortes",
      "Mapa, horários e contato",
      "Botão de agendamento pelo WhatsApp",
    ],
    personalizacao: ["Logo e cores da marca", "Fotos do espaço e da equipe", "Serviços e valores", "Domínio próprio"],
    demoUrl: "",
    paleta: { fundo: "#141210", texto: "#efe6d6", acento: "#b8925a", suave: "#2a2420" },
  },
  {
    slug: "buffet",
    nome: "Maison Itinerante",
    segmento: "Restaurante",
    segmentos: ["restaurante", "servicos"],
    chamada: "A experiência do buffet onde o cliente estiver.",
    descricao:
      "Para buffets e chefs que atendem em casa, sítios e empresas. Apresenta a gastronomia, os tipos de evento e recebe pedidos de orçamento completos pelo WhatsApp.",
    incluso: [
      "Apresentação do chef e da equipe",
      "Cardápios por tipo de evento",
      "Galeria de eventos realizados",
      "Depoimentos de clientes",
      "Formulário de orçamento pelo WhatsApp",
      "SEO para buscas da sua cidade",
    ],
    personalizacao: ["Identidade visual completa", "Cardápios e fotos reais", "Tipos de evento atendidos", "Domínio próprio"],
    demoUrl: "",
    paleta: { fundo: "#0c0c0c", texto: "#f5f1e8", acento: "#c9a14a", suave: "#1d1b17" },
  },
  {
    slug: "marmitas",
    nome: "Prato Nobre",
    segmento: "Restaurante",
    segmentos: ["restaurante", "loja-online"],
    chamada: "Cardápio da semana, pedido em um toque.",
    descricao:
      "Para marmitarias e cozinhas de delivery. Cardápio organizado por categorias, montagem do pedido e envio direto para o WhatsApp da cozinha.",
    incluso: [
      "Cardápio por categorias",
      "Montagem do pedido na tela",
      "Envio do pedido pelo WhatsApp",
      "Avaliações do Google",
      "Mapa e área de entrega",
      "Página rápida no celular",
    ],
    personalizacao: ["Logo e cores da marca", "Cardápio e preços", "Regras de entrega", "Domínio próprio"],
    demoUrl: "",
    paleta: { fundo: "#1a1411", texto: "#f3e9da", acento: "#c7743e", suave: "#2b211b" },
  },
  {
    slug: "educacao",
    nome: "Atlas Estudos",
    segmento: "Educação",
    segmentos: ["educacao", "cursos", "blog"],
    chamada: "Conteúdo organizado, aluno engajado.",
    descricao:
      "Para professores, escolas e cursos. Disciplinas, apostilas em páginas de leitura, simulados com correção na hora e gerador de provas para imprimir.",
    incluso: [
      "Páginas por disciplina ou curso",
      "Apostilas em capítulos para leitura",
      "Simulados com correção automática",
      "Gerador de provas para impressão",
      "Busca no conteúdo",
      "Modo claro e escuro",
    ],
    personalizacao: ["Marca da escola ou do professor", "Disciplinas e materiais", "Banco de questões", "Domínio próprio"],
    demoUrl: "",
    paleta: { fundo: "#0f1624", texto: "#e9eef7", acento: "#e8743b", suave: "#1a2436" },
  },
];

// Valores em reais, usados pelo simulador (definidos com base na pesquisa de mercado de 2026-10-18).

export type Pacote = {
  id: string;
  nome: string;
  valor: number; // pagamento único
  prazo: string; // EXEMPLO
  resumo: string;
  itens: string[];
  comMarketing?: boolean;
};

export const pacotes: Pacote[] = [
  {
    id: "site",
    nome: "Site estilizado",
    valor: 790,
    prazo: "até 15 dias úteis", // EXEMPLO
    resumo: "O modelo escolhido, vestido com a identidade da sua marca.",
    itens: [
      "Modelo personalizado com logo, cores e fotos",
      "Textos ajustados ao seu negócio",
      "Adaptado para celular",
      "Botão de WhatsApp",
      "SEO básico e Google Meu Negócio",
      "Publicação no seu domínio",
    ],
  },
  {
    id: "site-marketing",
    nome: "Site + Marketing",
    valor: 1890,
    prazo: "até 25 dias úteis", // EXEMPLO
    resumo: "O site pronto para atrair, cadastrar e vender.",
    itens: [
      "Tudo do Site estilizado",
      "Cadastro de clientes com consentimento LGPD",
      "Banco de dados para campanhas",
      "Configuração das ferramentas de marketing",
      "Google Search Console e métricas",
      "Treinamento de uso",
    ],
    comMarketing: true,
  },
];

export type PlanoAjuste = { id: string; nome: string; ajustes: number; valor: number | null; descricao: string };

// Plano mensal: quantos ajustes por mês o cliente precisa.
export const planosAjuste: PlanoAjuste[] = [
  { id: "nenhum", nome: "Sem plano", ajustes: 0, valor: 0, descricao: "Ajustes avulsos quando precisar." },
  { id: "um", nome: "1 ajuste", ajustes: 1, valor: 90, descricao: "Uma alteração por mês." }, // valor confirmado
  { id: "dois", nome: "2 ajustes", ajustes: 2, valor: 160, descricao: "Duas alterações por mês." }, // valor confirmado
  { id: "tres", nome: "3 ajustes", ajustes: 3, valor: 220, descricao: "Três alterações por mês." }, // valor confirmado
  { id: "mais", nome: "4 ou mais", ajustes: 4, valor: null, descricao: "Plano sob medida para a sua rotina." },
];

export const exemplosAjuste = [
  "Trocar fotos, textos ou preços",
  "Publicar uma promoção ou novidade",
  "Incluir um serviço ou produto",
  "Atualizar horários e contatos",
];

export type Extra = { id: string; nome: string; preco: string; descricao: string };

export const extras: Extra[] = [
  { id: "dominio", nome: "Domínio .com.br", preco: "R$ 40 por ano", descricao: "Registro oficial no Registro.br, pago direto pelo cliente." },
  { id: "hospedagem", nome: "Hospedagem Cloudflare", preco: "sem custo no plano gratuito", descricao: "Rápida, segura e com certificado SSL." },
  { id: "email", nome: "E-mail profissional", preco: "a partir de R$ 0", descricao: "Zoho Mail ou Google Workspace." },
];

export type Ferramenta = { id: string; nome: string; descricao: string; plataformas: string; mensal: number };

export const ferramentas: Ferramenta[] = [
  {
    id: "email-marketing",
    nome: "Marketing por e-mail",
    descricao: "Newsletters, promoções e mensagens de aniversário enviadas para a base de clientes do seu site.",
    plataformas: "Brevo, RD Station",
    mensal: 290,
  },
  {
    id: "sms",
    nome: "Marketing por SMS",
    descricao: "Lembretes de horário, confirmações e campanhas curtas que chegam até quem não abre e-mail.",
    plataformas: "Zenvia, Twilio. Envios pagos à parte",
    mensal: 190,
  },
  {
    id: "seo",
    nome: "Marketing por SEO",
    descricao: "Estrutura, textos e dados preparados para o seu site aparecer quando o cliente pesquisa no Google.",
    plataformas: "Google Search Console, Google Meu Negócio",
    mensal: 390,
  },
  {
    id: "automacao",
    nome: "Marketing por automação",
    descricao: "Fluxos no WhatsApp e no e-mail que respondem, lembram e vendem enquanto você atende.",
    plataformas: "API oficial do WhatsApp. Taxas da Meta à parte",
    mensal: 490,
  },
];

export const etapas = [
  { titulo: "Escolha o modelo", texto: "Navegue pela galeria e abra a demonstração do modelo que mais combina com o seu negócio." },
  { titulo: "Conte a sua história", texto: "Preencha um briefing curto: marca, cores, páginas e o que o site precisa fazer." },
  { titulo: "Nós criamos", texto: "Personalizamos cada detalhe com a sua identidade e mostramos a prévia antes de publicar." },
  { titulo: "Seu site no ar", texto: "Publicamos no seu domínio e seguimos juntos com os ajustes mensais do seu plano." },
];

export const kit = [
  { item: "Domínio", sugestao: "Registro.br para .com.br; Cloudflare para .com" },
  { item: "Hospedagem", sugestao: "Cloudflare, com plano gratuito para começar" },
  { item: "E-mail profissional", sugestao: "Zoho Mail ou Google Workspace" },
  { item: "Banco de dados", sugestao: "Supabase, com login e painel de clientes" },
  { item: "Pagamentos", sugestao: "Mercado Pago ou Asaas: Pix, cartão e boleto" },
  { item: "WhatsApp", sugestao: "WhatsApp Business e API oficial para automação" },
];

// Sites reais de clientes já entregues.
// Só aparecem no site com autorizado: true (autorização do dono do negócio).
export type Cliente = {
  nome: string;
  segmento: string;
  descricao: string;
  url: string;
  imagem?: string; // foto de tela em /public/portfolio, opcional
  autorizado: boolean;
};

export const clientes: Cliente[] = [
  {
    nome: "Casa do Chef",
    segmento: "Buffet itinerante",
    descricao: "Site elegante para buffet que atende em casas, sítios e empresas, com pedido de orçamento pelo WhatsApp.",
    url: "https://casadochefvr.com.br",
    autorizado: false, // aguardando autorização do dono
  },
  {
    nome: "Só Chef",
    segmento: "Marmitaria",
    descricao: "Cardápio de marmitas organizado por categorias, com pedido direto pelo WhatsApp.",
    url: "https://marmitasdochef.netlify.app",
    autorizado: false, // aguardando autorização da dona
  },
];

export const clientesPublicados = clientes.filter((c) => c.autorizado);

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export function reais(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
