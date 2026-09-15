import { useState } from "react";
import { faq } from "../config";
import Section from "./Section";

function Item({ p, r }) {
  const [aberto, setAberto] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setAberto((v) => !v)}
        aria-expanded={aberto}
        className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors hover:text-accent-soft focus-visible:outline-none focus-visible:text-accent-soft"
      >
        <span className="text-base font-semibold sm:text-lg">{p}</span>
        <span
          aria-hidden="true"
          className={
            "shrink-0 text-xl text-accent transition-transform duration-300 " +
            (aberto ? "rotate-45" : "")
          }
        >
          +
        </span>
      </button>
      <div
        className={
          "grid transition-all duration-300 ease-out " +
          (aberto ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0")
        }
      >
        <p className="overflow-hidden text-sm leading-relaxed text-white/60">
          {r}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <Section id="faq" className="px-6">
      <div className="mx-auto max-w-3xl">
        <p className="etiqueta text-[10px] text-accent-soft/70">Perguntas</p>
        <h2 className="display mt-4 text-4xl sm:text-5xl">
          O que sempre me perguntam
        </h2>
        <div className="mt-8">
          {faq.map((f) => (
            <Item key={f.p} p={f.p} r={f.r} />
          ))}
        </div>
      </div>
    </Section>
  );
}
