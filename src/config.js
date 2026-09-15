// ── src/config.js — conteúdo do site (nada sensível) ───────────────
// Contato (WhatsApp, e-mail, Instagram) NÃO mora aqui: fica codificado em
// `contato.js`. Ver o comentário de abertura daquele arquivo.

export const site = {
  nome: "Marcos Leonam",
  papel: "Tráfego pago, sites e agentes de IA",
  url: "https://marcosleonam.github.io/servicos/",
};

// Os 5 serviços. `msg` é a primeira mensagem que cai no WhatsApp quando o
// visitante clica no card — por isso todas começam com "Vim pelo site":
// é esse prefixo que o agente de atendimento usa pra reconhecer lead de
// origem conhecida (ver FRASES_DO_SITE em agente-site-atendimento/src/gate.js).
export const PREFIXO = "Vim pelo site";

export const servicos = [
  {
    id: "meta",
    indice: "01",
    tag: "Meta Ads",
    titulo: "Facebook e Instagram",
    linha: "Campanha feita pra gerar conversa no WhatsApp — não curtida.",
    itens: ["Estrutura de campanha e criativo", "Público, verba e escala", "Relatório do que virou venda"],
    msg: `${PREFIXO}. Quero falar sobre tráfego no Meta Ads (Facebook e Instagram).`,
  },
  {
    id: "google",
    indice: "02",
    tag: "Google Ads",
    titulo: "Quem já está procurando",
    linha: "Aparecer no momento exato em que o cliente digita o que você vende.",
    itens: ["Pesquisa, Performance Max e YouTube", "Palavra certa e lista de negativas", "Conversão medida até o WhatsApp"],
    msg: `${PREFIXO}. Quero falar sobre Google Ads.`,
  },
  {
    id: "tiktok",
    indice: "03",
    tag: "TikTok Ads",
    titulo: "Alcance barato, criativo que roda",
    linha: "O clique mais barato do mercado — quando o criativo é feito pra lá.",
    itens: ["Criativo nativo, não anúncio reciclado", "Teste rápido de ângulo", "Escala do que provou"],
    msg: `${PREFIXO}. Quero falar sobre TikTok Ads.`,
  },
  {
    id: "site",
    indice: "04",
    tag: "Sites",
    titulo: "Pague uma vez ou assine",
    linha: "Site rápido, responsivo e feito pra captar — nos dois modelos.",
    itens: ["Pagamento único: o site é seu", "Mensalidade: site + hospedagem + ajustes", "Entrega em dias, não em meses"],
    msg: `${PREFIXO}. Quero falar sobre a criação de um site.`,
  },
  {
    id: "agente",
    indice: "05",
    tag: "Agentes de IA",
    titulo: "Atendimento que não dorme",
    linha: "Responde em segundos, 24h, qualifica o lead e te entrega mastigado.",
    itens: ["Atende no seu WhatsApp", "Qualifica antes de te chamar", "Passa pra você quando vale a pena"],
    msg: `${PREFIXO}. Quero falar sobre um agente de atendimento.`,
  },
];

export const faq = [
  {
    p: "Você trabalha só com quem é da sua cidade?",
    r: "Não. Tudo é remoto: reunião por chamada, acesso às contas pelo Gerenciador e relatório no seu WhatsApp. Atendo cliente de qualquer estado.",
  },
  {
    p: "Quanto custa?",
    r: "Depende do serviço e do tamanho da operação — anúncio tem gestão mensal, site tem os dois modelos, agente tem implantação + mensalidade. Passa seu cenário no WhatsApp que eu te falo o valor sem enrolação.",
  },
  {
    p: "Preciso ter verba alta pra anunciar?",
    r: "Não, mas precisa ser verba real. Verba pequena demais não sai da fase de teste e você conclui errado que 'anúncio não funciona'. Eu te digo antes de começar se o seu número fecha ou não.",
  },
  {
    p: "Em quanto tempo eu vejo resultado?",
    r: "Anúncio bem estruturado traz conversa na primeira semana. Venda depende do seu atendimento e do seu preço — e é exatamente por isso que existe o agente de atendimento aqui do lado.",
  },
  {
    p: "A conta de anúncio fica no meu nome?",
    r: "Sempre. Business Manager e conta de anúncio são seus, eu entro como administrador. Se um dia a gente parar, você não perde histórico nem pixel.",
  },
];
