import { site } from "../config";
import { BotaoOrbita } from "./Botoes";
import { abrirWhatsApp } from "../contato";

const LINKS = [
  { id: "servicos", rotulo: "Serviços" },
  { id: "porque", rotulo: "Por que comigo" },
  { id: "como", rotulo: "Como funciona" },
  { id: "faq", rotulo: "Perguntas" },
];

export default function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        "--borda-degrade":
          "linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0), rgba(255,255,255,0.18))",
        "--borda-raio": "9999px",
      }}
    >
      <a href="#topo" className="inline-flex items-center gap-2.5 text-white no-underline">
        <span className="marca-grade" aria-hidden="true">
          <i /><i /><i /><i />
        </span>
        <strong className="display text-[0.95rem] tracking-tight">{site.nome}</strong>
      </a>

      <span className="links flex items-center gap-6">
        {LINKS.map((l) => (
          <a key={l.id} className="link no-underline" href={`#${l.id}`}>
            {l.rotulo}
          </a>
        ))}
      </span>

      <BotaoOrbita
        className="!h-10 !min-w-0 !px-4 !text-[0.65rem]"
        onClick={() => abrirWhatsApp("Vim pelo site. Quero falar com você.")}
      >
        WhatsApp
      </BotaoOrbita>
    </nav>
  );
}
