/* ══════════════════════════════════════════════════════════════════
   DESIGN SYSTEM — comportamento
   Quatro coisas, nenhuma essencial: se este arquivo não carregar, a
   página continua legível e navegável. Toda animação de surgimento já
   está declarada no CSS; o JS só solta o play-state.
   ══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var paradoDeMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── 1. Reveal on scroll ──────────────────────────────────────── */
  function revelar() {
    var alvos = document.querySelectorAll(".no-scroll");
    if (!alvos.length) return;
    if (!("IntersectionObserver" in window)) {
      alvos.forEach(function (el) { el.classList.add("visivel"); });
      return;
    }
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("visivel");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -4% 0px" });
    alvos.forEach(function (el) { io.observe(el); });
  }

  /* ── 2. Luz que segue o cursor nos cards ──────────────────────── */
  function luzNosCards() {
    document.querySelectorAll(".card-luz").forEach(function (card) {
      card.addEventListener("mousemove", function (ev) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", (ev.clientX - r.left) + "px");
        card.style.setProperty("--my", (ev.clientY - r.top) + "px");
      });
    });
  }

  /* ── 3. Partículas do fundo ───────────────────────────────────── */
  /* Substitui o WebGL de terceiro do template original. 2D, poucas
     partículas, pausa quando a aba sai de foco. */
  function particulas() {
    var tela = document.getElementById("particulas");
    if (!tela || paradoDeMovimento) return;

    var ctx = tela.getContext("2d");
    var pontos = [];
    var animando = true;
    var quadro = null;

    function dimensionar() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      tela.width = tela.offsetWidth * dpr;
      tela.height = tela.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function semear() {
      pontos = [];
      var largura = tela.offsetWidth;
      var altura = tela.offsetHeight;
      // densidade proporcional, com teto: celular não precisa de 90 pontos
      var quantos = Math.min(Math.round((largura * altura) / 26000), 80);
      for (var i = 0; i < quantos; i++) {
        pontos.push({
          x: Math.random() * largura,
          y: Math.random() * altura,
          r: Math.random() * 1.4 + 0.35,
          vx: (Math.random() - 0.5) * 0.14,
          vy: -(Math.random() * 0.22 + 0.04),
          a: Math.random() * 0.5 + 0.12
        });
      }
    }

    function desenhar() {
      if (!animando) return;
      var largura = tela.offsetWidth;
      var altura = tela.offsetHeight;
      ctx.clearRect(0, 0, largura, altura);
      for (var i = 0; i < pontos.length; i++) {
        var p = pontos[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = altura + 10; p.x = Math.random() * largura; }
        if (p.x < -10) p.x = largura + 10;
        if (p.x > largura + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(138, 186, 255, " + p.a + ")";
        ctx.fill();
      }
      quadro = requestAnimationFrame(desenhar);
    }

    dimensionar();
    semear();
    desenhar();

    window.addEventListener("resize", function () { dimensionar(); semear(); }, { passive: true });
    document.addEventListener("visibilitychange", function () {
      animando = !document.hidden;
      if (animando) { desenhar(); } else if (quadro) { cancelAnimationFrame(quadro); }
    });
  }

  /* ── 4. Modal de demonstração ─────────────────────────────────── */
  function modais() {
    document.querySelectorAll("[data-abre-modal]").forEach(function (b) {
      b.addEventListener("click", function () {
        var alvo = document.getElementById(b.getAttribute("data-abre-modal"));
        if (alvo) alvo.setAttribute("data-aberto", "1");
      });
    });
    document.querySelectorAll("[data-fecha-modal]").forEach(function (b) {
      b.addEventListener("click", function () {
        var f = b.closest(".modal-fundo");
        if (f) f.removeAttribute("data-aberto");
      });
    });
    document.querySelectorAll(".modal-fundo").forEach(function (f) {
      f.addEventListener("click", function (ev) {
        if (ev.target === f) f.removeAttribute("data-aberto");
      });
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key !== "Escape") return;
      document.querySelectorAll('.modal-fundo[data-aberto="1"]').forEach(function (f) {
        f.removeAttribute("data-aberto");
      });
    });
  }

  function iniciar() {
    revelar();
    luzNosCards();
    particulas();
    modais();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
