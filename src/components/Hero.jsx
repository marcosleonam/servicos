import { motion } from "framer-motion";
import Agente from "./Agente";
import retrato from "../img/marcos.jpg";
import { site } from "../config";

const surge = {
  hidden: { opacity: 0, y: 22 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.06 * i },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-14 pt-16 md:pb-20 md:pt-24">
      {/* brilho difuso atrás do bloco — profundidade sem imagem de fundo */}
      <div
        aria-hidden="true"
        className="brilho-azul pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 opacity-70 blur-[2px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          variants={surge}
          initial="hidden"
          animate="show"
          custom={0}
          className="etiqueta text-[10px] text-accent-soft/80 sm:text-[11px]"
        >
          {site.papel}
        </motion.p>

        <motion.h1
          variants={surge}
          initial="hidden"
          animate="show"
          custom={1}
          className="display mt-5 max-w-4xl text-[2.6rem] leading-[0.94] xs:text-5xl sm:text-6xl md:text-7xl"
        >
          Clique é fácil.
          <br />
          O difícil é{" "}
          <span className="texto-degrade">o que vem depois.</span>
        </motion.h1>

        <motion.p
          variants={surge}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg"
        >
          Meta, Google e TikTok pra trazer gente. Site e agente de IA pra não
          perder ninguém que chegou. Sou eu que faço — você fala comigo, não com
          um atendente da agência.
        </motion.p>

        <div className="mt-11 grid items-start gap-8 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-10">
          {/* retrato */}
          <motion.div
            variants={surge}
            initial="hidden"
            animate="show"
            custom={3}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="brilho-azul absolute -inset-6 opacity-60 blur-xl"
            />
            <div className="borda-viva relative overflow-hidden rounded-3xl bg-ink-2">
              <img
                src={retrato}
                alt="Marcos Leonam"
                width="1080"
                height="1350"
                loading="eager"
                className="aspect-[4/3] w-full object-cover object-top sm:aspect-[16/10] md:aspect-[4/5]"
              />
              {/* o pé da foto se dissolve no fundo em vez de cortar reto */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="display text-2xl leading-none">{site.nome}</p>
                <p className="etiqueta mt-2 text-[10px] text-white/45">
                  Meta Ads · Google Ads · TikTok Ads · Sites · Agentes de IA
                </p>
              </div>
            </div>
          </motion.div>

          {/* agente de triagem */}
          <motion.div
            variants={surge}
            initial="hidden"
            animate="show"
            custom={4}
            className=""
          >
            <p className="mb-3 text-sm text-white/45">
              Não sabe por onde começar? Responde 3 perguntas — eu te digo o
              caminho e já abro seu WhatsApp preenchido.
            </p>
            <Agente />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
