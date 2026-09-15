import Agente from "./Agente";
import Icone from "./Icone";
import { BotaoBrilhante, BotaoOrbita } from "./Botoes";
import retrato from "../img/marcos.jpg";
import { site } from "../config";

// As palavras do título entram como spans separados porque o sistema
// pinta cada uma com opacidade própria: as de apoio em 55%, a
// palavra-chave em 100% e o fecho no degradê azul. É o "lettering
// transparente" — duas camadas de leitura usando uma cor só.
const TITULO = [
  { t: "Clique", cor: "vazada" },
  { t: "é", cor: "vazada" },
  { t: "fácil.", cor: "vazada" },
  { t: "O", cor: "vazada" },
  { t: "difícil", cor: "chave" },
  { t: "é", cor: "vazada" },
  { t: "o", cor: "azul" },
  { t: "que", cor: "azul" },
  { t: "vem", cor: "azul" },
  { t: "depois.", cor: "azul" },
];

const classePalavra = (cor) =>
  cor === "azul" ? "letra-azul" : cor === "chave" ? "letra-vazada chave" : "letra-vazada";

export default function Hero() {
  return (
    <header id="topo" className="secao relative overflow-hidden px-6 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="relative mx-auto max-w-6xl">

        <div className="text-center">
          <span
            className="badge anim-surgir atraso-1"
            style={{
              "--borda-degrade":
                "linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0), rgba(255,255,255,0.12))",
              "--borda-raio": "9999px",
            }}
          >
            <span className="ponto" /> Atendendo o Brasil inteiro — remoto
          </span>

          <h1 className="h-hero anim-surgir atraso-2 mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-x-[0.24em]">
            {TITULO.map((p, i) => (
              <span key={i} className={classePalavra(p.cor)}>
                {p.t}
              </span>
            ))}
          </h1>

          <p className="anim-surgir atraso-3 mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            Meta, Google e TikTok pra trazer gente. Site e agente de IA pra não
            perder ninguém que chegou. Sou eu que faço — você fala comigo, não
            com um atendente da agência.
          </p>

          <div className="anim-surgir atraso-4 mt-9 flex flex-wrap items-center justify-center gap-4">
            <BotaoBrilhante texto="Vim pelo site. Quero conversar sobre o meu cenário.">
              Falar comigo agora
            </BotaoBrilhante>
            <BotaoOrbita href="#servicos" icone="baixo">
              Ver os serviços
            </BotaoOrbita>
          </div>
        </div>

        <div className="mt-14 grid items-start gap-8 md:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] md:gap-10">
          {/* retrato */}
          <div className="anim-coluna atraso-5 relative">
            <div
              aria-hidden="true"
              className="brilho-azul absolute -inset-6 opacity-60 blur-xl"
            />
            <div
              className="card relative"
              style={{
                "--borda-degrade":
                  "linear-gradient(140deg, rgba(45,127,255,0.55), rgba(20,214,255,0.18) 45%, transparent 75%)",
                "--borda-raio": "22px",
              }}
            >
              <div className="relative">
                <img
                  src={retrato}
                  alt={site.nome}
                  width="1080"
                  height="1341"
                  loading="eager"
                  className="aspect-[5/4] w-full object-cover object-[center_22%] sm:aspect-[16/10] md:aspect-[4/5] md:object-[center_18%]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-2 to-transparent"
                />
              </div>
              {/* nome fora da imagem: sobreposto, caía no queixo no celular */}
              <div className="px-5 pb-5">
                <p className="display text-2xl leading-none">{site.nome}</p>
                <p className="etiqueta mt-2 text-[10px] leading-relaxed text-white/40">
                  {site.papel}
                </p>
              </div>
            </div>
          </div>

          {/* agente de triagem */}
          <div className="anim-surgir atraso-6">
            <p className="mb-3 flex items-start gap-2 text-sm text-white/45">
              <Icone nome="conversa" tamanho={16} className="mt-0.5 text-accent" />
              Não sabe por onde começar? Responde 3 perguntas — eu te digo o
              caminho e já abro seu WhatsApp preenchido.
            </p>
            <Agente />
          </div>
        </div>
      </div>
    </header>
  );
}
