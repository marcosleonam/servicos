import { useEffect, useMemo, useRef, useState } from "react";
import Icone from "./Icone";
import { abrirWhatsApp } from "../contato";
import { PREFIXO } from "../config";

// ── Agente de triagem ──────────────────────────────────────────────
//
// POR QUE ELE NÃO USA IA
// O site é estático (GitHub Pages). Um agente de IA de verdade exigiria a
// chave da API dentro do navegador — e qualquer visitante abriria o F12 e
// sairia gastando crédito no cartão do Marcos. Não há como esconder chave em
// página estática. Então a conversa aqui é roteirizada: JavaScript puro, sem
// chave, sem servidor, sem custo, sem superfície de ataque.
//
// O QUE ELE ENTREGA
// Em vez de o lead chegar no WhatsApp com "oi", chega com necessidade,
// cenário e faixa de investimento já declarados. E o visitante vê na prática
// o produto que está sendo vendido logo abaixo.

const PERGUNTA_1 = {
  titulo: "Me diz o que você precisa hoje.",
  opcoes: [
    { id: "ads", rotulo: "Vender mais com anúncio" },
    { id: "site", rotulo: "Ter um site" },
    { id: "agente", rotulo: "Automatizar meu atendimento" },
    { id: "perdido", rotulo: "Quero crescer, mas não sei por onde" },
  ],
};

const PERGUNTA_2 = {
  ads: {
    titulo: "E como está o anúncio hoje?",
    opcoes: [
      { id: "nunca", rotulo: "Nunca anunciei" },
      { id: "falhou", rotulo: "Já tentei e não deu certo" },
      { id: "escalar", rotulo: "Anuncio hoje e quero escalar" },
      { id: "trocar", rotulo: "Tenho agência e quero trocar" },
    ],
  },
  site: {
    titulo: "Que tipo de site você precisa?",
    opcoes: [
      { id: "vendas", rotulo: "Página de vendas / captação" },
      { id: "institucional", rotulo: "Site institucional" },
      { id: "refazer", rotulo: "Tenho um, quero refazer" },
      { id: "naosei", rotulo: "Ainda não sei" },
    ],
  },
  agente: {
    titulo: "Hoje, quem responde o seu WhatsApp?",
    opcoes: [
      { id: "eu", rotulo: "Eu mesmo, no meio do serviço" },
      { id: "atendente", rotulo: "Um atendente" },
      { id: "equipe", rotulo: "Uma equipe" },
      { id: "ninguem", rotulo: "Ninguém — mensagem acumula" },
    ],
  },
  perdido: {
    titulo: "Onde dói mais hoje?",
    opcoes: [
      { id: "pouco", rotulo: "Chega pouca gente" },
      { id: "naofecha", rotulo: "Chega gente e não fecha" },
      { id: "escala", rotulo: "Fecha, mas não escala" },
      { id: "perde", rotulo: "Perco mensagem sem responder" },
    ],
  },
};

const PERGUNTA_3 = {
  titulo: "Última: quanto você investe em divulgação por mês hoje?",
  opcoes: [
    { id: "zero", rotulo: "Ainda não invisto" },
    { id: "ate1k", rotulo: "Até R$ 1.000" },
    { id: "1a5k", rotulo: "R$ 1.000 a R$ 5.000" },
    { id: "5kmais", rotulo: "Acima de R$ 5.000" },
  ],
};

// Leitura do cenário. É o que faz o visitante sentir que foi entendido —
// e o que demonstra, sem dizer, o que o agente de verdade faria no WhatsApp.
function veredito(r1, r2, r3) {
  if (r1 === "agente" || r2 === "perde" || r2 === "ninguem") {
    return "Seu gargalo não é atrair, é responder. Anúncio em cima disso só aumenta a fila de mensagem sem resposta — começaria pelo agente de atendimento.";
  }
  if (r1 === "site" || r2 === "refazer") {
    return "Site primeiro faz sentido: sem destino, o anúncio joga gente numa página que não converte e você paga a conta duas vezes.";
  }
  if (r3 === "zero" || r3 === "ate1k") {
    return "Com essa verba a gente começa focado: um canal só, uma oferta só, até provar o número. Espalhar verba pequena em três canais é o erro mais caro que existe.";
  }
  if (r2 === "escalar" || r2 === "trocar" || r3 === "5kmais") {
    return "Nesse estágio o ganho não vem de mais verba, vem de estrutura: criativo em teste contínuo e a conversa depois do clique sendo atendida na hora.";
  }
  return "Dá pra resolver. Vou te dizer o caminho mais curto pro seu caso — e o que eu NÃO faria agora.";
}

function rotuloDe(lista, id) {
  return lista.find((o) => o.id === id)?.rotulo ?? "";
}

