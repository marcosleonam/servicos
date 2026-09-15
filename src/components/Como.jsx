import Revelar from "./Revelar";

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
    <section id="como" className="secao px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Revelar as="p" anim="anim-lado" className="etiqueta text-accent-soft/70">
          03 — Como funciona
        </Revelar>
        <Revelar as="h2" className="display mt-5 text-4xl sm:text-5xl">
          <span className="letra-vazada">Três passos.</span>{" "}
          <span className="letra-vazada chave">Sem mistério.</span>
        </Revelar>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {passos.map((p, i) => (
            <Revelar
              key={p.n}
              luz
              anim="anim-coluna"
              atraso={i + 1}
              className="card card-luz p-6"
            >
              <span className="letra-contorno block text-6xl leading-none">{p.n}</span>
              <h3 className="display mt-4 text-lg text-white">{p.t}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">{p.d}</p>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  );
}
