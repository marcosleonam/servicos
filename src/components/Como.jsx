import Section from "./Section";

const passos = [
  {
    n: "01",
    t: "Conversa de diagnóstico",
    d: "15 minutos. Eu pergunto o que você vende, pra quem, e quanto vale um cliente pra você. Se o seu caso não fecha, eu falo na hora — é mais barato pra nós dois.",
  },
  {
    n: "02",
    t: "Proposta com escopo fechado",
    d: "O que entra, o que não entra, prazo e valor. Sem pacote surpresa e sem contrato de fidelidade longa pra te prender.",
  },
  {
    n: "03",
    t: "Execução e número na mesa",
    d: "Campanha no ar, site publicado ou agente respondendo. Relatório do que aconteceu — e do que eu vou mudar por causa disso.",
  },
];

export default function Como() {
  return (
    <Section id="como" className="px-6">
      <div className="mx-auto max-w-6xl">
        <p className="etiqueta text-[10px] text-accent-soft/70">Como funciona</p>
        <h2 className="display mt-4 text-4xl sm:text-5xl">
          Três passos. Sem mistério.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {passos.map((p) => (
            <div
              key={p.n}
              className="rounded-2xl border border-line bg-ink-2/60 p-6"
            >
              <span className="display text-5xl text-accent/25">{p.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-white">{p.t}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
