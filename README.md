# marcosleonam.github.io/servicos

Hub de serviços do Marcos Leonam — o link da bio. Uma página, cinco serviços
(Meta Ads, Google Ads, TikTok Ads, sites e agentes de IA) e um agente de
triagem no topo que manda o lead pro WhatsApp já qualificado.

**No ar:** https://marcosleonam.github.io/servicos/

Substitui `marcosleonam.github.io/agentes-atendimento` (site anterior, de um
serviço só). O link antigo continua no ar, mas não é mais divulgado.

## Stack

React 19 + Vite + Tailwind v4. Sem backend, sem chave de API, sem banco.
Fontes hospedadas localmente (nada de Google Fonts).

## Design system

Preto + azul elétrico, derivado do template "creative-agency" (aura.build) que
o Marcos mandou. A página de referência vive em **`/design-system.html`**
(fonte em `public/design-system.html`, estilo em `public/ds/ds.css`): hero de
demonstração, tipografia completa, cores com hex/rgb/hsl e regra de uso,
componentes com animação, ícones e catálogo de animações.

**O site e o design system compartilham os mesmos nomes de classe e de
keyframe.** `src/index.css` é o espelho de `public/ds/ds.css` — mexeu num,
mexe no outro, senão a página de referência deixa de descrever a página real.

Três coisas do template foram deliberadamente trocadas:

1. **O fundo animado do herói** era um projeto WebGL hospedado no Unicorn
   Studio, na conta de um terceiro (o ID do projeto vinha no HTML). Aqui é CSS
   + um canvas 2D próprios — mesmo efeito, nenhum servidor de fora.
2. **O Tailwind por CDN em runtime** saiu. O visual foi trazido pro Tailwind
   que o projeto já compila; nada bloqueia a primeira pintura e o CSP continua
   fechado.
3. **O vermelho `#ef233c`** virou azul `#2D7FFF` em todo o sistema.

### Duas armadilhas que custaram tempo (não repita)

- **`clip-path` zera o IntersectionObserver.** A animação de revelar em coluna
  começava com `clip-path: inset(0 0 100% 0)`. Elemento clipado a zero tem área
  zero, nunca é considerado visível, nunca recebe a classe que soltaria a
  animação — ficava invisível pra sempre. O quadro inicial hoje clipa 88% e o
  resto some por opacidade, que o observer ignora.
- **`.card > * { position: relative }` quebrava filho absoluto.** A regra
  existia só pra o conteúdo ficar acima do halo. Hoje o `.card` é um contexto
  de empilhamento (`isolation: isolate`) e o halo vive em `z-index: -1`.

## O agente de triagem (`src/components/Agente.jsx`)

Três perguntas roteirizadas em JavaScript puro — **não é IA**, e a decisão é
consciente: página estática obriga a chave de API a viver dentro do navegador,
onde qualquer visitante lê com o F12 e gasta crédito no cartão dos outros.

O que ele entrega sem correr esse risco: em vez de "oi", chega no WhatsApp a
necessidade, o cenário e a faixa de investimento do lead — e o visitante vê
funcionando o produto que está sendo vendido logo abaixo.

Quando houver volume que justifique, o caminho é subir um proxy na VPS com a
chave no servidor e limite de uso. Reversível: só troca esse componente.

## Amarra com o agente do WhatsApp

Toda mensagem que o site envia começa com o prefixo **"Vim pelo site"**
(`PREFIXO` em `src/config.js`). É por esse prefixo que
`/root/agentes/agente-site-atendimento/src/gate.js` reconhece lead de origem
conhecida e libera o agente a responder — o número é pessoal do Marcos, então
quem não vem do site não recebe resposta automática.

**Mudou o prefixo aqui, muda `FRASES_DO_SITE` lá.** Senão o agente fica mudo
pros leads novos.

## Rodar

```bash
npm install
npm run dev
npm run build
```

## Publicar

```bash
npm run build \
  && cd dist && touch .nojekyll && git init -q && git add -A \
  && git commit -qm "deploy" \
  && git push -qf https://github.com/marcosleonam/servicos.git HEAD:gh-pages \
  && cd .. && rm -rf dist/.git
```

## Foto

`src/img/marcos.jpg` — foto real do Marcos tratada por IA (Nano Banana Pro,
edição a partir da selfie original, mantendo o rosto) pro escritório escuro em
preto e azul da identidade do site. O arquivo de origem e as variações ficam
fora do repositório.

## Segurança

Ver `SEGURANCA.md` — o que protege, e o que honestamente não dá pra impedir
num site estático.
