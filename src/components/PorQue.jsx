import Revelar from "./Revelar";
import Icone from "./Icone";

const pontos = [
  {
    icone: "conversa",
    t: "Você fala comigo",
    d: "Não tem atendente no meio, nem estagiário mexendo na sua conta. Quem responde no WhatsApp é quem executa.",
  },
  {
    icone: "escudo",
    t: "A conta é sua",
    d: "Business Manager, conta de anúncio e pixel ficam no seu nome — eu entro como administrador. Se um dia a gente parar, você não perde histórico.",
  },
  {
    icone: "alvo",
    t: "Eu resolvo o depois do clique",
    d: "Quase todo gestor entrega o clique e some. Aqui o site que recebe e o agente que responde fazem parte do mesmo trabalho.",
  },
];

export default function PorQue() {
  return (
    <section id="porque" className="secao px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <Revelar as="p" anim="anim-lado" className="etiqueta text-accent-soft/70">
              02 — Por que comigo
            </Revelar>
            <Revelar as="h2" className="display mt-5 text-4xl leading-[1.05] sm:text-5xl">
              <span className="letra-vazada">Sou gestor</span>
              <br />
              <span className="letra-vazada chave">de tráfego.</span>
            </Revelar>
            <Revelar as="p" atraso={1} className="mt-5 max-w-md text-base leading-relaxed text-white/55">
              A parte de IA veio depois — porque o clique chegava e parava no
              atendimento. Hoje eu trato as duas pontas como o mesmo problema.
            </Revelar>

            <Revelar
              atraso={2}
              className="card mt-7 inline-flex items-baseline gap-3 px-5 py-4"
              style={{
                "--borda-degrade":
                  "linear-gradient(140deg, rgba(45,127,255,0.5), transparent 65%)",
                "--borda-raio": "22px",
              }}
            >
              <span className="display text-4xl text-accent">19</span>
              <span className="text-sm leading-tight text-white/55">
                contas de anúncio
                <br />
                sob gestão hoje
              </span>
            </Revelar>
          </div>

          <div className="grid gap-4">
            {pontos.map((p, i) => (
              <Revelar
                key={p.t}
                luz
                atraso={i + 1}
                className="card card-luz p-6"
                style={{
                  "--borda-degrade":
                    "linear-gradient(140deg, rgba(45,127,255,0.35), transparent 62%)",
                  "--borda-raio": "22px",
                }}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent-soft">
                  <Icone nome={p.icone} tamanho={20} />
                </span>
                <h3 className="display mt-4 text-lg text-white">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{p.d}</p>
              </Revelar>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
