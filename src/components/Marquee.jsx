const ITENS = [
  "Meta Ads",
  "Google Ads",
  "TikTok Ads",
  "Sites que convertem",
  "Agentes de IA no WhatsApp",
  "Relatório que você entende",
];

// Faixa em movimento: separa as dobras e repete o vocabulário da oferta sem
// ocupar uma seção inteira. O conteúdo é duplicado porque a animação desloca
// metade da faixa — assim o loop não mostra buraco.
export default function Marquee() {
  const linha = [...ITENS, ...ITENS];
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-line bg-ink-2/40 py-4"
    >
      <div className="marquee-track">
        {linha.map((t, i) => (
          <span
            key={i}
            className="etiqueta flex items-center gap-8 px-8 text-[11px] text-white/30"
          >
            {t}
            <span className="text-accent/50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
