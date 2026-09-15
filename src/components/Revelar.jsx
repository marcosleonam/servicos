import { useEffect, useRef } from "react";

// ── Revelar ────────────────────────────────────────────────────────
// Aplica a animação de surgimento quando o elemento entra na tela e,
// opcionalmente, a luz que segue o cursor.
//
// A animação já está declarada no CSS e começa PAUSADA; este componente
// só solta o play-state. A pausa, por sua vez, só existe quando o
// <html> tem a classe `js-anim` (posta no main.jsx). Resultado: se o
// JavaScript falhar, a página aparece inteira e parada — nunca em
// branco esperando um observer que não veio.
//
// `luz` escreve --mx/--my em custom properties a cada movimento do
// mouse: o CSS usa isso pra nascer o halo azul onde o cursor está, sem
// disparar render do React nem layout.
export default function Revelar({
  as: Tag = "div",
  anim = "anim-surgir",
  atraso = 0,
  luz = false,
  className = "",
  children,
  ...resto
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.classList.add("visivel");
      return;
    }
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -4% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const mover = luz
    ? (ev) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${ev.clientX - r.left}px`);
        el.style.setProperty("--my", `${ev.clientY - r.top}px`);
      }
    : undefined;

  const atrasoClasse = atraso ? ` atraso-${atraso}` : "";
  return (
    <Tag
      ref={ref}
      onMouseMove={mover}
      className={`no-scroll ${anim}${atrasoClasse} ${className}`}
      {...resto}
    >
      {children}
    </Tag>
  );
}