export default function Agente() {
  const [etapa, setEtapa] = useState(0);
  const [r1, setR1] = useState(null);
  const [r2, setR2] = useState(null);
  const [r3, setR3] = useState(null);
  const [digitando, setDigitando] = useState(false);
  const timer = useRef(null);

  // "Digitando..." de meio segundo entre perguntas. É teatro, mas é o teatro
  // que faz a coisa parecer conversa em vez de formulário.
  useEffect(() => {
    if (etapa === 0) return;
    setDigitando(true);
    timer.current = setTimeout(() => setDigitando(false), 520);
    return () => clearTimeout(timer.current);
  }, [etapa]);

  const perguntaAtual = useMemo(() => {
    if (etapa === 0) return PERGUNTA_1;
    if (etapa === 1) return PERGUNTA_2[r1];
    if (etapa === 2) return PERGUNTA_3;
    return null;
  }, [etapa, r1]);

  const responder = (id) => {
    if (etapa === 0) setR1(id);
    if (etapa === 1) setR2(id);
    if (etapa === 2) setR3(id);
    setEtapa((e) => e + 1);
  };

  const voltar = () => {
    if (etapa === 0) return;
    setEtapa((e) => e - 1);
  };

  const recomecar = () => {
    setR1(null);
    setR2(null);
    setR3(null);
    setEtapa(0);
  };

  const resumo = useMemo(() => {
    if (!r1 || !r2 || !r3) return null;
    return {
      precisa: rotuloDe(PERGUNTA_1.opcoes, r1),
      cenario: rotuloDe(PERGUNTA_2[r1].opcoes, r2),
      verba: rotuloDe(PERGUNTA_3.opcoes, r3),
    };
  }, [r1, r2, r3]);

  const mensagem = resumo
    ? `${PREFIXO}, respondi as 3 perguntas do agente:\n\n` +
      `• Preciso: ${resumo.precisa}\n` +
      `• Cenário hoje: ${resumo.cenario}\n` +
      `• Investimento/mês: ${resumo.verba}\n\n` +
      `Pode me chamar?`
    : "";

  const concluido = etapa === 3 && resumo;

  return (
    <div
      className="card relative overflow-hidden p-5 sm:p-7"
      style={{
        "--borda-degrade":
          "linear-gradient(140deg, rgba(45,127,255,0.6), rgba(20,214,255,0.2) 45%, transparent 78%)",
        "--borda-raio": "22px",
      }}
    >
      {/* cabeçalho */}
      <div className="flex items-center gap-3 border-b border-line pb-4">
        <span className="ponto" />
        <p className="etiqueta text-[10px] text-white/60">
          Agente de triagem — online
        </p>
        <span className="ml-auto etiqueta text-[10px] text-white/30">
          {concluido ? "3/3" : `${Math.min(etapa + 1, 3)}/3`}
        </span>
      </div>

      {/* barra de progresso */}
      <div className="mt-4 flex gap-1.5" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={
              "h-[3px] flex-1 rounded-full transition-colors duration-500 " +
              (etapa > i ? "bg-accent shadow-[0_0_12px_rgba(45,127,255,0.8)]" : "bg-line")
            }
          />
        ))}
      </div>

      <div className="mt-6 min-h-[248px] sm:min-h-[228px]">
        {!concluido ? (
          <div key={`p-${etapa}`} className="anim-surgir">
              <p
                className="text-lg font-semibold leading-snug text-white sm:text-xl"
                aria-live="polite"
              >
                {digitando ? (
                  <span className="text-white/45">
                    digitando<span className="cursor-digita">|</span>
                  </span>
                ) : (
                  perguntaAtual?.titulo
                )}
              </p>

              {!digitando && (
                <div className="mt-5 grid gap-2.5">
                  {perguntaAtual?.opcoes.map((o) => (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => responder(o.id)}
                      className="group flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-ink-3/60 px-4 py-3 text-left text-[15px] text-white/85 transition-all duration-200 hover:border-accent/60 hover:bg-ink-3 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {o.rotulo}
                      <Icone
                        nome="seta"
                        tamanho={15}
                        className="text-accent opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </button>
                  ))}
                </div>
              )}

              {etapa > 0 && !digitando && (
                <button
                  type="button"
                  onClick={voltar}
                  className="mt-4 text-xs text-white/35 underline underline-offset-4 transition-colors hover:text-white/70"
                >
                  voltar
                </button>
              )}
          </div>
        ) : (
          <div key="fim" className="anim-surgir">
              <p className="text-[15px] leading-relaxed text-white/85">
                {veredito(r1, r2, r3)}
              </p>

              <div className="mt-4 rounded-xl border border-line bg-ink/70 p-4">
                <p className="etiqueta text-[10px] text-white/35">
                  o que vai junto na mensagem
                </p>
                <ul className="mt-2.5 space-y-1.5 text-sm text-white/70">
                  <li>
                    <span className="text-white/35">Preciso:</span>{" "}
                    {resumo.precisa}
                  </li>
                  <li>
                    <span className="text-white/35">Cenário:</span>{" "}
                    {resumo.cenario}
                  </li>
                  <li>
                    <span className="text-white/35">Investimento/mês:</span>{" "}
                    {resumo.verba}
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => abrirWhatsApp(mensagem)}
                className="btn-brilhante mt-5 w-full justify-center"
              >
                <span>
                  Falar comigo no WhatsApp
                  <Icone nome="seta" tamanho={16} />
                </span>
              </button>

              <button
                type="button"
                onClick={recomecar}
                className="mt-3 w-full text-xs text-white/35 underline underline-offset-4 transition-colors hover:text-white/70"
              >
                responder de novo
              </button>
          </div>
        )}
      </div>
    </div>
  );
}
