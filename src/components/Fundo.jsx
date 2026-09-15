import { useEffect, useRef } from "react";

// ── Cena de fundo ──────────────────────────────────────────────────
// O template de referência pintava o fundo do herói com um projeto
// WebGL hospedado no Unicorn Studio — servidor de terceiro, conta de
// terceiro. Aqui é tudo local: três manchas azuis em CSS, a grade, a
// varredura cônica e um canvas 2D com poucas partículas subindo.
//
// O canvas dorme quando a aba perde o foco e nem chega a existir para
// quem pediu menos movimento no sistema.
export default function Fundo() {
  const tela = useRef(null);

  useEffect(() => {
    const cv = tela.current;
    if (!cv) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = cv.getContext("2d");
    let pontos = [];
    let quadro = null;
    let vivo = true;

    const dimensionar = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = cv.offsetWidth * dpr;
      cv.height = cv.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const semear = () => {
      const l = cv.offsetWidth;
      const a = cv.offsetHeight;
      // densidade proporcional com teto: celular não precisa de 80 pontos
      const quantos = Math.min(Math.round((l * a) / 26000), 70);
      pontos = Array.from({ length: quantos }, () => ({
        x: Math.random() * l,
        y: Math.random() * a,
        r: Math.random() * 1.4 + 0.35,
        vx: (Math.random() - 0.5) * 0.14,
        vy: -(Math.random() * 0.22 + 0.04),
        a: Math.random() * 0.5 + 0.12,
      }));
    };

    const desenhar = () => {
      if (!vivo) return;
      const l = cv.offsetWidth;
      const a = cv.offsetHeight;
      ctx.clearRect(0, 0, l, a);
      for (const p of pontos) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = a + 10;
          p.x = Math.random() * l;
        }
        if (p.x < -10) p.x = l + 10;
        if (p.x > l + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(138, 186, 255, ${p.a})`;
        ctx.fill();
      }
      quadro = requestAnimationFrame(desenhar);
    };

    const aoRedimensionar = () => {
      dimensionar();
      semear();
    };
    const aoTrocarAba = () => {
      vivo = !document.hidden;
      if (vivo) desenhar();
      else if (quadro) cancelAnimationFrame(quadro);
    };

    dimensionar();
    semear();
    desenhar();
    window.addEventListener("resize", aoRedimensionar, { passive: true });
    document.addEventListener("visibilitychange", aoTrocarAba);

    return () => {
      vivo = false;
      if (quadro) cancelAnimationFrame(quadro);
      window.removeEventListener("resize", aoRedimensionar);
      document.removeEventListener("visibilitychange", aoTrocarAba);
    };
  }, []);

  return (
    <>
      <div className="fundo-cena" aria-hidden="true">
        <div className="fundo-varredura" />
        <div className="fundo-mancha a" />
        <div className="fundo-mancha b" />
        <div className="fundo-mancha c" />
        <div className="fundo-grade" />
        <canvas ref={tela} className="fundo-particulas" />
      </div>
      <div className="blur-topo" aria-hidden="true">
        <div /><div /><div /><div /><div /><div />
      </div>
    </>
  );
}
