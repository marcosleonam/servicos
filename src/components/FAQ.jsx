import { useState } from "react";
import { faq } from "../config";
import Revelar from "./Revelar";
import Icone from "./Icone";

function Item({ p, r, i }) {
  const [aberto, setAberto] = useState(false);
  return (
    <Revelar atraso={Math.min(i + 1, 5)} className="border-b border-line">
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent-soft focus-visible:text-accent-soft focus-visible:outline-none"
      >
        <span className="display text-base sm:text-lg">{p}</span>
        <Icone
          nome="mais"
          tamanho={18}
          className={
            "text-accent transition-transform duration-300 " + (aberto ? "rotate-45" : "")
          }
        />
      </button>
      <div
        className={
          "grid transition-all duration-300 ease-out " +
          (aberto ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0")
        }
      >
        <p className="overflow-hidden text-sm leading-relaxed text-white/60">{r}</p>
      </div>
    </Revelar>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="secao px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Revelar as="p" anim="anim-lado" className="etiqueta text-accent-soft/70">
          04 — Perguntas
        </Revelar>
        <Revelar as="h2" className="display mt-5 text-4xl sm:text-5xl">
          <span className="letra-vazada">O que sempre</span>{" "}
          <span className="letra-vazada chave">me perguntam</span>
        </Revelar>
        <div className="mt-8">
          {faq.map((f, i) => (
            <Item key={f.p} p={f.p} r={f.r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
