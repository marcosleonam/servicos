import { motion } from "framer-motion";
import { servicos } from "../config";
import { abrirWhatsApp } from "../contato";
import Section from "./Section";

export default function Servicos() {
  return (
    <Section id="servicos" className="px-6">
      <div className="mx-auto max-w-6xl">
        <p className="etiqueta text-[10px] text-accent-soft/70">O que eu faço</p>
        <h2 className="display mt-4 text-4xl sm:text-5xl md:text-6xl">
          Cinco serviços.
          <br />
          <span className="text-white/35">Um objetivo só: venda.</span>
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((s, i) => (
            <motion.button
              key={s.id}
              type="button"
              onClick={() => abrirWhatsApp(s.msg)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="borda-viva group flex cursor-pointer flex-col rounded-2xl bg-ink-2 p-6 text-left transition-colors duration-300 hover:bg-ink-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <div className="flex items-center justify-between">
                <span className="etiqueta text-[10px] text-accent">{s.tag}</span>
                <span className="etiqueta text-[10px] text-white/20">
                  {s.indice}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-tight text-white">
                {s.titulo}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/55">
                {s.linha}
              </p>

              <ul className="mt-5 space-y-2 border-t border-line pt-5">
                {s.itens.map((t) => (
                  <li
                    key={t}
                    className="flex gap-2.5 text-[13px] leading-snug text-white/50"
                  >
                    <span aria-hidden="true" className="text-accent">
                      —
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-soft transition-colors group-hover:text-white">
                Falar sobre isso
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </motion.button>
          ))}

          {/* sexto lugar da grade: fecha o bloco em vez de deixar buraco */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
            className="flex flex-col justify-center rounded-2xl border border-dashed border-line p-6"
          >
            <p className="text-lg font-semibold leading-snug text-white/85">
              Precisa de duas coisas ao mesmo tempo?
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-white/50">
              Anúncio sem site que converte é dinheiro jogado fora. Site sem
              quem responda é vitrine. Normalmente a gente monta o conjunto —
              e eu te digo a ordem certa.
            </p>
            <button
              type="button"
              onClick={() =>
                abrirWhatsApp(
                  "Vim pelo site. Preciso de mais de um serviço e quero saber a ordem certa de fazer."
                )
              }
              className="mt-5 self-start text-sm font-semibold text-accent-soft underline underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              Me explica no WhatsApp →
            </button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
