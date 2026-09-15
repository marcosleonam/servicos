// Ícones embutidos, traço de 1.5px, herdando currentColor.
//
// Biblioteca de ícone por CDN quebra com o CSP desta página, pisca no
// carregamento e coloca um servidor de terceiro entre o visitante e o
// site. São poucos desenhos — cabem aqui.
const CAMINHOS = {
  seta: <path d="M5 12h14M13 6l6 6-6 6" />,
  baixo: <path d="m6 9 6 6 6-6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  raio: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  conversa: <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-3.9-.9L3 21l1.9-5.1A8.4 8.4 0 0 1 4 11.5a8.4 8.4 0 0 1 8.5-8.4h.5a8.4 8.4 0 0 1 8 8.4z" />,
  alvo: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  camadas: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5z" />
      <path d="m3 14 9 5 9-5" />
    </>
  ),
  busca: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.6-3.6" />
    </>
  ),
  janela: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
    </>
  ),
  escudo: <path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6l-8-3z" />,
  relogio: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  mais: <path d="M12 5v14M5 12h14" />,
};

export default function Icone({ nome, tamanho = 20, className = "" }) {
  const d = CAMINHOS[nome];
  if (!d) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      width={tamanho}
      height={tamanho}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      {d}
    </svg>
  );
}
