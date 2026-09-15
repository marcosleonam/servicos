import Section from "./Section";

const pontos = [
  {
    t: "Você fala comigo",
    d: "Não tem atendente no meio, nem estagiário mexendo na sua conta. Quem responde no WhatsApp é quem executa.",
  },
  {
    t: "A conta é sua",
    d: "Business Manager, conta de anúncio e pixel ficam no seu nome — eu entro como administrador. Se um dia a gente parar, você não perde histórico.",
  },
  {
    t: "Eu resolvo o depois do clique",
    d: "Quase todo gestor entrega o clique e some. Aqui o site que recebe e o agente que responde fazem parte do mesmo trabalho.",
  },
];

export default function PorQue() {
  return (
    <Section id="porque" className="px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <p className="etiqueta text-[10px] text-accent-soft/70">
              Por que comigo
            </p>
            <h2 className="display mt-4 text-4xl leading-[0.95] sm:text-5xl">
              Sou gestor
              <br />
              de tráfego.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/55">
              A parte de IA veio depois — porque o clique chegava e parava no
              atendimento. Hoje eu trato as duas pontas como o mesmo problema.
            </p>
            <div className="mt-7 inline-flex items-baseline gap-3 rounded-2xl border border-line bg-ink-2/60 px-5 py-4">
              <span className="display text-4xl text-accent">19</span>
              <span className="text-sm leading-tight text-white/55">
                contas de anúncio
                <br />
                sob gestão hoje
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {pontos.map((p) => (
              <div
                key={p.t}
                className="rounded-2xl border border-line bg-ink-2/50 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
