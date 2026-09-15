import { servicos } from "../config";
import { abrirWhatsApp } from "../contato";
import Revelar from "./Revelar";
import Icone from "./Icone";

const ICONES = {
  meta: "conversa",
  google: "busca",
  tiktok: "raio",
  site: "janela",
  agente: "alvo",
};

export default function Servicos() {
  return (
    <section id="servicos" className="secao px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Revelar as="p" anim="anim-lado" className="etiqueta text-accent-soft/70">
          01 — O que eu faço
        </Revelar>
        <Revelar as="h2" className="display mt-5 text-4xl sm:text-5xl md:text-[3.4rem]">
          <span className="letra-vazada chave">Cinco serviços.</span>{" "}
          <span className="letra-vazada">Um objetivo só:</span>{" "}
          <span className="letra-azul">venda.</span>
        </Revelar>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <Revelar
              key={s.id}
              as="button"
              type="button"
              anim="anim-coluna"
              atraso={Math.min(i + 1, 5)}
              luz
              onClick={() => abrirWhatsApp(s.msg)}
              className="card card-luz group flex w-full cursor-pointer flex-col p-6 text-left"
              style={{
                "--borda-degrade":
                  "linear-gradient(140deg, rgba(45,127,255,0.42), transparent 62%)",
                "--borda-raio": "22px",
              }}
            >
                <span className="flex w-full items-center justify-between">
                  <span className="etiqueta text-[10px] text-accent">{s.tag}</span>
                  <span className="etiqueta text-[10px] text-white/20">{s.indice}</span>
                </span>

                <span className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-accent/20 group-hover:text-white">
                  <Icone nome={ICONES[s.id]} tamanho={20} />
                </span>

                <span className="display mt-4 block text-xl text-white">{s.titulo}</span>
                <span className="mt-2.5 block text-sm leading-relaxed text-white/55">
                  {s.linha}
                </span>

                <span className="mt-5 block w-full border-t border-line pt-5">
                  {s.itens.map((t) => (
                    <span key={t} className="mb-2 flex gap-2.5 text-[13px] leading-snug text-white/50">
                      <Icone nome="check" tamanho={14} className="mt-0.5 text-accent" />
                      {t}
                    </span>
                  ))}
                </span>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-soft transition-colors group-hover:text-white">
                  Falar sobre isso
                  <Icone
                    nome="seta"
                    tamanho={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
            </Revelar>
          ))}

          {/* sexto lugar da grade: fecha o bloco em vez de deixar buraco */}
          <Revelar
            anim="anim-coluna"
            atraso={6}
            className="flex flex-col justify-center rounded-[22px] border border-dashed border-line-2 p-6"
          >
            <p className="display text-lg leading-snug text-white/85">
              Precisa de duas coisas ao mesmo tempo?
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-white/50">
              Anúncio sem site que converte é dinheiro jogado fora. Site sem quem
              responda é vitrine. Normalmente a gente monta o conjunto — e eu te
              digo a ordem certa.
            </p>
            <button
              type="button"
              onClick={() =>
                abrirWhatsApp(
                  "Vim pelo site. Preciso de mais de um serviço e quero saber a ordem certa de fazer."
                )
              }
              className="mt-5 inline-flex cursor-pointer items-center gap-2 self-start text-sm font-semibold text-accent-soft transition-colors hover:text-white"
            >
              Me explica no WhatsApp
              <Icone nome="seta" tamanho={15} />
            </button>
          </Revelar>
        </div>
      </div>
    </section>
  );
}
