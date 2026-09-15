import { abrirWhatsApp } from "../contato";
import Icone from "./Icone";

// Os três botões do sistema. Nenhum carrega o número no href: o link do
// WhatsApp é montado só no clique, então robô de coleta que lê o HTML
// não encontra contato nenhum.

/** Ação principal da dobra. Um por dobra, nunca dois. */
export function BotaoBrilhante({ texto, children, className = "" }) {
  return (
    <button
      type="button"
      onClick={() => abrirWhatsApp(texto)}
      className={`btn-brilhante ${className}`}
    >
      <span>
        {children}
        <Icone nome="seta" tamanho={16} />
      </span>
    </button>
  );
}

/** Ação secundária com peso: a luz no pé abre no hover. */
export function BotaoOrbita({ children, href, onClick, icone = "seta", className = "" }) {
  const conteudo = (
    <>
      <span className="orbita" />
      <span className="miolo" />
      <span className="brilho-pe" />
      <span className="conteudo">
        {children}
        <Icone nome={icone} tamanho={14} />
      </span>
    </>
  );
  if (href) {
    return (
      <a href={href} className={`btn-orbita ${className}`}>
        {conteudo}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={`btn-orbita ${className}`}>
      {conteudo}
    </button>
  );
}

/** Terciário. */
export function BotaoFantasma({ children, texto, className = "" }) {
  return (
    <button
      type="button"
      onClick={() => abrirWhatsApp(texto)}
      className={`btn-fantasma ${className}`}
    >
      {children}
    </button>
  );
}
