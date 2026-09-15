import CTAButton from "./CTAButton";
import Section from "./Section";

export default function CTAFinal() {
  return (
    <Section id="contato" className="px-6">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-ink-2 px-6 py-14 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="brilho-azul pointer-events-none absolute -top-24 left-1/2 h-72 w-[680px] -translate-x-1/2"
        />
        <div className="relative">
          <h2 className="display text-4xl leading-[0.95] sm:text-5xl">
            Me conta o seu cenário.
            <br />
            <span className="texto-degrade">Eu te digo se dá.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60">
            Não tem proposta pronta esperando você. Primeiro eu entendo o que
            você vende e pra quem — e se o seu caso não fechar, eu falo na hora.
          </p>
          <CTAButton
            className="mt-8"
            texto="Vim pelo site. Quero conversar sobre o meu cenário."
          >
            Chamar no WhatsApp
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
