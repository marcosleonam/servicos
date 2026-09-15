import Revelar from "./Revelar";
import { BotaoBrilhante } from "./Botoes";

export default function CTAFinal() {
  return (
    <section id="contato" className="secao px-6 py-20 md:py-28">
      <Revelar
        luz
        className="card card-luz relative mx-auto max-w-4xl overflow-hidden px-6 py-16 text-center sm:px-12"
        style={{
          "--borda-degrade":
            "linear-gradient(140deg, rgba(45,127,255,0.6), rgba(20,214,255,0.2) 45%, transparent 78%)",
          "--borda-raio": "22px",
        }}
      >
        <div
          aria-hidden="true"
          className="brilho-azul pointer-events-none absolute -top-28 left-1/2 h-72 w-[680px] -translate-x-1/2"
        />
        <div className="relative">
          <h2 className="display text-4xl leading-[1.05] sm:text-5xl">
            <span className="letra-vazada">Me conta o seu cenário.</span>
            <br />
            <span className="letra-azul">Eu te digo se dá.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60">
            Não tem proposta pronta esperando você. Primeiro eu entendo o que
            você vende e pra quem — e se o seu caso não fechar, eu falo na hora.
          </p>
          <div className="mt-8 flex justify-center">
            <BotaoBrilhante texto="Vim pelo site. Quero conversar sobre o meu cenário.">
              Chamar no WhatsApp
            </BotaoBrilhante>
          </div>
        </div>
      </Revelar>
    </section>
  );
}
